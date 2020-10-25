<template>
    <div class="interest">
        <img src="@/assets/img/indexFocusTopic.png" alt="">
        <ul class="topic">
            <li class="topic-li" v-for="(v,i) in topicData" :key="i" @click="clickB(v,i)" :class="{'active':rSelect.indexOf(v)!=-1}">{{v.text}}</li>
        </ul>
        <div class="save">
            <img src="@/assets/img/focus_hasmore.png" alt="" >
            <p @click="savefun" class="class">保存</p>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
export default {
    data:function(){
        return{
            rSelect:[],
            topicData:[],
            save:[]
        }
    },
    async created(){
        let res = await axios({
            url:"http://localhost:3000/topicData",
            method:"get"
        })
        this.topicData = res.data; 
    },
    methods:{
        clickB(value){
            // console.log(this.rSelect.indexOf(value));   //查找不到默认为-1，value为一个对象
            if (this.rSelect.indexOf(value) !== -1) {       //第二次点击时，该v已存在在rSelect
                 this.rSelect.splice(this.rSelect.indexOf(value), 1); //取消，将自身从数组取消，去掉样式
                //  console.log("hou",this.rSelect);
                    console.log(this.rSelect.indexOf(value));
            } else {
                this.rSelect.push(value);//选中添加到数组里，添加样式
                // console.log(this.rSelect);
                this.save.push(value);
             }
        },
        savefun(){
            if(this.save.length==0){
                Toast("请至少选择一个话题");
            }else{
                this.$router.push("/");
            }
        }
    }
}
</script>
<style scoped>
.interest{
    margin: 20px 20px 25px 20px;
    border: 1px solid #eee;
    border-radius: 10px;
    box-sizing: border-box;
}
.interest img{
    height: 75px;
    width: 100%; 
}
.topic{
    height: 195px;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 15px;
}
.topic-li{
    height: 26px;
    font-size: 12px;
    color: #999;
    text-align: center;
    line-height: 26px;
    border-radius: 13px;
    border: 1px solid #eee;
    margin: 8px 12px 0 0;
    padding: 0 10px;
}
.save{
    height: 44px;
    font-size: 12px;
    position: relative;
}
.save p{
    width: 74px;
    height: 30px;
    font-size: 14px;
    color: #fff;
    background-color:#fc4b7d ;
    border-radius: 10px 0 10px 0;
    line-height: 30px;
    text-align: center;
    position: absolute;
    bottom: 0;
    right: 0;
}
.save img{
   width: 23px;
   height: 23px;
   position: absolute;
   bottom: 10px;
   left: 50%;
   transform: translateX(-50%);
}
.active{
    border: 1px solid #fc4b7d;
    color: #fc4b7d;
}
</style>