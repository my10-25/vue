<template>
  <div id="app">
<!-- 点击底部FindBeaty进入热门 -->
    <router-link to='/findbeaty'>
      <MyFooter/>
    </router-link>
    
    <router-view/>
  </div>
</template>
<script>
import MyFooter from "./components/MyFooter";
export default {
  data:function(){
    return{

    }
  },
  components:{
    MyFooter
  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  font-family: "Microsoft YaHei";
}
li{
  list-style: none;
}
</style>
