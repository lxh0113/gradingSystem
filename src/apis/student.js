import http from '@/utils/http.js'

export const getStudentsAPI=(classId)=>{
    return http({
        url:'/teacher/getStudents',
        method:'GET',
        params:{
            classId
        }
    })
}