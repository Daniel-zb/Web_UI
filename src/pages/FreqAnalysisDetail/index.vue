<template>
  <div>
    <div style="display: inline; width: 500px; height: 350px" id="div1">
      <div style="height: 48px">
        <span id="span1">频域分析详情</span>
      </div>
      <hr style="margin: 0; height: 1px; background-color: blue" />
      <div style="width: 500px; height: 300px" ref="chart"></div>
    </div>
    <div style="clear: both"></div>
    <div style="position: relative; top: 50px">
      <el-input
        placeholder="这里展示诊断结果"
        disabled
        style="width: 500px"
      ></el-input>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  mounted() {
    // 这方法仅在演示时使用，数据是手动生成的，后续开发时会使用后端接口传来的数据渲染图表。
    this.initFreqAnalysis();
  },
  methods: {
    initFreqAnalysis() {
      let myChart = echarts.init(this.$refs.chart);
      let yData = [],
        len = 5000,
        randMin = 0,
        randMax = 1;
      // 随机生成数据
      for (let i = 0; i < len; ++i) {
        yData[i] = [i, Math.random() * (randMax - randMin) + randMin];
      }
      yData[800][1] = 10;
      yData[1600][1] = 83;
      yData[2400][1] = 10;
      yData[3200][1] = 10;
      yData[4000][1] = 10;
      yData[4500][1] = 10;
      myChart.setOption({
        backgroundColor: "#ffffff",
        xAxis: {
          type: "value",
          name: "Hz",
          min: 0,
          max: yData.length,
          interval: yData.length / 5,
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          name: "mm",
          min: 0,
          max: 100,
          interval: 20, // 纵坐标间隔大小
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            data: yData,
            type: "line",
            smooth: true,
            symbol: "none",
          },
        ],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
#div1 {
  position: relative;
  float: left;
  left: 600px;
  background: #ffffff;
  // 设置“频域分析详情”几个字的样式，下同
  #span1 {
    position: absolute;
    left: 10px;
    top: 10px;
  }
}
.el-input {
  position: absolute;
  left: 600px;
}
</style>