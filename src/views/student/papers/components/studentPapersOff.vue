<template>
  <div class="bigBox">
    <div class="conditionSearch">
      <el-input style="max-width: 250px;height:40px;" @keyup.enter="saerch" v-model="searchInput" :prefix-icon="Search" placeholder="按名称搜索"></el-input>
      <!-- <el-select v-model="value" class="m-2" placeholder="考试年份" size="large" style="width: 240px;margin-left:30px;" ></el-select>
      <el-select v-model="value" class="m-2" placeholder="考试分数" size="large" style="width: 240px;margin-left:30px;" ></el-select> -->
    </div>
    <div class="details">
      <div class="paper" v-for="item in paperList" :key="item.id" @click="toPaper(item.id)">
      <div class="top">
        <div class="subject">{{ item.title }}</div>
        <div class="look">错题分析</div>
      </div>
      
      <div class="comment">
        <p>
          {{ item.comment }}
        </p>
      </div>
      <div class="grade">
        分数：<span>{{ item.scored }}</span>分&nbsp;&nbsp;满分：<span>{{ item.score }}</span>分
      </div>
      <div class="ai">
          AI智能分析  匹配相似模型&gt;&gt;&gt;
      </div>
      <div class="status">
        <div class="text">
          已结束
        </div>
        <div class="time">
          {{ item.date }}
        </div>
      </div>
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

const route=useRoute()
const router=useRouter()
const paperList=ref([])
const searchInput=ref('')

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

const toPaper=(id)=>{
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
  // max-width: 778px;
  height: 240px;
  margin-bottom: 20px;
  border-radius: 20px;
  box-sizing: border-box;
  padding:20px;
  margin-right: 20px;
  
  .top{
    display: flex;
    justify-content: space-between;
    .subject {
    color:#3A63F3;
    font-weight: bold;
    font-size: 20px;
    line-height: 40px;
    }
    .look{
      color:#3A63F3;
      font-size: 18px;
      line-height: 40px;
    }
  }
  .ai{
    font-weight: bold;
    font-size: 18px;
    line-height: 35px;
  }
  .comment{
    p{
      overflow:hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }
    
    height: 75px;
    
    // display: -webkit-box;
    // -webkit-line-clamp: 3;
    // -webkit-box-orient: vertical;

    
    color:#787474;
  }
  .grade{
    font-weight: bold;
    font-size: 18px;
    line-height: 35px;
  }
  .status{
    color:#787474;
    display: flex;
    justify-content: space-between;
  }
  }
  .page{
      display: flex;
      justify-content: center;
      align-items: center;
  }
}
</style>