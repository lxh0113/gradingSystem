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
<<<<<<< HEAD
          <tr>
            <td>20041524</td>
            <td>lxh</td>
            <td class="score">85</td>
            <td>出雕塑品和via成都v和比赛于不是阿凡达和</td>
            <td>已批阅</td>
            <td>2024-1-4 12：12</td>
            <td>
              <span @click="isOpenNormal = !isOpenNormal">批阅</span>
              <span>查看</span>
            </td>
          </tr>

          <tr>
            <td>20041524</td>
            <td>lxh</td>
            <td class="score">---</td>
            <td>暂无</td>
            <td>正在批阅</td>
            <td>---------</td>
            <td>
              <span @click="isOpenNormal = !isOpenNormal">批阅</span>
              <span>查看</span>
            </td>
          </tr>
=======
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
                <span>批阅</span>
                <span>查看</span>
              </td>
            </tr>
          </div>
>>>>>>> fa1c4f3925a79eeb542c415a1e4aab5fa3a322c9
        </tbody>
      </table>
    </div>
  </div>

  <d-fullscreen class="fullScreen" v-model="isOpenNormal" :z-index="20">
    <div v-if="isOpenNormal" class="left">
          <el-scrollbar style="display: flex;max-width:1000px;justify-content: center;align-items: center;" height="800px">
            
            <img @click="()=>showImagePreview=true" class="imagePapers" src="@/assets/testPaper.png" alt="">
            <!-- <el-image
              :src="url"
              :zoom-rate="1.2"
              :initial-index="4"
              class="originalImg"
              @click="()=>{showViewer = true}"
            />
            <div class="demo-image__preview">
                <el-image-viewer hide-on-click-modal @close="()=>{showViewer = false}" v-if="showViewer" :url-list="previewList" />
            </div> -->
          </el-scrollbar>
    </div>

    <div class="right" v-if="isOpenNormal">
      <div class="title">
        阅卷
      </div>
      <el-scrollbar>
        <div class="questions" v-for="item in 4">
          <div class="question">
          1．下列哪个语句在Python中是非法的？
        </div>
        <div class="options">
          <div class="option">
            A、x = y = z = 1"
          </div>
          <div class="option">
            B、x = (y = z + 1)
          </div>
          <div class="option">
            C、x, y = y, x
          </div>
          <div class="option">
            D、x += y x=x+y
          </div>
        </div>
        <div class="details">
          <div class="answer">
            答案：B
          </div>
          <div class="score">
            分值：2
          </div>
        </div>
        <div class="analysis">
          本题考查Python的语法规则。选项B中的赋值语句是不合法的，因为Python不允许在赋值表达式中嵌套赋值。
        </div>
        <hr>
        </div>
      </el-scrollbar>
    </div>
    <!-- <div class="demo-fullscreen-container">
      <d-button @click="isOpenNormal = !isOpenNormal">返回</d-button>
    </div> -->
  </d-fullscreen>

  <el-image-viewer v-if="showImagePreview" :url-list="url" initial-index="1" hide-on-click-modal @close="closePreview" style="z-index: 3000"/>
</template>

<script setup>
<<<<<<< HEAD
import { ArrowLeft,ArrowRight } from '@element-plus/icons-vue';
import { ref } from 'vue'

const isOpenNormal = ref(false);
const showImagePreview=ref(false)

let url = ref(['@/assets/testPaper.png']);

 
const showViewer = ref(false);

const closePreview=()=>{
  showImagePreview.value=false
}
=======
  import { ArrowLeft,ArrowRight } from '@element-plus/icons-vue';
  import { useRoute,useRouter } from "vue-router"
  import { examPaperGetAllEP } from '../../../../mock/teacher/marking.js';
  import axios from 'axios'

  const Router=useRouter()
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
>>>>>>> fa1c4f3925a79eeb542c415a1e4aab5fa3a322c9

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

.fullScreen{

  display: flex;
  // position: relative;
  justify-content: space-between;

  .left{
    // background-color: antiquewhite;
    margin-left: 10px;
    flex:1;
    min-width: 520px;
    display: flex;
    height: 100%;
    // background-color: #ce6509;
    justify-content: center;
    align-items: center;
  }

  .right{
    // position:fixed;
    // background-color: aqua;
    max-width: 600px;
    min-width: 420px;
    padding-left: 20px;
    padding-right: 10px;
    
    box-sizing: border-box;

    .questions{
      // width: 400px;
      box-sizing: border-box;
      margin-right: 20px;

      .title{
        color: #3a63f3;
        font-size: 20px;
        line-height: 60px;
        // margin-left: 20px;
      }

      .question{
        border:1px solid #dcdfe6;
        padding:10px;
        border-radius: 10px;
      }

      .options{
        display: flex;
        flex-direction: column;

        .option{
          padding:10px;
          background-color: #eceffe;
          margin-top:10px;
          border-radius: 10px;
        }
      }
    
      .details{
        display: flex;
        justify-content: space-between;
        padding:10px;
        font-weight: bold;
        font-size: 16px;
      
        .answer{
          color:red;
        }
      
        .score{
          color:green;
        }
      }
    
      .analysis{
        border: 1px solid #3a63f3;
        padding:10px;
        border-radius: 10px;
      }
    }

  }

  .imagePapers{
    width: 500px;
    height: fit-content;
  }
}

</style>