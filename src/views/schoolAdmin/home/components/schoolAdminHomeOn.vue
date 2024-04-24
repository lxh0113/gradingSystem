<template>
    <div class="bigBox">
      <div class="conditionSearch">
        <el-input style="max-width: 300px;height:40px;" :prefix-icon="Search" placeholder="按名称搜索"></el-input>
      </div>
      <div class="details">
        <div class="paper" v-for="(item,index) in 1" @click="router.push('/schoolAdmin/papers/'+663)">
          <div class="top">
            <div class="title">第三次月考</div>
            <div class="look">查看</div>
          </div>
          <div class="correctors">批改人：高启强</div>
          <div class="text">试卷正在批改中，请耐心等待！</div>
          <div class="bottom">
              <el-progress :text-inside="false" style="width: 40%;" percentage="13" />
              <div class="time">
                  2024/4/11
              </div>
          </div>
        </div>
        <!-- <div class="paper" v-for="(item,index) in examList" @click="router.push('/schoolAdmin/papers/'+item.id)">
          <div class="top">
            <div class="title">{{ item.title }}</div>
            <div class="look">查看</div>
          </div>
          <div class="correctors">批改人：{{ item.examMarker.map(item=>{return item}).join(',') }}</div>
          <div class="text">试卷正在批改中，请耐心等待！</div>
          <div class="bottom">
              <el-progress :text-inside="false" style="width: 40%;" :percentage="getPercent(item.amount)" />
              <div class="time">
                  {{ item.date }}
              </div>
          </div>
        </div> -->
      </div>
  
      <div class="page">
        <el-pagination v-if="examList.length!==0" prev-text="上一页" next-text="下一页" @prev-click="minusPages" @next-click="addPages" @current-change="changeCurrent" :current-page="pageData.current" layout="prev, pager, next"  :page-count="pageData.totalPage" />
      </div>

    </div>
</template>

<script setup>
import { Delete, Download, Edit, Handbag, Plus, Search, TakeawayBox, Upload } from '@element-plus/icons-vue';
import { onMounted,ref } from 'vue';
import { useRoute,useRouter } from 'vue-router';
import { schoolAdminGetAllPapersAPI }  from '@/apis/examPaper.js'
import { ElMessage } from 'element-plus';

const route=useRoute()
const router=useRouter()

const examList=ref([])
const pageData=ref({
  page:1,
  pageSize:20,
  totalPage:0
})

const changeCurrent=(number)=>{
    pageData.value.page=number;
    
    getAllExam()
}

const addPages=()=>{
    if(pageData.value.page>=pageData.value.totalPage)
    {
        return
    }

    pageData.value.page++;
    
    getAllExam()
}

const minusPages=()=>{
    if(pageData.value.page===1)
    {
        return
    }

    pageData.value.page--;
    
    getAllExam()
}


const getAllExam=async()=>{
  const res=await schoolAdminGetAllPapersAPI(pageData.value.page,pageData.value.pageSize)

  if(res.data.code===200)
  {
    console.log(res.data.data)
    examList.value=res.data.data.list
    pageData.value.totalPage=res.data.data.totalPage
  }
  else {
    ElMessage.error(res.data.message)
  }
}


const getPercent=(amount)=>{

console.log(amount)
if((amount.gradedNumber&&amount.total)&&amount.gradedNumber===0||amount.total===0) return 0;
else {
    return amount.gradedNumber/amount.total*100
}
}


onMounted(()=>{
  getAllExam()
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
    @media screen and (min-width: 768px) and (max-width: 1023px){
      // min-width: 320px;
    }
    @media screen and (min-width: 375px) and (max-width: 767px) {
      min-width: 320px;
    }
    
    .top {
      color:#3A63F3;
      // font-weight: bold;
      display: flex;
      justify-content: space-between;
      font-size: 20px;
      line-height: 40px;
      .title{
        font-weight: bold;
      }
      .look{
        margin-right: 20px;
      }
    }

    .correctors,.class{
      font-weight: bold;
      font-size: 18px;
      line-height: 40px;
    }
    

    .text{
      height: 100px;
      line-height: 60px;
      font-size: 18px;
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