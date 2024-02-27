<template>
  <div class="bigBox">
    <div class="conditionSearch">
      <el-input style="max-width: 250px;height:40px;" :prefix-icon="Search" placeholder="按名称搜索"></el-input>
      <el-select v-model="value" class="m-2" placeholder="考试年份" size="large" style="width: 240px;margin-left:30px;" ></el-select>
      <el-select v-model="value" class="m-2" placeholder="考试分数" size="large" style="width: 240px;margin-left:30px;" ></el-select>
    </div>
    <div class="details">
      <div class="paper" v-for="item in 5">
      <div class="top">
        <div class="subject">xx市第一次模拟试卷</div>
        <div class="look">错题分析</div>
      </div>
      
      <div class="comment">封装组件时通常为了避免组件内部样式对全局样式造成污染，style标签会添加scoped属性，这个属性保证了在当前组件内添加的样式只作用于当前组件，当然，还可以作用于引用组件的根组件。</div>
      <div class="grade">
        分数：98分&nbsp;&nbsp;满分：150分
      </div>
      <div class="ai">
          AI智能分析  匹配相似模型&gt;&gt;&gt;
      </div>
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
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(480px,750px));
    gap:20px;
   
    // justify-content: space-between; /* 将这里的 justify-content 修改为 flex-start */
}

.paper {
  background-color: #ebeffe;
  flex: 1;
  // min-width: 600px;
  // max-width: 778px;
  height: 240px;
  margin-bottom: 20px;
  border-radius: 20px;
  box-sizing: border-box;
  padding:20px;
  margin-right: 20px;
  
  .top{
    display: flex;
    justify-content: space-between;
    .subject {
    color:#3A63F3;
    font-weight: bold;
    font-size: 20px;
    line-height: 40px;
    }
    .look{
      color:#3A63F3;
      font-size: 18px;
      line-height: 40px;
    }
  }
  .ai{
    font-weight: bold;
    font-size: 18px;
    line-height: 35px;
  }
  .comment{
    overflow: hidden;
    height: 75px;
    color:#787474;
  }
  .grade{
    font-weight: bold;
    font-size: 18px;
    line-height: 35px;
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