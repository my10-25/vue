<template>
    <div class="recommend">
        <h3>推荐关注</h3>
        <ul class="recom-list">
            <li class="recom-li" v-for="(v,i) in recomDatas" :key="i" >
                <!-- 关注信息 -->
                 <div class="recom-main">
                    <div class="headshot">
                        <!-- <img :src="'/public/' + v.headImgSrc" alt="" > -->
                        <img :src="'../../../'+v.headImgSrc" alt="">
                    </div>
                    <div class="atten-num">
                        <img src="../../assets/img/icon_hot.png" alt="">
                        <span>{{v.attenNum}}</span>
                    </div>
                    <p class="text-ell">{{v.textEll}}</p>
                 </div>
                <!-- 贴子 -->
                <p class="recom-post">{{v.recomPost}}贴子</p>
                <!-- 关注 -->
                 <div class="recom-atten">
                     <img src="../../assets/img/focus_add.png" alt="">
                     <span>关注</span>
                 </div>
            </li>
        </ul>
    </div>
</template>
<script>
import axios from "axios"; 
export default {
    data:function(){
        return{
            recomDatas:[]
        }
    },
   async created(){
       let res = await axios({
           url:"http://localhost:3000/attentionRecomData",
           method:"get",
        });
        this.recomDatas = res.data;
        // console.log(this.recomDatas);
        
    }
}
</script>
<style scoped>
.recommend{
    padding: 0 20px;
}
.recommend h3{
    font-size: 16px;
    position: relative;
    margin-top: 20px;
    text-indent: 12px;
    margin-bottom: 25px;

}
h3::before{
    content: "";
    position: absolute;
    height: 16px;
    width: 3px;
    background-color: #fc4a7c;
    top: 4px;
    left: 0;
}
.recom-list{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    overflow-x: auto;


}
.recom-li{
    width: 84px;
    height: 206px;
    margin-right: 18px;
    position: relative;
    flex-shrink: 0;
}
.headshot>img{
    width: 84px;
    height: 84px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
}
.atten-num{
    width: 63px;
    height: 20px;
    background: linear-gradient(rgb(254, 221, 105) 0%, rgb(255, 186, 58) 100%);
    position: absolute;
    top: 75px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 10px;
    text-align: center;
    line-height: 20px;
}
.atten-num>img{
    width: 9px;
    height: 12px;
    margin-right: 5px;
}
.atten-num>span{
    font-size: 8px;
    color: rgb(159, 110, 19);
}
.text-ell{
    font-size: 12px;
    width: 84px;
    height: 20px;
    color: #666;
    position: absolute;
    top:96px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    line-height: 20px;

}
.recom-post{
    font-size: 8px;
    width: 84px;
    height: 16px;
    color: #8e98a8;
    position: absolute;
    top: 115px;
    left: 50%;
    transform: translateX(-50%);
    line-height: 16px;
    text-align: center;

}
.recom-atten{
    background: linear-gradient(90deg, rgba(252, 59, 114, 0.78) 0%, rgb(252, 59, 114) 100%);
    width: 65px;
    height: 24px;
    color: #fff;
    position: absolute;
    top: 136px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 12px;
    text-align: center;
    line-height: 24px;

}
.recom-atten>img{
    width: 10px;
    height: 10px;
    margin-right: 5px;
}
.recom-atten>span{
    font-size: 10px;
    color: #fff;
}
</style>