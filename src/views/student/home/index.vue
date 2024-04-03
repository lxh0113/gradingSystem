<template>
  <div class="top">
    <div class="left">
      <div class="myParents">
        <div class="avatars">
          <img v-for="item in parentsList" :key="item" :src="item.avatar" alt="">
          <span v-if="parentsList.length===0" @click="router.push('/student/relationship')" style="cursor:pointer;color:#3c62f3;font-size: 16px;">暂无，去绑定</span>
          <!-- <img src="../../../assets/avatar.jpeg" alt=""> -->
        </div>
        <div class="text">
          我的家长
        </div>
      </div>
    </div>
    <div class="right">
      <div class="userInfo">
          <div class="leftInfo">
            <div class="school">
              XX市第一中学
            </div>
            <div class="class">
              初一三班 XXX
            </div>
          </div>
          <div class="rightImage">

          </div>
      </div>
    </div>
  </div>
  <div class="bottom">
    <div class="title">
      <div class="left">
        试卷&nbsp;&nbsp;&nbsp;&gt;&gt;
        <router-link to="/student/home/off">
          已结束
        </router-link>
        <router-link to="/student/home/on">
          进行中
        </router-link>
        
      </div>
    </div>
    <div class="paper">
      <router-view>
      </router-view>
    </div>
  </div>
</template>

<script setup>
import { onMounted,ref } from "vue";
import { studentGetAllParentsAPI } from '@/apis/user.js'
import { ElMessage } from "element-plus";
import { useRoute,useRouter } from "vue-router";

const router=useRouter()
const route=useRoute()
const parentsList=ref([])

const setImage=()=>{
  let images = document.querySelectorAll('.avatars img')

  images.forEach((img, index) => {
      if (index > 0) {
        img.style.transform = `translateX(-${15 * index}px)`;
      }
  });
}

const getParents=async()=>{
  const res=await studentGetAllParentsAPI();

  if(res.data.code===200)
  {
    console.log(res.data.data)
    parentsList.value=res.data.data
  }
  else {
    ElMessage.error(res.data.message)
  }
}


onMounted(()=>{

  getParents()
  setImage()

})
</script>

<style lang="scss" scoped>

.top,.bottom{
  background-color: #fff;
  border-radius: 10px;
}

.top{
  width: 100%;
  height: 205px;
  display: flex;
  box-sizing: border-box;
  padding: 20px;

  .myParents{
    height: 100%;
    // background-color: pink;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 1px solid #c4c4c4;
    @media screen and (min-width: 1440px) and (max-width: 1920px){
      width: 300px;
    }
    @media screen and (min-width: 1024px) and (max-width: 1439px) {
      width: 300px;
    }
    @media screen and (min-width: 768px) and (max-width: 1023px){
      width: 300px;
    }
    @media screen and (min-width: 375px) and (max-width: 767px) {
      
    }

    .avatars{
      display: flex;
      justify-content: center;
      // position:relative;

      img{
        width:70px;
        height: 70px;
        border-radius: 50%;
      }

      // img:nth-child(n+2) {
      //   transform: translateX(calc(-15px * (n - 1)));
      // }


    }

    .text{
      margin-top:30px;
      font-weight: bold;
    }

  }

  .userInfo{
    flex:1;
    display: flex;
    text-align: center;
    height: 100%;
    
    .leftInfo{
      display: flex;
      margin-left: 80px;
      flex-direction: column;
      justify-content: space-around;

      .school{
        color:#3A63F3;
        // color:$primary-color;
        font-size: 19px;
        font-weight: bold;
      }

      .class{
        font-weight: bold;
      }
    }
  }
}

.bottom{
  margin-top:10px;
  min-height: 560px;
  box-sizing: border-box;
  padding:30px;

  .title{
    font-size:20px;
    font-weight: bold;
    border-bottom: 1px solid #c4c4c4;
    padding-bottom: 15px;

    a{
      color:#c4c4c4;
      text-decoration: none;
      margin-left: 30px;
      font-size:18px;
      font-weight: normal;
    }

    .router-link-active{
      text-decoration: underline;
      color:#3A63F3;
    }

    
  }

 
}
</style>