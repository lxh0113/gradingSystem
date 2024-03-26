import http from '@/utils/http.js'

export const uploadBigAPI=(data)=>{
    return http({
        url:'/testPaper/uploadBig',
        method:'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        data
    })
}

export const getChunkAPI=(md5)=>{
    return http({
        url:'/testPaper/checkFile',
        method:'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        params:{
            md5
        }
    })
}

export const compressAPI=(examTitle,blankTestPaper,scoreRule,file)=>{
    return http({
        url:'/testPaper/extract',
        method:'POST',
        params:{
            examTitle
        },
        headers: {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        data:{
            blankTestPaper,
            scoreRule,
            file
        }
    })
}

export const uploadBlankPapersAPI=(examTitle,data)=>{
    return http({
        url:"/testPaper/upload-blankTestPaper",
        method:'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        params:{
            examTitle
        },
        data
    })
}

export const uploadZipAPI=(testPaperId,data)=>{
    return http({
        url:'/testPaper/extract-test-paper',
        method:'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        params:{
            testPaperId
        },
        data
    })
}

export const uploadAvatarAPI=(account,data)=>{
    return http({
        url:'/testPaper/uploadAvatar',
        method:'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        params:{
            account
        },
        data
    })
}

export const checkFileAPI=(testPaperId,md5)=>{
    return http({
        url:'/testPaper/checkFile',
        method:'POST',
        params:{
            testPaperId,
            md5
        }
    })
}