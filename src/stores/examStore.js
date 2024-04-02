import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useExamStore = defineStore('exam', () => {

    const exam=ref({})

    const setExamData=(data)=>{
        exam.value=data
    }

    const getExamData=()=>{
        return exam.value
    }

    return {
        setExamData,
        getExamData
    }

},{
    persist:{
        enabled:true,
        storage:sessionStorage
    }
})