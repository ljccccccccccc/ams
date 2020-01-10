import http from "../../axios/config";

// import http from "./../../axios/config";

//state
const state = {
    basicData : {},
    supplier : [],
    addBasicDataSuccess:false,
    checkSupplier : 0,
    affectedRows : 0,
    check : 0
};

//getters
const getters = {

}

//mutations 
const mutations = {
    updateBasicData (state , val) {
        state.basicData = val;
        window.console.log(state.basicData);
    },
    updateAddBasicDataSuccess (state ,val) {
        state.addBasicDataSuccess = val.addBasicDataSuccess;
        state.affectedRows = val.affectedRows;
        state.check ++;
    },
    updateSupplier (state,val) {
        state.supplier = val.supplier;
        state.supplierSuccess = val.supplierSuccess;
        state.checkSupplier++;
    }
};

//actions
const actions = {
    // repair(context) {
    //     let that = this;
    //     window.console.warn('repair inininininin');
    //     http.post(process.env.VUE_APP_BASE_API + '/repair', { data: context.rootState.inputMsg }).then(function (res) {
    //         if(res.data.status === 0){
    //             //成功
    //             that.commit('updateRepairSuccess',{repairSuccess : true,affectedRows : res.data.data.affectedRows})
    //         }else{
    //             that.commit('updateRepairSuccess',{repairSuccess : false,affectedRows : 0})
    //         }
    //     })
    // }
    addBasicData (context) {
        let that = this;
        window.console.error(context.state.basicData);
        http.post(process.env.VUE_APP_BASE_API + '/addBasicData' ,{data : context.state.basicData}).then((res) => {
            if(res.data.status === 0) {
                //成功
                that.commit('updateAddBasicDataSuccess',{
                    addBasicDataSuccess:true,
                    affectedRows : res.data.data.affectedRows
                })
            }else{
                that.commit('updateAddBasicDataSuccess',{
                    addBasicDataSuccess:true,
                    affectedRows : res.data.data.affectedRows
                })
            }
        })
    },

    loadSupplier (context) {
        let that = this;
        window.console.error(context.state.basicData);
        http.get(process.env.VUE_APP_BASE_API + '/loadSupplier',{data : null}).then((res) => {
            window.console.warn(res.data);
            if(res.data.status === 0) {
                //成功
                that.commit('updateSupplier',{
                    supplierSuccess : true,
                    supplier : res.data.data
                })
            }else{
                that.commit('updateSupplier',{
                    supplierSuccess : false,
                    supplier : null
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