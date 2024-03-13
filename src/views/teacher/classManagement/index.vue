<template>
  <div class="wow fadeInRight backBox">
    <div class="title">
      学员列表
    </div>
    <div class="bottom">
      <div class="left">
        <div class="class">
          <el-icon style="color:#3a63f3" size="large"><Folder /></el-icon>
          <span style="margin-left: 10px;">软件一班</span>
        </div>
        <el-scrollbar height="600px">
          <router-link v-for="(item,index) in 60" :to="'/teacher/management/1/'+index"  class="li">
            <el-icon style="margin-left:10px;color:#3a63f3"><Avatar /></el-icon>
            <span style="margin-left: 10px;">李泽言</span>
          </router-link>
        </el-scrollbar>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'; // Import ref from Vue
import { useRoute,useRouter } from 'vue-router';

const router=useRouter()
const route=useRoute()
const listData = ref([]);

for (let i = 0; i < 60; i++) {
  listData.value.push({ name: '李泽言' });
}
</script>



<style lang="scss" scoped>
.backBox{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  .title{
    margin-left: 20px;
    line-height: 50px;
    font-size: 20px;
    color:#3a63f3;
  }

  .bottom{
    flex:1;
    display: flex;

    .left{
      background-color: #fff;
    }

    .left{
      width: 200px;
      margin-left: 10px;


      .class{
        // color:#3a63f3;
        margin-left: 20px;
        line-height: 50px;
        display: flex;
        align-items: center;
      }

      a{
        text-decoration: none;
        color:black;
      }



      .li{
        margin-left: 30px;
        line-height: 40px;
        display: flex;
        align-items: center;
        margin-right: 10px;
      }

      .router-link-active{
        background-color: #eceffe;
      }
      
      .li:hover{
        background-color: #eceffe;
      }

    }

    .right{
      flex:1;
      margin-left: 20px;
    }
  }
}
</style>