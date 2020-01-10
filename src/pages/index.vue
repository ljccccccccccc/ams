<template>
  <div id="app">
    <el-container class="kingorld-container" style=" border: 1px solid #eee">
      <el-aside>
        <el-menu default-active="1">
          <el-menu-item index="1" @click="showEcharts">
            <i class="el-icon-orange"></i>
            <span slot="title">首页</span>
          </el-menu-item>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-folder-opened"></i>
              <span>资产管理</span>
            </template>
            <el-menu-item-group>
              <!-- <el-menu-item index="2-1">资产概览</el-menu-item> -->
              <el-menu-item index="2-2" @click="toNewCorrelation">关联配件</el-menu-item>
              <el-menu-item index="2-3" @click="tochangeCorrelation">关联变更</el-menu-item>
              <el-menu-item index="2-4" @click="torepair">资产返修</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-coin"></i>
              <span>库存管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1" @click="toAddBasicData">增加基础数据</el-menu-item>
              <el-menu-item index="3-2" @click="toChangeBasicData">修改基础数据</el-menu-item>
              <el-menu-item index="3-3" @click="toInbound">资产入库</el-menu-item>
              <el-menu-item index="3-4" @click="toqueryRepair">返修查询</el-menu-item>
              <el-menu-item index="3-5" @click="toScrap">资产报废</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-menu-item index="4" @click="toSearch">
            <i class="el-icon-search"></i>
            <span slot="title">资产查询</span>
          </el-menu-item>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header>
          <!-- <div>
                <i class="el-icon-switch-button"></i>
                <span>退出</span>
          </div>-->
          <div class="userinfo">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            <span>{{userInfo.staf_name}}</span>
            <el-button icon="el-icon-switch-button" circle></el-button>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>
          <div>流程IT部&nbsp;&nbsp;刘佳晨&nbsp;@&nbsp;Copyright&nbsp;&nbsp;2019</div>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>



<script>
export default {
  name: "index",
  data() {
    return {
      userInfo: {}
    };
  },
  methods: {
    logout() {
      // let that = this;
      // that.$store.commit('setIsLogin', false);
      //   window.localStorage.setItem('isLogin', false);
      //   that.$notify({
      //   title: '退出成功',
      //   message: '请重新登录',
      //   type: 'success',
      //   duration : 2000,
      //   onClose : function () {
      //       that.$router.push({path:'/'});
      //   }
      // });
      window.alert("...");
    },
    showTable() {
      this.$router.push({ path: "table", query: { userID: 123 } });
    },
    showEcharts() {
      this.$router.push({ path: "echarts", query: { userID: 123 } });
    },
    toNewCorrelation() {
      this.$router.push({ path: "newCorrelation" });
    },
    toSearch() {
      this.$router.push({ path: "search" });
    },
    tochangeCorrelation() {
      this.$router.push({ path: "changeCorrelation" });
    },
    torepair() {
      this.$router.push({ path: "repair" });
    },
    toAddBasicData () {
      this.$router.push({ path: "addBasicData" });
    },
    toChangeBasicData () {
      window.alert('have no pages to that!');
      // this.$router.push({ path: "addBasicData" });
    },
    toInbound() {
      this.$router.push({ path: "inbound" });
    },
    toqueryRepair() {
      this.$router.push({ path: "queryRepair" });
    },
    toScrap() {
      this.$router.push({ path: "scrap" });
    }
  },
  mounted() {
    let that = this;
    that.userInfo = that.$store.getters.getUserInfo;
  }
};
</script>



<style lang="less">
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 13px;
  padding: 0 80px 0 0 ;
  .userinfo {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .el-avatar{
        margin: 0 20px;
    }
    .el-button {
        margin: 0 20px;
    }
  }
}

.kingorld-container::-webkit-scrollbar {
  display: none;
}

.el-container .el-container {
  overflow: auto;
  border: none;
}

.el-aside {
  min-height: 100vh;
  width: 200px;
  overflow-x: hidden;
}

.el-main {
  min-height: 85vh;
  overflow-x: hidden;
}

.el-footer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
  position: fixed;
  bottom: 0;
  z-index: 9999;

  div {
    color: #b3c0d1;
    font-size: 11px;
  }
}
</style>
