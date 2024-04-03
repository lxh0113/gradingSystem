import { useUserStore } from '@/stores/userStore';

import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/views/home/index.vue";
import Login from "@/views/login/index.vue";
import Register from "@/views/register/index.vue";

//student 模块
import StudentHome from "@/views/student/home/index.vue"
import StudentPapers from "@/views/student/papers/index.vue"
import StudentRelationship from "@/views/student/relationship/index.vue"
import StudentAnalysis from "@/views/student/analysis/index.vue"
import StudentHomePaperOn from "@/views/student/home/components/studentPaperOn.vue"
import StudentHomePaperOff from "@/views/student/home/components/studentPaperOff.vue"
import StudentPapersOn from "@/views/student/papers/components/studentPapersOn.vue"
import StudentPapersOff from "@/views/student/papers/components/studentPapersOff.vue"
import StudentPapersMistakes from "@/views/student/papers/components/studentPapersMistakes.vue"

import StudentPapersNotes from "@/views/student/papers/components/studentPapersNotes.vue"
import StudentPapersNotesDetails from "@/views/student/papers/components/studentPapersNotesDetails.vue"

//parents 模块
import ParentsHome from "@/views/parents/home/index.vue";
import ParentsChildrenPapers from "@/views/parents/childrenPapers/index.vue";
import ParentsRelationship from "@/views/parents/relationship/index.vue";
import ParentsStudyAnalysis from "@/views/parents/studyAnalysis/index.vue";
import ParentsHomeOn from "@/views/parents/home/components/parentsHomeOn.vue"
import ParentsHomeOff from "@/views/parents/home/components/parentsHomeOff.vue"
import ParentsChildrenPapersOn from '@/views/parents/childrenPapers/components/parentsChildrenPapersOn.vue';
import ParentsChildrenPapersOff from '@/views/parents/childrenPapers/components/parentsChildrenPapersOff.vue';


//teacher 模块
import TeacherHome from "@/views/teacher/home/index.vue"
import TeacherMarking from "@/views/teacher/marking/index.vue"
import TeacherExamAnalysis from "@/views/teacher/examAnalysis/index.vue"
import TeacherClassManagement from "@/views/teacher/classManagement/index.vue"
import TeacherHomeOn from "@/views/teacher/home/components/teacherHomeOn.vue"
import TeacherHomeOff from "@/views/teacher/home/components/teacherHomeOff.vue"
import TeacherMarkingAll from "@/views/teacher/marking/components/teacherMarkingAll.vue"
import TeacherMarkingOn from "@/views/teacher/marking/components/teacherMarkingOn.vue"
import TeacherMarkingOff from "@/views/teacher/marking/components/teacherMarkingOff.vue"
import TeacherMarkingDetails from "@/views/teacher/marking/components/teacherMarkingDetails.vue"
import TeacherViewStudent from '@/views/teacher/classManagement/components/TeacherViewStudent.vue';

import TeacherAI from "@/views/teacher/ai/index.vue"
import TeacherAiGenerate from "@/views/teacher/ai/components/teacherAiGenerate.vue"


//schoolAdmin 模块
import SchoolAdminHome from "@/views/schoolAdmin/home/index.vue";
import SchoolAdminExamAnalysis from "@/views/schoolAdmin/examAnalysis/index.vue";
import SchoolAdminPaperManagement from "@/views/schoolAdmin/papersManagement/index.vue";
import SchoolAdminPeopleManagement from "@/views/schoolAdmin/peopleManagement/index.vue";
import SchoolAdminHomeOn from "@/views/schoolAdmin/home/components/schoolAdminHomeOn.vue"
import SchoolAdminHomeOff from "@/views/schoolAdmin/home/components/schoolAdminHomeOff.vue"
import SchoolAdminHomeWill from "@/views/schoolAdmin/home/components/schoolAdminHomeWill.vue"
import SchoolAdminPeopleManagementStudent from '@/views/schoolAdmin/peopleManagement/components/schoolAdminPeopleManagementStudent.vue';
import SchoolAdminPeopleManagementTeacher from '@/views/schoolAdmin/peopleManagement/components/schoolAdminPeopleManagementTeacher.vue';
import SchoolAdminPaperDetails from '@/views/schoolAdmin/papersManagement/components/schoolAdminPaperDetails.vue'

//admin 模块
import AdminAccountAudit from "@/views/admin/accountAudit/index.vue";
import AdminAccountAuditAll from "@/views/admin/accountAudit/components/adminAccountAuditAll.vue";
import AdminAccountAuditUnderway from "@/views/admin/accountAudit/components/adminAccountAuditUnderway.vue";
import AdminAccountAuditExamine from "@/views/admin/accountAudit/components/adminAccountAuditExamine.vue";
import AdminAccountManagement from "@/views/admin/accountManagement/index.vue";
import AdminAccountManagementAll from "@/views/admin/accountManagement/components/adminAccountManagementAll.vue";
import AdminAccountManagementUnderway from "@/views/admin/accountManagement/components/adminAccountManagementUnderway.vue";
import AdminAccountManagementExamine from "@/views/admin/accountManagement/components/adminAccountManagementExamine.vue";

import Test from '@/mock/test.vue';

// 公共部分
import PaperView from '@/views/common/paperView.vue';
import NoPage from '@/views/noPage/noPage.vue'

const basicRouter=[
  {
    path:'/login',
    name:'login',
    component: Login
  },
  {
    path:'/paper/:id',
    component:PaperView
  },
  {
    path: '/404',
    name: 'NoPage404',
    component: NoPage,
    hidden: true
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: basicRouter
})


export const clearRouter=()=>{
  router.routes=basicRouter

  
}

const setRouter=async()=>{
  return new Promise((resolve, reject)=>{
    const userStore=useUserStore()
    clearRouter()
    console.log('看谁先到222')
    let identity=userStore.getUserInfo().identity
    console.log(identity)
    if(identity==='student')
        {
          router.addRoute({
            path:'/',
            name:'home',
            redirect:'/student/home',
            component:Home,
            children:[
              {
                path:'student',
                name:'student',
                children:[
                  {
                    path:'home',
                    name:'studentHome',
                    component:StudentHome,
                    redirect:"/student/home/on",
                    children:[
                      {path:'on',name:'studentHomePaperOn',component:StudentHomePaperOn},
                      {path:'off',name:'studentHomePaperOff',component:StudentHomePaperOff}
                    ]
                  },
                  {
                    path:'papers',
                    name:'studentPapers',
                    component:StudentPapers,
                    redirect:"/student/papers/off",
                    children:[
                      {path:'on',name:'studentPapersOn',component:StudentPapersOn},
                      {path:'off',name:'studentPapersOff',component:StudentPapersOff},
                      {path:'mistakes',name:'studentPapersMistakes',component:StudentPapersMistakes},
                      {
                        path:'notes',
                        component:StudentPapersNotes,
                        children:[
                          {path:':id',name:'studentPapersNotesDetails',component:StudentPapersNotesDetails}
                        ]
                      }
                    ]
                  },
                  {path:'analysis',name:'studentAnalysis',component:StudentAnalysis},
                  {path:'relationship',name:'studentRelationship',component:StudentRelationship}
                ]
              }
            ]
          })

    }
    else if(identity==='parents') {
          router.addRoute(
            {
              path:'/',
              component:Home,
              redirect:'/parents/analysis',
              name:'home',
              children:[
                {
                  path:'parents',
                  name:'parents',
                  children:[
                    {
                      path:'home',
                      name:'parentsHome',
                      component:()=>import('@/views/parents/home/index.vue'),
                      redirect:'/parents/home/on',
                      children:[
                        {path:'on',name:'parentsHomeOn',component:()=>import('@/views/parents/home/components/parentsHomeOn.vue')},
                        {path:'off',name:'parentsHomeOff',component:()=>import('@/views/parents/home/components/parentsHomeOff.vue')}
                      ]
                    },
                    {
                      path: 'papers',
                      // component: () => import('@/views/parents/childrenPapers/index.vue'),
                      children:[
                        { path: ':id',  // 动态参数路由在静态路由之前
                          name: 'parentsPapers',
                          component: () => import('@/views/parents/childrenPapers/index.vue'),
                          redirect: to => {
                            // 重定向到on页面，并将路由参数id传递给子路由
                            return { name: 'parentsPapersOff', params: { id: to.params.id } };
                          },
                          children: [
                            { path: 'off', name: 'parentsPapersOff', component: () => import('@/views/parents/childrenPapers/components/parentsChildrenPapersOff.vue') },
                            { path: 'on', name: 'parentsPapersOn', component: () => import('@/views/parents/childrenPapers/components/parentsChildrenPapersOn.vue') }
                            
                          ]
                        },
                        // 其他静态路径路由配置
                      ]
                    },
                    {path:'analysis',name:'parentsAnalysis',component:()=>import('@/views/parents/studyAnalysis/index.vue')},
                    {path:'relationship',name:'parentsRelationship',component:()=>import('@/views/parents/relationship/index.vue')}
                  ]
            }
              ]
            }
            
          )

    }
    else if(identity==='teacher')
        {
          router.addRoute(
            {
              path:'/',
              component:Home,
              name:'home',
              redirect:'/teacher/home',
              children:[
                {
                  path:'teacher',
                  name:'teacher',
                  children:[
                    {
                      path:'home',
                      component:()=>import('@/views/teacher/home/index.vue'),
                      name:'teacherHome',
                      redirect:'/teacher/home/on',
                      children:[
                        {path:'on',name:'teacherHomeOn',component:()=>import('@/views/teacher/home/components/teacherHomeOn.vue')},
                        {path:'off',name:'teacherHomeOff',component:()=>import('@/views/teacher/home/components/teacherHomeOff.vue')}
                      ]
                    },
                    {
                      path:'marking',
                      name:'teacherMarking',
                      component:()=>import('@/views/teacher/marking/index.vue'),
                      redirect:'/teacher/marking/all',
                      children:[
                        {path:'all',name:'teacherMarkingAll',component:()=>import('@/views/teacher/marking/components/teacherMarkingAll.vue')},
                        {path:'on',name:'teacherMarkingOn',component:()=>import('@/views/teacher/marking/components/teacherMarkingOn.vue')},
                        {path:'off',name:'teacherMarkingOff',component:()=>import('@/views/teacher/marking/components/teacherMarkingOff.vue')},
                        {
                          path:':id',
                          name:'teacherMarkingDetails',
                          component:()=>import('@/views/teacher/marking/components/teacherMarkingDetails.vue')
                        }
                      ]
                    },
                    {
                      path:'ai',
                      name:'teacherAi',
                      component:TeacherAI,
                      redirect:"/teacher/ai/generate",
                      children:[
                        {path:'generate',name:'teacherAiGenerate',component:TeacherAiGenerate}
                      ]
                    },
                    {path:'analysis',name:'teacherAnalysis',component:()=>import('@/views/teacher/examAnalysis/index.vue')},
                    {
                      path:'management/:classId',
                      name:'teacherManagement',
                      component:()=>import('@/views/teacher/classManagement/index.vue'),
                      children:[
                        {path:':studentId',name:'teacherViewStudent',component:()=>import('@/views/teacher/classManagement/components/TeacherViewStudent.vue')}
                      ]
                    }
                  ]
                },
              ]
            }
            
          )

    }
    else if(identity==='schoolAdmin')
        {
          router.addRoute(
            {
              path:'/',
              component:Home,
              name:'home',
              redirect:'/schoolAdmin/home',
              children:[
                {
                  path:'/schoolAdmin',
                  name:'schoolAdmin',
                  children:[
                    {
                      path:'home',
                      name:'schoolAdminHome',
                      component:()=>import('@/views/schoolAdmin/home/index.vue'),
                      redirect:'/schoolAdmin/home/off',
                      children:[
                        {path:'on',name:'schoolAdminHomeOn',component:()=>import('@/views/schoolAdmin/home/components/schoolAdminHomeOn.vue')},
                        {path:'off',name:'schoolAdminHomeOff',component:()=>import('@/views/schoolAdmin/home/components/schoolAdminHomeOff.vue')},
                        {path:'will',name:'schoolAdminHomeWill',component:()=>import('@/views/schoolAdmin/home/components/schoolAdminHomeWill.vue')}
                      ]
                    },
                    {
                      path:'management',
                      name:'schoolAdminManagement',
                      component:()=>import('@/views/schoolAdmin/peopleManagement/index.vue'),
                      redirect:'/schoolAdmin/management/student',
                      children:[
                        {path:'student',name:'schoolAdminPeopleManagementStudent',component:()=>import('@/views/schoolAdmin/peopleManagement/components/schoolAdminPeopleManagementStudent.vue')},
                        {path:'teacher',name:'schoolAdminPeopleManagementTeacher',component:()=>import('@/views/schoolAdmin/peopleManagement/components/schoolAdminPeopleManagementTeacher.vue')}
                      ]
                    },
                    {path:'analysis',name:'schoolAdminAnalysis',component:()=>import('@/views/schoolAdmin/examAnalysis/index.vue')},
                    {
                      path:'papers',
                      name:'schoolAdminPapers',
                      component:()=>import('@/views/schoolAdmin/papersManagement/index.vue')
                    },
                    {
                      path:'papers/:id',name:'schoolAdminPaperDetails',component:()=>import('@/views/schoolAdmin/papersManagement/components/schoolAdminPaperDetails.vue')
                    }
                  ]
                }
              ]
            }
          )

    }
    else if(identity==='admin')
        {
          router.addRoute(
            {
              path:'/',
              component:Home,
              name:'home',
              redirect:'/admin',
              children:[
                {
                  path:'/admin',
                  name:'admin',
                  children:[
                    {
                      path:'accountAudit',
                      name:'adminAccountAudit',
                      component:()=>import('@/views/admin/accountAudit/index.vue'),
                      redirect:'/admin/accountAudit/all',
                      children:[
                        {path:'all',name:'adminAccountAuditAll',component:()=>import('@/views/admin/accountAudit/components/adminAccountAuditAll.vue')},
                        {path:'underway',name:'adminAccountAuditUnderway',component:()=>import('@/views/admin/accountAudit/components/adminAccountAuditUnderway.vue')},
                        {path:'examine',name:'adminAccountAuditExamine',component:()=>import('@/views/admin/accountAudit/components/adminAccountAuditExamine.vue')}
                      ]
                    },
                    {
                      path:'accountManagement',
                      name:'adminAccountManagement',
                      component:()=>import('@/views/admin/accountManagement/index.vue'),
                      redirect:'/admin/accountManagement/all',
                      children:[
                        {path:'all',name:'adminAccountManagementAll',component:()=>import('@/views/admin/accountManagement/components/adminAccountManagementAll.vue')},
                        {path:'underway',name:'adminAccountManagementUnderway',component:()=>import('@/views/admin/accountManagement/components/adminAccountManagementUnderway.vue')},
                        {path:'examine',name:'adminAccountManagementExamine',component:()=>import('@/views/admin/accountManagement/components/adminAccountManagementExamine.vue')}
                      ]
                    },
                  ]
                }
              ]
            }
          )

    }

    router.addRoute({
      path: '/:pathMatch(.*)',
      redirect: '/404',
      hidden: true
    })
      userStore.changeIsLogin(true)
      resolve(true)
  })
}


router.beforeEach(async(to, from, next) => {
	// 判断有没有登录
  const userStore=useUserStore()
  if (to.name == "login") {
    next();
    return 
  } 
  
	if (userStore.getUserInfo()===null) 
  {
		if (to.name == "login") {
			next();
		} else {
			router.push('login')
		}
	} else {
  if(userStore.getIsLogin()===false)
  {
    const res = await setRouter()

    if(res===true)
    {
      next({ ...to, replace: true })
    }
    else next(false)
    
    // next('/')
   

    return
      
  }
    
		next();
	}
});

export default router
