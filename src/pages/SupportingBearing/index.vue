<template>
  <div>
    <div style="width: 1700px; height: 500px" ref="chart1" id="div1"></div>
    <div
      style="display: inline-block; width: 1700px; height: 350px"
      id="bigdiv1"
    >
      <div style="display: inline-block; width: 500px; height: 350px" id="div2">
        <div style="height: 50px">
          <span id="span2">时域分析</span>
          <el-button
            type="primary"
            id="detail2"
            @click="transToTimeAnalysisDetail"
            >详情</el-button
          >
        </div>
        <!-- header-cell-style设置表头背景颜色、字体大小和颜色 -->
        <!-- row-style设置内容的每行高度 -->
        <el-table
          :data="tableData"
          border
          style="width: 100%"
          :header-cell-style="{
            background: '#4472C4',
            fontSize: '1.5em',
            color: '#ffffff',
            'text-align': 'center',
          }"
          :row-style="{ height: '95px' }"
        >
          <el-table-column
            prop="kurtosis"
            label="峭度指标"
            width="180"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="peak"
            label="峰值指标"
            width="180"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="yudu" label="裕度指标" align="center">
          </el-table-column>
        </el-table>
        <el-table
          :data="tableData"
          border
          style="width: 100%"
          :header-cell-style="{
            background: '#4472C4',
            fontSize: '1.5em',
            color: '#ffffff',
          }"
          :row-style="{ height: '95px' }"
        >
          <el-table-column
            prop="pulse"
            label="脉冲指标"
            width="180"
            align="center"
          >
          </el-table-column>
          <el-table-column
            prop="wave"
            label="波形指标"
            width="180"
            align="center"
          >
          </el-table-column>
          <el-table-column prop="type" label="故障类型" align="center">
          </el-table-column>
        </el-table>
      </div>

      <div
        style="display: inline; width: 500px; height: 350px"
        ref="div3"
        id="div3"
      >
        <div style="height: 48px">
          <span id="span3">频域分析</span>
          <el-button
            type="primary"
            id="detail3"
            @click="transToFreqAnalysisDetail"
            >详情</el-button
          >
        </div>
        <hr style="margin: 0; height: 1px; background-color: blue" />
        <div style="width: 500px; height: 300px" ref="chart2"></div>
      </div>

      <div
        style="display: inline; width: 640px; height: 350px"
        ref="div4"
        id="div4"
      >
        <div style="height: 48px">
          <span id="span4">时频域分析</span>
          <el-button
            type="primary"
            id="detail4"
            @click="transToTimeFreqAnalysisDetail"
            >详情</el-button
          >
        </div>
        <hr style="margin: 0; height: 1px; background-color: blue" />
        <div style="width: 500px; height: 300px" ref="chart3"></div>
      </div>
    </div>
    <div style="width: 1700px; height: 300px" ref="div5" id="div5">
      <div style="height: 5px"></div>
      <div id="div5_1">故障诊断结果</div>
      <hr style="margin: 0; height: 1px; background-color: blue" />
      <div>
        <el-input
          placeholder="此处展示诊断结果"
          disabled
          style="width: 1700px; height: 250px"
        ></el-input>
      </div>
    </div>
    <div id="bigdiv2">
      <div
        style="display: inline-block; width: 600px; height: 350px"
        ref="div6"
        id="div6"
      >
        <div style="height: 5px"></div>
        <div id="div6_1">剩余寿命信息</div>
        <hr style="margin: 0; height: 1px; background-color: blue" />
        <div ref="chart4" style="width: 600px; height: 310px"></div>
      </div>
      <div
        style="display: inline-block; width: 1060px; height: 350px"
        ref="div7"
        id="div7"
      >
        <div style="height: 5px"></div>
        <div id="div7_1">基于健康指标的退化曲线</div>
        <hr style="margin: 0; height: 1px; background-color: blue" />
        <div ref="chart5" style="width: 1060px; height: 310px"></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      // tableData 是时域分析结果的数据
      tableData: [
        {
          kurtosis: "",
          peak: "",
          yudu: "",
          pulse: "",
          wave: "",
          type: "",
        },
      ],
    };
  },
  mounted() {
    // 这几个方法仅在演示时使用，数据是手动生成的，后续开发时会使用后端接口传来的数据渲染图表。
    this.initTimeGraph();
    this.initFreqAnalysis();
    this.initTimeFreqAnalysis();
    // this.initDiagnosisRes();
    this.initRemainLife();
    this.initDegradationCurve();
  },
  methods: {
    // 此处的initTimeGraph方法仅在演示时使用，数据是随机生成的，后续开发时应使用后端接口传来的数据渲染图表。其他方法类似
    initTimeGraph() {
      let myChart = echarts.init(this.$refs.chart1);
      // 纵坐标的数取值在正负0.6之间,长度为五千
      let yData = [],
        len = 5000,
        randMin = -0.6,
        randMax = 0.6;
      // 随机生成数据
      for (let i = 0; i < len; ++i) {
        yData[i] = [i, Math.random() * (randMax - randMin) + randMin];
      }

      myChart.setOption({
        backgroundColor: "#ffffff",
        title: {
          text: "时域波形",
        },
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
    initFreqAnalysis() {
      let myChart = echarts.init(this.$refs.chart2);
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
    initTimeFreqAnalysis() {},
    // initDiagnosisRes() {},
    initRemainLife() {
      let myChart = echarts.init(this.$refs.chart4);
      // 随机生成数据
      let yData = [
        90, 95, 97, 104, 102, 98, 103, 96, 94, 90, 86, 88, 82, 80, 78, 74, 72,
        75, 70, 68, 66, 63, 65, 62, 59, 55, 58, 53, 49, 52, 47, 44, 40,
      ];
      for (let i = 0; i < yData.length; ++i) {
        const temp = yData[i];
        yData[i] = [Number(i) + 120, temp];
      }
      myChart.setOption({
        backgroundColor: "#ffffff",
        title: {},
        xAxis: {
          min: 120,
          max: 160 + yData.length,
          interval: 10, // 横坐标间隔大小
        },
        yAxis: {
          min: 0,
          max: 120,
          interval: 20, // 纵坐标间隔大小
        },
        series: [
          {
            data: yData,
            type: "line",
            smooth: true,
            symbol: "none",
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "red", // 设置折线的颜色，可根据实际需要设置成动态值
                },
              },
            },
          },
        ],
      });
    },
    initDegradationCurve() {},

    // 点击“时域分析”处的 详情 按钮后的动作
    transToTimeAnalysisDetail() {
      this.$router.push("/timeanalysisdetail");
    },
    // 点击“频域分析”处的 详情 按钮后的动作
    transToFreqAnalysisDetail() {
      this.$router.push("/freqanalysisdetail");
    },
    // 点击“时频域分析”处的 详情 按钮后的动作
    transToTimeFreqAnalysisDetail() {
      this.$router.push("/timefreqanalysisdetail");
    },
  },
};
</script>

<style lang="less" scoped>
#bigdiv1 {
  margin: 10px 0 10px 0;
  position: relative;
}
#div2 {
  position: relative;
  float: left;
  background: #ffffff;
  // 设置“时域分析”四个字的样式，下同
  #span2 {
    position: absolute;
    left: 10px;
    top: 10px;
  }
  // 设置“详情”按钮的样式，下同
  #detail2 {
    position: absolute;
    top: 5px;
    right: 0;
    font-size: 1em;
  }
}
#div3 {
  float: left;
  position: relative;
  margin: 0 0 0 30px;
  background-color: #ffffff;
  #span3 {
    position: absolute;
    left: 10px;
    top: 10px;
  }
  #detail3 {
    position: absolute;
    top: 5px;
    right: 0;
    font-size: 1em;
  }
}
#div4 {
  float: left;
  background-color: #ffffff;
  position: relative;
  margin: 0 0 0 30px;
  #span4 {
    position: absolute;
    left: 10px;
    top: 10px;
  }
  #detail4 {
    position: absolute;
    top: 5px;
    right: 0;
    font-size: 1em;
  }
}
#div5 {
  position: relative;
  margin: 0 0 10px 0;
  background-color: #ffffff;
  #div5_1 {
    margin: 10px 0 10px 10px;
  }
}

#bigdiv2 {
  position: relative;

  // margin: 20px 0 40px 0;
  #div6 {
    position: absolute;
    // margin: 0 0 10px 0;
    float: left;
    background-color: #ffffff;
    left: 0;
    #div6_1 {
      margin: 10px 0 10px 10px;
    }
  }
  #div7 {
    // float: right;
    margin-left: 640px;
    background-color: #ffffff;
    #div7_1 {
      margin: 10px 0 10px 10px;
    }
  }
}
</style>