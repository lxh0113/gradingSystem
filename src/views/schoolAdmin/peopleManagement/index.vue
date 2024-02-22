<template>
  <div class="backBox">
    <div class="bigBox">
      <div class="nav">
        <div class="left">
            人员管理&nbsp;&nbsp;&nbsp;&gt;&gt;
          <router-link to="/schoolAdmin/management/student">
            学生
          </router-link>
          <router-link to="/schoolAdmin/management/teacher">
            教师
          </router-link>
      </div>
    </div>
    <div class="paper">
      <router-view>
      </router-view>
    </div>
    </div>
  </div>
</template>

<script setup>
import { Delete, Download, Edit, Plus, Search, Upload } from '@element-plus/icons-vue';

</script>

<style lang="scss" scoped>

.backBox{
  width: 100%;
  min-height: 760px;
  background-color: #fff;
  box-sizing: border-box;
  padding:30px;
  
}
.bigBox{
  // margin-top:10px;
  min-height: 400px;
  box-sizing: border-box;
  // padding:30px;
  // background-color: #fff;

  .nav{
    font-size:20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-weight: bold;
    // line-height: 40px;
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