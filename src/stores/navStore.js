import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useUserStore } from './userStore'
import { parentsGetAllChildrenAPI } from '@/apis/user.js'
import { getMyClassAPI } from '@/apis/exam.js'
import { ElMessage } from 'element-plus'

export const useNavStore = defineStore('nav', () => {

    const userStore=useUserStore()
    const navList=ref(null)

    const getNavList=async()=>{
        if(navList.value===null)
        {
            if(userStore.getUserInfo().identity==='teacher')
            {
                const res=await getMyClassAPI(userStore.getUserInfo().account);
                
                if(res.data.code===200)
                {
                    console.log(res.data.data)
                    navList.value=res.data.data
                    return res.data.data
                }
                else ElMessage.error(res.data.message)
            }
            else if(userStore.getUserInfo().identity==='parents')
            {
                const res=await parentsGetAllChildrenAPI();

                if(res.data.code===200)
                {
                    console.log(res.data.data)
                    navList.value=res.data.data
                    return res.data.data
                }
                else ElMessage.error(res.data.message)
            }
            else return []
        }
        else return navList.value
    }

    return{
        getNavList
    }

},{
    persist:true
})