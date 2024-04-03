<template>
    <div class="wow fadeInUp bigBox">
        <div class="left">
            <div class="title">个人信息</div>
            <div class="avatar">
                <img :src="studentData.avatar" alt="">
            </div>
            <div class="info">
                <div class="infoLeft">
                    <div>
                        标签
                    </div>
                    <div>
                        学号
                    </div>
                    <div>
                        名称
                    </div>
                    <div>
                        邮箱
                    </div>
                </div>
                <div class="infoRight">
                    <div class="tag">
                        <el-tag type="primary" style="margin-right: 5px;" v-for="tag in tags" :key="tag" v-show="tag.trim()!==''">
                          {{ tag }}
                        </el-tag>
                        <el-button size="small" @click="dialogVisible = true" style="margin-left:5px" icon="Edit"></el-button>
                    </div>
                    <div>
                        {{ studentData.studentNumber }}
                    </div>
                    <div>
                        {{ studentData.name }}
                    </div>
                    <div>
                        {{ studentData.email||'暂无' }}
                    </div>
                </div>
            </div>
        </div>

        <div class="right">
            <div class="rightTitle">
                详情
            </div>
            <div class="studentChart">
            </div>
            <div class="historyPaper">
                <div class="historyPaperTitle">
                    历史试卷
                </div>
                <div class="table">
                    <table>
                        <thead>
                            <tr>
                                <td>考试</td>
                                <td>分数</td>
                                <td>班级排名</td>
                                <td>学校排名</td>
                                <td>操作</td>
                            </tr>
                        </thead>
                        <tbody v-if="examList.length!==0">
                            <tr v-for="(item,index) in examList" :key="item">
                                <td>
                                    {{ item.examName }}
                                </td>
                                <td class="score">
                                    {{ item.score }}
                                </td>
                                <td>
                                    {{ item.classRank }}
                                </td>
                                <td>
                                    {{ item.gradeRank }}
                                </td>
                                <td>
                                    <el-button type="primary" @click=toPaper(item.studentTestPaperId,index)>
                                        查看
                                    </el-button>
                                </td>
                            </tr>
                        </tbody>
                        <tbody style="width: 100%;display: flex;justify-content: center;" v-else>
                            <el-empty description="无数据" />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <el-dialog v-model="dialogVisible" title="设置标签" width="400">
        <el-form style="margin:10px 20px 10px 20px" label-position="left" size="large" :model="tagsForm">
            <el-form-item label="标签1" label-width="70px">
                <el-input size="large"  v-model="tagsForm[0]">{{ tagsForm[0] }}</el-input>
            </el-form-item>
            <el-form-item label="标签2" label-width="70px">
                <el-input size="large" v-model="tagsForm[1]">{{ tagsForm[1] }}</el-input>
            </el-form-item>
            <el-form-item label="标签3" label-width="70px">
                <el-input size="large" v-model="tagsForm[2]">{{ tagsForm[2] }}</el-input>
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
              <el-button @click="dialogVisible = false">取消</el-button>
              <el-button type="primary" @click="changeTag">
                确认
              </el-button>
            </div>
        </template>
  </el-dialog>
</template>

<script setup>
import {onMounted,onUnmounted,getCurrentInstance,ref} from 'vue'
import { setTagAPI } from '@/apis/user.js'
import {useRoute,useRouter} from 'vue-router'
import { ElMessage } from 'element-plus'
import { getStudentsAPI } from '@/apis/student.js'
import { studentGetHistoryExamAPI } from '@/apis/exam.js'
import { useTeacherPaperStore } from '@/stores/teacherPaperStore'

const route=useRoute()
const router=useRouter()
const teacherPaperStore=useTeacherPaperStore()
const studentData=ref({})
const studentListData=ref([])
const examList=ref([])
const chartData=ref({
        title: {
        text: '班级历史平均分成绩分布'
        },
        legend:{

        },
        color:['#748eed','#91cc75','#fac858'],
        tooltip: {},
        xAxis: {
        data: ['第一次月考', '第二次月考', '第三次月考', '第四次月考', '第五次月考', '第六次月考']
        },
        yAxis: {},
        series: [
        {
            name: 'lxh',
            type: 'line',
            data: [60, 70, 67, 80, 77, 76],
            label: {
            show: true,
            position: 'top',
            textStyle: {
            fontSize: 14
            }
            }
        }
        ]
    })

const tags = ref([])

const tagsForm=ref({
})

let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts

const dialogVisible = ref(false)

const changeTag=async()=>{
    // console.log(route.params)
    const account=studentListData.value[route.params.studentId].account

    let list = JSON.parse(JSON.stringify(tagsForm.value))

    const styleTag=list.map(item=>{
        return item.trim()
    }).join('、')

    // alert(styleTag)

    if(studentData.value.styleTag===styleTag)
    {
        ElMessage.error("您未作出任何改动")
        return
    }

    console.log(styleTag)

    const res=await setTagAPI(account,styleTag);

    if(res.data.code===200)
    {
        ElMessage.success('修改成功')
        tags.value=list
    }  
    else {
        ElMessage.error(res.data.message)
    }
    dialogVisible.value = false
}

const setChart=()=>{
    const dom1 = document.querySelector('.studentChart');
    const myChart1 = echarts.init(dom1);

    // 指定图表的配置项和数据
    var option1 = chartData.value;

    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option1);

    window.addEventListener('resize',()=>{
        myChart1.resize()
    })

    onUnmounted( ()=>{
        myChart1.dispose();
    })

}

const getStudentData=async()=>{

    // console.log(route.params)
    let id=route.params.classId;
    const res=await getStudentsAPI(id);

    if(res.data.code===200)
    {
        console.log(res.data.data)
        studentListData.value=res.data.data
    }
    else {
        ElMessage.error(res.data.message)
    }

}

const getStudent=()=>{
    let index=route.params.studentId

    studentData.value=studentListData.value[index]

    let list = studentData.value.styleTag?.split('、')||[]

    console.log(list)

    for(let i=0;i<3;i++)
    {
        if(i<list.length)
        {
        }
        else list.push('')
    }

    tags.value=list
    tagsForm.value=list

}

const setRightData=async()=>{

    const res=await studentGetHistoryExamAPI(studentData.value.account)

    if(res.data.code===200)
    {
        console.log(res.data.data)

        chartData.value.xAxis.data=res.data.data.map(item=>{
            return item.examName
        })

        chartData.value.series[0].name=studentData.value.name

        chartData.value.series[0].data=res.data.data.map(item=>{
            return item.score
        })

        examList.value=res.data.data


    }
    else ElMessage.error(res.data.message)

    setChart()
}

const toPaper=(id,index)=>{

    console.log(id)
    //放入数据
    teacherPaperStore.setTeacherPaperList(index,examList.value)

    router.push('/paper/'+id)
}

watch(() => route.params.studentId, (newValue, oldValue) => {
      // 在这里执行您想要执行的逻辑
    //   console.log('studentId 参数发生了变化:', newValue);

     getStudent()

     setRightData()
});

onMounted(async()=>{
    await getStudentData()
   
    getStudent()

    setRightData()

})


</script>

<style src="@wangeditor/editor/dist/css/style.css"></style>
<style lang="scss" scoped>
.bigBox{
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 400px auto;
    // gap:20px;
    

    .left{
        background-color: #ffffff;
        min-width: 400px;
        max-width: 400px;
        // max-height: 800px;
        // margin-bottom: 30px;
        display: flex;
        flex-direction:column;
        box-sizing:border-box;

        .title{
            color:#3a63f3;
            // margin-left: 30px;
            padding-left: 20px;
            line-height: 50px;
            height: 50px;
            font-size: 20px;
            // border-bottom: 1px solid #c4c4c4;
            
        }

        .avatar{
            
            display: flex;
            justify-content: center;
            align-items: center;
            
            width: 100%;
            height: 400px;
            border-radius: 20px 20px 0 0;

            img{
                width:90%;
                height: 90%;
                /* border-radius: 50%; */
            }
        }

        .info{
            background: #fff;
            flex:1;
            display: flex;
            min-height: 200px;
            max-height: 320px;
            justify-content: space-between;
            box-sizing: border-box;
            
            border-radius: 20px;
            transform: translateY(-40px);
            margin:10px;
            box-shadow:2px 2px 2px #c4c4c4;

            transition: all .5s;
            

            .infoLeft{
                width: 80px;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;

            }

            .infoRight{
                flex:1;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: left;

                .tag{
                    display: flex;
                    align-items: center;
                }
            }
            
        }
        
    }

    .right{
        // flex:1;
        padding-left: 30px;
        min-width: 500px;
        max-width: 700px;
        background-color: #ffffff;
        min-height: 800px;

        .rightTitle{
            color:#3a63f3;
            // margin-left: 30px;
            padding-left: 20px;
            line-height: 50px;
            height: 50px;
            font-size: 20px;
            margin-bottom: 20px;
            // border-bottom: 1px solid #c4c4c4;
            
        }

        .studentChart{
            height: 500px;
            // background-color: #3a63f3;
        }

        .historyPaper{

            height: 500px;
            box-sizing: border-box;
            padding-right: 20px;

            .historyPaperTitle{
                font-weight: bold;
                font-size: 18px;
                margin-bottom: 20px;
            }

            .table{

                table{
                    
                    width: 100%;
                    margin-right: 10px;
                    border-collapse: collapse;
                    // background-color: #c4c4c4;
                }
                
                tr{
                    width: 100%;
                    border-collapse: collapse;
                    height: 50px;
                    line-height: 50px;
                    display: flex;
                    justify-content: space-around;
                    border-bottom:1px solid #eceffe;
                    
                    td{
                        flex:1;
                        display: flex;
                        align-items: center;
                        justify-content: center;

                        text-overflow: ellipsis;
                        overflow: hidden;
                        word-break: break-all;
                        white-space: nowrap;
                    }

                    .score{
                        color:red;
                    }
                }

            }

        }
    }
}
</style>