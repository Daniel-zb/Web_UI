<template>
  <!-- 页面主体区域 -->
  <el-container class="home-container">
    <!-- 侧边栏区域 -->
    <el-aside width="180px">
      <!-- 侧边栏菜单区域 -->
      <el-menu
        background-color="#333744"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <!-- 第一个标签 -->
        <el-menu-item index="1" @click="transToEquipOverview">
          <i class="el-icon-s-tools"></i>
          <span slot="title">设备概括</span>
        </el-menu-item>
        <!-- 第二个标签是一个组合型菜单，这里是一级菜单 -->
        <el-submenu index="2">
          <!-- 一级菜单的模板区域 -->
          <template slot="title">
            <div @click="transToPartDetail">
              <i class="el-icon-menu" :style="{ color: fontColor }"></i>
              <span :style="{ color: fontColor }">部件详情</span>
            </div>
          </template>
          <!-- 这里是二级菜单 -->
          <el-menu-item index="2-1" @click="transToSupportingBearing"
            >支持端轴承</el-menu-item
          >
          <el-menu-item index="2-2" @click="transToScrew">丝杆</el-menu-item>
          <el-menu-item index="2-3" @click="transToMotor">电机</el-menu-item>
          <el-menu-item index="2-4" @click="transToNut">螺母座</el-menu-item>
          <el-menu-item index="2-5" @click="transToFixedBearing"
            >固定端轴承</el-menu-item
          >
        </el-submenu>
        <!-- 第三个标签 -->
        <el-menu-item index="3" @click.native="transToParamSet">
          <i class="el-icon-setting"></i>
          <span slot="title">参数设置</span>
        </el-menu-item>
        <!-- 第四个标签 -->
        <el-menu-item index="4" @click="transToDataManage">
          <i class="el-icon-s-data"></i>
          <span slot="title">数据管理</span>
        </el-menu-item>
        <!-- 第五个标签 -->
        <el-menu-item index="5" @click="transToInstruct">
          <i class="el-icon-reading"></i>
          <span slot="title">使用说明</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!-- 右侧内容展示区 -->
    <el-main>
      <!-- 路由占位符 -->
      <router-view></router-view>
    </el-main>
    <!-- </el-container> -->
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      fontColor: "#fff",
    };
  },
  watch: {
    // 监听路由变化，看其中是否包含"partdetail"，如果包含则把其字体和icon颜色变为黄色，否则变为白色
    $route: {
      handler() {
        if (this.$route.path.includes("partdetail")) {
          this.fontColor = "rgb(255,208,75)";
        } else {
          this.fontColor = "#fff";
        }
      },
      immediate: true,
    },
  },
  created() {
    // 一旦进入界面就应该展示设备信息(默认页面)
    this.showEquipOverview();
  },
  updated() {},
  methods: {
    showEquipOverview() {
      // 展示设备信息组件，发起请求，获取服务器数据，展示出来，此处仅展示部分设备信息，后续工作待开发
      console.log("展示设备信息");
    },
    // 跳转至设备概况页面
    transToEquipOverview() {
      this.transToCertainPage("equipinfo");
    },
    // 跳转至部件详情页面
    transToPartDetail() {
      this.transToCertainPage("partdetail");
    },
    // 跳转至参数设置页面
    transToParamSet() {
      this.transToCertainPage("paramset");
    },
    // 跳转至数据管理页面
    transToDataManage() {
      this.transToCertainPage("datamanage");
    },
    // 跳转至使用说明页面
    transToInstruct() {
      this.transToCertainPage("instruct");
    },
    // 跳转至支承端轴承页面（二级导航）
    transToSupportingBearing() {
      console.log("aaa");
      this.transToCertainPage("supportingbearing");
    },
    // 跳转至丝杆页面（二级导航）
    transToScrew() {
      this.transToCertainPage("screw");
    },
    // 跳转至电机页面（二级导航）
    transToMotor() {
      this.transToCertainPage("motor");
    },
    // 跳转至螺母座页面（二级导航）
    transToNut() {
      this.transToCertainPage("nut");
    },
    // 跳转至固定端轴承页面（二级导航）
    transToFixedBearing() {
      this.transToCertainPage("fixedbearing");
    },
    // 跳转至某一页面的方法，先要判断当前是否已经处于目标页面
    transToCertainPage(keyword) {
      if (!this.$route.path.includes(keyword)) {
        this.$router.push(keyword);
      }
    },
  },
};
</script>

<style lang='less' scoped>
.home-container {
  height: 100%;
}
.el-header {
  background-color: #373d41;
}
.el-aside {
  background-color: #333744;
}
.el-main {
  background-color: #ededed;
}
.el-menu {
  top: 100px;
}
</style>