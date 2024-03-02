import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import ElementPlus  from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import './assets/icon/iconfont.css'
// import './styles/project/index.scss' as *;

// import {animated} from "animate.css";
// import {WOW} from 'wowjs'
import 'wowjs/css/libs/animate.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 导入echarts
import * as echarts from 'echarts';//引入echarts

const app = createApp(App)

app.use(createPinia().use(piniaPluginPersistedstate))
app.use(ElementPlus)
app.use(router)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

// echarts 使用
app.config.globalProperties.$echarts = echarts;//全局使用
// app.use(animated);

// app.mixin({
//     beforeCreate() {
//       this.$wow = new WOW(); 
//     }
//   });

app.mount('#app')
