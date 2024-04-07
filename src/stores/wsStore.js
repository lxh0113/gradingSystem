import {defineStore} from "pinia";
import {h, ref} from 'vue'
import {useUserStore} from "@/stores/userStore";
import {ElMessage, ElNotification} from "element-plus";

export const useWsStore=defineStore("ws",()=>{

    let ws=null
    const userStore=useUserStore()

    const message=ref({})

    const wsInit=()=>{
        if (ws && ws.readyState === WebSocket.OPEN) {
            console.log('WebSocket 连接已经存在');
            return false
        }

        if(typeof(WebSocket) === "undefined"){
            alert("您的浏览器不支持socket")
            return false
        }

        const open1 = (msg) => {
            ElNotification({
                title: '消息',
                message: h('i', { style: 'color: teal' }, msg),
                duration: 0,
            })
        }

        ws=new WebSocket("ws://10.251.23.120:8085/webSocket"+'/'+'login'+'/'+userStore.user.account)
        console.log("ws连接已经建立")

        ws.onmessage=(event)=>{
            console.log("收到了消息"+event.data)

            const {to,from,type,content}={...JSON.parse(event.data)}

            if(to!==userStore.user.account)
            {
                return
            }

            message.value=JSON.parse(event.data)

        }

        ws.onerror=()=>{
            ElMessage.error("网络连接出错")
        }

        ws.onclose=()=>{
            ElMessage.error("连接已经关闭")
        }
    }

    const sendMessage=(type,to,content)=>{
        if(ws&&ws.readyState===WebSocket.OPEN)
        {
            ws.send(JSON.stringify({type,to,content,from:userStore.getUserInfo().account}))
        }
        else
        {
            ElMessage.error("当前连接已经断开，请重试")
        }
    }

    return {
        ws,
        message,
        wsInit,
        sendMessage
    }
})