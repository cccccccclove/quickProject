<template>
  <div class="dndList-list">
    <div class="size-tips">
      <span class="size-text">750px</span>
      <div class="size-box"></div>
    </div>
    <div class="topContain">
      <img src="../assets/images/phone-bar.png" class="phone-bar" />
      <div class="phone-page-name">首页</div>
    </div>
    <draggable
      :list="list1"
      :options="{ group: falgs, disabled: disabled }"
      class="dragArea11"
    >
      <template v-for="item in list1">
      <components :is="item.name" :key="item.id" :name="item.name"></components>
              <!-- <swiperVue v-if="item.name === 'Swipers'" :key="index"></swiperVue>
              <contectListVue v-if="item.name === 'CarContentlist'" :key="index"></contectListVue> -->
              <!-- <liveVue v-if="item.name === 'Live'" :key="index"></liveVue>
              <messageVue v-if="item.name === 'Stream'" :key="index"></messageVue>
              <navigationVue v-if="item.name === 'Navigators'" :key="index"></navigationVue>
              <pictureVue v-if="item.name === ''" :key="index"></pictureVue>
              <titleTapVue v-if="item.name === 'Titlebar'" :key="index"></titleTapVue> -->
            </template>
    </draggable>
  </div>
</template>CarPictures
<script>
import Swipers from "./common/swiper.vue";
import CarContentlist from "./common/contectList.vue";
import Live from "./common/live.vue";
import Stream from "./common/message.vue";
import Navigators from "./common/navigation.vue";
import CarPictures from "./common/picture.vue";
import Titlebar from "./common/titleTap.vue";
import draggable from "vuedraggable";
import bus from '../bus'
export default {
  name: "viewport",
  components: {
    draggable,
    Swipers,
    CarContentlist,
    Live,
    Stream,
    Navigators,
    CarPictures,
    Titlebar,
  },
  data() {
    return {
      list1: [],
      falgs: "artical~",
      disabled: false,
    };
  },
  watch: {
    list1(newVal,oldVal){
      this.$form = this.list1
      this.$now = newVal[newVal.length-1].name
      bus.$emit('getNow',this.$now)
    }
  },
  methods: {
   
  },
};
</script>
<style scoped>
.dndList-list {
  flex: 1;
  background-color: #f7f7f7;
}
.side-menu-item {
  width: 100px;
  height: 50px;
  background-color: #fff;
  line-height: 50px;
  text-align: center;
  margin: 5px auto;
}
.dragArea11 {
  height: 100%;
  width: 100%;
  /* background-color: #fff; */
}
.viewport {
  flex: 1;
  background-color: #f7f7f7;
}
.topContain {
  background-color: #fff;
  border-bottom: 1px solid #f7f7f7;
}
.phone-page-name {
  padding: 0 37px;
  height: 36px;
  text-align: center;
  line-height: 36px;
  position: relative;
}
.phone-page-name::before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  background-image: url("../assets/images/arrow-back-black.png");
  background-repeat: no-repeat;
}

.size-tips {
  text-align: center;
  margin-bottom: 10px;
}
.size-text {
  color: #aaa;
  font-weight: 600;
  font-size: 10px;
}
.size-box {
  position: relative;
  width: 100%;
  height: 18px;
  box-sizing: border-box;
  border: 1px solid #d7d7d7;
  border-top: none;
  border-bottom: none;
}
.size-box::after {
  content: "";
  width: 100%;
  height: 1px;
  background-color: #d7d7d7;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.viewContain {
  width: 100%;
  height: 410px;
}
.share-btn {
  position: absolute;
  right: 0;
  top: 200px;
  z-index: 999;
  width: 52px;
  height: 30px;
  background: #999999;
  border-radius: 100px 0 0 100px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}
</style>