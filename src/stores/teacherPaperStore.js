import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTeacherPaperStore = defineStore('teacherPaperStore', () => {

    const teacherPaperList=ref([])

    const getTeacherPaperList=()=>{
        return teacherPaperList.value
    }

    const setTeacherPaperList=(data)=>{
        teacherPaperList.value=data
    }

    return {
        getTeacherPaperList,
        setTeacherPaperList
    }

},{
    persist:{
        enabled:true,
        storage:sessionStorage
    }
})