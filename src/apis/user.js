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

export const setTagAPI=(account,styleTag)=>{
    return http({
        url:'/user/setTag',
        method:'POST',
        params:{
            account,
            styleTag
        }
    })
}

export const studentGetAllParentsAPI=()=>{
    return http({
        url:'/user/getMyParents',
        method:'GET'
    })
}

export const parentsGetAllChildrenAPI=()=>{
    return http({
        url:'/user/getMyChildren',
        method:'GET'
    })
}

export const parentsSearchChildrenAPI=(condition)=>{
    return http({
        url:'/user/searchChild',
        method:'GET',
        params:{
            condition
        }
    })
}

export const studentGetSchoolAPI=()=>{
    return http({
        url:'/user/getSchoolInf',
        method:'GET'
    })
}

export const studentGetParentsApplicationAPI=()=>{
    return http({
        url:'/user/getMyParents',
        method:'GET'
    })
}

export const studentGetSchoolInfoAPI=()=>{
    return http({
        url:'/user/getSchoolInf',
        method:'GET'
    })
}

export const messageKnowAPI=(newId)=>{
    return http({
        url:'/user/updateState',
        method:'GET',
        params:{
            newId
        }
    })
}

export const getBindParentsInfoAPI=(account)=>{
    return http({
        url:'/user/getParentsInfo',
        method:"GET",
        params:{
            account
        }
    })
}

export const bindParentsAPI=(newId,state)=>{
    return http({
        url:'/user/parentalBinding',
        method:'POST',
        params:{
            newId,state
        }
    })
}
