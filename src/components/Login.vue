<template>
  <el-card>
    <div slot="header" class="card-header">
      <span>资产管理系统</span>
    </div>
    <el-form label-width="80px" label-position="right">
      <el-form-item label="用户名">
        <el-input v-model="staf.staf_id"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="staf.staf_pswd"></el-input>
      </el-form-item>
      <el-form-item label="角色">
        <el-select v-model="staf.staf_role" placeholder="请选择登录角色">
          <el-option label="管理员" value="0"></el-option>
          <el-option label="普通用户" value="1"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<style lang="less" scope>
.card-header {
  text-align: center;
}
</style>

<script>
export default {
  name: "kingorld-login",
  data() {
    return {
      staf: {
        staf_id: "",
        staf_pswd: "",
        staf_role: "1"
      }
    };
  },
  computed: {},
  watch: {
    staf: {
      handler(val) {
        this.$store.commit("updateStaf", val);
      },
      deep: true
    },
    "$store.state.Login.checkLogin"() {
      let that = this;
      if (this.$store.state.Login.isSuccess) {
        this.$notify({
          title: "登录成功",
          message: "正在加载...",
          type: "success",
          duration: 1500,
          onClose: function() {
            that.$router.push({ path: "/" });
          }
        });
        window.localStorage.setItem("isLogin", true);
      } else {
        that.$notify({
          title: "登录失败",
          message: "请检查用户名和密码以及对应角色是否正确!",
          type: "error",
          duration: 2000,
          onClose: function() {}
        });
        window.localStorage.setItem("isLogin", false);
      }
    }
  },
  methods: {
    login() {
      let that = this;
      that.$store.dispatch("login");
    },
    reset() {
      this.staf = {
        staf_id: "",
        staf_pswd: "",
        staf_role: "1"
      };
    }
  }
};
</script>