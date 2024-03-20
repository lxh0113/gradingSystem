<template>
  <div class="wow fadeInRight backBox">
    <div class="title">
      学员列表
    </div>
    <div class="bottom">
      <div class="left">
        <div class="class" @click="classOneClick">
          <el-icon style="color:#3a63f3" size="large"><Folder /></el-icon>
          <span style="margin-left: 10px; cursor: pointer;">{{ classStore.classOne.name }}</span>
        </div>
        <el-scrollbar height="600px">
          <router-link v-for="(item,index) in studentListStore.studentList" :key="item" :to="'/teacher/management/'+route.params.classId+'/'+index"  class="li">
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
  import axios from 'axios'
  import {useClassStore} from '@/stores/classStore.js'
  import {useStudentListStore} from '@/stores/studentListStore.js'

  const router=useRouter()
  const route=useRoute()
  const classStore=useClassStore()
  const studentListStore=useStudentListStore()

  let internalInstance = getCurrentInstance();
  let echarts = internalInstance.appContext.config.globalProperties.$echarts

  const setChart=()=>{
    const dom1 = document.querySelector('.chart');
    const myChart1 = echarts.init(dom1);
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
        series: [{
            name: 'lxh',
            type: 'line',
            data: [60, 70, 67, 80, 77, 76],
            label: {
              show: true,
              position: 'top',
              textStyle: {
                fontSize: 14
              }
            }
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option1);
    window.addEventListener('resize',()=>{
        myChart1.resize()
    })
  }
  onMounted(async ()=> {
      setChart()
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
            height: 500px;
            padding-left: 20px;
        }
      }
    }
  }
}
</style>