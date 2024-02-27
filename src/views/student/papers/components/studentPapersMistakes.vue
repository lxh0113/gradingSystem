<template>
    <div class="bigBox">
      <div class="conditionSearch">
        <el-button :icon="Delete" size="large">
          删除
        </el-button>
      </div>
      <div class="details">
        <table>
          <thead>
            <td>
              <el-checkbox size="large" />
            </td>
            <td>
              考试名称
            </td>
            <td>
              题目
            </td>
            <td>
              我的答案
            </td>
            <td>
              正确答案
            </td>
            <td>
              分数
            </td>
          </thead>
          <tbody>
            <td>
              <el-checkbox size="large" />
            </td>
            <td>
              xx市第一次模拟测试
            </td>
            <td>
              ……
            </td>
            <td>
              B
            </td>
            <td>A</td>
            <td>
              5
            </td>
          </tbody>
        </table>
      </div>
      <!-- <div class="page">
        <el-pagination prev-text="上一页" next-text="下一页" :page-size="20" :pager-count="11" layout="prev, pager, next"  :total="1000" />
      </div> -->
    </div>
  </template>
  
  <script setup>
  import { Delete, Search } from '@element-plus/icons-vue';
  
  
  
  </script>
  
  <style lang="scss" scoped>
  .bigBox{
    margin-top:20px;
  
    .conditionSearch{
      color:#3A63F3;
      display: flex;
      // justify-content: right;
    }
  
    .details {
      // background-color: pink;
      
      margin-top: 20px;
      width: 100%;
      // display: flex;
      // grid-template-columns: 1fr;
      // gap:20px;
      // min-height: 600;

      table{
        width: 100%;
        border-collapse: collapse;

        tr,td{
          height: 60px;
          line-height: 60px;
        }
      }

      table,tr,td{
        border-bottom: 1px solid #ebeffe;
        text-align: center;
        
      }
     
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

    li{
        list-style: none;
        line-height: 50px;
        font-size:18px;
    }

    
    }

    .page{
        display: flex;
        justify-content: center;
        align-items: center;
    }
  }
  </style>