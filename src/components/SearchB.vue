<template>
    <div class="search">
        <van-search v-model="value" shape="round"
 background="linear-gradient(90deg, rgba(252, 59, 114, 0.78) 0%, #fc3b72 100%)" placeholder='分享"晴"彩时刻' class="van-search"/>
    <van-icon name="contact" class="van-icon"/>
    </div>
</template>
<script>
// 引入组件Search，不需要在components中注册，直接使用
import Vue from 'vue';
import { Search } from 'vant';
import { Icon } from 'vant';

Vue.use(Icon);
Vue.use(Search);

export default {
    data:function(){
        return {
            // value:"此处需要调用数据"
            value:""
        }
    }
}
</script>
<style scoped>
    .search{
        height: 52px;
        background: #fff;
        font-family: "Microsoft YaHei";
        background-color: #fc3c73;
        /* border: 2px solid green; */
        padding: 0 16px 0 8px;
        display: flex;
        justify-content: space-between;
       align-items: center;
    }
    /* 通过给引入的组件设置类名改变其css样式 */
    .van-search{
        width: 90%;
        height: 52px;
    }
    .van-icon{
        font-size: 24px;
        color: #fff;
    }
</style>