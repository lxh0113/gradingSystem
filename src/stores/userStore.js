import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('userStore', () => {
    
    // const 

    const user=ref(null)

    const setUserInfo=(user,shortToken,refreshToken)=>{
        user.value=user;
        user.value.token.shortToken;
        user.value.token.refreshToken;
    }

    const getUserInfo=()=>{
        return user.value
    }

    const changeName=(newName)=>{
        user.value.name=newName
    }

    const changeEmail=(newEmail)=>{
        user.value.email=newEmail
    }

    const changeAvatar=(newAvatar)=>{
        user.value.avatar=newAvatar
    }

    const clearInfoAndToken=()=>{
        user.value=null
        localStorage.clear()
    }


    return {
        setUserInfo,
        getUserInfo,
        changeName,
        changeAvatar,
        changeEmail,
        clearInfoAndToken
    }
},{
    persist:{
        enabled:true,
        key:"user",
        // storage:sessionStorage,
    }
})