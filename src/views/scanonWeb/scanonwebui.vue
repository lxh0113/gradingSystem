<template>
  <div class="scanonweb_panel" style="display: flex;">
    <div>
      <div class="title">
        扫描参数
      </div>
      <!-- <el-form size="large" :model="form" label-width="auto" style="margin-top:20px;margin-left:20px;margin-right:20px;max-width: 600px" label-position="left">
        <el-form-item label="是否显示组件界面">
          <el-switch v-model="form.show" />
        </el-form-item>
        <el-form-item label="扫描设备">
           <label for="devices">扫描设备：</label>
          <select class="" id="devices"></select>
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
      </el-form> -->


    

    <form>
      <div class="block">
        <label for="showUI">是否显示组件界面：</label>
        <select id="showUI">
          <option value="true">显示</option>
          <option value="false" selected>不显示</option>
        </select>
      </div>
      <div class="block">
        <label for="devices">扫描设备：</label>
        <select id="devices"></select>
      </div>
      <div class="block">
        <label for="dpi_x">设备输入分辨率：</label>
        <input type="text" id="dpi_x" v-model="dpi_x" style="width: 25px;" /> X
        <input type="text" id="dpi_y" v-model="dpi_y" style="width: 25px;" />
      </div>
      <div class="block">
        <label for="colorMode">色彩类型：</label>
        <select id="colorMode">
          <option value="RGB" selected>彩色</option>
          <option value="GRAY">灰度</option>
          <option value="BW">黑白</option>
        </select>
      </div>
      <div class="block">
        <label for="showDialog">是否显示内置对话框：</label>
        <select id="showDialog">
          <option value="true">显示</option>
          <option value="false" selected>不显示</option>
        </select>
      </div>
      <div class="block">
        <label for="feedEnable">自动进纸模式：</label>
        <select id="feedEnable">
          <option value="true">是</option>
          <option value="false" selected>否</option>
        </select>
      </div>
      <div class="block">
        <label for="autoFeed">自动装填纸张：</label>
        <select id="autoFeed">
          <option value="true">是</option>
          <option value="false" selected>否</option>
        </select>
      </div>
      <div class="block">
        <label>双面模式：</label>
        <select id="dupxMode">
          <option value="true">是</option>
          <option value="false" selected>否</option>
        </select>
      </div>
      <div class="block">
        <label>自动纠偏：</label>
        <select id="autoDeskew">
          <option value="true">是</option>
          <option value="false" selected>否</option>
        </select>
      </div>
      <div class="block">
        <label>自动边框检测：</label>
        <select id="autoBorderDetection">
          <option value="true">是</option>
          <option value="false" selected>否</option>
        </select>
      </div>

      <div class="block">
        <el-button size="large" type="primary" @click="startScan">扫描</el-button>
         <!-- <button @click="startScan">点击</button> -->
      </div>
    </form>
    </div>

    <div style="width: 100%;float:right;height: 90%;">
			<iframe :src="url" width="100%" height="99%"
				id="pdf_viewer"></iframe>
		</div>
  </div>
</template>


<script>
import ScanOnWeb from './scanonweb.js';
import { reactive,ref } from 'vue'
import { CloseBold } from '@element-plus/icons-vue'
export default{
  name:'test',
  data:function() {
    
    let url=ref('http://127.0.0.1:1134/pdf')
    
    return {
      showUI: 'false',
      devices: '',
      dpi_x: 300,
      dpi_y: 300,
      colorMode:'RGB',
      // form,
      url
    }
  },
  props:{
  },
  created: function () {

    // let self = this;

    this.scanonweb = new ScanOnWeb();
    //响应返回扫描设备列表的回调函数

    // console.log(this.scanonweb)

    this.scanonweb.onGetDevicesListEvent = function (msg) {
      console.log(msg.devices);

      var deviceListDom = document.getElementById('devices');

      //clear devices list
      deviceListDom.innerHTML = "";
      for (var i = 0; i < deviceListDom.childNodes.length; i++) {
        ardeviceListDomea.removeChild(deviceListDom.options[0]);
        deviceListDom.remove(0);
        deviceListDom.options[0] = null;
      }

      //add devices info
      for (var i = 0; i < msg.devices.length; ++i) {
        var opt = document.createElement("option");
        opt.innerHTML = msg.devices[i];
        if (i == msg.currentIndex) {
          opt.selected = true;
        }
        deviceListDom.appendChild(opt);
      }

      // this.data.form.value.devices=msg.devices
      // this.form.value.dss// 输出 form 的值

			//配置授权信息
			var licenseMode=3;//4代表逐台机器绑定授权信息授权方式 //3代表不限用户授权模式
			var licenseKey1="";//授权许可信息
			var licenseKey2="";//授权许可信息
			var checkLicenseUrl="";//不限用户模式，这里保持为空
			//this.setLicenseKey(licenseMode,licenseKey1,licenseKey2,checkLicenseUrl);
    }

    // //响应扫描完成事件
    this.scanonweb.onScanFinishedEvent = function (msg) {
      document.getElementById('pdf_viewer').contentWindow.location.reload();
    }
  },
  beforeDestroy: function () {
    this.scanonweb.closeWebSocket();
  },
  methods: {
    //开始扫描
    startScan: function () {
      if (document.getElementById("devices").selectedIndex == -1) {
        alert('请先刷新或者选中要使用的扫描设备后再开始扫描!');
        return;
      }

      // alert(this.data)

      //以下获取界面中的扫描参数设定
      this.scanonweb.scaner_work_config.dpi_x = dpi_x.value;
      this.scanonweb.scaner_work_config.dpi_y = dpi_y.value;
      this.scanonweb.scaner_work_config.deviceIndex = document.getElementById("devices").selectedIndex;
      this.scanonweb.scaner_work_config.colorMode=document.getElementById("colorMode").value;
      this.scanonweb.scaner_work_config.showDialog = document.getElementById("showDialog").value;
      this.scanonweb.scaner_work_config.autoFeedEnable = document.getElementById("feedEnable").value;
      this.scanonweb.scaner_work_config.autoFeed = document.getElementById("autoFeed").value;
      this.scanonweb.scaner_work_config.dupxMode = document.getElementById("dupxMode").value;
      this.scanonweb.scaner_work_config.autoDeskew = document.getElementById("autoDeskew").value;
      this.scanonweb.scaner_work_config.autoBorderDetection = document.getElementById("autoBorderDetection").value;

      //开始发送扫描指令
      this.scanonweb.startScan();
    }
  }
}
</script>

<style>
.scanonweb_panel {
  width: 100%;
  height: 100%;
  background-color: #fff;

  box-sizing: border-box;
  /* padding:20px; */
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

</style>