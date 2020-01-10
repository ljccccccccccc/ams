import http from "../../axios/config";
// import qs from 'qs';


//state
const state = {
    //搜索的项目
    //searchType 按什么搜索  比如 员工号
    //searchValue 搜索的内容 比如Nova002464
    searchItems : {
        searchType : '',
        searchValue : ''
    },

    //ajax返回的结果
    results : []
};

//getters
const getters = {
}

//mutations 
const mutations = {
    // 更新搜索内容
    updateSearch(state, searchItems) {
        state.searchItems = searchItems;
    },
    //返回结果
    searchAjaxRes(state, res) {
        // 如果返回成功  那么把数据给到state的results
        if (res.status === 0) {
            window.console.log('搜索成功!');
            state.results = res.data;
        } else {
            window.console.log('搜索失败!');
        }
    }
}

const actions = {
    searchAjax (context) {
        window.console.log('simplysearch.actions.searchAjax running!');
        http.post(
            process.env.VUE_APP_BASE_API + '/search',{
                data : context.state.searchItems
            }
            ).then(function (res) {
                window.console.log(res.data);
                context.commit('searchAjaxRes',res.data);
            })
    }
}

export default {
    namespace : true,
    state,
    getters,
    mutations,
    actions
}