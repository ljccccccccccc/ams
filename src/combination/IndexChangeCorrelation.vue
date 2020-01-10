<template>
  <div>
    <AddNewForm>
      <el-button slot="button" type="danger" @click="unbind">解绑</el-button>
      <!-- <el-button slot="button" type="success" @click="bind">绑定</el-button> -->
    </AddNewForm>
    <SimplySearch></SimplySearch>
  </div>
</template>

<script>
import AddNewForm from "@/components/AddNewForm";
import SimplySearch from "@/components/SimplySearch";
// import {mapGetters} from 'vuex'
export default {
  name: "IndexChangeCorrelation",
  components: {
    SimplySearch,
    AddNewForm
  },
  computed : {
    // ...mapGetters({
    //   unbindSuccess : 'newCorrelation/getUnbindSuccess'
    // })
  },
  watch: {
    "$store.state.newCorrelation.check" () {
      window.console.log(this.$store.state.newCorrelation.unbindSuccess);
      if (this.$store.state.newCorrelation.unbindSuccess) {
        this.$notify({
          title: '成功',
          message: '解除绑定成功！',
          type: 'success'
        });
      }else {
        this.$notify({
          title: '失败',
          message: '解除绑定失败！',
          type: 'error'
        });
      }
    }
  },
  methods: {
    unbind() {
      this.$store.dispatch("correlationUnbind");
    },
    bind() {}
  }
};
</script>

<style scoped></style>
