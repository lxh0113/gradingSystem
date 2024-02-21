<template>
  <div class="bigBox">
    <div class="conditionSearch">
      <el-input style="max-width: 300px;height:40px;" :prefix-icon="Search" placeholder="按名称搜索"></el-input>
    </div>
    <div class="details">
      <div class="paper" v-for="item in 5">
        <div class="top">
          <div class="title">2024上学期期中语文试卷</div>
        </div>
        <div class="correctors">批改人：xxx老师</div>
        <div class="class">班级：初二一班</div>
        <div class="text">试卷已结束，你可以查看</div>
        <div class="bottom">
          <div class="status">进行中92%</div>
          <div class="time">2024-1-12 12:22</div>
        </div>
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
    
    .top {
      color:#3A63F3;
      // font-weight: bold;
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      line-height: 40px;

      .title{
        font-weight: bold;
      }

      .look{
        margin-right: 20px;
      }
    }

    .correctors,.class{
      font-weight: bold;
      font-size: 18px;
      line-height: 40px;
    }
    

    .text{
      height: 60px;
      line-height: 60px;
      font-size: 18px;
    }

    .bottom{
      color:#787474;
      display: flex;
      justify-content: space-between;

      .time{
        margin-right: 20px;
      }
    }
  }

  .page{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>