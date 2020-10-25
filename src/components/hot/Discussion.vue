<template>
    <div class="discussion">
        <div class="discusstion-left">
            <img src="@/assets/img/icon_hot.png" alt="">
            <span>大家都在讨论</span>
        </div>
        <div class="discusstion-right">
            <img src="@/assets/img/icon_topic.png" alt="">
            <span>最热话题排行</span>
            <img src="@/assets/img/icon_right.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.discussion{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    padding: 0 15px;
    margin: 10px 0;
}
.discusstion-left img{
    width: 15px;
    height: 15px;
}
.discusstion-left span{
    font-size: 15px;
    font-weight: bold;
    margin-left: 5px;
}
.discusstion-right img{
    width: 12px;
    height: 12px;
}
.discusstion-right span{
    font-size: 14px;
    margin-left: 5px;
    margin-right: 5px;
    color: #fc4a7c;
}
</style>