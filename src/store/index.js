import Vue from 'vue';
import Vuex from 'vuex';

import newCorrelation from './modules/newCorrelation';
import Login from './modules/Login';
import AddNewForm from './modules/AddNewForm';
import simplySearch from './modules/simplySearch';
import repair from './modules/repair';
import addBasicData from './modules/addBasicData';
import inbound from './modules/inbound';
import scrap from './modules/scrap';

Vue.use(Vuex);

// const debug = process.env.NODE_ENV !== 'production';

const state = {
    userInfo: {},
    isLogin: false,
    inputMsg : {}
}

const getters = {
    isLogin: state => state.isLogin,
    getUserInfo : state => state.userInfo,
    inputMsg : state => state.inputMsg
}

const mutations = {
    login(state, val) {
        window.console.log(state.isLogin + 'root');
        if (val.status === 0) {
            state.isLogin = true;
            state.userInfo = val.data[0];
        } else {
            state.isLogin = false;
        }
        window.console.log(state.isLogin + 'root');
    },

    setIsLogin (state, isLogin) {
        state.islogin = isLogin;
    },

    inputMsgFromAddNewForm (state,inputMsg) {
        state.inputMsg =  inputMsg;
        window.console.error(state.inputMsg);
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    modules: {
        newCorrelation,
        Login,
        simplySearch,
        AddNewForm,
        repair,
        addBasicData,
        inbound,
        scrap
    },
    // strict: debug
})