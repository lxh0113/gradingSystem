<template>
  <div class="bigBox">
    <div class="top">
        <div class="searchInput">
            <el-input style="max-width: 240px;height:40px;" :prefix-icon="Search" placeholder="搜索id或者学号姓名"></el-input>
        </div>
        <div class="button">
            <el-upload style="margin-right: 15px;"
              :ref="(el) => handleSetUploadRefMap(el)"
              action=""
              :http-request="httpExcelRequest"
              :limit="1"
              :show-file-list="false"
              class="uploadExcelContent"
              :data={}
            >
              <div title="导入excel" style="cursor: pointer;" >
                <el-button size="large" :icon="Download">导入excel</el-button>
              </div>
            </el-upload>
            <el-button size="large" :icon="Upload" @click="exportBtn">导出</el-button>
            <el-button size="large" :icon="Plus">添加</el-button>
            <el-button size="large" :icon="Delete">删除</el-button>
            <el-button size="large" :icon="Edit">编辑</el-button>
        </div>
    </div>
    <div class="bottom">

      <el-table
        size="large"
        ref="exportTableRef"
        :data="list"
        :cell-style="{ textAlign: 'center' }"
        :header-cell-style="{ 'text-align': 'center' }"
      >
          <el-table-column prop="number" label="学号" />
          <el-table-column prop="name" label="姓名" />
          <el-table-column prop="grade" label="年级" />
          <el-table-column prop="class" label="班级" />
      </el-table>

    </div>
  </div>
</template>

<script setup>
import { Delete, Download, Edit, Plus, Search, Upload } from '@element-plus/icons-vue';
import * as xlsx from 'xlsx' 
import {ElMessage} from 'element-plus'
import { ref } from 'vue'
const uploadRefMap = ref({});
// const excelList = ref([])

const exportTableRef = ref(null);
const list = ref([
  {"number": 1, "name": "张三", "grade": "大一", "class": "一班"},
  {"number": 2, "name": "李四", "grade": "大一", "class": "一班"},
  {"number": 3, "name": "王五", "grade": "大一", "class": "一班"},
  {"number": 4, "name": "赵六", "grade": "大一", "class": "一班"},
  {"number": 5, "name": "钱七", "grade": "大一", "class": "一班"},
  {"number": 6, "name": "孙八", "grade": "大一", "class": "一班"},
  {"number": 7, "name": "周九", "grade": "大一", "class": "一班"},
  {"number": 8, "name": "吴十", "grade": "大一", "class": "一班"},
  {"number": 9, "name": "郑十一", "grade": "大一", "class": "一班"},
  {"number": 10, "name": "王十二", "grade": "大一", "class": "一班"},
  {"number": 11, "name": "陈十三", "grade": "大一", "class": "一班"},
  {"number": 12, "name": "杨十四", "grade": "大一", "class": "一班"},
  {"number": 13, "name": "朱十五", "grade": "大一", "class": "一班"},
  {"number": 14, "name": "秦十六", "grade": "大一", "class": "一班"},
  {"number": 15, "name": "刘十七", "grade": "大一", "class": "一班"},
  {"number": 16, "name": "何十八", "grade": "大一", "class": "一班"},
  {"number": 17, "name": "谢十九", "grade": "大一", "class": "一班"},
  {"number": 18, "name": "魏二十", "grade": "大一", "class": "一班"},
  {"number": 19, "name": "范二十一", "grade": "大一", "class": "一班"},
  {"number": 20, "name": "徐二十二", "grade": "大一", "class": "一班"}
]
);

const exportBtn = () => {
  const tableDom = exportTableRef.value?.$el;
  if (!tableDom) {
    return;
  }
  
  const wb = xlsx.utils.table_to_book(tableDom);
  xlsx.writeFile(wb, '表格数据.xlsx');
};

 
// 动态设置upload Ref
const handleSetUploadRefMap = (el) => {
  if (el) {
    uploadRefMap.value[`Upload_Ref`] = el
  }
}
 
// 文件上传自定义
const  httpExcelRequest = async (op) => {
  // 获取除文件之外的参数，具体根据实际业务需求来
  console.log(op.data)
  // 获取上传的excel  并解析数据
  let file = op.file
  let dataBinary = await readFile(file);
  let workBook = xlsx.read(dataBinary, { type: "binary", cellDates: true })
  let workSheet = workBook.Sheets[workBook.SheetNames[0]]
  const excelData = xlsx.utils.sheet_to_json(workSheet,{ header: 1 })
  list.value = excelData.map((item)=>{
    return {
      number:item[0],
      name:item[1],
      grade:item[2],
      class:item[3]
    }
  })
  console.log(excelData)
  if(uploadRefMap.value[`Upload_Ref`]){
    uploadRefMap.value[`Upload_Ref`].clearFiles();
  }
}
 
const readFile = (file) => {
return new Promise((resolve) => {
  let reader = new FileReader()
  reader.readAsBinaryString(file)
  reader.onload = (ev) => {
    resolve(ev.target?.result)
  }
})
}

</script>

<style lang="scss" scoped>
.bigBox{
    box-sizing: border-box;
    width: 100%;
    height: 100vh;

    .top{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top:20px;

        .searchInput{
            display: flex;
            height: 60px;
            justify-content: flex-start;
            // margin-top:20px;
        }

        .button{
            display: flex;
            height: 60px;
            justify-content: flex-end;
            margin-right: 20px;
        }
    }

    .bottom{
        // margin-top:20px;

        table{
            width: 100%;
            border-collapse:collapse;
            // border-top:1px solid #c4c4c4;

            tr{
                height: 60px;
            }
        }

        table,tr,td{
            border-bottom:1px solid #ebeffe;
            text-align: center;
        }
    }

    .page{
        margin-top: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>