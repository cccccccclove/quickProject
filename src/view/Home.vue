<template>
<div class="home">
    <topBar class="topBar"></topBar>
    <div class="contain">
        <sideMenu class="sideMenu"></sideMenu>
        <viewport></viewport>
        <workArea></workArea>
    </div>

</div>

</template>

<script>
import topBar from '../components/topbar.vue'
import sideMenu from '../components/sideMenu.vue'
import viewport from '../components/viewport.vue'
import workArea from '../components/workArea.vue'
export default{
    name:'Home',
    components:{topBar,sideMenu,viewport,workArea}
}
</script>
<style>
.home{
    overflow: hidden;
}
.contain{
    display: flex;
}
</style>