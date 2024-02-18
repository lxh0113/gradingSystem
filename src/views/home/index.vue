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
            <div class="a" v-for="(item,index) in leftList" :key="index">
                <RouterLink :to="item.to">
                    <span :class="item.icon"></span>
                    &nbsp;
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


const leftList=teacherNavList.value
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

    .logo{
        // flex:3;
        width:240px;
        min-width: 240px;
        height: 150px;
        //background-image: url("../../../public/favicon.ico") no-repeat center;
    }
    .projectName{
        flex:2;
        color: #3A63F3;
        // color:$primary-color;
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
        // flex:3;
        width: 240px;
        min-width:240px;
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
                font-size: 17px;

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
        }

        
    }

    .right{
        flex:21;
        // background: #fff;
        margin:10px 10px 10px 10px;
    }
}
</style>