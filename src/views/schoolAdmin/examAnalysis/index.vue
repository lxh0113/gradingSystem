<template>
  <div class="bigBox">
    <div class="top">
      <div class="topLeft">

      </div>
      <div class="topRight">
        <div class="select">
          <el-select size="large" @change="setChartData2" style="width: 200px;" v-model="currentClass" placeholder="请选择班级">
            <el-option v-for="item in classList" :label="item.name" :value="item.id" />
          </el-select>
        </div>
        <div class="topRightChart">

        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom">
        <el-select size="large" @blur="setChartData3" v-model="currentExamList" multiple clearable collapse-tags placeholder="请选择考试" popper-class="custom-header" :max-collapse-tags="1" style="width: 240px">
          <template #header>
            <el-checkbox v-model="checkAll" :indeterminate="indeterminate" @change="handleCheckAll">
              All
            </el-checkbox>
          </template>
          <el-option v-for="item in examList" :key="item.id" :label="item.title" :value="item.id"/>
        </el-select> 
        <div class="bottomChart">

        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import {onMounted,onUnmounted,getCurrentInstance,ref,watch} from 'vue'
import { getHistoryTestDetailsAPI,getExamDetailsByTestIdAPI,getAClassDetailsAPI,schoolAdminGetExamByIdsAPI,getAllClassAPI,getAllExamAPI } from "@/apis/exam.js"
import { useUserStore } from '@/stores/userStore';
import { ElMessage } from 'element-plus';

let checkAll = ref(false);
let indeterminate = ref(false);

const classList=ref([])
const currentClass=ref('')
const examList=ref([])
const currentExamList=ref([])


watch(currentExamList, (val) => {
  if (val.length === 0) {
    checkAll.value = false;
    indeterminate.value = false;
  } else if (val.length === examList.value.length) {
    checkAll.value = true;
    indeterminate.value = false;
  } else {
    indeterminate.value = true;
  }
});

const handleCheckAll = (val) => {
  indeterminate.value = false;
  if (val) {
    currentExamList.value = examList.value.map((item) => item.value);
  } else {
    currentExamList.value = [];
  }
};


const userStore=useUserStore()

let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts

let chartData1=ref({
  title: {
      text: '班级历史平均分成绩分布'
    },
    dataZoom: [{
      type: 'slider', //1平移 缩放
      throttle: '50', //设置触发视图刷新的频率。单位为毫秒（ms）。
      minValueSpan: 6, //用于限制窗口大小的最小值,在类目轴上可以设置为 5 表示 5 个类目
      start: 1, //数据窗口范围的起始百分比 范围是：0 ~ 100。表示 0% ~ 100%。
      end: 50, //数据窗口范围的结束百分比。范围是：0 ~ 100。
      zoomLock: false, //如果设置为 true 则锁定选择区域的大小，也就是说，只能平移，不能缩放。
    }],
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
      data: []
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
      }
    ]
})
let chartData2=ref({
    title: {
      text: '各班级历史成绩分布'
    },
    dataZoom: [{
      type: 'slider', //1平移 缩放
      throttle: '50', //设置触发视图刷新的频率。单位为毫秒（ms）。
      minValueSpan: 6, //用于限制窗口大小的最小值,在类目轴上可以设置为 5 表示 5 个类目
      start: 1, //数据窗口范围的起始百分比 范围是：0 ~ 100。表示 0% ~ 100%。
      end: 50, //数据窗口范围的结束百分比。范围是：0 ~ 100。
      zoomLock: false, //如果设置为 true 则锁定选择区域的大小，也就是说，只能平移，不能缩放。
    }],
    grid:{
      top:"60px",
      left:"0px",
      right:"0px",
      bottom:"0px",
      containLabel:true
    },
    legend:{

    },
    color:['#63b2ee','#76da91','#f8cb7f','#f89588','#7cd6cf','#9192ab','#7898e1'
    ,'#efa666','#eddd86','#9987ce','#63b2ee','#76da91'],
    tooltip: {},
    xAxis: {
      data: []
    },
    yAxis: {},
    series: [
      {
        name: '最低分',
        type: 'bar',
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
      },
      {
        name: '平均分',
        type: 'bar',
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
      },
      {
        name: '最高分',
        type: 'bar',
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
let chartData3=ref({
    title: {
      text: '各班级历史成绩分布'
    },
    dataZoom: [{
      type: 'slider', //1平移 缩放
      throttle: '50', //设置触发视图刷新的频率。单位为毫秒（ms）。
      minValueSpan: 6, //用于限制窗口大小的最小值,在类目轴上可以设置为 5 表示 5 个类目
      start: 1, //数据窗口范围的起始百分比 范围是：0 ~ 100。表示 0% ~ 100%。
      end: 50, //数据窗口范围的结束百分比。范围是：0 ~ 100。
      zoomLock: false, //如果设置为 true 则锁定选择区域的大小，也就是说，只能平移，不能缩放。
    }],
    grid:{
      top:"60px",
      left:"0px",
      right:"0px",
      bottom:"0px",
      containLabel:true
    },
    legend:{

    },
    color:['#9987ce', '#eddd86', '#efa666', '#7898e1', '#9192ab', '#7cd6cf', '#f89588', '#f8cb7f', '#76da91', '#63b2ee'],
    tooltip: {},
    xAxis: {
      data: []
    },
    yAxis: {},
    series: [
      {
        name: '最低分',
        type: 'bar',
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
    ]})

const setChartData1=async()=>{
  
  console.log(userStore.user.account)
  const res=await getHistoryTestDetailsAPI(18734840)

  if(res.data.code===200)
  {

    console.log(res.data.data)
    chartData1.value.xAxis.data=res.data.data.map((item)=>{
      return item.title
    })

    chartData1.value.series=res.data.data[0].classScoreList.map((item)=>{
      return {
        name: item.name,
        type: 'line',
        data: [],
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
    })

    console.log(chartData1.value.series)

    for(let i=0;i<chartData1.value.series.length;i++)
    {
      chartData1.value.series[i].data=res.data.data.map(item=>{
        if(item&&item.classScoreList&&item.classScoreList[i]&&item.classScoreList[i].avgScore)
          return item?.classScoreList[i]?.avgScore
        else return 0
      })
    }

    setChart()
  }
  else {
    ElMessage.error(res.data.message)
  }
}

const setChartData2=async()=>{

  // alert(currentClass.value)
  const res=await getAClassDetailsAPI(currentClass.value)

  if(res.data.code===200)
  {

    console.log(res.data.data)
    chartData2.value.xAxis.data=res.data.data.map(item=>{
      return item.examName
    })

    chartData2.value.series[0].data=res.data.data.map(item=>{
      return item.minScore
    })

    chartData2.value.series[1].data=res.data.data.map(item=>{
      return item.avgScore
    })

    chartData2.value.series[2].data=res.data.data.map(item=>{
      return item.maxScore
    })

    setChart()
  }
  else {
    ElMessage.error(res.data.message)
  }
}

const setChartData3=async()=>{

  // alert(currentExamList.value);
  if(currentExamList.value.length<=0) return 
  console.log(currentExamList.value)
  let data={
    teacherAccount:userStore.getUserInfo().account,
    examIds:currentExamList.value
  }

  const res=await schoolAdminGetExamByIdsAPI(data);

  if(res.data.code===200)
  {
    console.log(res.data.data)

    chartData3.value.xAxis.data=res.data.data.map(item=>{
      return item.title
    })

    chartData3.value.series=res.data.data[0].classScoreList.map(item=>{
      return {
        name: item.name,
        type: 'bar',
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
    })

    for(let i=0;i<chartData3.value.series.length;i++)
    {
      chartData3.value.series[i].data=res.data.data.map(item=>{
        return item.classScoreList[i]?.avgScore||0
      })
    }

    setChart()
    
  }
  else {
    ElMessage.error(res.data.message)
  }
  
}

const getAllClass=async()=>{
  const res=await getAllClassAPI(userStore.getUserInfo().account);

  if(res.data.code===200)
  {
    console.log(res.data.data)
    classList.value=res.data.data
    currentClass.value=classList.value[0].id
  }
  else {
    ElMessage.error(res.data.message)
  }
}

const getAllExam=async()=>{
  const res=await getAllExamAPI(userStore.getUserInfo().account);
  console.log(res.data.data)
  examList.value=res.data.data
  currentExamList.value=examList.value.map(item=>{
    return item.id
  })
}

const initChart=async()=>{
  setChartData1()

  await getAllClass();
  setChartData2()

  await getAllExam()
  setChartData3()
}

const setChart=()=>{
  const dom1 = document.querySelector('.topLeft');
  const myChart1 = echarts.init(dom1);

  const dom2 = document.querySelector('.topRightChart');
  const myChart2 = echarts.init(dom2);

  const dom3 = document.querySelector('.bottomChart');
  const myChart3 = echarts.init(dom3);


  // 指定图表的配置项和数据
  var option1 = chartData1.value

  var option2 = chartData2.value

  var option3 = chartData3.value

  
  // 使用刚指定的配置项和数据显示图表。
  myChart1.setOption(option1);
  myChart2.setOption(option2)
  myChart3.setOption(option3);

  window.addEventListener('resize',()=>{
    myChart1.resize()
    myChart2.resize()
    myChart3.resize()
  })

  onUnmounted(() => {
      myChart1.dispose();
      myChart2.dispose()
      myChart3.dispose();
  });
}


onMounted(()=>{
  setChart()

  initChart()
})
</script>

<style lang="scss" scoped>
.bigBox{
  // background-color: #fff;
  box-sizing: border-box;
  width: 100%;
  //min-height: 860px;
  display: flex;
  flex-direction: column;

  .top,
  .bottom{
    margin-right: 10px;

    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(400px,1600px));

    .bottom{
      height: 540px;
      background-color: #fff;
      margin-right: 10px;
      margin-bottom: 10px;
      box-sizing: border-box;
      padding:30px;
      display: flex;
      // margin-right: 10px;
      flex-direction: column;

      .bottomChart{
        margin-top:20px;
        margin-right: 10px;
        // background-color: aqua;
        flex:1;
      }
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
      // padding:30px;
      padding-left: 30px;
      padding-right: 30px;
      padding-bottom: 30px;
      display: flex;
      flex-direction: column;
      // background-color: antiquewhite;

      .select{
        margin-top:20px;
      }

      .topRightChart{
        margin-top:10px;
        // background-color: aqua;
        flex:1;
      }
    }

  }

  // padding:30px;


}
</style>