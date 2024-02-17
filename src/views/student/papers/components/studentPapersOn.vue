<template>
    <div class="bigBox">
      <div class="conditionSearch">
        <el-input style="max-width: 250px;height:40px;" :prefix-icon="Search" placeholder="按名称搜索"></el-input>
        <el-select v-model="value" class="m-2" placeholder="考试场次" size="large" style="width: 240px;margin-left:30px;" ></el-select>
        <el-select v-model="value" class="m-2" placeholder="考试年份" size="large" style="width: 240px;margin-left:30px;" ></el-select>
        <el-select v-model="value" class="m-2" placeholder="考试分数" size="large" style="width: 240px;margin-left:30px;" ></el-select>
      </div>
      <div class="details">
        <div class="paper" v-for="item in 5">
          <div class="subject">科目：语文</div>
          <div class="correctors">批改人：xxx老师</div>
          <div class="text">您的试卷正在批改中，请耐心等待！</div>
          <div class="status">进行中</div>
        </div>
      </div>
  
      <div class="page">
        <el-pagination prev-text="上一页" next-text="下一页" :page-size="20" :pager-count="11" layout="prev, pager, next"  :total="1000" />
      </div>
  
  
    </div>
  </template>
  
  <script setup>
  import { Search } from '@element-plus/icons-vue';
  
  
  
  </script>
  
  <style lang="scss" scoped>
  .bigBox{
    margin-top:20px;
  
    .conditionSearch{
      color:#3A63F3;
      display: flex;

    }
  
    .details {
      // background-color: pink;
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
     
      // justify-content: space-between; /* 将这里的 justify-content 修改为 flex-start */
  }
  
  .paper {
      background-color: #ebeffe;
      flex: 1;
      min-width: 600px;
      max-width: 770px;
      height: 240px;
      margin-bottom: 20px;
      border-radius: 20px;
      box-sizing: border-box;
      padding:20px;
      margin-right: 20px;
      
      .subject {
        color:#3A63F3;
        font-weight: bold;
        font-size: 20px;
        line-height: 40px;
      }
  
      .correctors{
        font-weight: bold;
        font-size: 18px;
        line-height: 35px;
      }
  
      .text{
        height: 110px;
        line-height: 110px;
        font-size: 18px;
      }
  
      .status{
        color:#787474;
      }
    }
  
    .page{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  </style>