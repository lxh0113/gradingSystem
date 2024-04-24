<template>
    <div class="bigBox">
        <div class="left">
            <div class="title">
              扫描参数
            </div>
            <el-form size="large" :model="form" label-width="auto" style="margin-top:20px;margin-left:20px;margin-right:20px;max-width: 600px" label-position="left">
              <el-form-item label="是否显示组件界面">
                <el-switch v-model="form.show" />
              </el-form-item>
              <el-form-item label="扫描设备">
                <el-select v-model="form.device" placeholder="请选择你的设备">
                  <el-option v-for="(item,index) in form.devices" :label="item" :value="index" />
                </el-select>
              </el-form-item>
              <el-form-item label="输入分辨率">
                <el-col :span="11">
                  <el-input v-model="form.dpi_x"></el-input>
                </el-col>
                <el-col :span="2" class="text-center">
                  <el-icon><CloseBold /></el-icon>
                </el-col>
                <el-col :span="11">
                  <el-input v-model="form.dpi_y"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="色彩类型">
                <el-select v-model="form.colorMode">
                  <el-option label="彩色" value="RGB" />
                  <el-option label="灰度" value="GRAY" />
                  <el-option label="黑白" value="BW" />
                </el-select>
              </el-form-item>
          
              <el-form-item label="自动进纸模式">
                <el-switch v-model="form.feedEnable" />
              </el-form-item>
              <el-form-item label="自动装填纸张">
                <el-switch v-model="form.autoFeed" />
              </el-form-item>
              <el-form-item label="双面模式">
                <el-switch v-model="form.dupxMode" />
              </el-form-item>
              <el-form-item label="自动纠错">
                <el-switch v-model="form.autoDeskew" />
              </el-form-item>
              <el-form-item label="自动边框检测">
                <el-switch v-model="form.autoBorderDetection" />
              </el-form-item>
          
              <el-form-item >
                <el-button size="large" type="primary" @click="startScan">扫描</el-button>
              </el-form-item>
            </el-form>
        </div>
        <div class="right">
            <img v-for="item in imageUrl" :src="item">
        </div>
    </div>
</template>

<script setup>
import { nextTick, ref } from 'vue'

let form = ref({
  dpi_x: 300,
  dpi_y: 300,
  show:false,
  device:'HP448B4F(HP OffceJet Pro 8720)',
  devices:['HP448B4F(HP OffceJet Pro 8720)'],
  colorMode:'RGB',
  feedEnable: false,
  autoFeed:false,
  dupxMode:false,
  autoDeskew:false,
  autoBorderDetection:false
})

const imageUrl = ref([]);

const startScan = async () => {
    await addImageUrl('https://yuejuanpt.oss-cn-zhangjiakou.aliyuncs.com/%E8%AF%95%E5%8D%B7/80AA2824B86BD3F97DAD128D9D09B2C5.png');
    await addImageUrl('https://yuejuanpt.oss-cn-zhangjiakou.aliyuncs.com/%E8%AF%95%E5%8D%B7/7464E650E4913206F4D288C6612CBF88.png');
    await addImageUrl('https://yuejuanpt.oss-cn-zhangjiakou.aliyuncs.com/%E8%AF%95%E5%8D%B7/0CAA7D39B9155AFC932FD4E6955836F6.png');
    await addImageUrl('https://yuejuanpt.oss-cn-zhangjiakou.aliyuncs.com/%E8%AF%95%E5%8D%B7/B8445BCDB3900AA7E8907F7BD395B140.png');
};

const addImageUrl = async (url) => {
    await new Promise((resolve) => {
        setTimeout(() => {
            imageUrl.value.push(url);
            resolve();
        }, 1000);
    });
};

</script>

<style lang="scss" scoped>
.bigBox{
    background-color: #fff;
    padding:20px;
    box-sizing: border-box;
    width: 100%;
    height: 100vh;

    display: flex;

    .left{
        min-width: 400px;
    }

    .right{
        flex:1;
        min-width: 500px;
        margin-left: 20px;

        border: none;
        box-shadow: 0 12px 5px -10px rgba(0,0,0,0.1), 0 0 4px 0 rgba(0,0,0,0.1);
        -webkit-box-shadow: 0 12px 5px -10px rgba(0,0,0,0.1), 0 0 4px 0 rgba(0,0,0,0.1);
        border-radius: 5px;

        padding:30px;
        box-sizing: border-box;

        img{
            width: 200px;
            height:300px;

            margin-right:20px;
            margin-bottom: 20px;
        }
    }

    .title{
      background-color: #ebeffe;
      color:#3c62f3;
      font-weight: bold;
      height:50px;
      font-size:16px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
}
</style>