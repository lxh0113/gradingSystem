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

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'

// 编辑器实例，必须用 shallowRef，重要！
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('<p><span style="color: red; font-size: 16px;">题目：</span>文件系统的主要组成部分是？</p><p>A、文件控制块及文件</p><p>B、文件及块设备文件</p><p>C、系统文件及用户文件</p><p>D、文件及管理文件的软件</p><p><span style="color: green; font-size: 15px;">正确答案：D</span></p><p><span style="color: red; font-size: 15px;">我的答案：C</span></p><p><span style="color: rgb(58, 99, 243); font-size: 15px;">分析：</span><span style="color: rgb(58, 99, 243); background-color: rgb(255, 255, 255); font-size: 14px;">这一题考察的是对文件系统组成部分的理解。文件系统不仅需要存储文件，还需要有管理这些文件的软件，如文件控制块等。学生正确理解了这一点。</span></p><blockquote><span style="color: red; font-size: 15px;">错题回顾：</span></blockquote><blockquote style="text-align: start;"><span style="color: red; font-size: 15px;">题目：</span>文件系统中常见的文件存储方式有哪些？</blockquote><blockquote style="text-align: start;">A、顺序存储、链式存储、索引存储和混合存储<br><br>B、磁盘存储、内存存储、光盘存储和网络存储<br><br>C、ASCII码存储、Unicode存储、UTF-8存储和UTF-16存储<br><br>D、文件夹存储、压缩存储、加密存储和备份存储</blockquote><blockquote><span style="color: green; font-size: 15px;">正确答案：A</span></blockquote><blockquote><span style="color: rgb(58, 99, 243); font-size: 14px;">笔记：</span></blockquote><p><br></p><p><br></p><p><span style="color: red; font-size: 16px;">题目：</span>实现进程互斥可采用的方法？</p><p>A、中断</p><p>B、查询</p><p>C、开锁和关锁</p><p>D、按键处理</p><p><span style="color: green; font-size: 15px;">正确答案：C</span></p><p><span style="color: red; font-size: 15px;">我的答案：D</span></p><p><span style="color: rgb(58, 99, 243); font-size: 15px;">分析：</span><span style="color: rgb(58, 99, 243);">这一题考察的是进程管理的基础知识，包括进程互斥的实现方法。学生正确选择了开锁和关锁作为答案，表明他/她理解了进程互斥的基本概念。</span></p><blockquote><span style="color: red; font-size: 15px;">错题回顾：</span></blockquote><blockquote style="text-align: start;"><span style="color: red; font-size: 15px;">题目：</span>实现进程间通信的方式包括以下哪些？</blockquote><blockquote style="text-align: start;">A、共享内存、消息队列、信号量和管道<br><br>B、TCP、UDP、HTTP和FTP<br><br>C、变量、函数、类和对象<br><br>D、顺序访问、随机访问、读写访问和执行访问</blockquote><blockquote style="text-align: start;"><span style="color: green; font-size: 15px;">正确答案是：A</span></blockquote><blockquote><span style="color: rgb(58, 99, 243); font-size: 15px;">笔记：</span></blockquote><p><br></p><p><br></p><p><br></p><p><br></p>')

const printContent=()=>{
    console.log(valueHtml.value)
}

// 模拟 ajax 异步获取内容
onMounted(() => {
    // setTimeout(() => {
    //     valueHtml.value = '<p></p>'
    // }, 1500)
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

// watch(() => route.params.id, (newValue, oldValue) => {
//     valueHtml.value='<p><span style="color: red; font-size: 16px;">题目：</span>文件系统的主要组成部分是？</p><p>A、文件控制块及文件</p><p>B、文件及块设备文件</p><p>C、系统文件及用户文件</p><p>D、文件及管理文件的软件</p><p><span style="color: green; font-size: 15px;">正确答案：D</span></p><p><span style="color: red; font-size: 15px;">我的答案：C</span></p><p><span style="color: rgb(58, 99, 243); font-size: 15px;">分析：</span><span style="color: rgb(58, 99, 243); background-color: rgb(255, 255, 255); font-size: 14px;">这一题考察的是对文件系统组成部分的理解。文件系统不仅需要存储文件，还需要有管理这些文件的软件，如文件控制块等。学生正确理解了这一点。</span></p><blockquote><span style="color: red; font-size: 15px;">错题回顾：</span></blockquote><blockquote style="text-align: start;"><span style="color: red; font-size: 15px;">题目：</span>文件系统中常见的文件存储方式有哪些？</blockquote><blockquote style="text-align: start;">A、顺序存储、链式存储、索引存储和混合存储<br><br>B、磁盘存储、内存存储、光盘存储和网络存储<br><br>C、ASCII码存储、Unicode存储、UTF-8存储和UTF-16存储<br><br>D、文件夹存储、压缩存储、加密存储和备份存储</blockquote><blockquote><span style="color: green; font-size: 15px;">正确答案：A</span></blockquote><blockquote><span style="color: rgb(58, 99, 243); font-size: 14px;">笔记：</span></blockquote><p><br></p><p><br></p><p><span style="color: red; font-size: 16px;">题目：</span>实现进程互斥可采用的方法？</p><p>A、中断</p><p>B、查询</p><p>C、开锁和关锁</p><p>D、按键处理</p><p><span style="color: green; font-size: 15px;">正确答案：C</span></p><p><span style="color: red; font-size: 15px;">我的答案：D</span></p><p><span style="color: rgb(58, 99, 243); font-size: 15px;">分析：</span><span style="color: rgb(58, 99, 243);">这一题考察的是进程管理的基础知识，包括进程互斥的实现方法。学生正确选择了开锁和关锁作为答案，表明他/她理解了进程互斥的基本概念。</span></p><blockquote><span style="color: red; font-size: 15px;">错题回顾：</span></blockquote><blockquote style="text-align: start;"><span style="color: red; font-size: 15px;">题目：</span>实现进程间通信的方式包括以下哪些？</blockquote><blockquote style="text-align: start;">A、共享内存、消息队列、信号量和管道<br><br>B、TCP、UDP、HTTP和FTP<br><br>C、变量、函数、类和对象<br><br>D、顺序访问、随机访问、读写访问和执行访问</blockquote><blockquote style="text-align: start;"><span style="color: green; font-size: 15px;">正确答案是：A</span></blockquote><blockquote><span style="color: rgb(58, 99, 243); font-size: 15px;">笔记：</span></blockquote><p><br></p><p><br></p><p><br></p><p><br></p>'
// });

// 组件销毁时，及时销毁编辑器
onBeforeUnmount(() => {
    const editor = editorRef.value
    if (editor == null) return
    editor.destroy()
})

</script>

<style>

</style>