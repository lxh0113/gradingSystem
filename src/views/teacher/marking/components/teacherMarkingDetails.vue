<template>
  <div class="bigBox wow fadeInUp">
    <div class="top">
      <div class="content">
        <el-dropdown @command="handleCommand">
          <span class="name el-dropdown-link">
            xx市第一次模拟试题<el-icon class="el-icon--right"><arrow-down /></el-icon>
          </span>
        
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="a">xx市第二次模拟试题</el-dropdown-item>
              <el-dropdown-item command="b">xx市第三次模拟试题</el-dropdown-item>
              <el-dropdown-item command="c">xx市第四次模拟试题</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>

        <div>
          <el-button style="border-radius: 50%;width: 30px;height: 30px;" :icon="ArrowLeft">
          </el-button>
          <el-button style="margin-left: 30px;border-radius: 50%;width: 30px;height: 30px;" :icon="ArrowRight">
          </el-button>
        </div>
      </div>
    </div>
    <div class="center">
      <el-select class="m-2" placeholder="班级" size="large" style="width: 240px;" ></el-select>
      <el-select class="m-2" placeholder="批改状态" size="large" style="width: 240px;margin-left:30px;" ></el-select>
      <el-select class="m-2" placeholder="分数段" size="large" style="width: 240px;margin-left:30px;" ></el-select>
    </div>
    <div class="bottom">
      <table>
        <thead>
          <tr class="fontWeight">
            <td>学号</td>
            <td>姓名</td>
            <td>分数</td>
            <td class="width1">评语</td>
            <td>批阅状态</td>
            <td class="width1">操作</td>
          </tr>
        </thead>
        <tbody>
          <div  v-for="item in studentList" :key="item">
            <tr v-if="item.state==true">
              <td>{{ item.studentNumber }}</td>
              <td>{{ item.name }}</td>
              <td class="score">{{ item.score }}</td>
              <td class="width1">{{ item.comment }}</td>
              <td>已批阅</td>
              <td class="width1">
                <span>批阅</span>
                <span>查看</span>
              </td>
            </tr>

            <tr v-if="item.state==false">
              <td>{{ item.studentNumber }}</td>
              <td>{{ item.name }}</td>
              <td>---</td>
              <td  class="width1">暂无</td>
              <td >正在批阅</td>
              <td  class="width1">
                <span @click="toPaper(1)">批阅</span>
                <span>查看</span>
              </td>
            </tr>
          </div>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue'
import { useRoute,useRouter } from "vue-router"
import { examPaperGetAllEP } from '../../../../mock/teacher/marking.js';
import axios from 'axios'

const router=useRouter();
const route = useRoute();

const studentList=ref([])
  onMounted(async()=>{
      console.log(route.params.id)
      //获取相关试卷的对应学生
      axios.get('/examPaper/getAllEP').then(res => {
            console.log(res.data)
            studentList.value=res.data.data
            console.log(studentList.value)
        })
        .catch((err) => {
            console.log(err);
        });
})

const toPaper=(id)=>{
  router.push('/paper/'+id)
}

</script>

<style lang="scss" scoped>
.bigBox{
  margin-top:20px;

  .top{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size:19px;
    color:#3a63f3;

    .content{
      display: flex;
      min-width: 420px;
      justify-content: space-between;
      align-items: center;
      // background-color: #ce6509;
    }

    .name{
      text-decoration: underline;
      font-size: 20px;
      color:#3a63f3
    }

    .subject{
      margin-left:30px;
      font-weight: bold;
    }
  }

  .center{
    display: flex;
    margin-top:20px;
    justify-content: left;
  }

  .bottom{
    
    min-height: 200px;
    // background-color: pink;
    margin-top:10px;
    
    table{
      // background-color: #3a63f3;
      width: 100%;
      font-size: 16px;

      .fontWeight{
        font-weight: 600;
      }

      tr{
        display: flex;
        width: 100%;
        height: 60px;
        line-height: 60px;

        td{
          flex:1;
          text-align: center;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          -o-text-overflow:ellipsis;
        }

        .score{
          color:#ce6509;
          font-size: 18px;
        }

        .width1{
          flex: 1.5;
        }

        td:nth-child(6){
          display: flex;
          justify-content: space-evenly;
          cursor: pointer;

          span:nth-child(1){
            color:#3a63f3;
          }
        }
      }

      
    }
    
  }
}

.demo-image__error .image-slot {
  font-size: 30px;
}
 
.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}
 
.demo-image__error .el-image {
  width: 100%;
  height: 200px;
}

</style>