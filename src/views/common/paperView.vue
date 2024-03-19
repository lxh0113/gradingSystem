<template>
    <div class="fullScreen" :z-index="20">
    <div class="left">
          <el-scrollbar style="display: flex;max-width:1000px;justify-content: center;align-items: center;" height="800px">
            <img @click="()=>showImagePreview=true" class="imagePapers" src="@/assets/testPaper.png" alt="">
          </el-scrollbar>
          <div class="fixed">
            <el-button :icon="DArrowLeft">上一套</el-button>
            <el-button :icon="ArrowLeft"></el-button>
            <el-button :icon="ArrowRight"></el-button>
            <el-button :icon="DArrowRight">下一套</el-button>
          </div>
    </div>

    <div class="right">
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
            分值：<el-input v-model="input" style="width: 60px" placeholder="0-100" />
          </div>
        </div>
        <div class="analysis">
          本题考查Python的语法规则。选项B中的赋值语句是不合法的，因为Python不允许在赋值表达式中嵌套赋值。
        </div>
        <hr>
        </div>
      </el-scrollbar>
    </div>
    
  </div>
</template>

<script setup>
import { ArrowLeft,ArrowLeftBold,ArrowRight, DArrowLeft, DArrowRight } from '@element-plus/icons-vue';
import { ref } from 'vue'
import { useRoute,useRouter } from "vue-router"

const showImagePreview=ref(false)

const Router=useRouter()
const route = useRoute();

const imageList=ref(['https://devui.design/components/assets/image1.png',
      'https://devui.design/components/assets/image3.png'])
let url = ref(['https://devui.design/components/assets/image1.png']);

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
        line-height: 60px;
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
            display: flex;
            align-items: center;
          }
      
          .score{
            color:green;
            display: flex;
            align-items: center;
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