import http from '@/utils/http.js'

export const getAllExaminationAPI=(page)=>{
    return http({
        url:"/examPaper/getAllE",
        method:"GET",
        params:{
            page,
            pageSize:2
        }
    })
}

export const getEByKeyAPI=(key,page)=>{
    return http({
        url:'/examPaper/getEByKey',
        method:'GET',
        params:{
            key,page,pageSize:2
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

export const getPaperAPI=(examPaperId)=>{
    return http({
        url:'/examPaper/getPages',
        method:'GET',
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


export const teacherGetAllExamAPI=(examPaperId)=>{
    return http({
        url:"/examPaper/getAllEP",
        method:'GET',
        params:{
            examPaperId
        }
    })
}

export const schoolAdminGetAllPapersAPI=(page,pageSize)=>{
    return http({
        url:'/examPaper/getSAE',
        method:'GET',
        params:{
            page,pageSize
        }
    })
}

export const schoolAdminGetAllExamAPI=(examId)=>{
    return http({
        url:"/examPaper/getSEP",
        method:'GET',
        params:{
            examId
        }
    })
}