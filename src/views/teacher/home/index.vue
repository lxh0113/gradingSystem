<template>
  <div class="backBox">
    <div class="top">
      <div class="left">
        <div class="papersStatus">
          <div class="title">
            <p>试&nbsp;&nbsp;卷&nbsp;&nbsp;状&nbsp;&nbsp;态</p>
          </div>
          <div class="details">
            <div>
              <span>已批阅</span>
              <span class=down>123</span>
            </div>
            <div>
              <span>未批阅</span>
              <span class="down">123</span>
            </div>
            <div>
              <span>总数</span>
              <span class="down">555</span>
            </div>
            
          </div>
          <div class="operation">
            <span>去批改&nbsp;&nbsp;&gt;&gt;</span>
          </div>
        </div>
        <div class="marked">
          <div class="title">
            <p>已&nbsp;&nbsp;批&nbsp;&nbsp;改&nbsp;&nbsp;</p>
          </div>
          <div class="details">
            <div>
              <span>已批阅</span>
              <span class=down>123</span>
            </div>
            <div>
              <span>未批阅</span>
              <span class="down">15题</span>
            </div>
            <div>
              <span>总数</span>
              <span class="down">85.33</span>
            </div>
            
          </div>
          <div class="operation">
            <span>去查看&nbsp;&nbsp;&gt;&gt;</span>
          </div>
        </div>
      </div>
      <div class="right">
        这个位置是待定的图表
      </div>
    </div>
    <div class="bottom">
      <div class="nav">
      <div class="left">
        试卷&nbsp;&nbsp;&nbsp;&gt;&gt;
        <router-link to="/teacher/home/on">
          进行中
        </router-link>
        <router-link to="/teacher/home/off">
          已结束
        </router-link>
      </div>
    </div>
    <div class="paper">
      <router-view>
      </router-view>
    </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>

.backBox{
  width: 100%;
  min-height: 760px;
  // background-color: #fff;

  .top{
    display: flex;
    justify-content: space-betweens;
    height: 360px;
    // background-color: pink;

    .left{
      flex:1;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      


      .papersStatus,.marked{
        flex:1;
        display: flex;
        box-sizing: border-box;
        padding:10px;
        background-color: #fff;

        .title{
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          // background-color: pink;
          // word-spacing: 20px;
          writing-mode: vertical-lr;
          
        }

        .details{
          flex:1;
          display: flex;
          justify-content: space-evenly;
          align-items: center;

          div{
            display: flex;
            flex-direction: column;
            font-size: 18px;

            .down{
              font-weight: bold;
              color:#3a63f3;
              font-size: 24px;
              margin-left: 50px;
              margin-top:20px;
            }
          }
          
        }

        .operation{
          width: 100px;
          // background-color: aquamarine;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          color:#3a63f3;
          font-size: 18px;

        }


      }

      .marked{
        flex:1;
        background: #fff;
        margin-top:10px;
      }
    }

    .right{
      width: 400px;
      background-color: aqua;
      margin-left: 10px;
    }
  }
}
.bottom{
  margin-top:10px;
  min-height: 400px;
  box-sizing: border-box;
  padding:30px;
  background-color: #fff;

  .nav{
    font-size:20px;
    font-weight: bold;
    border-bottom: 1px solid #c4c4c4;
    padding-bottom: 15px;

    a{
      color:#c4c4c4;
      text-decoration: none;
      margin-left: 30px;
      font-size:18px;
      font-weight: normal;
    }

    .router-link-active{
      text-decoration: underline;
      color:#3A63F3;
    }

    
  }

 
}
</style>