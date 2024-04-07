<template>
  <div class="backBox">
    <div class="top">
      <span>关系绑定</span>
      <el-button size="large" style="margin-left:30px" @click="viewHistoryVisible = true" :icon="View">
        查看验证中的关系绑定
      </el-button>
    </div>
    <div class="input">
      <el-input @keyup.enter="search" v-model="searchInput" style="max-width: 300px;height:40px;" :prefix-icon="Search" placeholder="输入id和姓名搜索"></el-input>
    </div>
    <div class="details">
      <div class="paper" v-for="(item,index) in data" :key="index">
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
            <div v-if="item.flag" class="button">
              <button @click="toOpen(index)">申请</button>
            </div>
            <div v-else class="button">
              <span>
                已绑定
              </span>
            </div>
          </div>
      </div>

      <el-dialog v-model="dialogFormVisible" title="绑定关系" width="400">
        <el-form size="large" :model="form" label-position="left">
          <div style="height: 40px;color:red">
            您正于 <span>{{ data[currentIndex].name }}</span> 绑定关系 , 请确认您的选择
          </div>
          <el-form-item size="large" label="身份" :label-width="60">
            <el-select size="large" style="width: 240px" v-model="form.type" placeholder="请选择身份">
              <el-option label="父亲" value="father" />
              <el-option label="母亲" value="mother" />
            </el-select>
          </el-form-item>
        </el-form>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取消</el-button>
            <el-button type="primary" @click="apply">
              申请
            </el-button>
          </div>
        </template>
      </el-dialog>
      
      <div v-if="data.length===0" style="width: 100%;display: flex;justify-content: center">
        <el-empty description="无数据" />
      </div>
    </div>
  </div>

  <el-dialog v-model="viewHistoryVisible" title="查看待验证" width="600px">
    <div class="messageBox">
      <div v-for="(item,index) in messageList" :key=index>
        <span>您向{{item.to}}发送了请求绑定{{item.type==='father'?'父亲':'母亲'}}关系
          <span v-if="item.state===0" style="color:#3c62f3">{{stateList[item.state]}}</span>
          <span v-else-if="item.state===1" style="color:#3c62f3">{{stateList[item.state]}}</span>
          <span v-else-if="item.state===2" style="color:greenyellow">{{stateList[item.state]}}</span>
          <span v-else-if="item.state===3" style="color:red">{{stateList[item.state]}}</span>
        </span>
        <br>
        <hr v-if="index!==messageList.length-1">
      </div>
    </div>
    <div v-if="messageList.length===0" style="width: 100%;display: flex;justify-content: center">
        <el-empty description="无数据" />
      </div>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="viewHistoryVisible = false">取消</el-button>
        <el-button type="primary" @click="viewHistoryVisible = false">
          关闭
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { Search, View } from '@element-plus/icons-vue';
import { parentsSearchChildrenAPI } from '@/apis/user.js'
import { onMounted,ref } from 'vue';
import { ElMessage } from 'element-plus';
import { useWsStore } from '@/stores/wsStore';
import { useUserStore } from '@/stores/userStore';
import { useNavStore } from '@/stores/navStore';
import { getNewsAPI } from '@/apis/news.js';

const wsStore=useWsStore()
const navStore=useNavStore()
const userStore=useUserStore()
const searchInput=ref('')
const dialogFormVisible = ref(false)
const viewHistoryVisible = ref(false)
let currentIndex=0;
const messageList=ref([])

const stateList=['在验证中','在验证中','已被同意','被拒绝']

const form = reactive({
  type:''
})

const data=ref([])

const toOpen=(index)=>{
  currentIndex=index
  dialogFormVisible.value = true
}


const apply=()=>{

  wsStore.sendMessage(form.type,data.value[currentIndex].account,userStore.getUserInfo().name+'请求与你成为'+form.type+"关系")

  dialogFormVisible.value = false
}

const search=async()=>{
  const res = await parentsSearchChildrenAPI(searchInput.value);

  if(res.data.code===200)
  {
    console.log(res.data.data)
    data.value=res.data.data
    
    let list = await navStore.getNavList();
    list=JSON.parse(JSON.stringify(list))
    data.value=data.value.map(item=>{
      for(let i=0;i<list.length;i++)
      {
        if(list[i].account===item.account)
        {
          return {
            ...item,flag:false
          }
        }
      }
      return {
        ...item,flag:true
      }
    })

    // console.log(data.value)
  }
  else ElMessage.error(res.data.message)
}

const getMessage=async()=>{
  const res=await getNewsAPI();

    if(res.data.code===200)
    {
        messageList.value=res.data.data.map(item=>{
          if(item.from===userStore.getUserInfo().account)
          {
            return item
          }
        })
    }
}

onMounted(()=>{
  wsStore.wsInit()

  getMessage()
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
    display: flex;
    align-items: center;
    padding-bottom:20px;

    span{
      display: block;
      font-size: 20px;
      font-weight: bold;
      // padding-bottom:20px;
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

          span{
            color:#3a63f3;
            margin-right: 30px;
            font-size: 20px;
            font-weight: bold;
          }

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

.messageBox{
  border:1px solid #d7d8da;
  border-radius: 10px;
  box-sizing: border-box;
  padding:20px;

  font-size: 16px;
}

</style>