import http from "./../../axios/config"

//state
const state = {
    repairSuccess:false,
    affectedRows : 0,
    check : 0
};

//getters
const getters = {

}

//mutations 
const mutations = {
    updateRepairSuccess (state , val) {
        state.repairSuccess = val.repairSuccess;
        state.affectedRows = val.affectedRows;
        state.check++;
    }

};

//actions
const actions = {
    repair(context) {
        let that = this;
        window.console.warn('repair inininininin');
        http.post(process.env.VUE_APP_BASE_API + '/repair', { data: context.rootState.inputMsg }).then(function (res) {
            if(res.data.status === 0){
                //成功
                that.commit('updateRepairSuccess',{repairSuccess : true,affectedRows : res.data.data.affectedRows})
            }else{
                that.commit('updateRepairSuccess',{repairSuccess : false,affectedRows : 0})
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