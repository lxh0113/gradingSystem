import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useClassStore = defineStore('class', () => {
    
    const classOne=ref([])


    return {
        classOne
    }
},{
    persist:true
})