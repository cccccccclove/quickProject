<template>
  <div class="side-menu">
    <div class="title">组件</div>
    <template v-if="commonComponents.length > 0">
      <!-- v-bind="{ group: { name: 'site', pull: 'clone' }, sort: true }" -->
      <draggable
        class="side-container scroll-none"
       :list="commonComponents" :options="{group:{name: falgs,pull:'clone'}, sort: false}"
                 @end="end"
      >
        <template v-for="(item, index) in commonComponents">
          <div class="side-menu-item" :key="index" v-if="!item.hide">
            <span :class="['menu-icon', item.icon]"></span>
            <span :class="['menu-name']">{{ item.title }}</span>
          </div>
        </template>
      </draggable>
    </template>
    <span v-else>暂无可用的组件哟~</span>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  name: "sideMenu",
  components: { draggable },
  data() {
    return {
      falgs:'artical~',
      commonComponents: [
        {
          name: "Swipers",
          icon: "iconslibrary icons-swiper",
          title: "轮播图",
          data: {},
        },
        {
          name: "CarPictures",
          icon: "iconslibrary icons-picture",
          title: "图片",
          data: {},
        },
        {
          name: "CarContentlist",
          icon: "iconslibrary icons-content",
          title: "内容列表",
          data: {},
        },
        {
          name: "Live",
          icon: "iconslibrary icons-live",
          title: "实况",
          data: {},
        },
        {
          name: "Stream",
          icon: "iconslibrary icons-stream",
          title: "信息流",
          data: {},
        },
        {
          name: "Titlebar",
          icon: "iconslibrary icons-title",
          title: "标题栏",
          data: {},
        },
        {
          name: "Navigators",
          icon: "iconslibrary icons-navigator",
          title: "导航栏",
          data: {},
        },
        // {
        //   name: "Tools",
        //   icon: "iconfont icon-tools",
        //   title: "功能专区",
        //   data: {},
        // },
        // { name: "CarTab", icon: "iconfont icon-tab", title: "tab栏", data: {} },
        // {
        //   name: "Sidebar",
        //   icon: "iconfont icon-advertisement-line",
        //   onlyforPc: false,
        //   hide: false,
        //   title: "广告浮标",
        //   data: { title: "广告浮标", imgUrl: "", inputUrl: "" },
        // },
        // { name: "Vote", icon: "iconfont icon-vote", title: "投票", data: {} },
      ],
    };
  },
  methods: {
    //禁止拖动到信息流组件的位置
    handleMove(e) {
      console.log(22)
      if(e.relatedContext.element&&e.relatedContext.element.name=='hide'&&e.draggedContext&&e.draggedContext.futureIndex<=e.relatedContext.index){
          return false
      }
      if(
          (e.draggedContext.element&&e.draggedContext.element.name=='Stream'&&this.compStreamCount>0)||  //只允许存在一个信息流
          (e.relatedContext.element&&e.relatedContext.element.name=='Stream'&&e.draggedContext&&e.draggedContext.futureIndex>e.relatedContext.index)|| //不允许其他组件拖拽到信息流下方
          (e.draggedContext.element&&e.draggedContext.element.name=='Stream'&&
           this.compStreamCount==0&&
           this.$store.state.transferData.length>1&&
           e.draggedContext.futureIndex<this.$store.state.transferData.length
          ) //画布存在多个组件时，信息流只允许放置在画布最后
      ){
         if(e.draggedContext.element&&e.draggedContext.element.name=='Stream'&&this.compStreamCount>0){
              this.$confirm('页面中只允许设置一个信息流组件','提示')
         }
         return false;
      }

      if(
          (e.draggedContext.element&&e.draggedContext.element.name=='CarTab'&&this.compTabCount>0)||  //只允许存在一个tab栏组件
          ((this.tabStreamCount>0||this.tabAtlasCount>0)&&e.relatedContext.element&&e.relatedContext.element.name=='CarTab'&&e.draggedContext&&e.draggedContext.futureIndex>e.relatedContext.index) //tab组件中若包含信息流或新车图集，下方不允许出现其他组件
      ){
          if(e.draggedContext.element&&e.draggedContext.element.name=='CarTab'&&this.compTabCount>0){
              this.$confirm('页面中只允许设置一个tab栏组件','提示')
          }
          return false
      }

      if(
          (e.draggedContext.element&&e.draggedContext.element.name=='NewCarAtlas')&&this.compNewCarCount>0
      ){ //只允许存在一个新车图集组件
          this.$confirm('页面中只允许设置一个新车图集组件','提示')
          return false
      }

      if(
        (e.draggedContext.element&&e.draggedContext.element.name=='Sidebar')&&this.compSidebarCount>0 //只允许存在一个广告浮标
      ){
          this.$confirm('页面中只允许设置一个广告浮标','提示')
          return false
      }

      if(e.draggedContext.element&&(e.draggedContext.element.name=='Live'||e.draggedContext.element.name=='CarLive')&&this.compLiveCount>0){//仅允许存在一个直播组件
          this.$confirm('页面中只允许设置一个直播组件','提示')
          return false
      }

      return true;
    },
    changeCompPosition(e) {
      // console.log("start");
      // this.$store.commit("SET_SHOW_DRAGGING_CLASS",true)
    },
    handleEnd() {
      // console.log("end");
      // this.$store.commit("SET_SHOW_DRAGGING_CLASS",false)
    },
    end(e){
        // this.form.push(e.item._underlying_vm_.name)
        // console.log(this.form)
      },
  },
};
</script>
<style>
.side-menu {
  width: 250px;
}
.side-container {
  height: 550px;
  overflow: scroll;
  overflow-x: hidden;
  box-sizing: border-box;
}
.side-container::-webkit-scrollbar {
  width: 10px;
  height: 10px;
  background-color: #f5f5f5;
}
.side-container::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px #dedee4;
  border-radius: 10px;
  background-color: #f5f5f5;
}
.side-container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px #dedee4;
  background-color: #dedee4;
}
.title {
  font-weight: 800;
  margin: 30px;
  margin-bottom: 0px;
}
.side-menu-item {
  display: flex;
  align-items: center;
}
.menu-name {
  color: #2770e1;
}
.menu-icon {
  width: 47px;
  height: 45px;
  display: inline-block;
  background-repeat: no-repeat;
  margin: 30px;
}
.icons-swiper {
  background-image: url("../assets/images/menu-swiper.png");
}
.icons-picture {
  background-image: url("../assets/images/menu-pic.png");
}
.icons-content {
  background-image: url("../assets/images/menu-list.png");
}
.icons-live {
  background-image: url("../assets/images/menu-live.png");
}
.icons-stream {
  background-image: url("../assets/images/menu-stream.png");
}
.icons-title {
  background-image: url("../assets/images/menu-title.png");
}
.icons-navigator {
  background-image: url("../assets/images/menu-nav.png");
}
</style>