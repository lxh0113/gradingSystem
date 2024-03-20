import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useClassListStore = defineStore('classList', () => {
    
    const classList=ref([])

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
        classList,
        setUserInfo,
    }
},{
    persist:true
})