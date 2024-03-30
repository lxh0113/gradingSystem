<template>
  <div class="backBox">
    <div class="bigBox">
      <div class="nav">
        <div class="left">
            试卷管理
        </div>
        <div class="right">
              <el-button size="large" :icon="Download">导入试卷</el-button>
              <el-button size="large" :icon="Upload">导出成绩</el-button>
        </div>
    </div>
    <div class="paper">
      <div class="top">
          <div class="searchInput">
            <el-input size="large" style="width: 200px;margin-right:30px;" placeholder="请输入试卷标题" :prefix-icon="Search"></el-input>
            <el-select placeholder="试卷状态" size="large" style="width: 150px;" ></el-select>
            
          </div>
      </div>
      <div class="bottom">
        <table>
              <thead>
                  <tr>
                      <td>批阅老师</td>
                      <td>试卷标题</td>
                      <td>批阅状态</td>
                      <td>时间</td>
                      <td>操作</td>
                  </tr>
              </thead>
              <tbody v-if="examList.length>0">
                  <tr v-for="item in examList" :key="item.id">
                      <td>{{ item.examMarker.map(item=>{return item}).join(',')}}
                      </td>
                      <td>{{ item.title }}</td>
                      <td>{{ item.amount.total===item.amount.gradeNumber?'已批阅':'批阅中' }}</td>
                      <td>{{ item.date }}</td>
                      <td>
                        <el-button @click="router.push('/schoolAdmin/papers/'+item.id)" type="primary" plain>查看</el-button>
                      </td>
                  </tr>
              </tbody>
              <!-- <tbody style="width: 100%;display: flex;justify-content: center;align-items: center" v-else>
                <el-empty style="width: 100%;" description="无数据" />
              </tbody> -->
          </table>
      </div>
      <div class="page">
        <el-pagination v-if="examList.length!==0" prev-text="上一页" next-text="下一页" @prev-click="minusPages" @next-click="addPages" @current-change="changeCurrent" :current-page="pageData.current" layout="prev, pager, next"  :page-count="pageData.totalPage" />
      </div>
    </div>
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

onMounted(()=>{
  getAllExam()
})

</script>

<style lang="scss" scoped>

.backBox{
  width: 100%;
  height: 100%;
  background-color: #fff;
  box-sizing: border-box;
  padding:30px;
  
}
.bigBox{
  // margin-top:10px;
  min-height: 400px;
  min-width: 320px;
  box-sizing: border-box;
  // padding:30px;
  // background-color: #fff;

  .nav{
    font-size:20px;
    min-width: 320px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-weight: bold;
    // line-height: 40px;
    border-bottom: 1px solid #c4c4c4;
    padding-bottom: 15px;

    .left{
      height: 50px;
    }

    .right{
      max-height: 100px;
      min-width: 700px;
      display: flex;
      flex-wrap: wrap;
    }
  }

  .paper{

    .top{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top:20px;
  
      .searchInput{
        display: flex;
        align-items: center;
        height: 60px;
        justify-content: flex-end;
        // margin-top:20px;
      }

      .button{
        display: flex;
        height: 60px;
        justify-content: flex-end;
        margin-right: 20px;
      }
    }

    .bottom{
      // margin-top:20px;
  
      table{
          width: 100%;
          border-collapse:collapse;
          // border-top:1px solid #c4c4c4;
  
          tr{
              height: 60px;
          }
      }
  
      table,tr,td{
          border-bottom:1px solid #ebeffe;
          text-align: center;
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
</style>