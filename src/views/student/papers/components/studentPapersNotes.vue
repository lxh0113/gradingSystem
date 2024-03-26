<template>
    <div class="button">
        <el-button size="large" :icon="Plus" @click="dialogVisible = true">
            添加错题本
        </el-button>
    </div>
    <el-dialog v-model="dialogVisible" title="新建错题本" width="400" :before-close="handleClose">
        <el-input size="large" style="width:320px;margin:20px;" placeholder="请输入标题"></el-input>
        <el-select size="large" v-model="value" multiple clearable collapse-tags placeholder="Select" popper-class="custom-header" :max-collapse-tags="1" style="width: 320px;margin:20px;">
          <template #header>
            <el-checkbox v-model="checkAll" :indeterminate="indeterminate" @change="handleCheckAll">
              All
            </el-checkbox>
          </template>
          <el-option v-for="item in cities" :key="item.value" :label="item.label" :value="item.value"/>
        </el-select>
      <template #footer>
        <div class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">
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
            <router-link to="/student/papers/notes/1">
                <div>
                    <el-icon style="color:#3a63f3"><Notebook /></el-icon>
                    <span class="wrongBookTitle">
                        &nbsp;&nbsp;
                        第一次月考
                    </span>
                    <el-icon class="editIcon" style="color:#3a63f3;margin-left: 20px;"><Edit /></el-icon>
                    <el-icon class="editIcon" style="color:#3a63f3;margin-left: 10px"><Delete /></el-icon>
                </div>
            </router-link>
            <router-link to="/student/papers/notes/2">
                <div>
                    <el-icon style="color:#3a63f3"><Notebook /></el-icon>
                    <span>
                        &nbsp;&nbsp;
                        第二次月考
                    </span>
                </div>
            </router-link>
            <router-link to="/student/papers/notes/3">
                <div>
                    <el-icon style="color:#3a63f3"><Notebook /></el-icon>
                    <span>
                        &nbsp;&nbsp;
                        第三次月考
                    </span>
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
import { ref, watch } from 'vue';

const dialogVisible = ref(false)

let checkAll = ref(false);
let indeterminate = ref(false);
let value = ref([]);
let cities = ref([
  {
    value: 'Beijing',
    label: 'Beijing',
  },
  {
    value: 'Shanghai',
    label: 'Shanghai',
  },
  {
    value: 'Nanjing',
    label: 'Nanjing',
  },
  {
    value: 'Chengdu',
    label: 'Chengdu',
  },
  {
    value: 'Shenzhen',
    label: 'Shenzhen',
  },
  {
    value: 'Guangzhou',
    label: 'Guangzhou',
  },
]);

watch(value, (val) => {
  if (val.length === 0) {
    checkAll.value = false;
    indeterminate.value = false;
  } else if (val.length === cities.value.length) {
    checkAll.value = true;
    indeterminate.value = false;
  } else {
    indeterminate.value = true;
  }
});

const handleCheckAll = (val) => {
  indeterminate.value = false;
  if (val) {
    value.value = cities.value.map((_) => _.value);
  } else {
    value.value = [];
  }
};

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