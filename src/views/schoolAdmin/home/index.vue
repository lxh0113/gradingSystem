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
    <span style="color:red">请分别上传评分标准，空白试卷和您所需要批阅的试卷</span>
    <table>
      <tbody>
        <tr>
          <td>
            考试名称
          </td>
          <td>
            示例：xx学校第一次月考
          </td>
          <td>
            <el-input v-model="uploadPaper.title" size="large" style="width: 200px;height: 40px;" placeholder="请输入标题"></el-input>
          </td>
        </tr>
        <!-- <tr>
          <td>
            考试对象
          </td>
          <td></td>
          <td>
            <el-input size="large" style="width: 300px;height: 40px;" placeholder="请输入标题"></el-input>
          </td>
        </tr> -->
        <tr>
          <td>空白试卷</td>
          <td>
            示例
          </td>
          <td>
            <el-upload ref="blankPapers" :on-change="changeBlankPapers" class="upload-demo" action="#"
              :limit="1" :on-exceed="handleExceed" :auto-upload="false">
              <template v-slot:trigger>
                <el-button type="primary">选择文件</el-button>
              </template>
            </el-upload>
          </td>
        </tr>
        <tr>
          <td>
            所需批阅试卷压缩包
          </td>
          <td>示例</td>
          <td>
            <el-upload ref="zip" class="upload-demo" :on-change="changeZip" action="#"
              :limit="1" :on-exceed="handleExceed" :auto-upload="false">
              <template v-slot:trigger>
                <el-button type="primary">选择文件</el-button>
              </template>
            </el-upload>
          </td>
        </tr>

      </tbody>
    </table>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button @click="submitUpload" type="primary">
          确认
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import SparkMD5 from 'spark-md5'
import {onMounted,onUnmounted,getCurrentInstance,ref, nextTick} from 'vue'
import { ElMessage, genFileId } from 'element-plus'
import { getMaxMinAveAPI } from '@/apis/exam.js'
import { uploadFile,calculateFileMD5 } from '@/utils/file.js'
import { uploadBlankPapersAPI,checkFileAPI } from '@/apis/upload.js'


const uploadPaper=ref({
  title:'',
  blankPapers:null,
  zip:null
})

const blankPapers = ref(null)
const zip=ref(null)

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

const handleExceed = (files) => {
  upload.value.clearFiles()
  const file = files[0]
  file.uid = genFileId()
  upload.value.handleStart(file)
}

const changeBlankPapers=(uploadFile)=>{
  uploadPaper.value.blankPapers=uploadFile
  console.log(uploadFile)
}


const changeZip=(uploadFile)=>{
  uploadPaper.value.zip=uploadFile
  console.log(uploadFile)
}

const submitUpload = async() => {

  if(uploadPaper.value.title.trim()==='')
  {
    ElMessage.error("请填写标题")
    return;
  }
  console.log(blankPapers)
  if(uploadPaper.value.blankPapers===null)
  {
    ElMessage.error("请上传空白试卷")
    return;
  }

  if(uploadPaper.value.zip===null)
  {
    ElMessage.error("请上传压缩包")
    return ;
  }

  let testPaperId;
  let md5=calculateFileMD5(uploadPaper.value.zip.raw);

  // 上传空白试卷
  let data=new FormData()
  data.append('blankTestPaper',uploadPaper.value.blankPapers.raw)
  const res=await uploadBlankPapersAPI(uploadPaper.value.title,data)  
  if(res.data.code===200)
  { 
    testPaperId=res.data.data
    ElMessage.success('上传成功')
  }
  else {
    ElMessage.error('上传出错')
  }

  

  //发送请求过去

  uploadFile(uploadPaper.value.zip)

  nextTick(async()=>{

    const res=await checkFileAPI(md5,testPaperId)

    if(res.data.code===200)
    {
      ElMessage.success('上传成功')
    }
    else {
      ElMessage.error('上传失败')
    }
    
  })

  


  // dialogVisible.value = false
}


const getClass=async()=>{
  const res=await getMaxMinAveAPI(1);
  console.log(res)
  if(res.data.code===200)
  {
    ElMessage.success("获取成功")
  }
  else {
    ElMessage.error("获取失败")
  }
}

onMounted(()=>{
  setChart()
  // getClass();
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

table{
      border:1px solid #eceffe;
      border-radius: 10px;
      border-collapse: collapse;
      box-sizing: border-box;
      width: 100%;
      margin-top:20px;
      // border-collapse: collapse;
      
      tr:last-child{
          border:0px;
      }
      
      tr{
          display: flex;
          justify-content: space-between;
          height: 100px;
          line-height: 100px;
          border-bottom:1px solid #eceffe;
          margin-left: 20px;
          margin-right: 20px;
          // border-collapse: collapse;
          // background-color: #3A63F3;
          td{
              flex:1;
          }
          td:nth-child(1),
          td:nth-child(2){
              display: flex;
              justify-content: left;
          }
          td:nth-child(3){
            // background-color: #3a63f3;
              line-height: normal;
              display:flex;
              justify-content: left;
              overflow: hidden;
              max-width: 200px;
              // justify-content: right;
              align-items: center;
              // background-color: palegoldenrod;
          }
        }
      }
</style>