<template>
    <div class="bigBox">
      <div class="conditionSearch">
        <el-select class="m-2" placeholder="请选择孩子" size="large" style="width: 240px;margin-right:30px;" ></el-select>
        <el-input style="max-width: 300px;height:40px;" :prefix-icon="Search" placeholder="按名称搜索"></el-input>
      </div>
      <div class="details">
        <div class="paper" v-for="item in 5">
          <div class="top">
            <div class="subject">科目：语文</div>
            <div class="look">错题分析</div>
          </div>
          <div class="correctors">批改人：xxx老师</div>
          <div class="comment">封装组件时通常为了避免组件内部样式对全局样式造成污染，style标签会添加scoped属性，这个属性保证了在当前组件内添加的样式只作用于当前组件，当然，还可以作用于引用组件的根组件。</div>
          <div class="grade">
            分数：98分&nbsp;&nbsp;满分：150分
          </div>
          <div class="status">
            <div class="text">已结束</div>
            <div class="time">2024/1/1 12:00</div>
          </div>
        </div>
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

  }

  .details {
    // background-color: pink;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(480px,750px));
    gap:20px;
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

    .correctors{
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
      display: flex;
      justify-content: space-between;

      .time{
        font-size: 14px;
      }
    }
}

}
</style>