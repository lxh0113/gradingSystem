import http from '@/utils/http.js'

export const getAIGenerateQuestionAPI=(material,t,n1,n2,n3)=>{
    return http({
        url:"/AI/generatedQuestions",
        method:"GET",
        params:{
            material,
            t,
            n1,
            n2,
            n3
        }
    })
}