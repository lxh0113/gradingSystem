<template>
  <div class="bigBox">
    <div class="top">
      <div class="topLeft">

      </div>
      <div class="topRight">

      </div>
    </div>
    <div class="bottom">
      <div class="bottom">
        <el-select size="large" v-model="value" multiple clearable collapse-tags placeholder="请选择考试" popper-class="custom-header" :max-collapse-tags="1" style="width: 240px">
          <template #header>
            <el-checkbox v-model="checkAll" :indeterminate="indeterminate" @change="handleCheckAll">
              All
            </el-checkbox>
          </template>
          <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value"/>
        </el-select> 
        <div class="bottomChart">

        </div>
      </div>
      
    </div>
  </div>
</template>

<script setup>
import {onMounted,onUnmounted,getCurrentInstance,ref,watch} from 'vue'
import { getHistoryTestDetailsAPI } from "@/apis/exam.js"
import { useUserStore } from '@/stores/userStore';
import { ElMessage } from 'element-plus';

let checkAll = ref(false);
let indeterminate = ref(false);
let value = ref([]);
let cities = ref([
  {
    value: 'Beijing',
    label: 'Beijing',
  },
  {
    value: 'Shanghai',
    label: 'Shanghai',
  },
  {
    value: 'Nanjing',
    label: 'Nanjing',
  },
  {
    value: 'Chengdu',
    label: 'Chengdu',
  },
  {
    value: 'Shenzhen',
    label: 'Shenzhen',
  },
  {
    value: 'Guangzhou',
    label: 'Guangzhou',
  },
]);

watch(value, (val) => {
  if (val.length === 0) {
    checkAll.value = false;
    indeterminate.value = false;
  } else if (val.length === cities.value.length) {
    checkAll.value = true;
    indeterminate.value = false;
  } else {
    indeterminate.value = true;
  }
});

const handleCheckAll = (val) => {
  indeterminate.value = false;
  if (val) {
    value.value = cities.value.map((city) => city.value);
  } else {
    value.value = [];
  }
};


const userStore=useUserStore()

let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts

let chartData1=ref(null)
let chartData2=ref(null)
let chartData3=ref(null)

const setChartData1=async()=>{

  chartData1={
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
      }
    ]
  };
  
  console.log(userStore.user.account)
  const res=await getHistoryTestDetailsAPI(userStore.user.account)

  if(res.data.code===200)
  {
    chartData1.xAxis.data=res.data.data.map((item)=>{
      return item.title
    })

    chartData1.series=res.data.data.map((item)=>{
      return {
        name: '一班',
        type: 'line',
        data: item.classScoreList,
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

    setChart()
  }
  else {
    ElMessage.error(res.data.message)
  }
}

const setChartData2=()=>{
  
}

const setChartData3=()=>{

}

const initChart=()=>{
  // setChartData1()
  setChartData2()
  setChartData3()
}

const setChart=()=>{
  const dom1 = document.querySelector('.topLeft');
  const myChart1 = echarts.init(dom1);

  const dom2 = document.querySelector('.topRight');
  const myChart2 = echarts.init(dom2);

  const dom3 = document.querySelector('.bottomChart');
  const myChart3 = echarts.init(dom3);


  // 指定图表的配置项和数据
  var option1 = chartData1

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
      padding:30px;
    }

  }

  // padding:30px;


}
</style>