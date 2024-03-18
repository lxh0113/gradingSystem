import http from '@/utils/http.js'

export const getAllTestAPI=()=>{
    return http({
        url:"/examPaper/getALLE",
        method:"GET"
    })
}

export const getALLStudentPaperAPI=(examPaperId)=>{
    return http({
        url:"/examPaper/getAllEP",
        method:"GET",
        params:{
            examPaperId
        }
    })
}