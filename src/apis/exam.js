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