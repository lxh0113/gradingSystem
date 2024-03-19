import {ref} from 'vue'
import {ElMessage} from "element-plus";
import {defineStore} from "pinia";
// import {selectDishAttributeByDishId} from '@/apis/attributeApi.js'

export const usePaperStore = defineStore('paper',()=>{
    const attributeList=ref([]);
        //点击弹窗时，初始化属性数组
        const initialization=()=>{
        attributeList.value=[{
                attributeName: "默认属性",
                checked: 0,
                flavorList:[
                    {
                        flavorName:"默认口味1",
                        price: 2
                    },
                    {
                        flavorName:"默认口味2",
                        price: 2
                    }
                ]
            }
        ]
    }
    //删除一个属性
    const deleteAttributeOne=(att)=>{
        const newAttribute = attributeList.value.filter(item => item !== att);  
        attributeList.value = newAttribute;  
    }
    return {
        deleteAttributeOne,
        modifyAttributeOne,
        addFlavorOne,
        deleteFlavorOne,
        clearAttribute
    }
},{
    persist:true
})