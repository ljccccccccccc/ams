import http from "./../../axios/config"

//state
const state = {
    scrapSuccess: false,
    affectedRows: 0,
    check: 0
};

//getters
const getters = {

}

//mutations 
const mutations = {
    updateScrapSuccess(state, val) {
        state.scrapSuccess = val.scrapSuccess;
        state.affectedRows = val.affectedRows;
        state.check++;
    }
};

//actions
const actions = {
    scrap(context) {
        let that = this;
        http.post(process.env.VUE_APP_BASE_API + '/scrap', { data: context.rootState.inputMsg }).then(function (res) {
            if (res.data.status === 0) {
                //成功
                that.commit('updateScrapSuccess',
                    {
                        scrapSuccess: true,
                        affectedRows: res.data.data.affectedRows
                    })
            } else {
                that.commit('updateScrapSuccess',
                    {
                        scrapSuccess: false,
                        affectedRows: 0
                    })
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