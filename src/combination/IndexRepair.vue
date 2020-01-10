<template>
  <div>
    <AddNew>
      <div slot="button">
        <el-button type="warning" @click="repair">返修</el-button>
      </div>
    </AddNew>
    <SimplySearch></SimplySearch>
  </div>
</template>

<script>
import AddNew from "./../components/AddNewForm";
import SimplySearch from "../components/SimplySearch";
export default {
  name: "IndexRepair",
  components: { SimplySearch, AddNew },
  methods : {
    repair () {
      this.$store.dispatch('repair');
    }
  },
  watch : {
    "$store.state.repair.check" () {
      window.console.log(this.$store.state.repair.repairSuccess);
      if (this.$store.state.repair.repairSuccess) {
        this.$notify({
          title: '成功',
          message: '修改返修状态成功！',
          type: 'success'
        });
      }else {
        this.$notify({
          title: '失败',
          message: '修改返修状态失败！如有疑问请联系流程IT部-刘佳晨！',
          type: 'error'
        });
      }
    }
  }
};
</script>

<style lang="less">
</style>