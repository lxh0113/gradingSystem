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
            <el-select placeholder="试卷状态" size="large" style="width: 150px;margin-right:30px;" ></el-select>
            <el-select placeholder="年级" size="large" style="width: 150px;margin-right:30px;" ></el-select>
            <el-select placeholder="班级" size="large" style="width: 150px;margin-right:30px;" ></el-select>
          </div>
      </div>
      <div class="bottom">
        <table>
              <thead>
                  <tr>
                      <td>
                          <el-checkbox size="large" />
                      </td>
                      <td>学号</td>
                      <td>姓名</td>
                      <td>批阅老师</td>
                      <td>考试场次</td>
                      <td>时间</td>
                      <td>操作</td>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>
                        <el-checkbox size="large" />
                      </td>
                      <td>2022111111</td>
                      <td>xxx</td>
                      <td>xxx</td>
                      <td>第一次月考</td>
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
  min-height: 760px;
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