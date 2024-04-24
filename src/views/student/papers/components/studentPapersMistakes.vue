<template>
    <div class="bigBox">
      <div class="conditionSearch">
        <el-button :icon="Delete" size="large">
          删除
        </el-button>
        <!-- <el-button :icon="Delete" size="large">
          查看我的错题记录
        </el-button> -->
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
            <tr>
              <td>
                <el-checkbox size="large" />
              </td>
              <td>
                操作系统第一次测试
              </td>
              <td>
                串联文件适合于什么存取？
              </td>
              <td>
                A
              </td>
              <td>B</td>
              <td>
                3
              </td>
            </tr>

            <tr>
              <td>
                <el-checkbox size="large" />
              </td>
              <td>
                操作系统第一次测试
              </td>
              <td>
                信号量的值？
              </td>
              <td>
                A
              </td>
              <td>D</td>
              <td>
                3
              </td>
            </tr>

            <tr>
              <td>
                <el-checkbox size="large" />
              </td>
              <td>
                操作系统第一次测试
              </td>
              <td>
                某页式管理系统中，地址寄存器的低9位表示页内地址，则页面大小？
              </td>
              <td>
                A
              </td>
              <td>C</td>
              <td>
                3
              </td>
            </tr>

            <tr>
              <td>
                <el-checkbox size="large" />
              </td>
              <td>
                操作系统第一次测试
              </td>
              <td>
                进程的同步与互斥是由于程序的什么引起的？
              </td>
              <td>
                A
              </td>
              <td>D</td>
              <td>
                3
              </td>
            </tr>

            <tr>
              <td>
                <el-checkbox size="large" />
              </td>
              <td>
                操作系统第一次测试
              </td>
              <td>
                进程的同步与互斥是由于程序的什么引起的？
              </td>
              <td>
                A
              </td>
              <td>D</td>
              <td>
                3
              </td>
            </tr>

            <tr>
              <td>
                <el-checkbox size="large" />
              </td>
              <td>
                操作系统第二次测试
              </td>
              <td>
                飞机定票系统是一个（ ）
              </td>
              <td>
                C
              </td>
              <td>A</td>
              <td>
                3
              </td>
            </tr>

            <tr>
              <td>
                <el-checkbox size="large" />
              </td>
              <td>
                操作系统第二次测试
              </td>
              <td>
                操作系统中，被调度和分派资源的基本单位，并可独立执行的实体是（ ）
              </td>
              <td>
                A
              </td>
              <td>C</td>
              <td>
                3
              </td>
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


      td:nth-child(3)
      {
        max-width: 300px;
        text-overflow: ellipsis;
        overflow: hidden;
        word-break: break-all;
        white-space: nowrap;
      }

      td:nth-child(4)
      {
        color:#3A63F3;
        font-weight: bold;
      }

      td:nth-child(5)
      {
        color:red;
        font-weight: bold;
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
        margin-top: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
  }
  </style>