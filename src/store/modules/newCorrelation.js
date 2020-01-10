import http from './../../axios/config';

//state
const state = {
    inputMsg : {},
    unbindSuccess : false,
    //check是标志位 每次返回请求+1 以此判断弹出成功还是失败
    check : 0
};

//getters
const getters = {
    getUnbindSuccess :  state => state.unbindSuccess
}

//mutations 
const mutations = {
    updateNewCorrelationInputMsg() {
        // state.inputMsg= inputMsg ;
    },
    updateUnbindSuccess (state,val) {
        state.unbindSuccess = val.unbindSuccess;
        state.affectedRows = val.affectedRows;
        state.check ++;
    }
}

const actions = {
    newCorrelationBind (context) {
        http.post(process.env.VUE_APP_BASE_API + '/bindCorrelation', { data: context.rootState.inputMsg }).then(function (res) {
            window.console.warn(res);
            window.console.warn("newCorrelationBind  call back . . . . . . . .");
        })
    },

    correlationUnbind (context) {
        let that = this;
        http.post(process.env.VUE_APP_BASE_API + '/unbindCorrelation', { data: context.rootState.inputMsg }).then(function (res) {
            window.console.warn(res);
            //res.data.data.affectedRows
            if(res.data.status === 0){
                //成功
                that.commit('updateUnbindSuccess',{unbindSuccess : true,affectedRows : res.data.data.affectedRows})
            }else{
                that.commit('updateUnbindSuccess',{unbindSuccess : false,affectedRows : 0})
            }
        })
    }
}

export default {
    namespace: true,
    state,
    getters,
    mutations,
    actions
}