import axios from 'axios';
import qs from 'qs';

class Axios {
    //todo response拦截器和jwt没做
    init() {
        axios.create({
            baseUrl : process.env.VUE_APP_BASE_API,
            timeout : 5000,
        });
        //拦截器
        axios.interceptors.request.use((config) => {
            window.console.log(config);
            //参数序列化
            if(config.method === 'post') {
                config.data = qs.stringify(config.data);
                return config;
            }
            return config;
        },(err) => {
            return Promise.reject(err);
        })
    }

    get(url,config){
        return axios.get(url,{
            params : config.data,
            headers : config.headers
        })
    }

    post (url,config){
        return axios.post(url,{
            data : config.data,
            headers : config.headers
        })
    }

} 
const http = new Axios();
http.init();

export default http;