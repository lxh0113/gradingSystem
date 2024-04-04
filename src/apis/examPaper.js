import http from '@/utils/http.js'

export const getAllExaminationAPI=(page)=>{
    return http({
        url:"/examPaper/getAllE",
        method:"GET",
        params:{
            page,
            pageSize:4
        }
    })
}

export const getEByKeyAPI=(key,page)=>{
    return http({
        url:'/examPaper/getEByKey',
        method:'GET',
        params:{
            key,page,pageSize:4
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

export const studentGetAllExamAPI=(page,pageSize)=>{
    return http({
        url:'/examPaper/getMyAllE',
        method:'GET',
        params:{
            page,pageSize
        }
    })
}

export const studentGetAllExamByKeyAPI=(page,pageSize,condition)=>{
    return http({
        url:'/examPaper/getMyEByC',
        method:'GET',
        params:{
            page,pageSize,condition
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

export const parentsGetChildrenPapersAPI=(page,pageSize,account)=>{
    return http({
        url:"/examPaper/getChildAllEP",
        method:'GET',
        params:{
            page,pageSize,account
        }
    })
}

export const parentsGetChildrenPapersByKeyAPI=(page,pageSize,condition,account)=>{
    return http({
        url:'/examPaper/getChildEByC',
        method:'GET',
        params:{
            page,pageSize,condition,account
        }
    })
}

export const teacherModifyPapersAPI=(examPaperId,pageId,score,content)=>{
    return http({
        url:'/examPaper/revContentSE',
        method:'POST',
        data:{
            examPaperId,pageId,score,content
        }
    })
}

export const teacherModifyCommentAPI=(studentId,comment)=>{
    return http({
        url:'/examPaper/editComment',
        method:'GET',
        params:{
            studentId,comment
        }
    })
}