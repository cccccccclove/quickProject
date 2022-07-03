<template>
    <!-- <draggable  sort=true v-model="projectList" group='sss'> -->
    <div>图片</div>
    <!-- </draggable>   -->
</template>
<script>
import draggable from 'vuedraggable';
export default{
    components:{draggable},
    data(){
        return{
            projectList:[]
        };
    }
}
</script>