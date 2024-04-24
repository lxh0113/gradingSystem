<template>
    <div class="bigBox wow fadeInUp">
      <div class="conditionSearch">
        <el-input @keyup.enter="saerch" v-model="searchInput" style="max-width: 300px;height:40px;" :prefix-icon="Search" placeholder="按名称搜索"></el-input>
    </div>
      <div class="details">
        <div class="paper" v-for="item in examPaperList" :key="item.id" @click="()=>$router.push(`/teacher/marking/${item.id}`)">
            <div>
                <div class="top">
              <div>
                  <div class="title">{{ item.title }}</div>
              </div>
              <!-- <div class="operation">
                  错题分析
              </div> -->
                </div>
                <div class="content">
                    <div class="text">
                        智能批阅完成！
                    </div>
                    <div class="view">
                        查看已批阅试题&nbsp;&nbsp;&nbsp;&gt;&gt;&gt;
                    </div>
                </div>
                <div class="bottom">
                    
                    <el-progress :text-inside="false" style="width: 40%;" :percentage="100" />
                    <div class="time">
                        {{ item.date }}
                    </div>
                </div>
            </div>
        </div>
        <div v-if="examPaperList.length===0" style="display: flex;width: 100%;justify-content: center;align-items: center;">
            <el-empty style="flex:1;" description="无数据" />
        </div>
      </div>
  
      <div class="page">
        <el-pagination v-if="examPaperList.length!==0" prev-text="上一页" next-text="下一页" @prev-click="minusPages" @next-click="addPages" @current-change="changeCurrent" :current-page="pageData.current" layout="prev, pager, next"  :page-count="pageData.totalPage" />
      </div>
    </div>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue';
import { useRoute } from 'vue-router';
import { useRouter } from 'vue-router';
import { getAllExaminationAPI,getEByKeyAPI } from '@/apis/examPaper.js'
// import { examPaperGetAllE } from '../../../../mock/teacher/marking.js';
import axios from 'axios'
import { ElMessage } from 'element-plus';
import { useTeacherPaperStore } from '@/stores/teacherPaperStore.js';

const searchInput=ref('')
const router=useRouter()
const route=useRoute()
const examPaperList=ref([])
const teacherPaperStore=useTeacherPaperStore()

const getPercent=(amount)=>{

    console.log(amount)
    if((amount.gradedNumber&&amount.total)&&amount.gradedNumber===0||amount.total===0) return 0;
    else {
        return amount.gradedNumber/amount.total*100
    }
}

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

const saerch=()=>{
    if(searchInput.value.trim()==='')
    {
        getAllExamination(pageData.value.current)
    }
    else {
        getAllExaminationByKey(searchInput.value.trim(),pageData.value.current)
    }
}

const getAllExaminationByKey=async(key,page)=>{
    const res=await getEByKeyAPI(key,page);

    if(res.data.code===200)
    {
        examPaperList.value=res.data.data.list
        pageData.value.totalPage=res.data.data.totalPage

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

    }
    else {
        ElMessage.error(res.data.message)
    }
}

onMounted(async()=>{
    getAllExamination(1);
})
</script>

<style lang="scss" scoped>
    .bigBox{
        margin-top:20px;
        height: 100vh;
        background-color: #fff;
        // position: relative;

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
        cursor: pointer;

        .top{
            display: flex;
            justify-content: space-between;

            div{
                display: flex;
            }

            .title,.subject,.class{
                font-weight: bold;
                color:#3A63F3;
                font-size:20px;
            }

            .class{
                color:black;
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

        // .class{
        //     line-height: 20px;
        //     // background-color: #9e8b8b;
        //     font-size: 18px;
        // }

        .content{
            

            .text{
                line-height: 80px;
                // background-color: #3A63F3;
            }

            .view{
                line-height: 50px;
                font-weight: bold;
            }
        }

        .bottom{
            display: flex;
            justify-content: space-between;
            // margin-right: 30px;
            font-size: 18px;
            line-height: 30px;
            color:#9e8b8b;

            .time{
                font-size: 16px;
            }
        }

        
        }

    .page{
        // position: fixed;
        bottom:20px;
        display: flex;
        // margin-left: 50%;
        // transform: translateX(-50%);
        justify-content: center;
        align-items: center;
    }
}

:deep(.el-progress-bar__outer){

    background-color: #fff;

}
</style>