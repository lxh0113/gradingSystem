import http from '@/utils/http.js'

export const getNewsAPI=()=>{
    return http({
        url:'/news/getNews',
        method:'GET'
    })
}