<template>
  <div class="bigBox">
    <div class="conditionSearch">
      <el-select class="m-2" placeholder="请选择孩子" size="large" style="width: 240px;margin-right:30px;" ></el-select>
      <!-- <el-input style="max-width: 300px;height:40px;" :prefix-icon="Search" placeholder="按名称搜索"></el-input> -->
    </div>
    <div class="details">
      <div class="paper" v-for="item in paperLis" :key="item.id">
        <div class="top">
          <div class="subject">{{ item.title }}</div>
          <div class="look">错题分析</div>
        </div>
        <!-- <div class="correctors">批改人：xxx老师</div> -->
        <div class="comment">{{ item.comment }}</div>
        <div class="grade">
          分数：<span>{{ item.scored }}</span>分&nbsp;&nbsp;满分：<span>{{ item.score }}</span>分
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

  }

  .details {
    // background-color: pink;
    margin-top: 20px;
    display: grid;
      grid-template-columns: repeat(auto-fill,minmax(480px,750px));
      gap:20px;
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

    .correctors{
      font-weight: bold;
      font-size: 18px;
      line-height: 35px;
    }

    .comment{
      overflow: hidden;
      height: 75px;
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

      .time{
        font-size: 14px;
      }
    }
}

}
</style>