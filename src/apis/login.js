import http from '@/utils/http.js'

export const loginAPI=(account,password)=>{
    return http({
        url:'/user/login',
        method:'GET',
        data:{
            account,email:null,password
        }
    })
}

export const registerAPI=(email,code,password)=>{
    return http({
        url:'/user/register',
        method:'POST',
        data:{
            email,code,password
        }
    })
}

export const getCodeAPI=(email)=>{
    return http({
        url:'/user/vCode',
        method:'GET',
        params:{email}
    })
}