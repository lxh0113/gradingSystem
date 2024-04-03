import { useUserStore } from "@/stores/userStore";

const studentNavList=[
    {text:"首页",icon:"iconfont icon-home",to:"/student/home",isHaveNext:false,childrenList:[]},
    {text:"我的试卷",icon:"iconfont icon-paper",to:"/student/papers",isHaveNext:false,childrenList:[]},
    {text:"学情分析",icon:"iconfont icon-analysis",to:"/student/analysis",isHaveNext:false,childrenList:[]},
    {text:"关系绑定",icon:"iconfont icon-chart-relationship",to:"/student/relationship",isHaveNext:false,childrenList:[]}
];


const teacherNavList=[
    {text:"首页",icon:"iconfont icon-home",to:"/teacher/home",isHaveNext:false,childrenList:[]},
    {text:"阅卷",icon:"iconfont icon-yuejuanmokuai",to:"/teacher/marking",isHaveNext:false,childrenList:[]},
    {text:"AI刷题",icon:"iconfont icon-X-artificial-intelligence",to:"/teacher/ai",isHaveNext:false,childrenList:[]},
    {text:"考情分析",icon:"iconfont icon-analysis",to:"/teacher/analysis",isHaveNext:false,childrenList:[]},
    {text:"班级管理",icon:"iconfont icon-user-management",to:"/teacher/management",isHaveNext:true}
    
]

const parentsNavList=[
    {text:"学情分析",icon:"iconfont icon-analysis",to:"/parents/analysis",isHaveNext:false,childrenList:[]},
    // {text:"首页",icon:"iconfont icon-home",to:"/parents/home",isHaveNext:false,childrenList:[]},
    {text:"孩子试卷",icon:"iconfont icon-paper",to:"/parents/papers",isHaveNext:true,childrenList:[]},
    
    {text:"关系绑定",icon:"iconfont icon-chart-relationship",to:"/parents/relationship",isHaveNext:false,childrenList:[]}
]

const schoolAdminNavList=[
    {text:"首页",icon:"iconfont icon-home",to:"/schoolAdmin/home",isHaveNext:false,childrenList:[]},
    {text:"人员管理",icon:"iconfont icon-user-management",to:"/schoolAdmin/management",isHaveNext:false,childrenList:[]},
    {text:"考情分析",icon:"iconfont icon-analysis",to:"/schoolAdmin/analysis",isHaveNext:false,childrenList:[]},
    {text:"试卷管理",icon:"iconfont icon-paper",to:"/schoolAdmin/papers",isHaveNext:false,childrenList:[]}
]

const adminNavList=[
    {text:"账号审核",icon:"iconfont icon-home",to:"/admin/accountAudit",isHaveNext:false,childrenList:[]},
    {text:"账号管理",icon:"iconfont icon-user-management",to:"/admin/accountManagement",isHaveNext:false,childrenList:[]}
]


export const getNavList=()=>{
    const userStore=useUserStore()

    let identity=userStore.getUserInfo().identity

    if(identity==='student')
    {
        return studentNavList
    }
    else if(identity==='teacher'){
        return teacherNavList
    }
    else if(identity==='parents')
    {
        return  parentsNavList
    }
    else if(identity==='schoolAdmin')
    {
        return schoolAdminNavList
    }
    else if(identity==='admin')
    {
        return  adminNavList
    }
}