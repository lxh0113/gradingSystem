<template>
   <div class="backBox">
    <div class="title">
      <div class="left">
        孩子试卷&nbsp;&nbsp;&nbsp;&gt;&gt;
        <router-link :to="`/parents/papers/${currentId}/off`">
          已结束
        </router-link>
        <router-link :to="`/parents/papers/${currentId}/on`">
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
import { useRoute,useRouter } from 'vue-router';
import { watch } from 'vue'

const route=useRoute()
const router=useRouter()

const currentId = route.params.id; 

watch(() => route.params.id, (newValue, oldValue) => {
    getMyPapers()
});

</script>

<style lang="scss" scoped>
.backBox{
  // margin-top:10px;
  background: #fff;
  min-height: 775px;
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