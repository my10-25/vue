<template>
    <div class="attention">
        <!-- 中间滑动部分 -->
            <Interest/>
            <div class="line"></div>
            <Recommend class="recom"/>
    </div>
    
</template>
<script>
import Interest from '@/components/attention/Interest';
import Recommend from '@/components/attention/Recommend';
export default {
    components:{
        Interest,Recommend
    },
    data:function(){
        return{
           
        }
    },

}
</script>
<style scoped>
.line{
    height: 3px;
    background-color: #fff4fa;
    margin: 20px 0 20px 0;
}
.recom{
    margin-bottom: 35px;
}
</style>