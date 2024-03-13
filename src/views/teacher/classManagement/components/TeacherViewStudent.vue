<template>
    <div class="wow fadeInUp bigBox">
        <div class="left">
            <div class="title">个人信息</div>
            <div class="avatar">
                <img src="@/assets/avatar.jpeg" alt="">
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
                        <el-tag style="margin-right: 5px;" v-for="tag in tags" :key="tag.name" closable>
                          {{ tag.name }}
                        </el-tag>
                    </div>
                    <div>
                        20224013333
                    </div>
                    <div>
                        lxh
                    </div>
                    <div>
                        12345678@qq.com
                    </div>
                </div>
            </div>
        </div>

        <div class="right">
            <div class="rightTitle">
                详情
            </div>
            <div class="chart">
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
                                <td>操作</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in 4">
                                <td>
                                    第一次月考
                                </td>
                                <td class="score">
                                    86
                                </td>
                                <td>
                                    <el-button>
                                        查看
                                    </el-button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {onMounted,onUnmounted,getCurrentInstance,ref} from 'vue'

const tags = ref([
  { name: '大大咧咧'},
  { name: '大大咧咧'},
  { name: '大大咧咧'}
])

let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts


const setChart=()=>{
  const dom1 = document.querySelector('.chart');
  const myChart1 = echarts.init(dom1);

  // 指定图表的配置项和数据
  var option1 = {
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
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart1.setOption(option1);

  window.addEventListener('resize',()=>{
    myChart1.resize()
  })

  onUnmounted(() => {
      myChart1.dispose();
  });
}


onMounted(()=>{
  setChart()
})


</script>

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

        .chart{
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
                        display: flex;
                        align-items: center;
                        justify-content: left;
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