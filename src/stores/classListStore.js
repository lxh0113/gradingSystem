import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useClassListStore = defineStore('classList', () => {
    
    const classList=ref([])


    return {
        classList
    }
},{
    persist:true
})