<template>
    <div class="fullScreen" :z-index="20">
    <div class="left">
        <!-- <div class="comment">
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div> -->
        <el-scrollbar style="display: flex;max-width:1000px;justify-content: center;align-items: center;" height="800px">
          <img @click="()=>showImagePreview=true" class="imagePapers" src="@/assets/testPaper.png" alt="">
        </el-scrollbar>
        <div class="fixed">
          <el-button :icon="DArrowLeft">上一套</el-button>
          <el-button :icon="ArrowLeft"></el-button>
          <el-button :icon="ArrowRight"></el-button>
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
        <div class="questions" v-for="item in 1">
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
            <div class="score" v-if="userStore.user.identity==='teacher'">
              分值：<el-input v-model="input" style="width: 60px" placeholder="0-100" />
            </div>
            <div class="score" v-else>
              分值：5
            </div>
          </div>
          <div class="analysis">
            本题考查Python的语法规则。选项B中的赋值语句是不合法的，因为Python不允许在赋值表达式中嵌套赋值。
          </div>
          <hr>
        </div>

        <div class="questions">
          <div class="question">
            1．下列哪个语句在Python中是非法的________
          </div>
          
          <div class="details">
            <div class="answer">
              答案：哇咔咔咔咔咔咔咔
            </div>
            <div class="score" v-if="userStore.user.identity==='teacher'">
              分值：<el-input v-model="input" style="width: 60px" placeholder="0-100" />
            </div>
            <div class="score" v-else>
              分值：5
            </div>
          </div>
          <div class="analysis">
            本题考查Python的语法规则。选项B中的赋值语句是不合法的，因为Python不允许在赋值表达式中嵌套赋值。
          </div>
        </div>
        <hr>
        <div class="questions">
          <div class="question">
            请简述你对java的看法，说明至少5点
          </div>
          <div class="options">
            <div class="option">
              <span class="answer">答案：</span>起因：由于在自定义请求头后请求会从简单请求转变为复杂请求，复杂请求会提前发送一个预检请求与服务器进行沟通，大概类似于（预检请求：“我可以访问吗？”=> 服务器：“可以” =>真实请求） 这里，就是因为axios的预检请求失败（当使用某些自定义请求头或特殊请求方法时，浏览器会发送预检请求（OPTIONS）
            </div>
          </div>
          <div class="details">
            <div class="answer">
              
            </div>
            <div class="score" v-if="userStore.user.identity==='teacher'">
              分值：<el-input v-model="input" style="width: 60px" placeholder="0-100" />
            </div>
            <div class="score" v-else>
              分值：5
            </div>
          </div>
          <div class="analysis">
            本题考查Python的语法规则。选项B中的赋值语句是不合法的，因为Python不允许在赋值表达式中嵌套赋值。
          </div>
        </div>
        <hr>
      </el-scrollbar>
    </div>
    
    <el-image-viewer v-if="showImagePreview" :url-list="url" hide-on-click-modal @close="closePreview" style="z-index: 3000"/>
  </div>
</template>

<script setup>
import { ArrowLeft,ArrowLeftBold,ArrowRight, DArrowLeft, DArrowRight } from '@element-plus/icons-vue';
import { ref } from 'vue'
import { useRoute,useRouter } from "vue-router"
import { useUserStore } from '@/stores/userStore';

const showImagePreview=ref(false)
const visible = ref(false)
const comment=ref('')
const userStore=useUserStore()

const Router=useRouter()
const route = useRoute();

let url = ['https://yuejuanpt.oss-cn-zhangjiakou.aliyuncs.com/%E9%BB%98%E8%AE%A4.png'];

const showViewer = ref(false);

const closePreview=()=>{
  showImagePreview.value=false
}

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
      width: 500px;
      height: fit-content;
    }

}

</style>