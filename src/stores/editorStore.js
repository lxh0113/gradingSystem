import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useEditorStore = defineStore('edit', () => {
    const value=ref('')

    const setValue=(data)=>{
        alert(122111111111111)
        value.value=data
    }

    const getValue=()=>{
        return value.value
    }

    return {
        value,
        setValue,
        getValue
    }

},{
    persist:{
        storage:sessionStorage
    }
})