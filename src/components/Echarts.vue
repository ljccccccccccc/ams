<template>
  <div id="myCharts" ref="myCharts"></div>
</template>
<style scoped>
#myCharts {
  width: 500px;
  height: 500px;
}
</style>
<script>
import Vue from "vue";
import echarts from "echarts";
Vue.prototype.$echarts = echarts;

export default {
  props: {
    echartOptions: {
      type: Object,
      default() {
        return {
          title: { text: "使用中资产状态" },
          tooltip: {},
          xAxis: {
            data: ["显示器", "台式主机", "笔记本电脑", "网络设备", "服务器"]
          },
          yAxis: {},
          series: [
            {
              name: "数量",
              type: "bar",
              data: [1352, 1284, 946, 48, 147]
            }
          ]
        };
      }
    }
  },
  name: "kingorld-echarts",
  data() {
    return {
      options: this.echartOptions
    };
  },
  mounted() {
    const myCharts = this.$echarts.init(this.$refs.myCharts);
    myCharts.setOption(this.options);
  }
};
</script>  