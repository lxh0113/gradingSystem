<template>
  <div class="backBox">
    <div class="top">
      <span>学情分析</span>
    </div>
    <div class="details">
      <div class="chart1">
      </div>
      <div class="chart2">
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted,onUnmounted,getCurrentInstance,ref} from 'vue'

let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts

const setChart=()=>{
  const dom1 = document.querySelector('.chart1');
  const myChart1 = echarts.init(dom1);

  const dom2 = document.querySelector('.chart2');
  const myChart2 = echarts.init(dom2);

  // 指定图表的配置项和数据
  var option1 = {
    title: {
      text: '裴雨孜成绩历次分布'
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
        name: '裴雨孜',
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
      }
    ]
  };

  var option2 = {
    title: {
      text: '裴雨孜成绩评定状况'
    },
    legend:{

    },
    color:['#748eed','#91cc75','#fac858','#ee6666','#73c0de','#9a60b4',
            '#3ba272'],
    tooltip: {},
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
          value: 89,
          name: '优秀'
        },
        {
          value: 87,
          name: '良好'
        },
        {
          value: 23,
          name: '及格'
        },
        {
          value: 14,
          name: '不及格'
        }
      ],
      // roseType: 'area'
    }
  ]
  };
  
  // 使用刚指定的配置项和数据显示图表。
  myChart1.setOption(option1);
  myChart2.setOption(option2)

  window.addEventListener('resize',()=>{
    // alert(1)
    myChart1.resize()
    myChart2.resize()
  })

  onUnmounted(() => {
      myChart1.dispose();
      myChart2.dispose()
  });
}

onMounted(()=>{
  setChart()
})
</script>

<style lang="scss" scoped>
.backBox{
  box-sizing: border-box;
  padding:30px;
  width: 100%;
  min-height: 760px;
  background-color: #fff;

  .top{
    border-bottom: 1px solid #c4c4c4;

    span{
      display: block;
      font-size: 20px;
      font-weight: bold;
      padding-bottom:20px;
    }
  }

  .details{
    width: 100%;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(480px,700px));
    gap:10px;

    .chart1,.chart2{
      height: 500px;
      // background-color: aqua;
      // margin-right: 10px;
      // margin-bottom: 10px;
    }
  }
}
</style>