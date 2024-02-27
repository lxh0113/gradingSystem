<template>
    <div class="backBox">
      <div class="top wow slideInDown">
          <div class="logo">
              <img src="@/assets/logo2.png" class="logoImg" alt="">
          </div>
          <div class="projectName">
              云阅
          </div>
          <div class="userInfo">
              <el-badge is-dot class="item">
                  <el-button class="share-button" :icon="BellFilled" type="primary" />
              </el-badge>
              <div class="avatar">
                  <img src="@/assets/avatar.jpeg" alt="">
              </div>
          </div>
      </div>
      <div class="bottom">
          <div class="left wow slideInLeft">
              <div class="a" v-for="(item,index) in leftList" :key="index">
                  <RouterLink :to="item.to">
                      <span :class="item.icon"></span>
                      &nbsp;
                      <span class="leftName">{{ item.text }}</span>
                  </RouterLink>
              </div>
              
          </div>
          <div class="right wow slideInRight">
              <RouterView></RouterView>
          </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import {onMounted,ref} from 'vue'
  import WOW from 'wow.js'
  import { BellFilled } from '@element-plus/icons-vue'
  
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
  
  
  const leftList=studentNavList.value
  
  onMounted(()=>{
      
    new WOW().init()
  })
  
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
      height: 60px;
      background: #fff;
      display: flex;
      text-align: center;
      line-height: 60px;
      @media screen and (min-width: 375px) and (max-width: 767px) {
          height: 80px;
          line-height: 80px;
          width: 100%;
          // 固定到顶部
          position: sticky;
          z-index: 1; 
          top: 0;
      }
  
      .logo{
          // flex:3;
          margin-left: 30px;
          width: 100px;
          min-width: 100px;
          height: 60px;
          line-height: 60px;
          //background-image: url("../../../public/favicon.ico") no-repeat center;
          @media screen and (min-width: 375px) and (max-width: 767px) {
              display: none;
          }
  
          .logoImg{
              width: 60px;
              height: 60px;
          }
      }
  
      .projectName{
          // flex:2;
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
              line-height: 60px;
              height: 60px;
              flex: 10;
          }
  
          .item{
              line-height: 10px;
              margin-top: 20px;
              margin-left: 40px;
              @media screen and (min-width: 375px) and (max-width: 767px) {
                  margin-top: 30px;
                  margin-left: 20px;
                  margin-right: 30px;
              }
          }
  
          .share-button{
              background-color: white;
              border: none;
              width: 20px;
              font-size: 20px;
              color: #8a8989;
              @media screen and (min-width: 375px) and (max-width: 767px) {
                  font-size: 25px;
              }
  
              :hover{
                  color: #9e9d9d;
              }
          }
  
          .avatar{
              height: 100%;
              margin-left: 40px;
              margin-right: 80px;
              img{
                  margin-top: 10px;
                  width: 40px;
                  height: 40px;
                  border-radius: 50%;
                  @media screen and (min-width: 375px) and (max-width: 767px) {
                      margin: 0;
                      width: 50px;
                      height: 50px;
                      margin-top: 20px;
                  }
  
              }
              
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