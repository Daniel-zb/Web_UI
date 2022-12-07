<template>
  <div>
    <div style="width: 500px; height: 350px" id="div1">
      <div style="height: 50px">
        <span id="span1">时域分析详情</span>
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
};
</script>

<style lang="less" scoped>
#div1 {
  position: relative;
  float: left;
  left: 600px;
  background: #ffffff;
  // 设置“时域分析详情”几个字的样式，下同
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