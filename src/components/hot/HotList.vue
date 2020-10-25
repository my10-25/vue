<template>
    <div class="hot-list">
       <ul class="hot-list-left ul-common">
            <li class="list" v-for='(v,i) in leftData' :key='i'>
                <img :src="'../../../'+v.bigImg" alt="">
                <!-- 内容部分 -->
                <div class="content">
                    <p class="text">{{v.PText}}</p>
                    <div class="detail">
                        <div class="detail-left">
                            <img :src="'../../../'+v.headImg" alt="">
                            <span>{{v.spanText}}</span>
                        </div>
                        <div class="detail-right">
                           <i class="detail-van iconfont icon-shoucang1" @click="changeColorL(v)" :class="{'bg':rSelect.indexOf(v)!=-1}"></i>
                           <span>{{v.hotNum}}</span>
                        </div>
                    </div>
                </div>
            </li>
       </ul>
       <ul class="hot-list-right ul-common">
            <li class="list" v-for='(v,i) in rightData' :key='i'>
                <img :src="'../../../'+v.bigImg" alt="">
                <!-- 内容部分 -->
                <div class="content">
                    <p class="text">{{v.PText}}</p>
                    <div class="detail">
                        <div class="detail-left">
                            <img :src="'../../../'+v.headImg" alt="">
                            <span>{{v.spanText}}</span>
                        </div>
                        <div class="detail-right">
                           <i class="detail-van iconfont icon-shoucang1" @click="changeColorL(v)" :class="{'bg':rSelect.indexOf(v)!=-1}" ></i>
                           <span>{{v.hotNum}}</span>
                        </div>
                    </div>
                </div>
            </li>
       </ul>
    </div>
</template>
<script>
import axios from 'axios';
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
export default {
    data:function(){
        return{
            leftData:[],
            rightData:[],
            rSelect:[]
        }
    },
    async created(){
        let res1 = await axios({
            url:"http://localhost:3000/hotListLeft",
            method:"get"
        });
        this.leftData = res1.data;
        // console.log(this.leftData);
        // 右侧数据
        let res2 = await axios({
            url:"http://localhost:3000/hotListRight",
            method:"get"
        });
        this.rightData = res2.data;
        // console.log(this.leftData);
    },
    methods:{
        changeColorL(value){
            if (this.rSelect.indexOf(value) !== -1) {
                //  this.rSelect.splice(this.rSelect.indexOf(value), 1); //取消
                 Toast('不能重复点赞');
            } else {
                this.rSelect.push(value);//选中添加到数组里
                console.log(this.rSelect);
                Toast('点赞成功');
                value.hotNum++;
             }
        },
        changeColorR(value){
            if (this.rSelect.indexOf(value) !== -1) {
                  Toast('不能重复点赞');
            } else {
               Toast('点赞成功');
               value.hotNum++;
             }
        }
    }
}
</script>
<style scoped>
@import url(../../assets/font/iconfont.css);
.hot-list{
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #f1f5fb;
}
.list{
    width: 173px;
    /* height: 262px; */
    background-color: #fff;
    margin-bottom: 10px;
    border-radius: 6px;
}
.list>img{
    width: 173px;
    height: 172px;
    border-radius: 6px 6px 0 0;
}
.content{
    width: 175px;
    /* height: 90px; */
    padding: 0 5px;
    box-sizing: border-box;
}
.text{
    width: 160px;
    /* height: 40px; */
    font-size: 14px;
    color: #666;
    margin: 7px 0 0 0;
}
.detail{
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    padding: 0 3px;
    box-sizing: border-box;
    position: relative;
}
.detail-left>img{
    width: 20px;
    height: 20px;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
}
.detail-left span{
    height: 20px;
    font-size: 10px;
    color: #999;
    position: absolute;
    top: 0;
    left: 30px;
    /* transform: translateY(-50%); */
}
.detail-van{
    width: 16px;
    height: 16px;
    position: absolute;
    top: 0;
    right: 19px;
    color: #999
}
.bg{
    color: #fc4b7d;
}
.detail-right span{
    height: 16px;
    font-size: 12px;
    color: #999;
    position: absolute;
    top: 0px;
    right: 5px;
}
</style>