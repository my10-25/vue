<template>
    <div class="box">
        <div class="PageTabBar">
            <ul>
                <li @click="fn1">
                    <i class="iconfont icon-shouye" :class="{actived:isindex}" ref="liID"></i>
                    <p :class="{actived:isindex}" ref="liID">首页</p>
                </li>
                <li @click="fn2">
                    <i class="iconfont icon-leimupinleifenleileibie2" :class="{actived:isClass}" ref="liID2"></i>
                    <p :class="{actived:isClass}" ref="liID2">分类</p> 
                </li>
                <li  @click="fn3">
                    <img src="https://my.m.vsigo.cn/static/images/tab_post.png" alt="">
                    <p :class="{actived:isFind}">发现更美</p>
                </li>
                <li  @click="fn4">
                    <i class="iconfont icon-gouwuche" :class="{actived:isCart}"></i>
                    <p :class="{actived:isCart}">购物车</p>
                </li>
                <li  @click="fn5">
                    <i class="iconfont icon-wode" :class="{actived:isMe}"></i>
                    <p :class="{actived:isMe}">我的</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name:"MyFooter",
    data:function(){
        return {          
            isindex:true,          
            isClass:false,           
            isFind:false,         
            isCart:false,        
            isMe:false,
        }
    },
    methods:{
        fn1(){
            this.isindex = true;
            this.isClass=false,
            this.isFind=false,
            this.isCart=false,
            this.isMe=false
        },
        fn2(){
            this.isindex = false;
            this.isClass=true,
            this.isFind=false,
            this.isCart=false,
            this.isMe=false
        },
        fn3(){
           this.isindex = false;
            this.isClass=false,
            this.isFind=true,
            this.isCart=false,
            this.isMe=false
        },
        fn4(){
            this.isindex = false;
            this.isClass=false,
            this.isFind=false,
            this.isCart=true,
            this.isMe=false
        },
        fn5(){
            this.isindex = false;
            this.isClass=false,
            this.isFind=false,
            this.isCart=false,
            this.isMe=true
        }

    }
}
</script>

<style scoped>
@import url(../assets/font/iconfont.css);

.PageTabBar{
    
    position: fixed;
    bottom: 0px;
    background: #fff;
    height:65px;
    width:100%;
}
.PageTabBar ul{
    width:100%;
    height:65px;
}
.iconfont{
    font-size:23px;
    color: #182c4e66;
 }
li{
    align-items: center;
    width:20%;
    height:65px;
    float: left;
    text-align: center;
    margin-top: 12px;
}
a{
    display:block;
    height:100%;
} 
p{
    font-size: 12px;
    color: #182c4e66;
}
img{
    width:48px;
    height:48px;
    vertical-align: middle;
    margin-top:-30px;
}
.actived{
    color:#FC3B72;
}
</style>