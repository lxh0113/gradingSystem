import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    
    const user=ref({})

    const setUserInfo=(user,shortToken,refreshToken)=>{
        console.log(user)
        console.log(shortToken)
        console.log(refreshToken)
        user.value=user;
        // user.value.token=shortToken;
        // user.value.token=refreshToken;
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
        user,
        setUserInfo,
        getUserInfo,
        changeName,
        changeAvatar,
        changeEmail,
        clearInfoAndToken
    }
},{
    persist:true
})