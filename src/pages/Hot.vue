<template>
<!-- 热门中间内容 -->
    <div class="hot">
        <Discussion class="discussion"/>
        <Topic class="topic"/>
        <HotList/>
    </div>
</template>
<script>
import Discussion from '@/components/hot/Discussion';
import Topic from '@/components/hot/Topic';
import HotList from '@/components/hot/HotList';
export default {
    components:{
        Discussion,Topic,HotList
    },
    data:function(){
        return{

        }
    },

}
</script>
<style scoped>
.hot{
    display: flex;
    flex-direction: column;
    height: 100vh;
}
.content{
    flex: 1;
    overflow-y: auto;
}
.discussion{
    margin-bottom: 8px;
}
.topic{
    margin-bottom: 15px;
}
</style>