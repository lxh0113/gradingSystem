// axios基础的封装
import axios from 'axios'
import { ElMessage } from 'element-plus'
// import router from '@/router/index.js'
import {useUserStore} from "@/stores/userStore.js";
import { useRoute,useRouter } from 'vue-router';

const route=useRoute()

const http = axios.create({
    baseURL: 'http://localhost:8079',
    timeout: 5000
    // headers: {
    //     'Content-type': 'application/json',
    //     'contentType': 'application/x-www-form-urlencoded'
    // }
})
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.withCredentials = true;

// 拦截器

// axios请求拦截器


http.interceptors.request.use(config => {

    const userStore=useUserStore()
    const user=userStore.getUserInfo()
    if(user!==null){
        // console.log(user.shortToken)
        config.headers.set("Authorization",user.shortToken)
    }
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
http.interceptors.response.use(res => res, e => {
    const userStore=useUserStore()
    const router=useRouter()


    console.log(e)
    console.log(e.response)
    const status=e.response.status
    switch (status){
       case 400 :
            ElMessage({type:'warning',message:e.response.data.message})
            break
        case 401 :
            refreshToken()
            return resend(e.response.config);
            break
        case 402 :
            userStore.clearInfoAndToken()
            router.push('/login')
            break
    }

    return Promise.reject(e)
})
const resend= (req)=>{
    let originalRequest=req
    return http({
        method:originalRequest.method,
        url:originalRequest.url,
        data:originalRequest.data
    })
}
const refreshToken=()=>{
    const userStore=useUserStore()
    userStore.changeToken()
}
export default http
