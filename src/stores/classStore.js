import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useClassStore = defineStore('class', () => {
    
    const classList=ref(null)

    const setClassList=(data)=>{
        console.log(data)
        classList.value=data
    }

    const getClassList=()=>{
        return classList.value||[]
    }

    return {
        setClassList,
        getClassList
    }
},{
    persist:{
        enabled:true,
        storage:localStorage
    }
})