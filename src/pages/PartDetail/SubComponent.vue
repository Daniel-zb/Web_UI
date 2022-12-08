<template>
  <div style="position: relative; left: 100px">
    <div class="div1">
      <div id="name">{{ comName }}</div>
      <div id="syfx">时域分析</div>
      <div style="width: 100%; height: 360px" ref="chart" id="chart">
        这里放一个图表，宽度等于父元素宽度
      </div>
    </div>
    <el-row id="health">
      <el-button
        type="success"
        style="width: 150px; font-size: 1em"
        @click="transToComponentHealth"
        >健康状态</el-button
      >
    </el-row>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {};
  },
  props: ["comName", "comId"],
  mounted() {
    // vue 挂载完毕后显示图表
    this.chartInit();
  },
  methods: {
    // 此处的chartInit方法仅在演示时使用，数据是随机生成的，后续开发时会使用后端接口传来的数据渲染图表。
    chartInit() {
      let myChart = echarts.init(this.$refs.chart);
      // 纵坐标的数取值在正负0.6之间,长度为五千
      let yData = [],
        len = 5000,
        randMin = -0.6,
        randMax = 0.6;
      for (let i = 0; i < len; ++i) {
        yData[i] = [i, Math.random() * (randMax - randMin) + randMin];
      }

      myChart.setOption({
        backgroundColor: "#ffffff",
        xAxis: { show: false },
        yAxis: {
          min: randMin - 0.1,
          max: randMax + 0.1,
          interval: (randMax + 0.1) / 2, // 纵坐标间隔大小
        },
        series: [
          {
            data: yData,
            type: "line",
            smooth: true,
            symbol: "none",
          },
        ],
      });
    },
    transToComponentHealth() {
      // 点击“健康状态”按钮时，根据父组件传来的部件id-comId决定往哪个页面跳转。
      // 可将当前页面生成的时域数据通过vuex传过去，也可通过其他方式。此处不再赘述
      switch (this.comId) {
        case 0:
          this.$router.push("/supportingbearing");
          break;
        case 1:
          this.$router.push("/screw");
          break;
        case 2:
          this.$router.push("/motor");
          break;
        case 3:
          this.$router.push("/nut");
          break;
        case 4:
          this.$router.push("/fixedbearing");
          break;
      }
    },
  },
};
</script>
<style lang="less" scoped>
.div1 {
  display: inline-block;
  position: relative;
  width: 1000px;
  height: 400px;
  margin: 0 0 40px 0;
}
#name {
  display: inline-block;
  background-color: #ed7d31;
  text-align: center;
  width: 6em;
  line-height: 2em;
}
// 定义时域分析这四个字的样式
#syfx {
  display: inline-block;
  position: absolute;
  right: 0;
  background-color: #4472c4;
  text-align: center;
  width: 6em;
  line-height: 2em;
}
// 按钮距离父元素上边界和右边界的距离
#health {
  display: inline-block;
  position: absolute;
  top: 40%;
  left: 1200px;
}
</style>