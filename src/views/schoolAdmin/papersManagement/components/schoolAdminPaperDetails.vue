<template>
    <div class="backBox">
      <div class="bigBox">
        <div class="nav">
          <div class="left">
              xx市第一次月考
          </div>
      </div>
      <div class="paper">
        <div class="top">
            <div class="searchInput">
              <el-input size="large" style="width: 200px;margin-right:30px;" placeholder="请输入学生名字" :prefix-icon="Search"></el-input>
              <el-select placeholder="班级" size="large" style="width: 200px;" ></el-select>
              
            </div>
        </div>
        <div class="bottom">
          <table>
                <thead>
                    <tr>
                        <td>学号</td>
                        <td>姓名</td>
                        <td>批阅状态</td>
                        <td>分数</td>
                        <td>评语</td>
                        <td>操作</td>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item,index) in studentList" :key="item.id">                        
                        <td>{{ item.studentNumber }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.state==='2'?'已批阅':'未批阅' }}</td>
                        <td class="score">{{ item.state==='2'?item.score:'---' }}</td>
                        <td :title="item.comment" class="comment">{{ item.comment }}</td>
                        <td>
                          <el-button @click="toPaper(item.id,index)" type="primary" plain>查看</el-button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
      </div>
    </div>
  </template>
  
<script setup>
import { Delete, Download, Edit, Handbag, Plus, Search, TakeawayBox, Upload } from '@element-plus/icons-vue';
import { onMounted } from 'vue';
import { useRoute,useRouter } from 'vue-router';
import { schoolAdminGetAllExamAPI } from '@/apis/examPaper.js'
import { ElMessage } from 'element-plus';
import { useExamStore } from '@/stores/examStore';

const route=useRoute()
const router=useRouter()
const examStore=useExamStore()

const studentList=ref([])

const getExam=async()=>{
  let id=route.params.id;

  const res=await schoolAdminGetAllExamAPI(id);

  if(res.data.code===200)
  {
    studentList.value=res.data.data
    console.log(res.data.data)
  }
  else {
    ElMessage.error(res.data.message)
  }
}

const toPaper=(id,index)=>{

  examStore.setExamData(studentList.value[index])

  router.push('/paper/'+id)
}

  onMounted(()=>{
    getExam()
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
          justify-content: flex-start;
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
    
        table{
            width: 100%;
            border-collapse:collapse;
            // border-top:1px solid #c4c4c4;
    
            tr{
                height: 60px;
            }

            .score{
                color:red;
                font-size: 18px;
            }

            .comment{
                max-width: 200px;
                text-overflow: ellipsis;
                overflow: hidden;
                word-break: break-all;
                white-space: nowrap;
            }
        }
    
        table,tr,td{
            border-bottom:1px solid #ebeffe;
            text-align: center;
        }
      }
    }
  
   
  }
  </style>