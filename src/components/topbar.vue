<template>
  <div>
    <div class="top">
      <span>专题设置</span>
      <div class="button">
        <el-button @click="operate(1)">取消</el-button>
        <el-dropdown class="preView" @command="handleCommand">
          <span class="el-dropdown-link">
            预览<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="wap">预览(wap端)</el-dropdown-item>
            <el-dropdown-item command="pc">预览(pc端)</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-button>保存</el-button>
        <el-button>发布</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "topBar",
  data() {
    return {
        actIdx:0
    };
  },
  methods: {
    operate(type, port) {
      if (type === 1) {
        window.location.reload();
        return;
      }
    //   this.actIdx = type;
    //   const busEvent =
    //     "set" +
    //     (this.$store.state.curItem ? this.$store.state.curItem : "Theme");
    //   const passValidate = type == 3 ? true : false;
    //   this.$EventBus.$emit(busEvent, type, passValidate, port);
    },
    handleCommand(command) {
      //预览
      this.operate(2, command);
    },
  },
};
</script>

<style>
.top {
  height: 105px;
  background-color: #2770e1;
  color: #fff;
  font-weight: 800;
  font-size: 25px;
  display: flex;
  align-items: center;
  padding: 0 25px;
  justify-content: space-between;
}
.top .el-button {
  background-color: #2770e1;
  color: #fff;
}
.preView {
  width: 70px;
  background-color: #2770e1;
  color: #fff;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  text-align: center;
  font-weight: 500;
  margin: 5px 10px 0 10px;
  vertical-align: -1px;
  border: 1px solid #dcdfe6;
}
</style>