<template>
    <ul class="topic">
       <li v-for="(v,i) in data" :key="i">{{v}}</li>
    </ul>
</template>
<script>
export default {
    data(){
        return{
            data:["# 夏日治愈茶艺妆","# 无限回购清单"]
        }
    }
}
</script>
<style scoped>
.topic{
    height: 30px;
    display: flex;
    padding-left: 15px;
}
.topic li{
    height: 24px;
    color: #fc4a7c;
    font-size: 14px;
    padding:0 15px;
    background: rgb(255, 240, 244);
    border-radius: 12px;
    margin-right: 18px;
    line-height: 24px;
}
</style>