<template>
    <div class="button">
        <el-button size="large" :icon="Plus" @click="dialogVisible = true">
            添加错题本
        </el-button>
    </div>
    <el-dialog v-model="dialogVisible" title="新建错题本" width="400" :before-close="handleClose">
        <el-input size="large" style="width:320px;margin:20px;" placeholder="请输入标题"></el-input>
        <el-select size="large" v-model="currentExamList" multiple clearable collapse-tags placeholder="请选择考试" popper-class="custom-header" :max-collapse-tags="1" style="width: 320px;margin:20px;">
          <template #header>
            <el-checkbox v-model="checkAll" :indeterminate="indeterminate" @change="handleCheckAll">
              All
            </el-checkbox>
          </template>
          <el-option v-for="item in examList" :key="item.examName" :label="item.examName" :value="item.examName"/>
        </el-select>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="addNotes">
            确认
          </el-button>
        </div>
      </template>
    </el-dialog>
  <div class="bigBox">

    <div class="left">
        <div class="title">
            <el-icon style="color:#3a63f3"><Folder /></el-icon>
            <span>&nbsp;&nbsp;&nbsp;我的错题集</span>
        </div>
        <div class="notes">
            <router-link v-for="(item,index) in examList" :key="item" :to="`/student/papers/notes/${index}`">
                <div>
                    <el-icon style="color:#3a63f3"><Notebook /></el-icon>
                    <span class="wrongBookTitle">
                        &nbsp;&nbsp;
                        {{ item.examName }}
                    </span>
                    <el-icon class="editIcon" style="color:#3a63f3;margin-left: 20px;"><Edit /></el-icon>
                    <el-icon class="editIcon" style="color:#3a63f3;margin-left: 10px"><Delete /></el-icon>
                </div>
            </router-link>
            
        </div>
    </div>
    <div class="right">
        <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { Plus } from '@element-plus/icons-vue';
import { onMounted, ref, watch } from 'vue';
import { useUserStore } from '@/stores/userStore';
import { studentGetHistoryExamAPI } from '@/apis/exam';
import { ElMessage } from 'element-plus';

const dialogVisible = ref(false)
const userStore=useUserStore()

let checkAll = ref(false);
let indeterminate = ref(false);
let currentExamList = ref([]);
let examList = ref([]);

watch(currentExamList, (val) => {
  if (val.length === 0) {
    checkAll.value = false;
    indeterminate.value = false;
  } else if (val.length === examList.value.length) {
    checkAll.value = true;
    indeterminate.value = false;
  } else {
    indeterminate.value = true;
  }
});

const handleCheckAll = (val) => {
  indeterminate.value = false;
  if (val) {
    currentExamList.value = examList.value.map((_) => _.value);
  } else {
    currentExamList.value = [];
  }
};

const getAllExam=async()=>{
  const res=await studentGetHistoryExamAPI(userStore.getUserInfo().account)

  if(res.data.code===200)
  {
    console.log(res.data.data)
    examList.value=res.data.data
  }
  else {
    ElMessage.error(res.data.message)
  }
}

const addNotes=()=>{

  if(currentExamList.value.length===0)
  {
    //说明
  }
  else {

  }
  dialogVisible = false
}



onMounted(()=>{
  getAllExam()
})

</script>

<style lang="scss" scoped>
.button{
    margin-top:20px;
}
.bigBox{
    // margin-top: 20px;
    display: flex;
    
    .left{
        min-width: 300px;
        // background-color: aqua;
        box-sizing: border-box;
        padding:20px;
        height: 80vh;
        font-size: 18px;

        .title{
            display: flex;
            align-items: center;
            margin-bottom: 10px;
        }

        a{
            text-decoration: none;
            color:black;
        }

        .router-link-active{
            background-color: #eceffe;
            display: flex;
        }

        .notes div{
            display: flex;
            align-items: center;
            padding-left:20px;
            height: 40px;
            line-height: 40px;
            // background-color: #eceffe;

            .wrongBookTitle{
                overflow:hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                -o-text-overflow:ellipsis;
            }

            .editIcon{
                display: none;
            }

            &:hover{
                .editIcon{
                    display: block;
                }
            }
        }
    }

    .right{
        margin-left: 20px;
    }
}
</style>