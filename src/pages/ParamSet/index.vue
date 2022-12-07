<template>
  <div>
    <div id="bigdiv1">
      <div style="display: inline-block; width: 600px; height: 450px" id="div1">
        <div style="height: 5px"></div>
        <div id="div1_1">预测周期</div>
        <hr style="margin: 0; height: 1px; background-color: blue" />
        <div ref="chart1" style="width: 600px; height: 310px"></div>
      </div>
      <div style="display: inline-block; width: 600px; height: 450px" id="div2">
        <div style="height: 5px"></div>
        <div id="div2_1">模型结构</div>
        <hr style="margin: 0; height: 1px; background-color: blue" />
        <div ref="chart5" style="width: 1060px; height: 310px"></div>
      </div>
    </div>
    <div id="bigdiv2">
      <div style="display: inline-block; width: 600px; height: 450px" id="div3">
        <div style="height: 5px"></div>
        <div id="div3_1">预警阈值</div>
        <hr style="margin: 0; height: 1px; background-color: blue" />
        <div ref="chart1" style="width: 600px; height: 310px"></div>
      </div>
      <div style="display: inline-block; width: 600px; height: 450px" id="div4">
        <div style="height: 5px"></div>
        <div id="div4_1">训练网络</div>
        <hr style="margin: 0; height: 1px; background-color: blue" />
        <div ref="chart5" style="width: 1060px; height: 310px"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
#bigdiv1 {
  position: relative;
  #div1 {
    position: absolute;
    float: left;
    background-color: #ffffff;
    left: 150px;
    #div1_1 {
      margin: 10px 0 10px 10px;
    }
  }
  #div2 {
    margin-left: 960px;
    background-color: #ffffff;
    #div2_1 {
      margin: 10px 0 10px 10px;
    }
  }
}
#bigdiv2 {
  position: relative;
  margin-top: 50px;
  #div3 {
    position: absolute;
    float: left;
    background-color: #ffffff;
    left: 150px;
    #div3_1 {
      margin: 10px 0 10px 10px;
    }
  }
  #div4 {
    margin-left: 960px;
    background-color: #ffffff;
    #div4_1 {
      margin: 10px 0 10px 10px;
    }
  }
}
</style>