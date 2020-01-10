<template>
  <el-row :gutter="50">
    <el-col :span="9">
      <el-card>
        <Echarts :echart-options="usingAssets"></Echarts>
      </el-card>
    </el-col>
    <el-col :span="9">
      <el-card>
        <Echarts :echart-options="inventoryAssets"></Echarts>
      </el-card>
    </el-col>
  </el-row>
</template>
<style lang="less">
</style>

<script>
import Echarts from "@/components/Echarts";
export default {
  name: "IndexEcharts",
  data() {
    return {
      usingAssets: {
        title: { text: "资产概览" },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: ["新增", "返修", "报废"]
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ],
            axisPointer: {
              type: "shadow"
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "数量",
            min: 0,
            max: 250,
            interval: 50,
            axisLabel: {
              formatter: "{value} "
            }
          },
          {
            type: "value",
            name: "整机",
            min: 0,
            max: 25,
            interval: 5,
            axisLabel: {
              formatter: "{value} 台"
            }
          }
        ],
        series: [
          {
            name: "新增",
            type: "bar",
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ]
          },
          {
            name: "返修",
            type: "bar",
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ]
          },
          {
            name: "报废",
            type: "line",
            yAxisIndex: 1,
            data: [
              2.0,
              2.2,
              3.3,
              4.5,
              6.3,
              10.2,
              20.3,
              23.4,
              23.0,
              16.5,
              12.0,
              6.2
            ]
          }
        ]
      },
      // usingAssets: {
      //   title: { text: "使用中资产概览" },
      //   tooltip: {},
      //   xAxis: {
      //     data: ["显示器", "台式主机", "笔记本电脑", "网络设备", "服务器"]
      //   },
      //   yAxis: {},
      //   series: [
      //     {
      //       name: "数量",
      //       type: "bar",
      //       data: [1352, 1284, 946, 48, 147]
      //     }
      //   ]
      // },
      inventoryAssets: {
        title: { text: "库存资产概览" },
        angleAxis: {},
        radiusAxis: {
          type: "category",
          data: ["台式机", "笔记本", "服务器", "显示器"],
          z: 10
        },
        polar: {},
        series: [
          {
            type: "bar",
            data: [1, 2, 3, 4],
            coordinateSystem: "polar",
            name: "A",
            stack: "a"
          },
          {
            type: "bar",
            data: [2, 4, 6, 8],
            coordinateSystem: "polar",
            name: "B",
            stack: "a"
          },
          {
            type: "bar",
            data: [1, 2, 3, 4],
            coordinateSystem: "polar",
            name: "C",
            stack: "a"
          }
        ],
        legend: {
          show: true,
          data: ["A", "B", "C"]
        }
      }
    };
  },
  components: { Echarts },
  mounted() {}
};
</script>