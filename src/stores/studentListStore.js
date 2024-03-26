import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStudentListStore = defineStore('studentList', () => {
    
    const studentList=ref([])


    return {
        studentList
    }
},{
    persist:true
})