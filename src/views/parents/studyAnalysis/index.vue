<template>
  <div class="backBox">
    <div class="top">
      <span>学情分析</span>
    </div>
    <div class="chooseChildren">
      <el-select @change="initChart" v-model="currentChildren" size="large" style="width: 200px" placeholder="请选择孩子">
        <el-option v-for="item in childrenList" :key="item" :v-else="item.name" :value="item.name" />
      </el-select>
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
import { studentGetHistoryExamAPI,studentGetScoreStageAPI } from '@/apis/exam.js'
import { useUserStore } from '@/stores/userStore';
import { ElMessage } from 'element-plus';
import { parentsGetAllChildrenAPI } from '@/apis/user';

const userStore=useUserStore()
let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts

const childrenList=ref([])
const currentChildren=ref('')

const currentId=ref(0)

const chartData1=ref({
    title: {
      text: currentChildren.value+'成绩历次分布'
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
        name: currentChildren.value,
        type: 'line',
        data: [],
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
  })
const chartData2=ref({
    title: {
      text: currentChildren.value+'成绩评定状况'
    },
    legend:{
      orient: "vertical",//图例的布局，水平布局、垂直布局
      type:'scroll',//是否添加滚动页码
      right:15,
      top:'middle',
      icon:'circle',
      itemWidth: 8,//图例宽度
      itemHeight: 8,//图例高度
      textStyle: {//图例字体样式
          color: "#000",
          fontSize: 14,
          fontFamily: "微软雅黑"
      }

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
      ],
      itemStyle:{
        normal:{
            label:{
                show: true,
                formatter: '{b} : ({d}%)'//显示格式
            },
            labelLine :{show:true}
        }
      }
      // roseType: 'area'
    }
  ]
  })

const setChart=()=>{
  const dom1 = document.querySelector('.chart1');
  const myChart1 = echarts.init(dom1);

  const dom2 = document.querySelector('.chart2');
  const myChart2 = echarts.init(dom2);

  // 指定图表的配置项和数据
  var option1 = chartData1.value;

  var option2 = chartData2.value;
  
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

const initChart=async()=>{

  console.log(currentChildren.value)
  for(let i=0;i<childrenList.value.length;i++)
  {
    if(childrenList.value[i].name===currentChildren.value) 
    {
      currentId.value=childrenList.value[i].account
    }
  }

  let res=await studentGetHistoryExamAPI(currentId.value)

  if(res.data.code===200)
  {
    console.log(res.data.data)

    chartData1.value.xAxis.data=res.data.data.map(item=>{
      return item.examName
    })

    chartData1.value.series[0].data=res.data.data.map(item=>{
      return item.score
    })
  }
  else {
    ElMessage.error(res.data.message)
  }

  res=await studentGetScoreStageAPI(currentId.value)
  
  if(res.data.code===200)
  {
    console.log(res.data.data)

    chartData2.value.series[0].data=res.data.data.map(item=>{
      return {
          value: item.value,
          name: item.name
        }
    })
  }
  else {
    ElMessage.error(res.data.message)
  }

  setChart()
}

const setChildrenList=async()=>{
  const res=await parentsGetAllChildrenAPI(userStore.getUserInfo().account);

  if(res.data.code===200)
  {
    childrenList.value=res.data.data
    currentChildren.value=res.data.data[0].name
  }
  else ElMessage.error(res.data.message)
}

onMounted(async()=>{

  await setChildrenList()

  await initChart()

  // currentChildren.value=childrenList?.value[0]?.name
  // setChart()
  
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

  .chooseChildren{
    margin-top:20px;
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