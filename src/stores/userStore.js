import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', () => {
    
    // const 

    const user=ref(null)

    const setUserInfo=(user)=>{
        user.value=user;
    }

    const getUserInfo=()=>{
        return user.value
    }


    return {
        setUserInfo,
        getUserInfo
    }
},{
    persist:{
        enabled:true,
        key:"user",
        storage:sessionStorage,
    }
})