import { ref } from 'vue'
import { defineStore } from 'pinia'

import { useRouter } from 'vue-router'

export const useUserStore = defineStore('user', () => {
    
    const user=ref(null)

    const isLogin=ref(false);

    const getIsLogin=()=>{
        return isLogin.value
    }

    const changeIsLogin=(value)=>{
        isLogin.value=value
    }

    const setUserInfo=(userInfo,shortToken,refreshToken)=>{
        user.value=null
        user.value={
            ...userInfo,
            shortToken,
            refreshToken
        };
        console.log('看谁先到111')
        console.log(user.value)
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
        // localStorage.clear()
    }

    const changeToken=()=>{
        user.value.shortToken=user.value.refreshToken
    }


    return {
        user,
        getIsLogin,
        changeIsLogin,
        setUserInfo,
        getUserInfo,
        changeName,
        changeAvatar,
        changeEmail,
        clearInfoAndToken,
        changeToken
    }
},{
    persist:true
})