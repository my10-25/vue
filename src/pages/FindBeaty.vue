<template>
    <div class="find-beaty">
        <!-- 头部 固定-->
        <TopBar class="top-bar"/>
        
        <div class="content">
        <!-- 中间 ===动态改变-->
        <router-view></router-view>
        </div>
        <!-- 底部 -->
        <MyFooter/>
    </div>
</template>
<script>
import TopBar from '@/components/TopBar';
import MyFooter from "@/components/MyFooter";
export default {
    components:{
        TopBar,MyFooter
    },
    data:function(){
        return{

        }
    },
}
</script>
<style scoped>
.find-beaty{
    display: flex;
    flex-direction: column;
    height: 100vh;
}
.content{
    flex: 1;
    overflow-y: auto;
    margin-bottom: 20px;
}
.top-bar{
    margin-bottom: 8px;
}
</style>