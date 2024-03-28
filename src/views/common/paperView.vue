<template>
    <div class="fullScreen" :z-index="20">
    <div class="left">
        <!-- <div class="comment">
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div> -->
        <el-scrollbar style="display: flex;max-width:1000px;justify-content: center;align-items: center;" height="800px">
          <img @click="()=>showImagePreview=true" class="imagePapers" :src="paperList[currentIndex]?.path" alt="">
        </el-scrollbar>
        <div class="fixed">
          <el-button :icon="DArrowLeft">上一套</el-button>
          <el-button :icon="ArrowLeft" :disabled="currentIndex===0" @click="setMinusIndex"></el-button>
          <el-button :icon="ArrowRight" :disabled="currentIndex===paperList.length-1" @click="setAddIndex"></el-button>
          <el-button :icon="DArrowRight">下一套</el-button>
          <el-popover :visible="visible" placement="top" :width="320" style="height: 150px;">
            <el-input size="large" type="textarea" :rows="6" placeholder="请输入评语" v-model="comment" resize="false" style="margin-bottom: 20px;" />
            <div style="text-align: right; margin: 0">
              <el-button size="small" text @click="visible = false">取消</el-button>
              <el-button size="small" type="primary" @click="visible = false">确认</el-button>
            </div>
            <template #reference>
              <el-button @click="visible = true" v-if="userStore.user.identity==='teacher'">评语</el-button>
            </template>
          </el-popover>
        </div>
    </div>

    <div class="right">
      <div class="title">
        <div class="text">
          阅卷
        </div>
        <div class="score">
          分值：97
        </div>
      </div>
      <el-scrollbar>
        <div class="questions" v-for="item in currentPages" :key="item">
          <div class="question">
            {{ item.question }}
          </div>
          <div class="options" v-if="item.type==='选择题'">
            <div class="option" v-for="littleItem in item.options" :key="littleItem">
              {{ littleItem }}
            </div>
          </div>
          <div class="options" v-else-if="简答题">
            <div class="option">
              <span class="answer">答案：</span>{{ item.studentResponse }}
            </div>
          </div>

          <div class="details" v-if="item.type==='选择题'">
            <div class="answer">
              答案：{{ item.studentResponse }}
            </div>
            <div class="score" v-if="userStore.user.identity==='teacher'">
              分值：<el-input v-model="input" style="width: 60px" placeholder="0-100" :value="item.score" />
            </div>
            <div class="score" v-else>
              分值：{{ item.score }}
            </div>
          </div>
          <div class="details" v-else-if="item.type==='填空题'">
            <div class="answer">
              答案：{{ item.studentResponse }}
            </div>
            <div class="score" v-if="userStore.user.identity==='teacher'">
              分值：<el-input v-model="input" style="width: 60px" placeholder="0-100" :value="item.score" />
            </div>
            <div class="score" v-else>
              分值：{{ item.score }}
            </div>
          </div>
          <div class="details" v-else>
            <div class="answer">
            </div>
            <div class="score" v-if="userStore.user.identity==='teacher'">
              分值：<el-input v-model="input" style="width: 60px" placeholder="0-100" :value="item.score" />
            </div>
            <div class="score" v-else>
              分值：{{ item.score }}
            </div>
          </div>


          <div class="analysis">
            {{ item.analyzing }}
          </div>
          <hr>
        </div>
        <hr>
      </el-scrollbar>
    </div>
    
    <el-image-viewer v-if="showImagePreview" :url-list="url" hide-on-click-modal @close="closePreview" style="z-index: 3000"/>
  </div>
</template>

<script setup>
import { ArrowLeft,ArrowLeftBold,ArrowRight, DArrowLeft, DArrowRight } from '@element-plus/icons-vue';
import { onMounted, ref } from 'vue'
import { useRoute,useRouter } from "vue-router"
import { useUserStore } from '@/stores/userStore';
import { getPaperAPI } from '@/apis/examPaper.js'
import { ElMessage } from 'element-plus';

const showImagePreview=ref(false)
const visible = ref(false)
const comment=ref('')
const userStore=useUserStore()

const Router=useRouter()
const route = useRoute();

let url = ['https://yuejuanpt.oss-cn-zhangjiakou.aliyuncs.com/%E9%BB%98%E8%AE%A4.png'];

const showViewer = ref(false);
let currentIndex=0;
const paperList=ref([])
const currentPages=ref(null)

const closePreview=()=>{
  showImagePreview.value=false
}

const setAddIndex=()=>{
  if(currentIndex>=paperList.length-1)
  {
    return
  }

  currentIndex++
  // alert(currentIndex)
  url[0]=paperList.value[currentIndex].path

  console.log(url[0])

  let newStr=paperList.value[currentIndex].content.replaceAll('\n','');
  newStr=paperList.value[currentIndex].content.replaceAll('\'','\"');
  currentPages.value=JSON.parse(newStr)
  console.log(currentPages)
}

const setMinusIndex=()=>{
  if(currentIndex<=0)
  {
    return
  }
  currentIndex--
  url[0]=paperList.value[currentIndex].path

  let newStr=paperList.value[currentIndex].content.replaceAll('\n','');
  newStr=paperList.value[currentIndex].content.replaceAll('\'','\"');
  currentPages.value=JSON.parse(newStr)
  console.log(currentPages)
}

const getPaperDetails=async()=>{
  let id=route.params.id
  const res=await getPaperAPI(id);

  if(res.data.code===200)
  {
    console.log(res.data.data)
    paperList.value=res.data.data
    currentIndex=0;
    
    url[0]=paperList.value[currentIndex].path
    let newStr=paperList.value[currentIndex].content.replaceAll('\n','');
    newStr=paperList.value[currentIndex].content.replaceAll('\'','\"');
    console.log(newStr)
    currentPages.value=JSON.parse(newStr)
    console.log(currentPages)
  }
  else {
    ElMessage.error(res.data.message)
  }
}

onMounted(()=>{
  getPaperDetails()
})
</script>

<style lang="scss" scoped>
.fullScreen{
    height: 100vh;
    overflow: hidden;
    display: flex;
    position: relative;
    background-color: #fff;
    // height: 100%;
    justify-content: space-evenly;

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
      // margin-bottom: 60px;

      .fixed{
        position: fixed;
        bottom:30px;
      }
    }

    .right{
      // position:fixed;
      // background-color: aqua;
      max-width: 600px;
      min-width: 420px;
      padding-left: 20px;
      padding-right: 10px;
      padding-bottom: 60px;
    
      box-sizing: border-box;

      .title{
        color: #3a63f3;
        font-size: 20px;
        display: flex;
        justify-content: space-between;
        line-height: 60px;

        .score{
          padding-right: 30px;
          font-weight: bold;
          color:red;
        }
        // height: 60px;
        // margin-left: 20px;
      }

      .questions{
        // width: 400px;
        box-sizing: border-box;
        margin-right: 20px;



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

            .answer{
              color:red;
              font-size: 16px;
              font-weight: bold;
            }
          }
        }
    
        .details{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          padding:10px;
          font-weight: bold;
          font-size: 16px;
        
          .answer{
            color:red;
            display: flex;
            align-items: center;
          }
      
          .score{
            color:green;
            // float:right;
            display: flex;
            align-items: center;
          }
        }
    
        .analysis{
          border: 1px solid #3a63f3;
          padding:10px;
          border-radius: 10px;
          // margin-top:10px;
        }
      }

    }


    .imagePapers{
      width: 540px;
      // height: 100%;
      height: fit-content;
    }

}

</style>