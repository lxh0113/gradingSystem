import SparkMD5 from 'spark-md5'
import { uploadBigAPI,getChunkAPI } from '@/apis/upload.js'
import { ElMessage } from 'element-plus';

var chunkSize = 1 * 1024 * 1024;
let  fileMd5=null;

// export const fileMd5=null

export const calculateFileMD5=(file)=>{
   
    return new Promise((resolve, reject) => {
        getFileMd5(file)
            .then((md5) => {
                console.info(md5);
                resolve(md5); // 解析计算得到的 MD5 值
            })
            .catch((error) => {
                reject(error); // 如果计算 MD5 值出错，拒绝 Promise
            });
    });
}

export const uploadFile=(file)=> {
    
    if (!file) return;
    
    console.log('计算md5值')
    
    getFileMd5(file.raw).then((md5) => {
        
        fileMd5=md5;
        console.info(fileMd5)

        console.log("看看我到了吗")

        //保存文件名称
        let fileName = file.name;
        file=file.raw
        //获取到文件
        let fileArr = sliceFile(file);

        fileArr.forEach((e, i) => {
            //创建formdata对象
            let data = new FormData();
            data.append('chunkSize',chunkSize)
            data.append('totalNumber',fileArr.length)
            data.append('chunkNumber',i)
            data.append("md5", fileMd5)
            data.append("file", new File([e],fileName));
            upload(data);
        })
    })


}

function getFileMd5(file) {
    return new Promise((resolve, reject) => {
        let fileReader = new FileReader()
        fileReader.onload = function (event) {
            let fileMd5 = SparkMD5.ArrayBuffer.hash(event.target.result)
            resolve(fileMd5)
        }
        fileReader.readAsArrayBuffer(file)
    })
}

async function upload(chunkSize,totalNumber,chunkNumber,md5,data) {

    const res=await uploadBigAPI(chunkSize,totalNumber,chunkNumber,md5,data);
    // if(res.data.code===200)
    // {
    //     ElMessage.success("上传成功分片")
    // }
    // else{
    //     ElMessage.error("上传失败")
    // }

    // var xhr = new XMLHttpRequest();
    // // 当上传完成时调用
    // xhr.onload = function () {
    //     if (xhr.status === 200) {
    //         uploadResult.append( '上传成功分片：' +data.get("chunkNumber")+'\t' ) ;
    //     }
    // }
    // xhr.onerror = function () {
    //     uploadResult.innerHTML = '上传失败';
    // }
    // // 发送请求
    // xhr.open('POST', '/uploadBig', true);
    // xhr.send(data);

    
 }

async function checkFile() {

    const res=await getChunkAPI(fileMd5);

    if(res.data.code===200)
    {
        ElMessage.success("检测文件完整性成功")
    }
    else{
        ElMessage.error("检测文件完整性失败")
    }

    // var xhr = new XMLHttpRequest();
    // // 当上传完成时调用
    // xhr.onload = function () {
    //     if (xhr.status === 200) {
    //         checkFileRes.innerHTML = '检测文件完整性成功:' + xhr.responseText;
    //     }
    // }
    // xhr.onerror = function () {
    //     checkFileRes.innerHTML = '检测文件完整性失败';
    // }
    // // 发送请求
    // xhr.open('POST', '/checkFile', true);
    // let data = new FormData();
    // data.append("md5", fileMd5)
    // xhr.send(data);
}



function sliceFile(file){
    const chunks = [];
    let start = 0;
    let end;
    while (start < file.size) {
        end = Math.min(start + chunkSize, file.size);
        chunks.push(file.slice(start, end));
        start = end;
    }
    return chunks;
}
