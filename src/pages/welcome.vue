<template>
  <div class="bg-img">
        <el-row type="flex" justify="center">
        <el-col :span="6">
            <login></login>
        </el-col>
    </el-row>
  </div>
</template>

<style lang="less">
.bg-img {
  width: 100vw;
  height: 100vh;
  background: url("./../assets/bg.jpg") no-repeat;
  padding: 32vh 0 0  0 ;
}
</style>


<script>
import login from "./../components/Login";

export default {
  name: "welcome",
  components: {
    login
  }
};
</script>