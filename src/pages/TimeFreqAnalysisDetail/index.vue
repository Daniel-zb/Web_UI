<template>
  <div>
    <div style="display: inline; width: 500px; height: 350px" id="div1">
      <div style="height: 48px">
        <span id="span1">时频域分析详情</span>
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
export default {};
</script>

<style lang="less" scoped>
#div1 {
  position: relative;
  float: left;
  left: 600px;
  background: #ffffff;
  // 设置“时频域分析详情”几个字的样式，下同
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