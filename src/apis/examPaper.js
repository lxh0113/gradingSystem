import http from '@/utils/http.js'

export const getAllExaminationAPI=()=>{
    return http({
        url:"/examPaper/getAllE",
        method:"GET"
    })
}

export const getEByKeyAPI=(key)=>{
    return http({
        url:'/examPaper/getEByKey',
        method:'GET',
        params:{
            key
        }
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

export const getALLMyPaperAPI=()=>{
    return http({
        url:"/examPaper/getMyAllE",
        method:"GET"
    })
}