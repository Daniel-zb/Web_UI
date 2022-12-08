<template>
  <div>
    <PartNormalCom :partName="partName"></PartNormalCom>
  </div>
</template>

<script>
import PartNormalCom from "../PartNormalCom";
import * as echarts from "echarts";
export default {
  data() {
    return {
      partName: "支持端轴承",
    };
  },
  components: {
    PartNormalCom,
  },
};
</script>

<style lang="less" scoped>
</style>