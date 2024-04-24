<template>
  <div class="backBox">
    <div class="top">
      <span>关系绑定</span>
    </div>
    <div class="details">
      <div class="paper" v-for="(item,index) in newsList">
          <div class="left">
            <img :src="item.avatar">
          </div>
          <div class="right">
            <div class="id">
              id:{{ item.from }}
            </div>
            <div class="relationship">
              {{ item.name }} 请求和你绑定{{ item.type==='father'?'父亲':'母亲' }}家长关系
            </div>
            <div class="button">
              <button @click="bindParents(index,2)">同意</button>
              <button @click="bindParents(index,3)">拒绝</button>
            </div>
          </div>
      </div>

      <div v-if="newsList.length===0" style="width: 100%;display: flex;justify-content: center;">
        <el-empty description="无数据" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { studentGetParentsApplicationAPI,getBindParentsInfoAPI } from '@/apis/user.js'
import { ElMessage } from 'element-plus';
import { getNewsAPI } from '@/apis/news.js'
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/userStore';
import { bindParentsAPI } from '@/apis/user.js'

const newsList=ref([])
const userStore=useUserStore()

const getAllParentsInfo=async()=>{
  for(let i=0;i<newsList.value.length;i++)
  {
    const res=await getBindParentsInfoAPI(newsList.value[i].from);

    console.log(res.data.data)
    if(res.data.code===200)
    {
      newsList.value[i]={
        ...newsList.value[i],
        avatar:res.data.data.avatar,
        name:res.data.data.name
      }
    }
  }

  console.log(newsList.value)
}

const getNews=async()=>{
    const res=await getNewsAPI();

    if(res.data.code===200)
    {
        // newsList.value=res.data.data
        newsList.value=res.data.data.map(item=>{
          if(item.to===userStore.getUserInfo().account&&item.state!==2&&item.state!==3)
          {
            return item
          }
        })

       await getAllParentsInfo();
    }
    else ElMessage.error(res.data.message)
}

const bindParents=async(index,state)=>{
    let res = await bindParentsAPI(newsList.value[index],state);

    if(res.data.code===200)
    {
        ElMessage.success('操作成功')

        router.push('/student/relationship')

    }
    else ElMessage.error(res.data.message)

    if(newsList.value[index].state!==0) return 

    res=await messageKnowAPI(newsList.value[index].id);

    if(res.data.code===200)
    {
        newsList.value[index].state=1;
    }
    else ElMessage.error(res.data.message)

}

onMounted(()=>{
  getNews()
})
</script>

<style lang="scss" scoped>

.backBox{
  box-sizing: border-box;
  padding:30px;
  width: 100%;
  min-height: 760px;
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

  .details {
      // background-color: pink;
      margin-top: 20px;
      display: grid;
      grid-template-columns: repeat(auto-fill,minmax(480px,700px));
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
        .id{
          color:#3a63f3;
          font-size: 20px;
          font-weight: bold;
          line-height: 60px;
        }

        .relationship{
          font-weight: bold;
          line-height: 60px;
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
          }

          button:hover{
            background-color: #f5f7fa;
          }

          button:nth-child(1){
            color:#6cba2d;
          }

          button:nth-child(2){
            color:#f54747;
          }
        }
      }

    }
}

</style>