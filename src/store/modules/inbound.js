import http from "../../axios/config";

//state
const state = {
    //sgas相关
    sgas: {},
    //bsdtids相关
    bsdtAsts: [],
    updateBsdtAstsSuccess: false,
    checkBsdtAsts: 0,
    //bsdt_details相关
    bsdtDetails: [],
    updateBsdtDetails: false,
    checkBsdtDetails: 0,
    //检查是否重复
    updateCheckDuplicateSuccess: false,
    isDuplicate: true,
    checkCheckDunplicate: 0,
    //inbound提交后
    updateInboundSuccess : false,
    affectedRows : 0,
    checkInbound : 0
};

//getters
const getters = {

}

//mutations 
const mutations = {
    //从.vue更新到vuex.state
    updateSgas(state, val) {
        state.sgas = val;
        window.console.log(state.sgas);
    },
    //更新bsdtAsts到state
    updateBsdtAsts(state, val) {
        state.bsdtAsts = val.bsdtAsts;
        state.updateBsdtAstsSuccess = val.updateBsdtAstsSuccess;
        state.checkBsdtAsts++;
    },
    //后台数据 更新state.bsdtdetails
    updateBsdtDetails(state, val) {
        state.bsdtDetails = val.bsdtDetails;
        state.updatebsdtDetailsSuccess = val.updatebsdtDetailsSuccess;
        state.checkBsdtDetails++;
    },
    //后台查重，更新state
    updateCheckDuplicate(state, val) {
        state.isDuplicate = val.isDuplicate;
        state.updateCheckDuplicateSuccess = val.updateCheckDuplicateSuccess;
        state.checkCheckDunplicate++;
    },

    //后台插入数据后更新state
    updateInbound(state, val) {
        state.updateInboundSuccess = val.updateInboundSuccess;
        state.affectedRows = val.affectedRows;
        state.checkInbound++;
    }

};

//actions
const actions = {
    //加载资产类型
    loadBsdtAsts() {
        let that = this;
        http.get(process.env.VUE_APP_BASE_API + '/loadBsdtAsts', { data: null }).then((res) => {
            window.console.warn(res.data);
            if (res.data.status === 0) {
                //成功
                that.commit('updateBsdtAsts', {
                    updateBsdtAstsSuccess: true,
                    bsdtAsts: res.data.data
                })
            } else {
                that.commit('updateBsdtAsts', {
                    updateBsdtAstsSuccess: false,
                    bsdtAsts: null
                })
            }
        })
    },
    //根据资产类型加载详细资产类型
    loadBsdtDetails(context) {
        let that = this;
        if (context.state.sgas.sgas_bsdt_id) {
            http.post(process.env.VUE_APP_BASE_API + '/loadBsdtDetails', { data: { sgas_bsdt_id: context.state.sgas.sgas_bsdt_id } }).then((res) => {
                window.console.warn(res.data);
                if (res.data.status === 0) {
                    //成功
                    that.commit('updateBsdtDetails', {
                        updatebsdtDetailsSuccess: true,
                        bsdtDetails: res.data.data
                    })
                } else {
                    that.commit('updateBsdtDetails', {
                        updatebsdtDetailsSuccess: false,
                        bsdtDetails: null
                    })
                }
            })
        }

    },
    //查询资产编号是否重复
    checkDuplicate(context) {
        let that = this;
        http.post(process.env.VUE_APP_BASE_API + '/checkDuplicate', { data: { sgas_uid: context.state.sgas.sgas_uid } }).then((res) => {
            window.console.warn(res.data);
            if (res.data.status === 0) {
                //成功
                that.commit('updateCheckDuplicate', {
                    updateCheckDuplicateSuccess: true,
                    isDuplicate: res.data.data
                })
            } else {
                that.commit('updateCheckDuplicate', {
                    updateCheckDuplicateSuccess: false,
                    isDuplicate: null
                })
            }
        })
    },
    //提交表单 插入数据库
    inbound(context) {
        let that = this;
        http.post(process.env.VUE_APP_BASE_API + '/inbound', { data: { sgas: context.state.sgas } }).then((res) => {
            window.console.warn(res.data);
            if (res.data.status === 0) {
                if(res.data.data.affectedRows > 0) {
                    //成功
                    that.commit('updateInbound', {
                        updateInboundSuccess: true,
                        affectedRows: res.data.data.affectedRows
                    })
                }else{
                    that.commit('updateInbound', {
                        updateInboundSuccess: false,
                        affectedRows: res.data.data.affectedRows
                    })
                }
            } else {
                that.commit('updateInbound', {
                    updateCheckDuplicateSuccess: false,
                    affectedRows: null
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