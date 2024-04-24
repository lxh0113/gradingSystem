<template>
    <div>
      <!-- 上传excel -->
      <el-upload
        :ref="(el) => handleSetUploadRefMap(el)"
        action=""
        :http-request="httpExcelRequest"
        :limit="1"
        :show-file-list="false"
        class="uploadExcelContent"
        :data={}
      >
        <div title="导入excel" style="cursor: pointer;" >
          <div>导入excel</div>
        </div>
      </el-upload>
 
      <!-- 列表 -->
      <div class="excel-content"  v-for="(rowItem,rowIndex) in excelList" :key="rowIndex">
        <div class="comp" v-for="(comp,compIndex) in rowItem" :key="compIndex">{{comp}}</div>
      </div>
    </div>
</template>
 
<script setup>
import * as xlsx from 'xlsx' 
import {ElMessage} from 'element-plus'
import { ref } from 'vue'
const uploadRefMap = ref({});
const excelList = ref([])
 
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
  excelList.value = excelData
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
.uploadExcelContent{
  display: flex;
  flex-direction: row;
}
.excel-content{
  display: flex;
  flex-direction: row;
  align-items: center;
  .comp{
    width: 200px;
    font-size: 12px;
  }
}
</style>