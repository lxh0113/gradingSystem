import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useClassStore = defineStore('class', () => {
    
    const classOne=ref([])

    const setUserInfo=(userInfo,shortToken,refreshToken)=>{
        user.value=null
        user.value={
            ...userInfo,
            shortToken,
            refreshToken
        };
        console.log(user.value)
    }


    return {
        classOne,
        setUserInfo,
    }
},{
    persist:true
})