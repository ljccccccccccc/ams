import http from './../../axios/config';
// import axios from 'axios';
// import router from 'router';

//state
const state = {
    staf: {
        staf_id: '',
        staf_pswd: '',
        staf_role: ''
    },
    userInfo: {

    },
    kingorld_token: '',
    isLogin: false,
    isSuccess : true,
    checkLogin : 0
};

//getters
const getters = {
}

//mutations 
const mutations = {
    updateStaf(state, staf) {
        state.staf = staf;
        window.console.log(state.staf);
    },
    login(state, val) {
        window.console.log(state.isLogin);
        if (val.status === 0) {
            state.isLogin = true;
            state.isSuccess = true;
            state.userInfo = val.data[0];
            state.checkLogin ++;
        } else {
            state.isLogin = false;
            state.isSuccess = false;
            state.checkLogin ++;
        }
        window.console.log(state.isLogin);
    }
};

//actions
const actions = {
    login(context) {
        window.console.log(process.env.VUE_APP_BASE_API);
        http.get(process.env.VUE_APP_BASE_API + '/loginUser', { data: context.state.staf }).then(function (res) {
            window.console.log(res.data);
            context.commit('login', res.data);
            context.commit('login', res.data, { root: true });
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