<template>
  <div class="backBox">
    <div class="top">
        <div class="logo">
            <img src="@/assets/logo2.png" class="logoImg" alt="">
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
            <div class="a" v-for="(item,index) in leftList" :key="index">
                <RouterLink :to="item.to">
                    <span :class="item.icon"></span>
                    &nbsp;
                    <span class="leftName">{{ item.text }}</span>
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

//学生左边导航选项
const studentNavList=ref([
    {text:"首页",icon:"iconfont icon-home",to:"/student/home"},
    {text:"我的试卷",icon:"iconfont icon-paper",to:"/student/papers"},
    {text:"AI刷题",icon:"iconfont icon-X-artificial-intelligence",to:"/student/ai"},
    {text:"学情分析",icon:"iconfont icon-analysis",to:"/student/analysis"},
    {text:"关系绑定",icon:"iconfont icon-chart-relationship",to:"/student/relationship"}
]);


const teacherNavList=ref([
    {text:"首页",icon:"iconfont icon-home",to:"/teacher/home"},
    {text:"阅卷",icon:"iconfont icon-yuejuanmokuai",to:"/teacher/marking"},
    {text:"考情分析",icon:"iconfont icon-analysis",to:"/teacher/analysis"},
    {text:"班级管理",icon:"iconfont icon-user-management",to:"/teacher/management"}
])

const parentsNavList=ref([
    {text:"首页",icon:"iconfont icon-home",to:"/parents/home"},
    {text:"学情分析",icon:"iconfont icon-analysis",to:"/parents/analysis"},
    {text:"孩子试卷",icon:"iconfont icon-paper",to:"/parents/papers"},
    {text:"关系绑定",icon:"iconfont icon-chart-relationship",to:"/parents/relationship"}
])

const schoolAdminNavList=ref([
    {text:"首页",icon:"iconfont icon-home",to:"/schoolAdmin/home"},
    {text:"人员管理",icon:"iconfont icon-user-management",to:"/schoolAdmin/management"},
    {text:"考情分析",icon:"iconfont icon-analysis",to:"/schoolAdmin/analysis"},
    {text:"试卷管理",icon:"iconfont icon-paper",to:"/schoolAdmin/papers"}
])

const adminNavList=ref([
    {text:"账号审核",icon:"iconfont icon-home",to:"/admin/accountAudit"},
    {text:"账号管理",icon:"iconfont icon-user-management",to:"/admin/accountManagement"}
])


const leftList=schoolAdminNavList.value
<<<<<<< HEAD
=======

>>>>>>> d8c5fdca5ac6a611c7b56febc3963d58effcf4d1
</script>

<style lang="scss" scoped>
@import url("@/styles/project/index.scss");
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
    @media screen and (min-width: 375px) and (max-width: 767px) {
        height: 100px;
        line-height: 100px;
        width: 100%;
        // 固定到顶部
        position: sticky;
        z-index: 1; 
        top: 0;
    }

    .logo{
        // flex:3;
        width:240px;
        min-width: 240px;
        height: 150px;
        line-height: 240px;
        //background-image: url("../../../public/favicon.ico") no-repeat center;
        @media screen and (min-width: 375px) and (max-width: 767px) {
            display: none;
        }

        .logoImg{
            width: 100px;
            height: 100px;
        }
    }

    .projectName{
        flex:2;
        color: #3A63F3;
        // color:$primary-color;
        font-size:26px;
        font-weight: bold;
        @media screen and (min-width: 375px) and (max-width: 767px) {
            margin-left: 10%;
        }
    }

    .userInfo{
        flex:17.5;
        display: flex;
        justify-content: right;
        @media screen and (min-width: 375px) and (max-width: 767px) {
            line-height: 100px;
            height: 100px;
            flex: 10;
        }
        .avatar{
            height: 100%;

            img{
                margin-top:45px;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                @media screen and (min-width: 375px) and (max-width: 767px) {
                    margin: 0;
                    margin-top: 20px;
                }

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
        background: #fff;
        width: 240px;
        @media screen and (min-width: 1440px) and (max-width: 1920px){
            width: 240px;
            min-width: 240px;
        }
        @media screen and (min-width: 1024px) and (max-width: 1439px) {
            width: 240px;
            min-width: 240px;
        }
        @media screen and (min-width: 768px) and (max-width: 1023px){
            width: 100px;
            min-width: 100px;
        }
        @media screen and (min-width: 375px) and (max-width: 767px) {
            width: 100px;
            min-width: 100px;
        }

        transition: all 0.3s;

        .a{
            height: 80px;
            a{
                display: block;
                box-sizing: border-box;
                text-decoration: none;
                padding-left: 25%;
                line-height: 80px;
                color:black;
                // background: #3A63F3;
                margin:10px 10px 10px 10px;
                font-size: 17px;
                @media screen and (min-width: 768px) and (max-width: 1023px){
                    padding-left: 30%;
                }
                @media screen and (min-width: 375px) and (max-width: 767px) {
                    padding-left: 30%;
                }

                span{
                    color:#C4C4C4;
                    font-weight: normal;
                }
            }

            .router-link-active{
 	            background-color:#EBEFFE;
                
                span{
                    font-weight: bold;
                    color:#3A63F3;
                }
            }

            .leftName{
                @media screen and (min-width: 768px) and (max-width: 1023px){
                    display: none;
                }
                @media screen and (min-width: 375px) and (max-width: 767px) {
                    display: none;
                }
            }
        }

        
    }

    .right{
        flex:21;
        // background: #fff;
        margin:10px 10px 10px 10px;
    }
}
</style>