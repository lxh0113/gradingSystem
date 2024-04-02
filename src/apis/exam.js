import http from '@/utils/http.js'

export const getMaxMinAveAPI=(testPaperId)=>{
    return http({
        url:'/examAnalysis/class/'+testPaperId,
        method:"GET"
    })
}

export const teacherGetAllClassAPI=(teacherAccount)=>{
    return http({
        url:'/examAnalysis/class/'+teacherAccount,
        method:'GET'
    })
}

export const getHistoryTestDetailsAPI=(schoolAdminAccount)=>{
    return http({
        url:"/examAnalysis/examDetails/"+schoolAdminAccount,
        method:"GET"
    })
}

export const getAllStudentInfoAPI=(testPaperId,classId)=>{
    return http({
        url:"/examAnalysis/classAllStudent",
        method:"GET",
        params:{
            testPaperId,classId
        }
    })
}

export const getClassHistoryTestDataAPI=(classId)=>{
    return http({
        url:"/examAnalysis/classHistoryExam/"+classId,
        method:"GET"
    })
}

export const getMyClassAPI=(teacherAccount)=>{
    return http({
        url:'/examAnalysis/my-class/'+teacherAccount,
        method:'GET'
    })

}

export const schoolAdminGetAllExamDetailsAPI=(schoolAdminAccount)=>{
    return http({
        url:'/examAnalysis/examDetails/'+schoolAdminAccount,
        method:'GET'
    })
}

export const teacherGetAllClassDetailsAPI=(teacherAccount)=>{
    return http({
        url:'/examAnalysis/teacher-class/'+teacherAccount,
        method:'GET'
    })
}

export const getAllClassAPI=(schoolAdminAccount)=>{
    return http({
        url:'/examAnalysis/all-class/'+schoolAdminAccount,
        method:'GET'
    })
}

export const getAllExamAPI=(account)=>{
    return http({
        url:'/examAnalysis/all-exam/'+account,
        method:'GET'
    })
}

export const getSchoolAllExamAPI=(account)=>{
    return http({
        url:'/examAnalysis/all-exam/'+account,
        method:'GET'
    })
}

export const getAClassDetailsAPI=(classId)=>{
    return http({
        url:'/examAnalysis/classHistoryExam/'+classId,
        method:'GET'
    })
}

export const getExamDetailsByTestIdAPI=(data)=>{
    return http({
        url:'/examAnalysis/teacher-class-by-examId',
        method:'POST',
        data
    })
}

export const schoolAdminGetExamByIdsAPI=(data)=>{
    return http({
        url:'/examAnalysis/schoolAdmin-examId',
        method:'POST',
        data
    })
}

export const studentGetHistoryExamAPI=(studentAccount)=>{
    return http({
        url:'/examAnalysis/my-score-history/'+studentAccount,
        method:'GET'
    })
}

export const studentGetScoreStageAPI=(studentAccount)=>{
    return http({
        url:'/examAnalysis/my-score-stage/'+studentAccount,
        method:'GET'
    })
}