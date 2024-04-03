<template>
  <div class="wow fadeInRight backBox">
    <div class="title">
      学员列表
    </div>
    <div class="bottom">
      <div class="left">
        <div class="class" @click="classOneClick">
          <el-icon style="color:#3a63f3" size="large"><Folder /></el-icon>
          <span style="margin-left: 10px; cursor: pointer;">{{ classText }}</span>
        </div>
        <el-scrollbar height="600px">
          <router-link v-for="(item,index) in studentList" :key="item.id" :to="'/teacher/management/'+route.params.classId+'/'+index"  class="li">
            <el-icon style="margin-left:10px;color:#3a63f3"><Avatar /></el-icon>
            <span style="margin-left: 10px;">{{ item.name }}</span>
          </router-link>
        </el-scrollbar>
      </div>
      <div class="right" v-if="route.params.studentId==undefined">
        <div class="defaultBox">
          <div class="rightTitle">
                详情
            </div>
            <div class="chart">
            </div>
        </div>
      </div>
      <div class="right" v-else>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted,onUnmounted,ref,getCurrentInstance } from 'vue'; // Import ref from Vue
import { useRoute,useRouter } from 'vue-router';
import { useClassStore } from '@/stores/classStore';
import { getStudentsAPI } from '@/apis/student.js';
import { ElMessage } from 'element-plus';
import { getClassHistoryTestDataAPI } from '@/apis/exam.js'

const classText=ref('班级')
const router=useRouter()
const route=useRoute()
const classStore=useClassStore()
const chartData=ref({
      title: {
        text: '班级历史平均分成绩分布'
      },
      legend:{
      },
      color:['#748eed','#91cc75','#fac858'],
      tooltip: {},
      xAxis: {
        data: []
      },
      yAxis: {},
      series: [{
          name: '平均分',
          type: 'line',
          data: [],
          label: {
            show: true,
            position: 'top',
            textStyle: {
              fontSize: 14
            }
          }
      },
      {
          name: '最低分',
          type: 'line',
          data: [],
          label: {
            show: true,
            position: 'top',
            textStyle: {
              fontSize: 14
            }
          }
        },
        {
          name: '最高分',
          type: 'line',
          data: [],
          label: {
            show: true,
            position: 'top',
            textStyle: {
              fontSize: 14
            }
          }
        }
      ]
  });
let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts

const studentList=ref([])

const setChart=()=>{
  const dom1 = document.querySelector('.chart');
  const myChart1 = echarts.init(dom1);
  // 指定图表的配置项和数据
  var option1 = chartData.value
  // 使用刚指定的配置项和数据显示图表。
  myChart1.setOption(option1);
  window.addEventListener('resize',()=>{
      myChart1.resize()
  })
  onUnmounted(()=>{
    myChart1.dispose();
  })
}

const getStudents=async()=>{
  let id=route.params.classId;
  const res=await getStudentsAPI(id);
  if(res.data.code===200)
  {
    console.log(res.data.data)
    studentList.value=res.data.data
  }
  else {
    ElMessage.error(res.data.message)
  }
}
const getClass=()=>{
  let classId=route.params.classId;
  console.log(classId)
  
  console.log(classStore.getClassList)
  for(let i=0;i<classStore.getClassList.length;i++)
  {
    if(classStore.getClassList[i].id===classId)
    {
      classText.value=classStore.getClassList[i].name
    }
  }
}

const getClassChart=async()=>{

  let classId=route.params.classId
  const res=await getClassHistoryTestDataAPI(classId)

  if(res.data.code===200)
  {
    chartData.value.xAxis.data=res.data.data.map(item=>{
      return item.examName
    })

    chartData.value.series[0].data=res.data.data.map(item=>{
      return item.avgScore
    })

    chartData.value.series[1].data=res.data.data.map(item=>{
      return item.minScore
    })

    chartData.value.series[2].data=res.data.data.map(item=>{
      return item.maxScore
    })

  }
  else ElMessage.error(res.data.message)

  setChart()
}

watch(() => route.params.classId, (newValue, oldValue) => {
    getClass()
    getStudents()
    getClassChart()
});

onMounted(()=> {
    getClass()
    getStudents()
    getClassChart()
});

//点击班级，显示班级详情
function classOneClick(){
  router.push('/teacher/management/'+route.params.classId)
}
</script>



<style lang="scss" scoped>
.backBox{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  .title{
    margin-left: 20px;
    line-height: 50px;
    font-size: 20px;
    color:#3a63f3;
  }

  .bottom{
    flex:1;
    display: flex;

    .left{
      background-color: #fff;
    }

    .left{
      width: 200px;
      margin-left: 10px;


      .class{
        // color:#3a63f3;
        margin-left: 20px;
        line-height: 50px;
        display: flex;
        align-items: center;
      }

      a{
        text-decoration: none;
        color:black;
      }



      .li{
        margin-left: 30px;
        line-height: 40px;
        display: flex;
        align-items: center;
        margin-right: 10px;
      }

      .router-link-active{
        background-color: #eceffe;
      }
      
      .li:hover{
        background-color: #eceffe;
      }

    }

    .right{
      flex:1;
      margin-left: 20px;

      .defaultBox{
        background-color: white;
        .rightTitle{
            color:#3a63f3;
            // margin-left: 30px;
            padding-left: 20px;
            line-height: 50px;
            height: 50px;
            font-size: 20px;
            margin-bottom: 20px;
            // border-bottom: 1px solid #c4c4c4;
            
        }

        .chart{
            height: 80vh;
            padding-left: 20px;
        }
      }
    }
  }
}
</style>