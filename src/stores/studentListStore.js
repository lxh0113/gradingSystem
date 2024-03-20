import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStudentListStore = defineStore('studentList', () => {
    
    const studentList=ref([])

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
        studentList,
        setUserInfo,
    }
},{
    persist:true
})