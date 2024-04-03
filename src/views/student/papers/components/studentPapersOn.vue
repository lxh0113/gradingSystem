<template>
  <div class="bigBox">
    <div class="conditionSearch">
      <el-input style="max-width: 250px;height:40px;" @keyup.enter="saerch" v-model="searchInput" :prefix-icon="Search" placeholder="按名称搜索"></el-input>
      <!-- <el-select class="m-2" placeholder="考试年份" size="large" style="width: 240px;margin-left:30px;" ></el-select> -->
    </div>
    <div class="details">
      <div class="paper" v-for="(item,index) in paperList" :key="item.id" @click="toPaper(item.id,index)">
        <div class="subject">{{ item.title }}</div>
        <div class="correctors">批改人：xxx老师</div>
        <div class="text">您的试卷正在批改中，请耐心等待！</div>
        <div class="status">进行中</div>
      </div>
    </div>

    <div class="page">
      <el-pagination v-if="paperList.length!==0" prev-text="上一页" next-text="下一页" @prev-click="minusPages" @next-click="addPages" @current-change="changeCurrent" :current-page="pageData.current" layout="prev, pager, next"  :page-count="pageData.totalPage" />
    </div>


  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { ElMessage } from 'element-plus';
import { Search } from '@element-plus/icons-vue';
import {studentGetAllExamAPI,studentGetAllExamByKeyAPI} from '@/apis/examPaper.js'
import { useRoute,useRouter } from 'vue-router';
import { useTeacherPaperStore } from '@/stores/teacherPaperStore';

const route=useRoute()
const router=useRouter()
const paperList=ref([])
const searchInput=ref('')
const teacherPaperStore=useTeacherPaperStore()

const pageData=ref({
    current:1,
    totalPage:0
})

const changeCurrent=(number)=>{
    pageData.value.current=number;
    if(searchInput.value.trim()==='')
    {
        getMyPapers(pageData.value.current)
    }
    else {
        getAllExaminationByKey(searchInput.value.trim(),pageData.value.current)
    }
}

const addPages=()=>{
    if(pageData.value.current>=pageData.value.totalPage)
    {
        return
    }

    pageData.value.current++;
    
    if(searchInput.value.trim()==='')
    {
      getMyPapers(pageData.value.current)
    }
    else {
        getAllExaminationByKey(searchInput.value.trim(),pageData.value.current)
    }
}

const minusPages=()=>{
    if(pageData.value.current===1)
    {
        return
    }

    pageData.value.current--;
    
    if(searchInput.value.trim()==='')
    {
      getMyPapers(pageData.value.current)
    }
    else {
        getAllExaminationByKey(searchInput.value.trim(),pageData.value.current)
    }
}

const saerch=()=>{
    if(searchInput.value.trim()==='')
    {
      getMyPapers(pageData.value.current)
    }
    else {
        getAllExaminationByKey(searchInput.value.trim(),pageData.value.current)
    }
}

const getAllExaminationByKey=async(page,key)=>{
    const res=await studentGetAllExamByKeyAPI(page,8,key);

    if(res.data.code===200)
    {
        paperList.value=res.data.data.list
        pageData.value.totalPage=res.data.data.totalPage

    }
    else {
        ElMessage.error(res.data.message)
    }
}

const toPaper=(id,index)=>{

  //把数据放入到
  teacherPaperStore.setTeacherPaperList(index,paperList.value)

  router.push('/paper/'+id)
}

const getMyPapers=async()=>{
  const res=await studentGetAllExamAPI(pageData.value.current,8);
  // console.log(res)
  if(res.data.code===200)
  {
    console.log(res.data.data)
    paperList.value=res.data.data.list
    // ElMessage.success("获取成功")
  }
  else {
    ElMessage.error("网络错误")
  }
}

onMounted(()=>{
  getMyPapers()
})

</script>

<style lang="scss" scoped>
.bigBox{
  margin-top:20px;

  .conditionSearch{
    color:#3A63F3;
    display: flex;
  }

  .details {
    // background-color: pink;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(480px,750px));
    gap:20px;
   
    // justify-content: space-between; /* 将这里的 justify-content 修改为 flex-start */
}

.paper {
    background-color: #ebeffe;
    flex: 1;
    // min-width: 600px;
    // max-width: 770px;
    height: 240px;
    margin-bottom: 20px;
    border-radius: 20px;
    box-sizing: border-box;
    padding:20px;
    margin-right: 20px;
    
    .subject {
      color:#3A63F3;
      font-weight: bold;
      font-size: 20px;
      line-height: 40px;
    }

    .correctors{
      font-weight: bold;
      font-size: 18px;
      line-height: 35px;
    }

    .text{
      height: 110px;
      line-height: 110px;
      font-size: 18px;
    }

    .status{
      color:#787474;
    }
  }

  .page{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>