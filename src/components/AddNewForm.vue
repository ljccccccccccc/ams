<template>
  <div>
    <el-card>
      <el-form inline>
        <el-form-item label="工号">
          <el-input v-model="staf_id"></el-input>
        </el-form-item>
        <el-form-item label="资产编号">
          <el-input v-model="sgas_id"></el-input>
        </el-form-item>
        <el-form-item>
          <slot name="button"></slot>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<style lang="less" scope>
.el-card {
  margin: 20px;
}
</style>

<script>
// import { mapGetters } from 'vuex';

export default {
  name: "kingorld-addNewForm",
  data() {
    return {
      staf_id: "",
      sgas_id: ""
    };
  },
  methods: {
    bind() {}
  },
  computed: {
  },
  watch: {
    staf_id(val) {
      window.console.log(val)
      this.$store.commit("updateInputMsg", {
        key: "staf_id",
        value: val
      });
    },
    sgas_id(val) {
      window.console.log(val);
      this.$store.commit("updateInputMsg", {
        key: "sgas_id",
        value: val
      });
    },
    "$store.state.AddNewForm.inputMsg" : {
      handler (inputMsg) {
        window.console.warn(inputMsg.staf_id , inputMsg.sgas_id,'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
        this.$store.dispatch('emitInputToRoot');
      },
      deep : true
    }
  }
};
</script>