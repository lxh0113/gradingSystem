import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
    
    const user=ref({
        account:'123',
        gender:'12'
    })

    const setUserInfo=(userInfo,shortToken,refreshToken)=>{
        // console.log(user)
        // console.log(shortToken)
        // console.log(refreshToken)
        user.value=null
        user.value={
            ...userInfo,
            shortToken,
            refreshToken
        };
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