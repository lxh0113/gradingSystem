<template>
    <div style="">
        <!-- 工具栏 -->
        <Toolbar
            :editor="editorRef"
            :defaultConfig="toolbarConfig"
            style="border: 1px solid #3a63f3;"
        />
        <!-- 编辑器 -->
        <Editor @keyup="printContent"
            v-model="valueHtml"
            :defaultConfig="editorConfig"
            style="height: 100vh; overflow-y: hidden;border: none;box-shadow: 0 12px 5px -10px rgba(0,0,0,0.1), 0 0 4px 0 rgba(0,0,0,0.1);
    -webkit-box-shadow: 0 12px 5px -10px rgba(0,0,0,0.1), 0 0 4px 0 rgba(0,0,0,0.1);border-radius: 5px;padding:20px"
            @onCreated="handleCreated"
        />
    </div>
</template>

<script setup>

import { onBeforeUnmount,watch, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { useEditorStore } from '@/stores/editorStore';
import { useRoute,useRouter } from 'vue-router';

// 编辑器实例，必须用 shallowRef，重要！
const editorRef = shallowRef()
const editorStore=useEditorStore()
const router=useRouter()
const route=useRoute()

// 内容 HTML
const valueHtml = ref('')

const printContent=()=>{
    console.log(valueHtml.value)
}

// 模拟 ajax 异步获取内容
onMounted(() => {
    valueHtml.value=editorStore.getValue()
})

// 编辑器配置
const editorConfig = {
    placeholder: '请输入内容...',
    MENU_CONF: { /* 菜单配置，下文解释 */ }
}

// 文字颜色
editorConfig.MENU_CONF['color'] = {
    colors: ['red', '#3a63f3', '#666','green']
}

// 背景色
editorConfig.MENU_CONF['bgColor'] = {
    colors: ['red', '#eceffe', '#666','green']
}

const handleCreated = (editor) => {
    editorRef.value = editor // 记录 editor 实例，重要！
}

watch(() => route.params.id, () => {
    console.error('想死')
    valueHtml.value=editorStore.getValue()
},{
    deep:true
});

// 组件销毁时，及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})

</script>

<style>

</style>