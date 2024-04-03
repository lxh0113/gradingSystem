<template>
  <div class="backBox">
    <div class="top">
      <span>关系绑定</span>
    </div>
    <div class="input">
      <el-input @keyup.enter="search" v-model="searchInput" style="max-width: 300px;height:40px;" :prefix-icon="Search" placeholder="输入id和姓名搜索"></el-input>
    </div>
    <div class="details">
      <div class="paper" v-for="item in data" :key="item">
          <div class="left">
            <img :src="item.avatar">
          </div>
          <div class="right">
            <div class="school">
              {{ item.schoolName }}
            </div>
            <div class="userInfo">
              <div class="class">
               {{ item.gradeName }} {{ item.className }}
              </div>
              <div class="name">
                {{ item.name }}
              </div>
            </div>
            <div class="button">
              <button @click="apply">申请</button>
            </div>
          </div>
      </div>
      
      <div v-if="data.length===0" style="width: 100%;display: flex;justify-content: center">
        <el-empty description="无数据" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Search } from '@element-plus/icons-vue';
import { parentsSearchChildrenAPI } from '@/apis/user.js'
import { onMounted,ref } from 'vue';
import { ElMessage } from 'element-plus';

const searchInput=ref('')

const data=ref([])

const apply=()=>{
  
}

const search=async()=>{
  const res = await parentsSearchChildrenAPI(searchInput.value);

  if(res.data.code===200)
  {
    console.log(res.data.data)
    data.value=res.data.data
  }
  else ElMessage.error(res.data.message)
}

onMounted(()=>{

})
</script>

<style lang="scss" scoped>

.backBox{
  box-sizing: border-box;
  padding:30px;
  width: 100%;
  height: 100vh;
  background-color: #fff;

  .top{
    border-bottom: 1px solid #c4c4c4;

    span{
      display: block;
      font-size: 20px;
      font-weight: bold;
      padding-bottom:20px;
    }
  }

  .input{
    margin-top:20px;
  }

  .details {
      // background-color: pink;
      margin-top: 20px;
      display: grid;
      grid-template-columns: repeat(auto-fill,minmax(480px,700PX));
      gap:20px;
    }
  
  .paper {
      background-color: #ebeffe;
      flex: 1;
      display: flex;
      // min-width: 600px;
      // max-width: 700px;
      height: 200px;
      margin-bottom: 20px;
      border-radius: 20px;
      box-sizing: border-box;
      padding:20px;
      margin-right: 20px;


  .left{
        margin-left:20px;
        display: flex;
        justify-content: center;
        

        img{
          width:120px;
          height: 120px;
          border-radius: 50%;
        }
      }

      .right{
        flex:1;
        margin-left:40px;
        .school{
          color:#3a63f3;
          font-size: 20px;
          font-weight: bold;
          line-height: 60px;
        }

        .userInfo{
          font-weight: bold;
          line-height: 50px;
          display: flex;
          font-size:20px;

          .name{
            margin-left:30px;
            color:#3a63f3;
          }
        }

        .button{
          display: flex;
          justify-content: right;

          button{
            background-color: #fff;
            padding:10px 30px;
            margin-left:10px;
            margin-right:10px;
            border-radius: 20px;
            border:1px solid #3a63f3;
            font-weight: bold;
            font-size: 16px;
            color:#3a63f3;
          }

          button:hover{
            background-color: #ebeffe;
          }
        }
      }

    }
}

</style>