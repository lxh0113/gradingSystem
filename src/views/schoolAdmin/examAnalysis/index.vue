<template>
  <div class="bigBox">
    <div class="top">
      <div class="topLeft">

      </div>
      <div class="topRight">

      </div>
    </div>
    <div class="bottom">
      <div class="bottomLeft">

      </div>
      <div class="bottomRight">

      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted,onUnmounted,getCurrentInstance,ref} from 'vue'

let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts


const setChart=()=>{
  const dom1 = document.querySelector('.topLeft');
  const myChart1 = echarts.init(dom1);

  const dom2 = document.querySelector('.topRight');
  const myChart2 = echarts.init(dom2);

  const dom3 = document.querySelector('.bottomLeft');
  const myChart3 = echarts.init(dom3);

  const dom4 = document.querySelector('.bottomRight');
  const myChart4 = echarts.init(dom4);


  // 指定图表的配置项和数据
  var option1 = {
    title: {
      text: '班级历史平均分成绩分布'
    },
    grid:{
      top:"60px",
      left:"0px",
      right:"0px",
      bottom:"0px",
      containLabel:true
    },
    legend:{

    },
    color:['#748eed','#91cc75','#fac858'],
    tooltip: {},
    xAxis: {
      data: ['第一次月考', '第二次月考', '第三次月考', '第四次月考', '第五次月考', '第六次月考']
    },
    yAxis: {},
    series: [
      {
        name: '一班',
        type: 'line',
        data: [60, 70, 67, 80, 77, 76],
        label: {
        show: false,
        position: 'top',
        textStyle: {
          fontSize: 14
        }
        },
        emphasis:{
          label:{
            show:true
          }
        }
      },
      {
        name: '二班',
        type: 'line',
        data: [80, 90, 65, 87, 100, 50],
        label: {
        show: false,
        position: 'top',
        textStyle: {
          fontSize: 14
        }
        },
        emphasis:{
          label:{
            show:true
          }
        }
      },
      {
        name: '三班',
        type: 'line',
        data: [50, 30, 70, 100, 82, 67],
        label: {
        show: false,
        position: 'top',
        textStyle: {
          fontSize: 14
        }
        },
        emphasis:{
          label:{
            show:true
          }
        }
      }
    ]
  };

  var option2 = {
    title: {
      text: '各班级历史成绩分布'
    },
    grid:{
      top:"60px",
      left:"0px",
      right:"0px",
      bottom:"0px",
      containLabel:true
    },
    legend:{

    },
    color:['#748eed','#91cc75','#fac858'],
    tooltip: {},
    xAxis: {
      data: ['第一次月考', '第二次月考', '第三次月考', '第四次月考', '第五次月考', '第六次月考']
    },
    yAxis: {},
    series: [
      {
        name: '最低分',
        type: 'bar',
        data: [60, 70, 67, 80, 77, 76],
        label: {
        show: true,
        position: 'top',
        textStyle: {
          fontSize: 14
        }
        },
        emphasis:{
          label:{
            show:true
          }
        }
      },
      {
        name: '平均分',
        type: 'bar',
        data: [80, 90, 65, 87, 100, 50],
        label: {
        show: true,
        position: 'top',
        textStyle: {
          fontSize: 14
        }
        },
        emphasis:{
          label:{
            show:true
          }
        }
      },
      {
        name: '最高分',
        type: 'bar',
        data: [50, 30, 70, 100, 82, 67],
        label: {
        show: true,
        position: 'top',
        textStyle: {
          fontSize: 14
        }
        },
        emphasis:{
          label:{
            show:true
          }
        }
      }
    ]
  };

  var option3 = {
    title: {
      text: '班级考试平均分最高图'
    },
    legend:{},
    color:['#748eed','#91cc75','#fac858','#ee6666','#73c0de','#9a60b4',
            '#3ba272'],
    grid:{
      top:"60px",
      left:"0px",
      right:"0px",
      bottom:"0px",
      containLabel:true
    },
    series: [
    {
      type: 'pie',
      data: [
        {
          value: 100,
          name: '一班'
        },
        {
          value: 200,
          name: '二班'
        },
        {
          value: 300,
          name: '三班'
        },
        {
          value: 400,
          name: '四班'
        },
        {
          value: 500,
          name: '五班'
        }
      ],
      roseType: 'area'
    }
  ]
  };

  var option4 = {
    title: {
      text: '各班级历史成绩分布'
    },
    grid:{
      top:"60px",
      left:"0px",
      right:"0px",
      bottom:"0px",
      containLabel:true
    },
    legend:{

    },
    color:['#748eed','#91cc75','#fac858'],
    tooltip: {},
    xAxis: {
      data: ['第一次月考', '第二次月考', '第三次月考', '第四次月考', '第五次月考', '第六次月考']
    },
    yAxis: {},
    series: [
      {
        name: '最低分',
        type: 'bar',
        data: [60, 70, 67, 80, 77, 76],
        label: {
        show: true,
        position: 'top',
        textStyle: {
          fontSize: 14
        }
        },
        emphasis:{
          label:{
            show:true
          }
        }
      },
      {
        name: '平均分',
        type: 'bar',
        data: [80, 90, 65, 87, 100, 50],
        label: {
        show: true,
        position: 'top',
        textStyle: {
          fontSize: 14
        }
        },
        emphasis:{
          label:{
            show:true
          }
        }
      },
      {
        name: '最高分',
        type: 'bar',
        data: [50, 30, 70, 100, 82, 67],
        label: {
        show: true,
        position: 'top',
        textStyle: {
          fontSize: 14
        }
        },
        emphasis:{
          label:{
            show:true
          }
        }
      }
    ]
  };
  
  // 使用刚指定的配置项和数据显示图表。
  myChart1.setOption(option1);
  myChart2.setOption(option2)
  myChart3.setOption(option3);
  myChart4.setOption(option4)

  window.addEventListener('resize',()=>{
    // alert(1)
    myChart1.resize()
    myChart2.resize()
    myChart3.resize()
    myChart4.resize()
  })

  onUnmounted(() => {
      myChart1.dispose();
      myChart2.dispose()
      myChart3.dispose();
      myChart4.dispose()
  });
}

const init=()=>{
  
}

onMounted(()=>{
  setChart()
})
</script>

<style lang="scss" scoped>
.bigBox{
  // background-color: #fff;
  box-sizing: border-box;
  width: 100%;
  min-height: 860px;
  display: flex;
  flex-direction: column;

  .top,
  .bottom{
    // flex:1;
    // height: 500px;
    // background-color: #fff;
    margin-right: 10px;
    margin-bottom: 10px;
    // box-sizing: border-box;
    // padding:20px;

    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(400px,800px));

    .bottomLeft{
      height: 500px;
      background-color: #fff;
      margin-right: 10px;
      margin-bottom: 10px;
      box-sizing: border-box;
      padding:30px;
    }

    .bottomRight{
      height: 500px;
      background-color: #fff;
      margin-right: 10px;
      margin-bottom: 10px;
      box-sizing: border-box;
      padding:30px;
    }
  }


  .top{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(400px,800px));

    .topLeft{
      height: 500px;
      background-color: #fff;
      margin-right: 10px;
      margin-bottom: 10px;
      box-sizing: border-box;
      padding:30px;
    }

    .topRight{
      height: 500px;
      background-color: #fff;
      margin-right: 10px;
      margin-bottom: 10px;
      box-sizing: border-box;
      padding:30px;
    }

  }

  // padding:30px;


}
</style>