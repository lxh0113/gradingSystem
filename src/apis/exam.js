import http from '@/utils/http.js'

export const getMaxMinAveAPI=(testPaperId)=>{
    return http({
        url:'/examAnalysis/class/'+testPaperId,
        method:"GET"
    })
}

export const getHistoryTestDetailsAPI=(schoolId)=>{
    return http({
        url:"/examAnalysis/examDetails/"+schoolId,
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
