<template>
  <div>
    <!-- 每行四个排列 -->
    <el-row
      :gutter="20"
      type="flex"
      justify="space-between"
      style="display: flex; flex-wrap: wrap"
    >
      <el-col :span="eachColWidth"
        ><div class="grid-content bg-purple">
          <el-descriptions
            class="margin-top"
            title="基本信息"
            :column="1"
            direction="horizontal"
            style="height: 255px"
          >
            <el-descriptions-item label="设备名称">设备 1</el-descriptions-item>
            <el-descriptions-item label="监测部件">部件 1</el-descriptions-item>
            <el-descriptions-item label="部件型号" :span="1"
              >某型号</el-descriptions-item
            >
          </el-descriptions>
        </div></el-col
      >
      <el-col :span="eachColWidth"
        ><div class="grid-content bg-purple">
          <el-descriptions
            class="margin-top"
            title="当前状态信息"
            :column="1"
            direction="horizontal"
          >
            <el-descriptions-item label="退化状态">状态 1</el-descriptions-item>
            <el-descriptions-item label="服役时长">10 天</el-descriptions-item>
            <el-descriptions-item label="剩余寿命" :span="1"
              >1年</el-descriptions-item
            >
            <el-descriptions-item label="维修建议"></el-descriptions-item>
          </el-descriptions></div
      ></el-col>
      <el-col :span="eachColWidth"
        ><div class="grid-content bg-purple">
          <el-descriptions
            class="margin-top"
            title="基本信息"
            :column="1"
            direction="horizontal"
            style="height: 255px"
          >
            <el-descriptions-item label="设备名称">设备 2</el-descriptions-item>
            <el-descriptions-item label="监测部件">部件 2</el-descriptions-item>
            <el-descriptions-item label="部件型号" :span="2"
              >某型号</el-descriptions-item
            >
          </el-descriptions>
        </div></el-col
      >
      <el-col :span="eachColWidth"
        ><div class="grid-content bg-purple">
          <el-descriptions
            class="margin-top"
            title="当前状态信息"
            :column="1"
            direction="horizontal"
          >
            <el-descriptions-item label="退化状态">状态 2</el-descriptions-item>
            <el-descriptions-item label="服役时长">10 天</el-descriptions-item>
            <el-descriptions-item label="剩余寿命" :span="1"
              >1 年</el-descriptions-item
            >
            <el-descriptions-item label="维修建议"></el-descriptions-item>
          </el-descriptions></div
      ></el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="space-between">
      <el-col :span="eachColWidth"
        ><div class="grid-content bg-purple">
          <el-descriptions
            class="margin-top"
            title="基本信息"
            :column="1"
            direction="horizontal"
            style="height: 255px"
          >
            <el-descriptions-item label="设备名称">设备 3</el-descriptions-item>
            <el-descriptions-item label="监测部件">部件 3</el-descriptions-item>
            <el-descriptions-item label="部件型号" :span="1"
              >某型号</el-descriptions-item
            >
          </el-descriptions>
        </div></el-col
      >
      <el-col :span="eachColWidth"
        ><div class="grid-content bg-purple">
          <el-descriptions
            class="margin-top"
            title="当前状态信息"
            :column="1"
            direction="horizontal"
          >
            <el-descriptions-item label="退化状态">状态 3</el-descriptions-item>
            <el-descriptions-item label="服役时长">10 天</el-descriptions-item>
            <el-descriptions-item label="剩余寿命" :span="1"
              >1 年</el-descriptions-item
            >
            <el-descriptions-item label="维修建议"></el-descriptions-item>
          </el-descriptions></div
      ></el-col>
      <el-col :span="eachColWidth"
        ><div class="grid-content bg-purple">
          <el-descriptions
            class="margin-top"
            title="基本信息"
            :column="1"
            direction="horizontal"
            style="height: 255px"
          >
            <el-descriptions-item label="设备名称">设备 4</el-descriptions-item>
            <el-descriptions-item label="监测部件">部件 4</el-descriptions-item>
            <el-descriptions-item label="部件型号" :span="2"
              >某型号</el-descriptions-item
            >
          </el-descriptions>
        </div></el-col
      >
      <el-col :span="eachColWidth"
        ><div class="grid-content bg-purple">
          <el-descriptions
            class="margin-top"
            title="当前状态信息"
            :column="1"
            direction="horizontal"
          >
            <el-descriptions-item label="退化状态">状态 4</el-descriptions-item>
            <el-descriptions-item label="服役时长">10 天</el-descriptions-item>
            <el-descriptions-item label="剩余寿命" :span="1"
              >1 年</el-descriptions-item
            >
            <el-descriptions-item label="维修建议"></el-descriptions-item>
          </el-descriptions></div
      ></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 每一列的宽度，最大值为 6
      eachColWidth: 5,
    };
  },
};
</script>

<style lang="less" scoped>
.margin-top {
  font-size: 25px;
  margin: 20px;
}
.grid-content {
  /deep/ .el-descriptions__body {
    background-color: transparent;
  }
  /deep/.el-descriptions__title {
    font-size: 25px;
    font-weight: 500;
  }
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>