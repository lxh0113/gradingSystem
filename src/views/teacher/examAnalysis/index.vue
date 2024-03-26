<template>
  <div class="wow fadeInRight backBox">
    <!-- <div class="title">
      考情分析
    </div> -->
    <div class="chart">
      <div class="firstChart">
        
      </div>
      <div class="secondChart">
      
      </div>
    </div>
  </div>
</template>


<script setup>
import {onMounted,onUnmounted,getCurrentInstance,ref} from 'vue'
import { generateExamAnalysisClass } from '../../../mock/teacher/examAnalysis.js';
import { ElMessage } from 'element-plus';
import { getMaxMinAveAPI } from '@/apis/exam.js'

const classScoreList=ref([])
let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts
const setChart=()=>{
  const dom1 = document.querySelector('.firstChart');
  const myChart1 = echarts.init(dom1);
  const dom2 = document.querySelector('.secondChart');
  const myChart2 = echarts.init(dom2);
  // 指定图表的配置项和数据
  var option1 = {
    title: {
      text: '班级历史平均分成绩分布'
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
      text: '各班级历史平均分成绩分布'
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
        name: '二班',
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
        name: '三班',
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
  window.addEventListener('resize',()=>{
    myChart1.resize()
    myChart2.resize()
  })

  onUnmounted(() => {
      myChart1.dispose();
      myChart2.dispose()
  });
}

const getPapers=async()=>{
  const res=await getMaxMinAveAPI(1);
  ElMessage.success("获取成功")
}

onMounted(()=>{
  setChart()
  getPapers()
})

</script>

<style lang="scss" scoped>
.backBox{
  width: 100%;
  height: 100%;
  // background-color: #fff;
  transition: all .5s;

  .title{
    font-size: 20px;
    line-height: 50px;
    margin-left: 10px;
    color:#3a63f3;
    
  }

  .chart{
    display: flex;
    width: 100%;
    flex-direction: column;
    // background-color: antiquewhite;
    height: 100%;
    // flex-wrap: wrap;

    .firstChart,.secondChart{
      flex:1;
      background-color: #fff;
      min-width: 400px;
      margin-right: 10px;
      margin-bottom: 10px;
      min-height: 420px;
      box-sizing: border-box;
      padding:20px;

      transition: all .5s;
    }
  }

}
</style>