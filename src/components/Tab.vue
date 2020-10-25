<template>
         <ul class="tab">
            <li class="tab-li" v-for="(v,i) in arr" :key="i" :class="activeIndex == i?'active':''" @click="changeName(i)" >
                <span>{{v}}</span>
                <span class="bottom_line" v-show="lineIndex==i"></span>  
            </li>
        </ul>
</template>
<script>
export default {
    data:function(){
        return {
            arr:["关注","精选/热门","最新"],
            activeIndex:1,
            lineIndex:1
        }
    },
    methods:{
        changeName(i){
            if(i==0){
                this.$router.push("/findbeaty/attention");
            }else if(i==2){
                this.$router.push("/findbeaty/newest");
            }else if(i==1){
                this.$router.push("/findbeaty/hot");
            }
             this.activeIndex=i;
            this.lineIndex=i;
        }
    }
}
</script>
<style scoped>
   .tab{
       height: 47px;
       display: flex;
       justify-content: space-around;
       align-items: center;
       color: #fc4b7d;
       background: #fff;
       border-bottom: 1px solid #f0f0f0;
       font-family: "Microsoft YaHei";
   }
   .tab-li{
        position: relative;
   }
   .bottom_line {
    display: inline-block;
    position: absolute;
    bottom: -7px;
    left: 50%;
    transform: translateX(-50%);
    width: 24px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(270deg, #ff7185 0%, white 100%);
    /* background-color: transparent; */
}
.tabli{
    font-size: 16px;
}
.active{
    font-size: 19px;
}
</style>