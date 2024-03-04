<template>
  <div class="wow fadeInRight backBox">
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
              <span>最高分</span>
              <span class="down">95</span>
            </div>
            <div>
              <span>平均分</span>
              <span class="down">85.33</span>
            </div>
            
          </div>
          <div class="operation">
            <span>去查看&nbsp;&nbsp;&gt;&gt;</span>
          </div>
        </div>
      </div>
      <div class="rightChart">
        
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
      <div class="button">
        
      </div>
    </div>
    <div class="paper">
      <router-view>
      </router-view>
    </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted,onUnmounted,getCurrentInstance,ref} from 'vue'

let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts
  


const setChart=()=>{
  const dom = document.querySelector('.rightChart');
  const myChart = echarts.init(dom);

  // 指定图表的配置项和数据
  var option = {
    title: {
      text: '阅卷图表'
    },
    color:'#748eed',
    tooltip: {},
    xAxis: {
      data: ['2024/1/1', '2024/1/2', '2024/1/3', '2024/1/4', '2024/1/5', '2024/1/6']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  };
  
  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);

  window.addEventListener('resize',()=>{
    myChart.resize()
  })

  onUnmounted(() => {
      myChart.dispose();
  });
}

const init=()=>{

}

onMounted(()=>{
  setChart()
})

</script>

<style lang="scss" scoped>

.backBox{
  width: 100%;
  min-height: 760px;
  // background-color: #fff;

  .top{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-betweens;
    // height: 360px;
    // background-color: pink;

    .left{
      flex:2;
      height: 360px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      margin-right: 10px;
      margin-bottom:10px;


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

    .rightChart{
      flex:1;
      margin-right: 10px;
      margin-bottom: 10px;
      height: 360px;
      min-width: 400px;
      background-color: #fff;
      box-sizing: border-box;
      padding:20px;
      // margin-left: 10px;
      
    }
  }
}
.bottom{
  // margin-top:10px;
  min-height: 400px;
  box-sizing: border-box;
  padding:30px;
  background-color: #fff;

  .nav{
    font-size:20px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    line-height: 40px;
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

    .button{
      margin: 0px;
    }
    
  }

 
}
</style>