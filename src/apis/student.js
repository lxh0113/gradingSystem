import http from '@/utils/http.js'

export const getStudentsAPI=(classId)=>{
    return http({
        url:'/student/getStudents',
        method:'GET',
        params:{
            classId
        }
    })
}