<template>
  <div class="backBox">
    <div class="top">
        <div class="logo">
            logo区域
        </div>
        <div class="projectName">
            云阅
        </div>
        <div class="userInfo">
            <div class="avatar">
                <img src="@/assets/avatar.jpeg" alt="">
            </div>
            <div class="userName">
                xxx
            </div>
        </div>
    </div>
    <div class="bottom">
        <div class="left">
            <div class="a" v-for="item in leftList">
                <RouterLink to="`#{item.to}`">
                    <el-icon :size="size" :color="color">
                        <Edit />
                    </el-icon>
                    {{ item.text }}
            </RouterLink>
            </div>
            
        </div>
        <div class="right">
            <RouterView></RouterView>
        </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const leftList=[
    {text:"首页",icon:"",to:"/homePage"},
    {text:"我的试卷",icon:"",to:"/myTest"},
    {text:"AI刷题",icon:"",to:"/ai"},
    {text:"学情分析",icon:"",to:"/learn"},
    {text:"关系绑定",icon:"",to:"/relationship"}
]
</script>

<style lang="scss" scoped>

.backBox{
    @media screen and (min-width: 1440px) and (max-width: 1920px){
        
    }
    @media screen and (min-width: 1024px) and (max-width: 1439px) {
        
    }
    @media screen and (min-width: 768px) and (max-width: 1023px){
        
    }
    @media screen and (min-width: 375px) and (max-width: 767px) {
        
    }
    width: 100%;
    height: 100%;
    background: #f5f7fa;
}
.top{
    width: 100%;
    height: 150px;
    background: #fff;
    display: flex;

    text-align: center;
    line-height: 150px;

    .logo{
        flex:3;
        height: 150px;
        //background-image: url("../../../public/favicon.ico") no-repeat center;
    }
    .projectName{
        flex:2;
        color: #3A63F3;
        font-size:26px;
        font-weight: bold;
    }

    .userInfo{
        flex:19;
        display: flex;
        justify-content: right;

        .avatar{
            height: 100%;
            

            img{
                margin-top:45px;
                width: 60px;
                height: 60px;
                border-radius: 50%;
            }
            
        }
        .userName{
            margin-right: 100px;
            margin-left: 50px;
            font-weight: bold;
        }
        
    }
}

.bottom{
    display: flex;
    width: 100%;
    min-height: 798px;
    box-sizing: border-box;

    .left{
        flex:3;
        background: #fff;
        line-height: 80px;

        .a{
            height: 80px;

            a{
                display: block;
                box-sizing: border-box;
                text-decoration: none;
                padding-left: 25%;
                color:black;
                // background: #3A63F3;
                margin:10px 10px 10px 10px;
                
                el-icon{
                    margin-left: 20px;
                }
            }
        }

        
    }

    .right{
        flex:21;
        background: #fff;
        margin:10px 10px 10px 10px;
    }
}
</style>