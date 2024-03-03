// axios基础的封装
import axios from 'axios'
import { ElMessage } from 'element-plus'
// import router from '@/router/index.js'
import {useUserStore} from "@/stores/user.js";
const http = axios.create({
    baseURL: 'http://localhost:8079/',
    timeout: 5000
})
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
// axios.defaults.withCredentials = false;

// 拦截器

// axios请求拦截器
const user=JSON.parse(localStorage.getItem("user"))
http.interceptors.request.use(config => {
    if(user!==null){
        console.log(user.token)
        config.headers.set("Authorization",user.token.shortToken)
    }
    return config
}, e => Promise.reject(e))

// axios响应式拦截器
http.interceptors.response.use(res => res, e => {
    const userStore=useUserStore()
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
            router.push("/login")
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
    user.token.shortToken=user.token.refreshToken;
}
export default http
