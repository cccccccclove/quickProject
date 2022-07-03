<template>
    <div class="workArea">
        <component :is="nowName" :name="nowName"></component>
    </div>
</template>
<script>
import Swipers from "./common/swiper.vue";
import CarContentlist from "./common/contectList.vue";
import Live from "./common/live.vue";
import Stream from "./common/message.vue";
import Navigators from "./common/navigation.vue";
import CarPictures from "./common/picture.vue";
import Titlebar from "./common/titleTap.vue";
import bus from '../bus'
export default {
    name: 'workArea',
    components: {
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
            nowName:''
        }
    },
    created() {
        bus.$on('getNow',msg=>{
            this.nowName = msg
        })
    }
}
</script>
<style>
.workArea {
    width: 300px;
    height: 550px;
    margin: 30px 5px;
}
</style>