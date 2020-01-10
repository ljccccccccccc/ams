
//state
const state = {
    inputMsg: {
        staf_id : '',
        sgas_id : ''
    }
};

//getters
const getters = {

}

//mutations 
const mutations = {
    updateInputMsg(state, val) {
        state.inputMsg[val.key] = val.value ;
    }
};

//actions
const actions = {
    emitInputToRoot (context) {
        window.console.warn('in emitInputToRoot');
        context.commit('inputMsgFromAddNewForm',context.state.inputMsg ,{root:true});
        window.console.warn('commit completed!');
    }
}


export default {
    namespace: true,
    state,
    getters,
    mutations,
    actions
}