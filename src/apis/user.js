import http from '@/utils/http.js'

export const changeNameAPI=(name)=>{
    return http({
        url:'/user/changeName',
        method:'POST',
        params:{
            name
        }
    })
}

export const changeAvatarAPI=(avatar)=>{
    return http({
        url:'/user/changeAvatar',
        method:'POST',
        data:{
            avatar
        }
    })
}

export const changeEmail=()=>{
    return http({
        
    })
}

export const bindEmailAPI=(email,code)=>{
    return http({
        url:'/user/emailBind',
        method:'POST',
        params:{
            email,code
        }
    })
}