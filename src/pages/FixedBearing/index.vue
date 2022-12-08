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
      partName: "固定端轴承",
    };
  },
  components: {
    PartNormalCom,
  },
};
</script>

<style lang="less" scoped>
</style>