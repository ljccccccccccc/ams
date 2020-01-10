<template>
  <div>
    <AddNew>
      <div slot="button">
        <el-button type="warning" @click="scrap">报废</el-button>
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
    scrap () {
      this.$store.dispatch('scrap');
    }
  },
  watch : {
    "$store.state.scrap.check" () {
      if(this.$store.state.scrap.updateScrapSuccess){
        this.$notify({
          title: '成功',
          message: '报废'+this.$store.state.scrap.affectedRows+'条资产成功！',
          type: 'success'
        });
      }else{
        this.$notify({
          title: '失败',
          message: '资产报废失失败！',
          type: 'error'
        });
      }
    }
  }
};
</script>

<style lang="less">
</style>