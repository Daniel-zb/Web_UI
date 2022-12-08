<template>
  <!-- 本组件使用的各项数据应由后端数据库传递，目前手动生成的所有数据均只为演示使用 -->
  <div>
    <!-- <div style="margin: 10px 0 10px 0">{{ partName }}</div> -->
    <el-button type="primary" id="partName" style="font-size: 1em">{{
      partName
    }}</el-button>
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
            @click="centerDialogVisible1 = true"
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

        <!-- 时域分析详情对话框 -->
        <el-dialog
          title="时域分析详情"
          :visible.sync="centerDialogVisible1"
          width="40%"
          height=""
          center
        >
          <!-- <span>需要注意的是内容是默认不居中的</span> -->
          <!-- header-cell-style设置表头背景颜色、字体大小和颜色 -->
          <!-- row-style设置内容的每行高度 -->
          <el-table
            :data="tableData"
            border
            style="width: 100%"
            :header-cell-style="{
              background: '#4472C4',
              fontSize: '1.6em',
              color: '#ffffff',
              'text-align': 'center',
              height: '100px',
            }"
            :row-style="{ height: '120px' }"
          >
            <el-table-column
              prop="kurtosis"
              label="峭度指标"
              width="237"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="peak"
              label="峰值指标"
              width="237"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="yudu"
              width=""
              label="裕度指标"
              align="center"
            >
            </el-table-column>
          </el-table>
          <el-table
            :data="tableData"
            border
            style="width: 100%"
            :header-cell-style="{
              background: '#4472C4',
              fontSize: '1.6em',
              color: '#ffffff',
              height: '100px',
            }"
            :row-style="{ height: '120px' }"
          >
            <el-table-column
              prop="pulse"
              label="脉冲指标"
              width="237"
              align="center"
            >
            </el-table-column>
            <el-table-column
              prop="wave"
              label="波形指标"
              width="237"
              align="center"
            >
            </el-table-column>
            <el-table-column prop="type" label="故障类型" align="center">
            </el-table-column>
          </el-table>
          <el-input
            v-model="input2"
            placeholder="此处展示诊断结果"
            style="margin: 20px 0 0 0"
          ></el-input>
          <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible1 = false">取 消</el-button>
            <el-button type="primary" @click="centerDialogVisible1 = false"
              >确 定</el-button
            >
          </span>
        </el-dialog>
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
            @click="centerDialogVisible2 = true"
            >详情</el-button
          >
        </div>
        <hr style="margin: 0; height: 1px; background-color: blue" />
        <div style="width: 500px; height: 300px" ref="chart2"></div>

        <!-- 频域分析详情对话框 -->
        <el-dialog
          title="频域分析详情"
          :visible.sync="centerDialogVisible2"
          width="40%"
          height="600px"
          top="50px"
          center
          @opened="showFreqDiagramInDialog"
        >
          <div
            style="width: 700px; height: 550px; margin-left: 0"
            ref="chart2_1"
          ></div>
          <el-input v-model="input3" placeholder="此处展示诊断结果"></el-input>
          <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible2 = false">取 消</el-button>
            <el-button type="primary" @click="centerDialogVisible2 = false"
              >确 定</el-button
            >
          </span>
        </el-dialog>
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
            @click="centerDialogVisible3 = true"
            >详情</el-button
          >
        </div>
        <hr style="margin: 0; height: 1px; background-color: blue" />
        <div style="width: 500px; height: 300px" ref="chart3"></div>
        <!-- 时频域分析详情对话框 -->
        <el-dialog
          title="时频域分析详情"
          :visible.sync="centerDialogVisible3"
          width="60%"
          height="500px"
          top="50px"
          center
          @opened="showTimeFreqDiagramInDialog"
        >
          <div
            style="width: 700px; height: 550px; margin-left: 0"
            ref="chart3_1"
          ></div>
          <el-input v-model="input4" placeholder="此处展示诊断结果"></el-input>
          <span slot="footer" class="dialog-footer">
            <el-button @click="centerDialogVisible3 = false">取 消</el-button>
            <el-button type="primary" @click="centerDialogVisible3 = false"
              >确 定</el-button
            >
          </span>
        </el-dialog>
      </div>
    </div>

    <div style="width: 1700px; height: 300px" class="div5">
      <div style="height: 5px"></div>
      <div id="div5_1">故障诊断结果</div>
      <hr style="margin: 0; height: 1px; background-color: blue" />
      <div class="div5_2">
        <el-input
          v-model="input5"
          class="borderNone"
          placeholder="此处展示诊断结果"
          style="width: 1700px; height: 250px; margin: 20px 0 0 0"
        ></el-input>
      </div>
    </div>

    <div id="bigdiv2" style="height: 350px">
      <div
        style="display: inline-block; width: 600px; height: 350px"
        ref="div6"
        id="div6"
      >
        <div id="div6_1">剩余寿命信息</div>
        <hr style="height: 1px; background-color: blue" />
        <div ref="chart4" style="width: 600px; height: 289px"></div>
      </div>
      <div
        style="display: inline-block; width: 1060px; height: 350px"
        ref="div7"
        id="div7"
      >
        <div id="div7_1">基于健康指标的退化曲线</div>
        <hr style="height: 1px; background-color: blue" />
        <div ref="chart5" style="width: 1060px; height: 290px"></div>
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
      // 几输入框的双向绑定值
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      centerDialogVisible1: false,
      centerDialogVisible2: false,
      centerDialogVisible3: false,
    };
  },
  props: ["partName"],
  mounted() {
    // 这几个方法仅在演示时使用，数据是手动生成的，后续开发时会使用后端接口传来的数据渲染图表。
    // 这几个方法分别用于初始化渲染各个图表
    this.initTimeGraph();
    this.initFreqAnalysis();
    this.initTimeFreqAnalysis();
    // this.initDiagnosisRes();
    this.initRemainLife();
    this.initDegradationCurve();
  },
  methods: {
    // 此处的initTimeGraph方法仅在演示时使用，数据是随机生成的，后续开发时应使用后端接口传来的数据渲染图表。其他init方法类似
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
    initDegradationCurve() {
      let myChart = echarts.init(this.$refs.chart5);
      let dataLen = 100;
      let failedThreshold = new Array(dataLen).fill(10);
      let xData = [],
        degradationData = new Array(25).fill(0);
      for (let i = 0; i < dataLen; ++i) {
        failedThreshold[i] = [i, 10];
        xData[i] = i;
      }
      for (let i = 25; i < dataLen - 18; ++i) {
        degradationData[i] = Math.random() * (1 - 0) + 0;
      }
      let option = {
        // 设置三种颜色，分别对应三条曲线
        color: ["#CEA429", "#DB4B4B", "#218F21"],
        tooltip: {
          trigger: "axis",
        },
        legend: {
          itemWidth: 30,
          itemHeight: 3,
          data: [
            {
              icon: "rect",
              name: "失效阈值",
              textStyle: {
                fontSize: "15px",
              },
            },
            {
              icon: "rect",
              name: "退化曲线",
              textStyle: {
                fontSize: "15px",
              },
            },
            {
              icon: "rect",
              name: "寿命预测起始点",
              textStyle: {
                fontSize: "15px",
              },
            },
          ],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          splitLine: {
            // 纵向网格线不显示
            show: false,
          },
          type: "value",
          boundaryGap: false,
          min: 0,
          max: dataLen,
          interval: 10,
          data: xData,
        },
        yAxis: {
          type: "value",
          min: 0,
          max: failedThreshold[0][1] + 2,
          interval: 2,
        },
        series: [
          {
            name: "失效阈值",
            type: "line",
            stack: "Total",
            smooth: true,
            symbol: "none",
            data: failedThreshold,
          },
          {
            name: "退化曲线",
            type: "line",
            stack: "Total",
            smooth: true,
            symbol: "none",
            data: degradationData,
          },
          {
            name: "寿命预测起始点",
            type: "line",
            stack: "Total",
            smooth: true,

            markLine: {
              lineStyle: {
                width: 3,
                color: "#218F21",
              },
              tooltip: {
                trigger: "item",
              },
              symbol: "none",
              silent: false,
              data: [[{ coord: [65, 0] }, { coord: [65, 12] }]],
            },
          },
        ],
      };
      myChart.setOption(option);
    },
    // 打开频域分析 详情 对话框后渲染表格
    showFreqDiagramInDialog() {
      let myChart = echarts.init(this.$refs.chart2_1);
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
    // 打开时频域分析 详情 对话框后渲染表格
    showTimeFreqDiagramInDialog() {},
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
.div5 {
  position: relative;
  margin: 0 0 10px 0;
  background-color: #ffffff;
  #div5_1 {
    margin: 10px 0 10px 10px;
  }
}

// 将 故障诊断结果 的输入框的边框去掉
.borderNone /deep/ .el-input__inner {
  border: none;
}

#bigdiv2 {
  position: relative;
  #div6 {
    position: absolute;
    float: left;
    background-color: #ffffff;
    left: 0;
    #div6_1 {
      margin: 15px 0 10px 10px;
    }
  }
  #div7 {
    margin-left: 640px;
    background-color: #ffffff;
    #div7_1 {
      margin: 15px 0 10px 10px;
    }
  }
}
</style>