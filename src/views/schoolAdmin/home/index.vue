<template>
  <div>
    <div class="top">
      <div class="left">
        <div class="managePeople">
          <div class="topOperation">
            <span>人员管理</span>
            <button class="button">管理</button>
          </div>
          <div class="bottomPeople">
            <div class="teacher">
              <div class="row1">老师</div>
              <div class="row2">432</div>
            </div>
            <div class="student">
              <div class="row1">学生</div>
              <div class="row2">1700</div>
            </div>
          </div>
        </div>
        <div class="papers">
          <div class="papersStatus">
            <div class="topPapers">
              试卷进度
            </div>
            <div class="correct">
              <div class="row1">
                待批改
              </div>
              <div class="row2">
                998
              </div>
            </div>
          </div>
          <div class="importPapers">
            <div class="text">
              导入试卷
            </div>
            <button @click="dialogVisible = true" class="button" >
              导入
            </button>
          </div>
        </div>
      </div>
      <div class="center">
        试卷进度情况  待定
      </div>
      <div class="right">
        试卷进行状态  待定
      </div>
    </div>
    <div class="bottom">
      <div class="title">
        <div class="left">
          试卷&nbsp;&nbsp;&nbsp;&gt;&gt;
          <router-link to="/schoolAdmin/home/on">
            进行中
          </router-link>
          <router-link to="/schoolAdmin/home/off">
            已结束
          </router-link>
          <router-link to="/schoolAdmin/home/will">
            待开始
          </router-link>
      </div>
     </div>
    <div class="paper">
      <router-view>
      </router-view>
    </div>
    </div>
  </div>

  <el-dialog v-model="dialogVisible" title="导入试卷" width="700px" draggable>
    <span>请分别上传评分标准，空白试卷和您所需要批阅的试卷</span>
    
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          确认
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import {onMounted,onUnmounted,getCurrentInstance,ref} from 'vue'

let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts
const dialogVisible = ref(false)

const setChart=()=>{
const dom1 = document.querySelector('.center');
const myChart1 = echarts.init(dom1);
const dom2 = document.querySelector('.right');
const myChart2 = echarts.init(dom2);
// 指定图表的配置项和数据
var option1 = {
  title: {
    text: '批阅情况'
  },
  legend:{
  },
  color:['#748eed','#91cc75','#fac858'],
  series: [
    {
      type:'pie',
      data:[
        {
          value:345,name:'批阅'
        },
        {
          value:654,name:'未批阅'
        }
      ]
    }
  ]
};
var option2 = {
  title: {
    text: '一周内批阅情况'
  },
  legend:{
  },
  color:['#fac858'],
  tooltip: {},
  xAxis: {
    data: ['2024/1/1', '2024/1/2', '2024/1/3', '2024/1/4', '2024/1/5', '2024/1/6','2024/1/7']
  },
  yAxis: {},
  series: [
    {
      name: '批阅数量',
      type: 'bar',
      data: [123, 0, 56, 70, 94, 0,80],
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
    // alert(1)
    myChart1.resize()
    myChart2.resize()
  })

  onUnmounted(() => {
      myChart1.dispose();
      myChart2.dispose()
  });
}

const init=()=>{

}

onMounted(()=>{
  setChart()
})
</script>

<style lang="scss" scoped>
.top{
  // height:360px;
  width: 100%;
  display: flex;
  flex-wrap:wrap;
  border-radius: 20px;

  @media screen and (min-width: 1440px) and (max-width: 1920px){
    
  }
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
      
  }
  @media screen and (min-width: 768px) and (max-width: 1023px){
      
  }
  @media screen and (min-width: 375px) and (max-width: 767px) {
      
  }

  .left{
    flex:2;  
    max-width: 600px;
    min-width: 300px;
    // height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-sizing: border-box;
    margin-right: 10px;
    margin-bottom: 10px;

    transition: all .5s;

    .button{
      padding:5px 30px;
      border-radius:20px;
      width: 90px;
      border:1px solid #87a9ff;
      background-color:#fff;
      height: 30px;
      // margin-right:30px;
      // margin-top:10px;
    }

    .button:hover{
      background-color: #ebeffe;
    }

    .row1{
      font-size: 20px;
    }

    .row2{
      color:#3a63f3;
      font-weight: bold;
      font-size:26px;
    }

    .managePeople{
      flex:1;
      display: flex;
      min-height: 180px;
      // min-height: 360px;
      flex-direction: column;
      // min-width: 240px;
      // max-width: 300px;
      background-color: #fff;
      box-sizing: border-box;
      padding:20px;

      @media screen and (min-width: 768px) and (max-width: 1023px){
        // max-width: 300px;
      }
      @media screen and (min-width: 375px) and (max-width: 767px) {
        // max-width: 300px;
      }

      .topOperation{
        display: flex;
        height: 50px;
        // background-color:pink;
        justify-content: space-between;
        
        span{
          line-height: 50px;
          font-size: 18px;
          margin-left:30px;
        }

        button{
          margin-right:30px;
          margin-top:10px;
        }

      }

      .bottomPeople{
        flex:1;
        display: flex;
        // background-color: pink;
        justify-content: space-evenly;

        .parents{
          flex:1;
          display: flex;
          // background-color: aqua;
          flex-direction: column;
          justify-content: space-evenly;
          text-align: center;
        }

        .teacher{
          flex:1;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          text-align: center;
        }

        .student{
          flex:1;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          text-align: center;
        }

      }


    }

    .papers{
      flex:1;
      margin-top:10px;
      
      display: flex;

      .papersStatus{
        flex:3;
        display: flex;
        flex-direction: column;
        min-height: 120px;
        justify-content: space-between;
        margin-right: 10px;
        background-color: #fff;
        box-sizing: border-box;
        padding:30px;

        .topPapers{
          display: flex;
          justify-content: flex-start;
          font-size: 18px;
        } 
        
        .correct{
          display: flex;
          justify-content: space-between;
        }
      } 

      .importPapers{
        flex:2;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

      }
    }
  }

  .center,
  .right{
    box-sizing: border-box;
    padding:20px;
  }

  .center{
    flex:1;
    min-width: 360px;
    background-color: #fff;
    // background-color: aqua;
    margin-right: 10px;
    margin-bottom: 10px;
    min-height: 360px;
    transition: all .5s;
  }

  .right{
    flex:2;
    min-width: 500px;
    background-color: #fff;
    min-height: 360px;
    margin-bottom: 10px;
    // max-width: 800px;

    @media screen and (min-width: 1024px) and (max-width: 1439px) {
      // margin-top:10px;
    }
    @media screen and (min-width: 768px) and (max-width: 1023px){
      margin-right: 10px;
    }
    @media screen and (min-width: 375px) and (max-width: 767px) {
      margin-right: 10px;
    }

    transition: all .5s;


    // background-color: plum;
  }
}

.bottom{
  // margin-top:10px;
  min-height: 350px;
  box-sizing: border-box;
  padding:30px;
  background-color: #fff;
  // margin-right: 10px;

  .title{
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