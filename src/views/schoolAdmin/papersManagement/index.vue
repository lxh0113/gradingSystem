<template>
  <div class="backBox">
    <div class="bigBox">
      <div class="nav">
        <div class="left">
            试卷管理
        </div>
        <div class="right">
              <el-button size="large" :icon="TakeawayBox">下发给老师</el-button>
              <el-button size="large" :icon="Download">导入试卷</el-button>
              <el-button size="large" :icon="Upload">导出成绩</el-button>
              <el-button size="large" :icon="Plus">添加</el-button>
              <el-button size="large" :icon="Delete">删除</el-button>
              <el-button size="large" :icon="Edit">编辑</el-button>
        </div>
    </div>
    <div class="paper">
      <div class="top">
          <div class="searchInput">
            <el-input size="large" style="width: 200px;margin-right:30px;" placeholder="请输入试卷标题" :prefix-icon="Search"></el-input>
            <el-select placeholder="试卷状态" size="large" style="width: 150px;" ></el-select>
            
          </div>
      </div>
      <div class="bottom">
        <table>
              <thead>
                  <tr>
                      <td>
                          <el-checkbox size="large" />
                      </td>
                      <td>批阅老师</td>
                      <td>试卷标题</td>
                      <td>批阅状态</td>
                      <td>时间</td>
                      <td>操作</td>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>
                        <el-checkbox size="large" />
                      </td>
                      
                      <td>xxx</td>
                      <td>第一次月考</td>
                      <td>已批阅</td>
                      <td>2024-12-1 12:11</td>
                      <td>
                        <el-button type="primary" plain>查看</el-button>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup>
import { Delete, Download, Edit, Handbag, Plus, Search, TakeawayBox, Upload } from '@element-plus/icons-vue';


</script>

<style lang="scss" scoped>

.backBox{
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-sizing: border-box;
  padding:30px;
  
}
.bigBox{
  // margin-top:10px;
  min-height: 400px;
  min-width: 320px;
  box-sizing: border-box;
  // padding:30px;
  // background-color: #fff;

  .nav{
    font-size:20px;
    min-width: 320px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-weight: bold;
    // line-height: 40px;
    border-bottom: 1px solid #c4c4c4;
    padding-bottom: 15px;

    .left{
      height: 50px;
    }

    .right{
      max-height: 100px;
      min-width: 700px;
      display: flex;
      flex-wrap: wrap;
    }
  }

  .paper{

    .top{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top:20px;
  
      .searchInput{
        display: flex;
        align-items: center;
        height: 60px;
        justify-content: flex-start;
        // margin-top:20px;
      }

      .button{
        display: flex;
        height: 60px;
        justify-content: flex-end;
        margin-right: 20px;
      }
    }

    .bottom{
      // margin-top:20px;
  
      table{
          width: 100%;
          border-collapse:collapse;
          // border-top:1px solid #c4c4c4;
  
          tr{
              height: 60px;
          }
      }
  
      table,tr,td{
          border-bottom:1px solid #ebeffe;
          text-align: center;
      }
    }
  }

 
}
</style>