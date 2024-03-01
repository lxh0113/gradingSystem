<template>
    <div class="homeBackBox">
        <div class="homeTop wow slideInDown">
            <div class="homeLogo">
                <img src="@/assets/logo2.png" class="logoImg" alt="">
            </div>
            <div class="homeProjectName">
                云阅
            </div>
            <div class="homeUserInfo">
                <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                        <el-badge is-dot class="HomeItem">
                            <el-button class="share-button" :icon="BellFilled" type="primary" />
                        </el-badge>
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item class="clearfix">
                                commentssadfasdfasdfsadf
                            <!--  <el-badge class="mark" :value="3"/> 可以增加数字红点 -->
                                <el-badge class="mark"/>
                            </el-dropdown-item>
                            <el-dropdown-item class="clearfix">
                                replies
                                <el-badge class="mark" :value="1"/>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                        <div class="shareDropdown">
                            <span class="shareDropdownSpan">一键已读</span>
                        </div>
                    </template>
                </el-dropdown>
                
                
                <div class="homeAvatar">
                    <el-button plain @click="open" class="avatarOpen">
                        <img src="@/assets/avatar.jpeg" alt="">
                    </el-button>
                </div>
            </div>
        </div>
        <div class="homeBottom">
            <div class="homeLeft wow slideInLeft">
                <el-menu router :default-active="leftList[0].to" class="el-menu-vertical-demo" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
                    <div class="homeMenu" v-for="item in leftList" :key="item">
                        <el-sub-menu v-if="item.isHaveNext" :index="item.to">
                            <template #title>
                                <i :class="item.icon"></i>
                                &nbsp;&nbsp;&nbsp;
                                <span v-if="!isCollapse">{{ item.text }}</span>
                            </template>
                        <!-- <el-menu-item-group> -->
                            <el-menu-item v-for="i in item.childrenList" :index="item.to+'/'+i.to" :key="i">
                                <span>{{ i.text  }}</span>
                            </el-menu-item>
                        <!-- </el-menu-item-group> -->
                        </el-sub-menu>

                        <el-menu-item v-else :index="item.to">
                        <span :class="item.icon"></span>
                        &nbsp;&nbsp;&nbsp;
                        <template #title>
                            <span>{{ item.text }}</span>
                        </template>
                        </el-menu-item>
                    </div>           
            </el-menu>
            </div>
            <div class="homeRight wow slideInRight">
                <RouterView></RouterView>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
    import { onMounted, ref, h } from 'vue'
    import WOW from 'wow.js'
    import { BellFilled } from '@element-plus/icons-vue'
    import { ElMessageBox } from 'element-plus'

    //学生左边导航选项
    const studentNavList=ref([
        {text:"首页",icon:"iconfont icon-home",to:"/student/home",isHaveNext:false,childrenList:[]},
        {text:"我的试卷",icon:"iconfont icon-paper",to:"/student/papers",isHaveNext:false,childrenList:[]},
        {text:"AI刷题",icon:"iconfont icon-X-artificial-intelligence",to:"/student/ai",isHaveNext:false,childrenList:[]},
        {text:"学情分析",icon:"iconfont icon-analysis",to:"/student/analysis",isHaveNext:false,childrenList:[]},
        {text:"关系绑定",icon:"iconfont icon-chart-relationship",to:"/student/relationship",isHaveNext:false,childrenList:[]}
    ]);
    
    
    const teacherNavList=ref([
        {text:"首页",icon:"iconfont icon-home",to:"/teacher/home",isHaveNext:false,childrenList:[]},
        {text:"阅卷",icon:"iconfont icon-yuejuanmokuai",to:"/teacher/marking",isHaveNext:false,childrenList:[]},
        {text:"考情分析",icon:"iconfont icon-analysis",to:"/teacher/analysis",isHaveNext:false,childrenList:[]},
        {text:"班级管理",icon:"iconfont icon-user-management",to:"/teacher/management",isHaveNext:true,childrenList:[
            {text:"软件一班",to:"1"},{text:"软件二班",to:"2"},{text:"软件三班",to:"3"},{text:"软件四班",to:"4"}
        ]}
    ])
    
    const parentsNavList=ref([
        {text:"首页",icon:"iconfont icon-home",to:"/parents/home",isHaveNext:false,childrenList:[]},
        {text:"学情分析",icon:"iconfont icon-analysis",to:"/parents/analysis",isHaveNext:false,childrenList:[]},
        {text:"孩子试卷",icon:"iconfont icon-paper",to:"/parents/papers",isHaveNext:false,childrenList:[]},
        {text:"关系绑定",icon:"iconfont icon-chart-relationship",to:"/parents/relationship",isHaveNext:false,childrenList:[]}
    ])
    
    const schoolAdminNavList=ref([
        {text:"首页",icon:"iconfont icon-home",to:"/schoolAdmin/home",isHaveNext:false,childrenList:[]},
        {text:"人员管理",icon:"iconfont icon-user-management",to:"/schoolAdmin/management",isHaveNext:false,childrenList:[]},
        {text:"考情分析",icon:"iconfont icon-analysis",to:"/schoolAdmin/analysis",isHaveNext:false,childrenList:[]},
        {text:"试卷管理",icon:"iconfont icon-paper",to:"/schoolAdmin/papers",isHaveNext:false,childrenList:[]}
    ])
    
    const adminNavList=ref([
        {text:"账号审核",icon:"iconfont icon-home",to:"/admin/accountAudit",isHaveNext:false,childrenList:[]},
        {text:"账号管理",icon:"iconfont icon-user-management",to:"/admin/accountManagement",isHaveNext:false,childrenList:[]}
    ])

    const leftList=studentNavList.value


    const open = () => {
    ElMessageBox({
        title: 'Message',
        message: h('p', null, [
        h('span', null, 'Message can be '),
        h('i', { style: 'color: teal' }, 'VNode'),
        ]),
    })
    }

    const collapseOperation = () => {
        const windowInfo = {
            width: window.innerWidth,
            hight: window.innerHeight
        }
        console.log(windowInfo);

        if(windowInfo.width<=900){
            isCollapse.value=true
        }
        else isCollapse.value=false
    };

    const debounce = (fn, delay) => {
        let timer;
        return function() {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                collapseOperation()
            }, delay);
        }
    };
    const cancelDebounce = debounce(collapseOperation, 500);

    window.addEventListener('resize', cancelDebounce);


<<<<<<< HEAD
const isCollapse = ref(true)
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
  
  
  const leftList=teacherNavList.value
  
  onMounted(()=>{
      
    new WOW().init()
    collapseOperation()
  })
=======


    const isCollapse = ref(true)
    const handleOpen = (key, keyPath) => {
        console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
        console.log(key, keyPath)
    }
    
    
  
    onMounted(()=>{
        new WOW().init()
    })
>>>>>>> d9c9ea1f11ccb01900cb022f2100b132b0e9ef44
  
  </script>
  
  <style lang="scss">
    //   @import url("@/styles/project/index.scss");
    
    :root{
        --el-menu-item-height: 80px;
        --el-menu-base-level-padding: 40px;
        --el-text-color-primary:#8a8989;
    }
    .el-menu-item.is-active{
        background-color: #eceffe;
    }
    .el-menu {
        border-right:0!important;
    }

    .el-sub-menu{
        display: grid;
    }

    .el-menu--collapse  .el-sub-menu__title span{
        display: none;
    }
    .el-menu--collapse  .el-sub-menu__title .el-sub-menu__icon-arrow{
        display: none;
    }
    

    .homeBackBox{
        @media screen and (min-width: 1440px) and (max-width: 1920px){
            
        }
        @media screen and (min-width: 1024px) and (max-width: 1439px) {
            
        }
        @media screen and (min-width: 768px) and (max-width: 1023px){
            
        }
        @media screen and (min-width: 375px) and (max-width: 767px) {
            
        }
        width: 100%;
        height: 100%;
        background: #f5f7fa;
    }
    .homeTop{
        width: 100%;
        height: 80px;
        background: #fff;
        display: flex;
        text-align: center;
        line-height: 80px;
        @media screen and (min-width: 375px) and (max-width: 767px) {
            height: 80px;
            line-height: 80px;
            width: 100%;
            // 固定到顶部
            position: sticky;
            z-index: 1; 
            top: 0;
        }
    
        .homeLogo{
            // flex:3;
            margin-left: 30px;
            width: 100px;
            min-width: 100px;
            height: 60px;
            margin-top: 10px;
            line-height: 80px;
            //background-image: url("../../../public/favicon.ico") no-repeat center;
            @media screen and (min-width: 375px) and (max-width: 767px) {
                display: none;
            }
    
            .logoImg{
                width: 60px;
                height: 60px;
            }
        }
    
        .homeProjectName{
            // flex:2;
            color: #3A63F3;
            // color:$primary-color;
            font-size:26px;
            font-weight: bold;
            @media screen and (min-width: 375px) and (max-width: 767px) {
                margin-left: 10%;
            }
        }
        .el-dropdown-menu{
                padding: 8px 24px;
            }
        .homeUserInfo{
            flex:17.5;
            display: flex;
            justify-content: right;
            @media screen and (min-width: 375px) and (max-width: 767px) {
                line-height: 60px;
                height: 60px;
                flex: 10;
            }
            .HomeItem{
                margin-top: 30px;
                line-height: 25px;
                margin-left: 40px;
                margin-right: 50px;
                @media screen and (min-width: 375px) and (max-width: 767px) {
                    margin-top: 30px;
                    margin-left: 20px;
                    margin-right: 25px;
                }
            }
    
            .share-button{
                background-color: white;
                border: none;
                width: 20px;
                font-size: 20px;
                color: #8a8989;
                @media screen and (min-width: 375px) and (max-width: 767px) {
                    font-size: 25px;
                }
    
                :hover{
                    color: #9e9d9d;
                }
            }

            .homeAvatar{
                height: 100%;
                margin-right: 80px;
                .avatarOpen{
                    height: 80px;
                    padding: 0;
                    border: none;
                    img{
                        width: 45px;
                        height: 45px;
                        border-radius: 50%;
                        @media screen and (min-width: 375px) and (max-width: 767px) {
                            margin: 0;
                            width: 50px;
                            height: 50px;
                        }
        
                    }
                    
                }
            }        
        }
    }
    
    .homeBottom{
        display: flex;
        width: 100%;
        min-height: 798px;
        box-sizing: border-box;
    
        .homeLeft{
            background: #fff;
            //   width: 240px;
            transition: all 0.3s;
            //   font-weight: bold;
            font-size: 16px;
    
            // .menu{
            //     height: 80px;
            //     line-height: 80px;
            //     width: 240px;
            //     // text-align: center;

            // }
            
        }
    
        .homeRight{
            flex:21;
            // background: #fff;
            margin:10px 10px 10px 10px;
        }
    }
    //提示下拉框的样式
    .el-popper{
        .el-dropdown-menu{
            padding: 10px 10px 0 10px;

            .el-dropdown-menu__item{
                padding: 10px 35px;
            }
        }

        .shareDropdown{
            line-height: 30px;
            margin-right: 15px;
            margin-bottom: 2px;
            display: flex;
            justify-content:flex-end;

            .shareDropdownSpan{
                cursor: pointer;
            }
        }
    }
  </style>
