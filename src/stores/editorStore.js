import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useClassStore = defineStore('class', () => {
    const value=ref('')

    const setValue=(data)=>{
        value.value=data
    }

    const getValue=()=>{
        return value.value
    }

    return {
        setValue,
        getValue
    }

},{
    persist:{
        storage:sessionStorage
    }
})