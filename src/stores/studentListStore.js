import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStudentListStore = defineStore('studentList', () => {
    const studentList=ref([])

    const setStudentList=(data)=>{
        studentList.value=data
    }

    const getStudentList=()=>{
        return studentList.value
    }

    return {
        setStudentList,
        getStudentList
    }
},{
    persist:{
        storage:sessionStorage
    }
})
