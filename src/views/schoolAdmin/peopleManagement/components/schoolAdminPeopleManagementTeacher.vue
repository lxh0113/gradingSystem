<template>
    <div class="bigBox">
      <div class="top">
          <div class="searchInput">
              <el-input style="max-width: 300px;height:40px;" :prefix-icon="Search" placeholder="搜索id或者姓名"></el-input>
          </div>
          <div class="button">
            <el-button size="large" :icon="Download">导入</el-button>
            <el-button size="large" :icon="Upload">导出</el-button>
            <el-button size="large" :icon="Plus">添加</el-button>
            <el-button size="large" :icon="Delete">删除</el-button>
            <el-button size="large" :icon="Edit">编辑</el-button>
        </div>
      </div>
      <div class="bottom">
          <table>
              <thead>
                  <tr>
                      <td>
                          <el-checkbox size="large" />
                      </td>
                      <td>id</td>
                      <td>姓名</td>
                      <td>任教</td>
                      
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td><el-checkbox size="large" /></td>
                      <td>11111</td>
                      <td>xxx</td>
                      <td>初二三班……</td>
                      
                  </tr>
              </tbody>
          </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Delete, Download, Edit, Plus, Search, Upload } from '@element-plus/icons-vue';
  
  </script>
  
  <style lang="scss" scoped>
  .bigBox{
      box-sizing: border-box;
      width: 100%;
  
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
          margin-top:20px;
  
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
  </style>