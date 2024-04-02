<template>
  <div class="bigBox">
    <div class="conditionSearch">
      <el-input style="max-width: 300px;height:40px;" @keyup.enter="saerch" v-model="searchInput" :prefix-icon="Search" placeholder="按名称搜索"></el-input>
      <!-- <el-select class="m-2" placeholder="班级" size="large" style="width: 240px;margin-left:30px;" ></el-select> -->
    </div>
    <div class="details">
      <div class="paper" v-for="item in examPaperList" :key="item.id" @click="toPaper(item.id)">
        <div class="top">
            <div>
                <div class="title">
                    {{ item.title }}
                </div>
            </div>
            <div class="operation">
                批阅
            </div>
        </div>
        <div class="content">
            <div class="text">
                正在批阅中，请耐心等待！
            </div>
            <div class="view">
                查看已批阅试题&nbsp;&nbsp;&nbsp;&gt;&gt;&gt;
            </div>
        </div>
        <div class="bottom">
            <div class="time">
                {{ item.date }}
            </div>
        </div>
      </div>
    </div>

    <div class="page">
      <el-pagination v-if="examPaperList.length!==0" prev-text="上一页" next-text="下一页" @prev-click="minusPages" @next-click="addPages" @current-change="changeCurrent" :current-page="pageData.current" layout="prev, pager, next"  :page-count="pageData.totalPage" />
    </div>
  </div>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue';
import { useRoute,useRouter } from 'vue-router';
import { getAllExaminationAPI,getEByKeyAPI } from '@/apis/examPaper';
import { useTeacherPaperStore } from '@/stores/teacherPaperStore';

const router=useRouter()
const route=useRoute()
const teacherPaperStore=useTeacherPaperStore()

const searchInput=ref('')

const pageData=ref({
    current:1,
    totalPage:0
})

const changeCurrent=(number)=>{
    pageData.value.current=number;
    if(searchInput.value.trim()==='')
    {
        getAllExamination(pageData.value.current)
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
        getAllExamination(pageData.value.current)
    }
    else {
        getAllExaminationByKey(searchInput.value.trim(),pageData.value.current)
    }
}

const saerch=()=>{
    if(searchInput.value.trim()==='')
    {
        getAllExamination(pageData.value.current)
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
        getAllExamination(pageData.value.current)
    }
    else {
        getAllExaminationByKey(searchInput.value.trim(),pageData.value.current)
    }
}

const toPaper=(id)=>{
  router.push('/paper/'+id);
}

const examPaperList=ref([])

const getAllExaminationByKey=async(key,page)=>{
    const res=await getEByKeyAPI(key,page);

    if(res.data.code===200)
    {
        examPaperList.value=res.data.data.list
        pageData.value.totalPage=res.data.data.totalPage

        teacherPaperStore.setTeacherPaperList(examPaperList.value)
    }
    else {
        ElMessage.error(res.data.message)
    }
}

const getAllExamination=async(page)=>{
    const res=await getAllExaminationAPI(page);

    if(res.data.code===200)
    {
        console.log(res.data)
        examPaperList.value=res.data.data.list
        pageData.value.totalPage=res.data.data.totalPage

        teacherPaperStore.setTeacherPaperList(examPaperList.value)
    }
    else {
        ElMessage.error(res.data.message)
    }
}

onMounted(()=>{
  getAllExamination(1);
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
    height: 220px;
    margin-bottom: 20px;
    border-radius: 20px;
    box-sizing: border-box;
    padding:20px;
    margin-right: 20px;
    

    transition: all .5s;

    &:hover{
      transform: translateY(-5px);
      box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    }

    

    .top{
        display: flex;
        justify-content: space-between;

        div{
            display: flex;
        }

        .title,.subject{
            font-weight: bold;
            color:#3A63F3;
            font-size:20px;
        }

        .subject{
            margin-left:40px;
        }

        .operation{
            font-weight: bold;
            margin-right: 20px;
            font-size: 18px;
        }
    }

    .content{
        .text{
            line-height: 80px;
        }

        .view{
            line-height: 50px;
            font-weight: bold;
        }
    }

    .bottom{
        display: flex;
        justify-content: space-between;
        margin-right: 30px;
        font-size: 18px;
        line-height: 30px;
        color:#9e8b8b;

        .time{
          font-size: 16px;
        }
    }

    
    }

  .page{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>