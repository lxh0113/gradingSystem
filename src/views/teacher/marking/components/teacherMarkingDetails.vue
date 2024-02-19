<template>
  <div class="bigBox">
    <div class="top">
      <div class="name">xx市第一次模拟试题</div>
      <div class="subject">语文</div>
    </div>
    <div class="center">
      <el-select class="m-2" placeholder="班级" size="large" style="width: 240px;" ></el-select>
      <el-select class="m-2" placeholder="批改状态" size="large" style="width: 240px;margin-left:30px;" ></el-select>
      <el-select class="m-2" placeholder="分数段" size="large" style="width: 240px;margin-left:30px;" ></el-select>
    </div>
    <div class="bottom">
      <table>
        <thead>
          <tr>
            <td>试卷编号</td>
            <td>科目</td>
            <td>分数</td>
            <td>评语</td>
            <td>批阅状态</td>
            <td>时间</td>
            <td>操作</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20041524</td>
            <td>语文</td>
            <td class="score">85</td>
            <td>出雕塑品和via成都v和比赛于不是阿凡达和</td>
            <td>已批阅</td>
            <td>2024-1-4 12：12</td>
            <td>
              <span>批阅</span>
              <span>查看</span>
            </td>
          </tr>

          <tr>
            <td>20041524</td>
            <td>语文</td>
            <td class="score">---</td>
            <td>暂无</td>
            <td>正在批阅</td>
            <td>---------</td>
            <td>
              <span>批阅</span>
              <span>查看</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.bigBox{
  margin-top:20px;

  .top{
    display: flex;
    justify-content: flex-start;
    font-size:19px;
    color:#3a63f3;

    .name{
      text-decoration: underline;
      
    }

    .subject{
      margin-left:30px;
      font-weight: bold;
    }
  }

  .center{
    display: flex;
    margin-top:20px;
    justify-content: left;
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

        td{
          flex:1;
          text-align: center;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          -o-text-overflow:ellipsis;
        }

        .score{
          color:#ce6509;
          font-size: 18px;
        }

        td:nth-child(7){
          display: flex;
          justify-content: space-evenly;

          span:nth-child(1){
            color:#3a63f3;
          }
        }
      }

      
    }
    
  }
}
</style>