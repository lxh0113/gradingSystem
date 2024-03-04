<template>
  <div class="wow fadeInRight backBox">
    <div class="top">
      <div class="title">
        软件一班
      </div>
      <div class="operation">
        <el-button icon="Plus">添加</el-button>
        <el-button icon="Delete">删除</el-button>
        <el-button icon="Edit">修改</el-button>
        
      </div>
    </div>
    <div class="list">
      <div class="search">
        <el-input style="max-width:240px;" size="large" :prefix-icon="Search" placeholder="请输入学号或姓名"></el-input>
      </div>
      <table>
        <thead>
          <tr>
            <td>
              <el-checkbox label="全选" size="large" />
            </td>
            <td>
              学号
            </td>
            <td>姓名</td>
            <td>头像</td>
            <td>邮箱</td>
            <td>操作</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <el-checkbox size="large" />
            </td>
            <td>2022401111</td>
            <td>李泽言</td>
            <td>
              <img class="avatar" src="@/assets/avatar.jpeg" alt="">
            </td>
            <td>
              123456@qq.com
            </td>
            <td>
              <el-button>
                查看
              </el-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { Plus,Delete,Edit, Search } from '@element-plus/icons-vue';

</script>

<style lang="scss" scoped>
.backBox{
  width: 100%;
  height: 100%;
  background-color: #fff;

  .top{

    display: flex;
    justify-content: space-between;

    .title{
      line-height: 60px;
      font-size: 20px;
      color:#3a63f3;
      margin-left: 20px;
    }

    .operation{
      display: flex;
      justify-content: right;
      align-items: center;
      margin-right: 20px;
    }

  }

  .list{
    // background-color: antiquewhite;
    width: 100%;
    height: 100%;

    .search{
      width: 100%;
      height: 80px;
      // background-color: #3a63f3;
      box-sizing: border-box;
      padding:20px
    }

    table{
      // border:1px solid #eceffe;
        border-radius: 10px;
        border-collapse: collapse;
        box-sizing: border-box;
        margin-left: 20px;
        margin-right: 20px;
        width: 95%;

        tr:first-child{
          td{
            display: flex;
            justify-content: left;
          }
        }

        tr{
          display: flex;
          justify-content: space-between;
          height: 80px;
          line-height: 80px;
          border-bottom:1px solid #eceffe;
          margin-left: 20px;
          margin-right: 20px;

          td:nth-child(-n+5){
            flex:1;
            display: flex;
            justify-content: left;
            align-items: center;
            
            text-overflow: ellipsis;
            overflow: hidden;
            word-break: break-all;
            white-space: nowrap;

            .avatar{
              width: 50px;
              height: 50px;
              border-radius: 50%;
            }
          }
          
          td:last-child{
            display: flex;
            align-items: center;
            width: 100px;
          }
        }
    }
  }
}
</style>