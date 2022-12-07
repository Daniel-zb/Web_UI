<template>
  <div>
    <!-- 向子组件传递两个值：部件名称和部件id -->
    <SubComponent :comName="parts[0]" :comId="0"></SubComponent>
    <SubComponent :comName="parts[1]" :comId="1"></SubComponent>
    <SubComponent :comName="parts[2]" :comId="2"></SubComponent>
    <SubComponent :comName="parts[3]" :comId="3"></SubComponent>
    <SubComponent :comName="parts[4]" :comId="4"></SubComponent>
  </div>
</template>

<script>
import SubComponent from "./SubComponent.vue";
export default {
  components: {
    SubComponent,
  },
  data() {
    return {
      parts: ["支持端轴承", "丝杆", "电机", "螺母座", "固定端轴承"],
    };
  },
  mounted() {
    // 可在vue挂载完毕、页面上DOM元素渲染完毕后，向数据库发送请求获取时域数据
    // 将数据传递给相应的子组件SubComponent，渲染到对应的图表上。此处不再赘述
  },
};
</script>

<style>
</style>