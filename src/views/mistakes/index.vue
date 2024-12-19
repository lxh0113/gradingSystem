<template>
  <div class="button">
    <el-button type="primary" size="large" @click="() => htmlToPDF('box','错题报告')">下载查看</el-button>
  </div>
  <div class="backBox">
    <div id="box">
      <h1>我的错题报告</h1>
      <div class="chart">
        <div class="chart1"></div>
        <div class="chart2"></div>
        <div class="chart3"></div>
        <div class="chart4"></div>
      </div>

      <hr />

      <div class="question">
        <div class="title"><span>题目：</span>文件系统的主要组成部分是？</div>
        <div class="options">
          <span>A、文件控制块及文件</span>
          <span>B、文件及块设备文件</span>
          <span>C、系统文件及用户文件</span>
          <span>D、文件及管理文件的软件 </span>
        </div>
        <div class="answer">
          <span>正确答案：D</span>
          <span> 我的答案：C </span>
        </div>
        <div class="relationship">
          <span>关联知识点:</span>
          <span class="myTag">文件控制块（FCB）</span>
          <span class="myTag" style="color:#1dc779;background-color:#e8f9f2">文件和块设备文件</span>
          <span class="myTag" style="color:#ffb352;background-color:#fff7e6">系统文件和用户文件</span>
          <span class="myTag" style="color:#e26237;background-color:#fcefeb">文件管理软件</span>
          <!-- <el-tag style="margin-right: 20px">文件控制块（FCB）</el-tag>
          <el-tag type="success" style="margin-right: 20px; margin-bottom: 5px"
            >文件和块设备文件</el-tag
          >
          <el-tag type="warning" style="margin-right: 20px; margin-bottom: 5px"
            >系统文件和用户文件</el-tag
          >
          <el-tag type="danger" style="margin-right: 20px; margin-bottom: 5px"
            >文件管理软件</el-tag
          > -->
          <!-- <div class="details">
            答案选项 A 涉及文件控制块，B 涉及文件和块设备文件，C
            涉及系统文件和用户文件，D 涉及文件管理软件。
          </div> -->
        </div>
        <div class="analysis">
          分析：这一题考察的是对文件系统组成部分的理解。文件系统不仅需要存储文件，还需要有管理这些文件的软件，如文件控制块等。学生正确理解了这一点。
        </div>
        <div class="mistakeLookText">错题回顾：</div>

        <div class="mistakes">
          <div class="title">题目：文件系统中常见的文件存储方式有哪些？</div>
          <div class="options">
            <span>A、顺序存储、链式存储、索引存储和混合存储</span>
            <span> B、磁盘存储、内存存储、光盘存储和网络存储 </span>
            <span> C、ASCII码存储、Unicode存储、UTF-8存储和UTF-16存储 </span>
            <span> D、文件夹存储、压缩存储、加密存储和备份存储 </span>
          </div>
          <div class="correctAnswer">正确答案：A</div>
        </div>
      </div>

      <hr style="margin-top: 30px; margin-bottom: 30px" />

      <div class="question">
        <div class="title"><span>题目：</span>实现进程互斥可采用的方法？</div>
        <div class="options">
          <span>A、中断 </span>
          <span>B、查询</span>
          <span>C、开锁和关锁</span>
          <span>D、按键处理 </span>
        </div>
        <div class="answer">
          <span>正确答案：C</span>
          <span> 我的答案：D </span>
        </div>
        <div class="relationship">
          <span>关联知识点:</span>
          <span class="myTag">中断</span>
          <span class="myTag" style="color:#1dc779;background-color:#e8f9f2">查询</span>
          <span class="myTag" style="color:#ffb352;background-color:#fff7e6">开锁和关锁</span>
          <span class="myTag" style="color:#e26237;background-color:#fcefeb">按键处理</span>
          <!-- <el-tag style="margin-right: 20px">中断</el-tag>
          <el-tag type="success" style="margin-right: 20px; margin-bottom: 5px"
            >查询</el-tag
          >
          <el-tag type="warning" style="margin-right: 20px; margin-bottom: 5px"
            >开锁和关锁</el-tag
          >
          <el-tag type="danger" style="margin-right: 20px; margin-bottom: 5px"
            >按键处理</el-tag
          > -->
          <!-- <div class="details">
            答案选项 A 涉及文件控制块，B 涉及文件和块设备文件，C
            涉及系统文件和用户文件，D 涉及文件管理软件。
          </div> -->
        </div>
        <div class="analysis">
          分析：这一题考察的是进程管理的基础知识，包括进程互斥的实现方法。学生正确选择了开锁和关锁作为答案，表明他/她理解了进程互斥的基本概念。
        </div>
        <div class="mistakeLookText">错题回顾：</div>

        <div class="mistakes">
          <div class="title">题目：实现进程间通信的方式包括以下哪些？</div>
          <div class="options">
            <span> A、共享内存、消息队列、信号量和管道</span>
            <span> B、TCP、UDP、HTTP和FTP </span>
            <span> C、变量、函数、类和对象 </span>
            <span> D、顺序访问、随机访问、读写访问和执行访问 </span>
          </div>
          <div class="correctAnswer">正确答案：A</div>
        </div>
      </div>

      <hr style="margin-top: 30px; margin-bottom: 30px" />

      <div class="question">
        <div class="title">
          <span>题目：</span>以下哪个操作系统主要设计用于单用户、单任务操作？
        </div>
        <div class="options">
          <span>A. Windows 10 </span>
          <span>B. macOS</span>
          <span>C. Linux</span>
          <span>D. MS-DOS </span>
        </div>
        <div class="answer">
          <span>正确答案：C</span>
          <span> 我的答案：D </span>
        </div>
        <div class="relationship">
          <span>关联知识点:</span>
          <span class="myTag">操作系统的类型</span>
          <span class="myTag" style="color:#1dc779;background-color:#e8f9f2">单用户、单任务操作系统</span>
          <span class="myTag" style="color:#ffb352;background-color:#fff7e6">MS-DOS</span>
          <span class="myTag" style="color:#e26237;background-color:#fcefeb">Windows 10、macOS、Linux</span>
          <!-- <el-tag style="margin-right: 20px">中断</el-tag>
          <el-tag type="success" style="margin-right: 20px; margin-bottom: 5px"
            >查询</el-tag
          >
          <el-tag type="warning" style="margin-right: 20px; margin-bottom: 5px"
            >开锁和关锁</el-tag
          >
          <el-tag type="danger" style="margin-right: 20px; margin-bottom: 5px"
            >按键处理</el-tag
          > -->
          <!-- <div class="details">
            答案选项 A 涉及文件控制块，B 涉及文件和块设备文件，C
            涉及系统文件和用户文件，D 涉及文件管理软件。
          </div> -->
        </div>
        <div class="analysis">分析：这一题考察的是操作系统的基础知识。</div>
        <div class="mistakeLookText">错题回顾：</div>

        <div class="mistakes">
          <div class="title">
            题目：以下著名的操作系统中，属于多用户、分时系统的是( )。
          </div>
          <div class="options">
            <span> A．DOS系统</span>
            <span> B．UNIX系统 </span>
            <span> C．Windows NT系统 </span>
            <span> D．OS／2系统 </span>
          </div>
          <div class="correctAnswer">正确答案：B</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { htmlToPDF } from '@/utils/html2pdf'
import { onMounted, onUnmounted, getCurrentInstance, ref } from "vue";

let internalInstance = getCurrentInstance();
let echarts = internalInstance.appContext.config.globalProperties.$echarts;

const chartData1 = ref({
  title: {
    text: "知识点掌握情况",
  },
  legend: {
    data: ["试卷难度", "知识点掌握"],
    orient: "vertical",
    x: "left", //可设定图例在左、右、居中
    y: "bottom", //可设定图例在上、下、居中
    padding: [0, 50, 0, 0],
  },
  radar: {
    // shape: 'circle',
    indicator: [
      { name: "难", max: 6500 },
      { name: "偏难", max: 16000 },
      { name: "中等", max: 30000 },
      { name: "偏易", max: 38000 },
      { name: "简单", max: 52000 },
      { name: "基础", max: 25000 },
    ],
  },
  series: [
    {
      name: "试卷难度",
      type: "radar",
      color: ["#3a63f3", "#e26237"],
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: "Allocated Budget",
          areaStyle: {
            color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
              {
                color: "rgba(58, 99, 243, 0.7)",
                offset: 0,
              },
              {
                color: "rgba(235, 245, 254, 0.9)",
                offset: 1,
              },
            ]),
          },
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: "知识点掌握",
          areaStyle: {
            color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
              {
                color: "rgba(226, 98, 55, 0.7)",
                offset: 0,
              },
              {
                color: "rgba(252, 239, 235, 0.9)",
                offset: 1,
              },
            ]),
          },
        },
      ],
    },
  ],
});

const chartData2 = ref({
  title: {
    text: "错题占比率趋势",
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: [
      "第一次月考",
      "第二次月考",
      "第三次月考",
      "第四次月考",
      "第五次月考",
      "第六次月考",
      "第七次月考",
      "第八次月考",
    ],
  },
  color: ["#2f3ced"],
  yAxis: {
    type: "value",
    color: ["#ff0000"],
    axisLabel: {
      show: true,
      interval: "auto",
      formatter: function (i) {
        return i + "%";
      },
    },
    show: true,
  },
  series: [
    {
      data: [20, 26, 30, 13, 10, 24, 22, 10],
      type: "line",
      smooth: true,
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: "#2f3ced", // 开始颜色
          },
          {
            offset: 1,
            color: "rgba(47, 60, 237, 0)", // 结束颜色（透明）
          },
        ]),
      },
    },
  ],
  grid: {
    x: 40,
    y: 45,
    x2: 5,
    y2: 20,
    borderWidth: 1,
  },
});

const chartData3 = ref({
  title: {
    text: "错题难度分析",
  },
  legend: {
    top: "bottom",
  },
  //   color:['#e76237','#2f3ced','#ffb302','#1dc79c','#ccc','#5acf55'],
  series: [
    {
      name: "Nightingale Chart",
      type: "pie",
      radius: [10, 100],
      center: ["50%", "50%"],
      roseType: "area",
      itemStyle: {
        borderRadius: 5,
      },
      data: [
        { value: 40, name: "难" },
        { value: 38, name: "偏南" },
        { value: 32, name: "中等" },
        { value: 30, name: "偏易" },
        { value: 28, name: "容易" },
        { value: 26, name: "基础" },
      ],
    },
  ],
});

const chartData4 = ref({
  title: {
    text: "操作系统知识点总体掌握情况概述",
  },
  grid: {
    x: 40,
    y: 45,
    x2: 40,
    y2: 40,
    borderWidth: 1,
  },
  series: [
    {
      name: "Expected",
      type: "funnel",
      left: "10%",
      width: "80%",
      label: {
        formatter: "{b}",
      },
      labelLine: {
        show: false,
      },
      itemStyle: {
        opacity: 0.7,
      },
      emphasis: {
        label: {
          position: "inside",
          formatter: "{b}: {c}%",
        },
      },
      data: [
        { value: 100, name: "安全性与保护" },
        { value: 80, name: "存储管理" },
        { value: 60, name: "同步与互斥，死锁" },
        { value: 40, name: "文件系统" },
        { value: 20, name: "内存管理" },
      ],
    },
    {
      name: "Actual",
      type: "funnel",
      left: "10%",
      width: "80%",
      maxSize: "80%",
      label: {
        position: "inside",
        formatter: "{c}%",
        color: "#fff",
      },
      itemStyle: {
        opacity: 0.5,
        borderColor: "#fff",
        fontSize: 50,
        borderWidth: 2,
      },
      emphasis: {
        label: {
          position: "inside",
          formatter: "{b}: {c}%",
        },
      },
      data: [
        { value: 92, name: "安全性与保护" },
        { value: 76, name: "存储管理" },
        { value: 53, name: "同步与互斥，死锁" },
        { value: 31, name: "文件系统" },
        { value: 10, name: "内存管理" },
      ],
      // Ensure outer shape will not be over inner shape when hover.
      z: 100,
    },
  ],
});

const setChart = () => {
  const dom1 = document.querySelector(".chart1");
  const myChart1 = echarts.init(dom1);

  const dom2 = document.querySelector(".chart2");
  const myChart2 = echarts.init(dom2);

  const dom3 = document.querySelector(".chart3");
  const myChart3 = echarts.init(dom3);

  const dom4 = document.querySelector(".chart4");
  const myChart4 = echarts.init(dom4);

  // 指定图表的配置项和数据
  var option1 = chartData1.value;

  var option2 = chartData2.value;

  var option3 = chartData3.value;

  var option4 = chartData4.value;

  // 使用刚指定的配置项和数据显示图表。
  myChart1.setOption(option1);
  myChart2.setOption(option2);
  myChart3.setOption(option3);
  myChart4.setOption(option4);

  window.addEventListener("resize", () => {
    // alert(1)
    myChart1.resize();
    myChart2.resize();
    myChart3.resize();
    myChart4.resize();
  });

  onUnmounted(() => {
    myChart1.dispose();
    myChart2.dispose();
    myChart3.dispose();
    myChart4.dispose();
  });
};

onMounted(() => {
  setChart();
});
</script>

<style lang="scss" scoped>
.button{
    margin-top:20px;
    display: flex;
    justify-content: center;
}

.backBox {
  width: 100%;
  // background: red;
  //   height: 100vh;
  display: flex;
  justify-content: center;

  #box {
    // width: 70%;
    width: 1000px;
    margin-top: 20px;
    margin-bottom: 20px;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    // background: red;
    padding: 40px;
    box-sizing: border-box;

    .chart {
      width: 100%;
      height: 600px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 20px;
      margin-bottom: 40px;
    }

    h1 {
      color: #3a63f3;
    }

    .question {
      margin-top: 10px;
      .title {
        font-size: 16px;

        span {
          color: #e26237;
          font-weight: bold;
        }

        
      }

      .options {
        margin-top: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        font-size: 16px;
      }

      .answer {
        font-weight: bold;
        font-size: 16px;
        margin-top: 10px;
        span:nth-child(1) {
          color: #1dc779;
          margin-right: 20px;
        }
        span:nth-child(2) {
          color: #e26237;
        }
      }

      .relationship {
        color: #ffb302;
        margin-top: 10px;
        font-size: 16px;
        // margin-right:20px;
        span {
          margin-right: 20px;
          font-weight: bold;
        }

        .myTag
        {
          // display: block;
          background: #ebeffe;
          color:#3a63f3;
          font-size: 14px;
          padding:5px 10px 5px 10px;
          border-radius:5px;
          margin-bottom: 10px;
        }

        .details {
          color: #3a63f3;
          margin-top: 10px;
        }
      }

      .analysis {
        color: #e26237;
        font-size: 16px;
        font-weight: 800;
        margin-top: 5px;
      }

      .mistakeLookText {
        font-weight: bold;
        color: #1dc779;
        font-size: 16px;
        margin-top: 10px;
      }

      .mistakes {
        margin-top: 10px;
        background: #ebeffe;
        border: 1px solid #3a63f3;
        border-radius: 5px;
        padding: 10px;

        .correctAnswer {
          color: #e26237;
          font-weight: bold;
          font-size: 16px;
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
