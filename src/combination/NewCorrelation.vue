<template>
  <div>
    <AddNew>
      <div slot="button">
        <el-button type="success" @click="bind">绑定</el-button>
      </div>
    </AddNew>
    <SimplySearch></SimplySearch>
  </div> 
</template>

<style lang="less">
</style>

<script>
import SimplySearch from "./../components/SimplySearch";
import AddNew from "./../components/AddNewForm";

export default {
  name: "newCorrelation",
  components: {
    SimplySearch,
    AddNew
  },
  data () {
    return {
      inputMsg : {}
    }
  },
  methods : {
    bind () {
      let that = this;
      that.$store.dispatch('newCorrelationBind')
    },
  },
  watch : {
    "$store.state.inputMsg" : {
      handler (inputMsg) {
        this.inputMsg = inputMsg;
        this.$store.commit('updateNewCorrelationInputMsg',inputMsg);
      },
      deep : true
    }
  }
};
</script>