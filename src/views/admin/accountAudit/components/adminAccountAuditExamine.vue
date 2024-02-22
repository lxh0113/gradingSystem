<template>
    <div class="bigBox">
        <div class="conditionSearch">
            <el-input style="max-width: 250px;height:40px;" :prefix-icon="Search" placeholder="按名称搜索"></el-input>
            <el-input style="max-width: 250px;height:40px;margin-left:30px;" :prefix-icon="Search" placeholder="搜索电话"></el-input>
            <el-select class="m-2" placeholder="审核状态" size="large" style="width: 240px;margin-left:30px;" ></el-select>
        </div>
        <div class="bottom">
            <table>
                <thead>
                <tr>
                    <td class="radioTd"><input type="radio"></td>
                    <td>id</td>
                    <td>学校名称</td>
                    <td>注册者</td>
                    <td>联系电话</td>
                    <td>备注</td>
                    <td>注册时间</td>
                    <td>审核状态</td>
                    <td>操作</td>
                </tr>
                </thead>
                <tbody>
                  <tr>
                      <td class="radioTd"><input type="radio"></td>
                      <td>20041524</td>
                      <td>李小慧</td>
                      <td>13587458748</td>
                      <td>2024-1-4 12：12</td>
                      <td class="pass">审核通过</td>
                      <td>
                      <span>已处理</span>
                      </td>
                  </tr>
                  <tr>
                      <td class="radioTd"><input type="radio"></td>
                      <td>20041524</td>
                      <td>裴雨孜</td>
                      <td>13587788748</td>
                      <td>2024-1-4 12：12</td>
                      <td class="fail">审核未通过</td>
                      <td>
                      <span>二次审核</span>
                      </td>
                  </tr>
                </tbody>
            </table>
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
            
             justify-content: space-between; /* 将这里的 justify-content 修改为 flex-start */
        }
    }
    .bottom{
    
    min-height: 200px;
    // background-color: pink;
    margin-top:10px;
    
    table{
      // background-color: #3a63f3;
      width: 100%;
      font-size: 16px;
      tr{
        display: flex;
        width: 100%;
        height: 60px;
        line-height: 60px;

        .radioTd{
            flex:0.2;
        }

        td{
          flex:1;
          text-align: center;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          -o-text-overflow:ellipsis;
        }



        .pass{
            color: #61B51D;
        }

        .audit{
            color: #476DF4;
        }

        .fail{
          color:#F54747;
        }

        td:nth-child(9){
          display: flex;
          justify-content: space-evenly;

          span:nth-child(1){
            color:#3a63f3;
          }
        }
      }

      
    }
    
  }
  .bigBox{
    margin-left: 30px;
  }
</style>