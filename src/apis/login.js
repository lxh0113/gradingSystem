import http from '@/utils/http.js'

export const loginAPI=(account,password)=>{
    return http({
        url:'/user/login',
        method:'GET',
        params:{
            account,password
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

export const modifyAPI=(email,password,code)=>{
    return http({
        url:'/user/forgetPW',
        method:'POST',
        params:{
            email,password,code
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