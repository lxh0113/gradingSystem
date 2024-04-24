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
                      <td>李寻欢</td>
                      <td>大一一班</td>
                  </tr>

                  <tr>
                      <td><el-checkbox size="large" /></td>
                      <td>11112</td>
                      <td>李人间</td>
                      <td>大一三班</td>
                  </tr>

                  <tr>
                      <td><el-checkbox size="large" /></td>
                      <td>11113</td>
                      <td>蒋道路</td>
                      <td>大一四班</td>
                  </tr>

                  <tr>
                      <td><el-checkbox size="large" /></td>
                      <td>11114</td>
                      <td>赵一一</td>
                      <td>大一无班</td>
                  </tr>

                  <tr>
                      <td><el-checkbox size="large" /></td>
                      <td>11115</td>
                      <td>王三三</td>
                      <td>大二三班</td>
                  </tr>

                  <tr>
                      <td><el-checkbox size="large" /></td>
                      <td>11116</td>
                      <td>钱羽羽</td>
                      <td>大三三班</td>
                  </tr>

                  <tr>
                      <td><el-checkbox size="large" /></td>
                      <td>11117</td>
                      <td>欧阳星星</td>
                      <td>大二三班</td>
                  </tr>

                  <tr>
                      <td><el-checkbox size="large" /></td>
                      <td>11118</td>
                      <td>周五五</td>
                      <td>大三三班</td>
                  </tr>

                  <tr>
                      <td><el-checkbox size="large" /></td>
                      <td>11119</td>
                      <td>廖萨萨</td>
                      <td>大四三班</td>
                  </tr>
              </tbody>
          </table>

          
      </div>

      <div class="page">
         <el-pagination prev-text="上一页" next-text="下一页" :page-size="2" :pager-count="11" layout="prev, pager, next"  :total="8" />
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

      .page{
        margin-top: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
  }
  </style>