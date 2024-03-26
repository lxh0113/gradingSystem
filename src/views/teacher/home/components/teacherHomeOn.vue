<template>
  <div class="bigBox">
    <div class="conditionSearch">
      <el-input style="max-width: 300px;height:40px;" :prefix-icon="Search" placeholder="按名称搜索"></el-input>
      <el-select class="m-2" placeholder="班级" size="large" style="width: 240px;margin-left:30px;" ></el-select>
    </div>
    <div class="details">
<<<<<<< HEAD
<<<<<<< HEAD
      <div class="paper" v-for="item in 5" :key="item">
=======
      <div @click="toPaper(1)" class="paper" v-for="item in 5">
>>>>>>> lxh
        <div class="top">
            <div>
                <div class="title">
                    xx市第一次模拟试卷
                </div>
            </div>
            <div class="operation">
                批阅
            </div>
        </div>
        <div class="content">
            <div class="text">
                正在批阅中，请耐心等待！
            </div>
            <div class="view">
                查看已批阅试题&nbsp;&nbsp;&nbsp;&gt;&gt;&gt;
            </div>
        </div>
        <div class="bottom">
            <div class="time">
                2024/1/1 12:00
=======
      <div class="paper" v-for="item in examPaperList" :key="item">
        <div v-if="item.amount.total>item.amount.gradedNumber">
          <div class="top">
              <div>
                  <div class="title">
                      {{ item.title }}
                  </div>
>>>>>>> 96bdc9d5774ca7bd41eb6d9ce4adcfb3e112edb0
              </div>
              <div class="operation">
                  批阅
              </div>
          </div>
          <div class="content">
              <div class="text">
                  正在批阅中，请耐心等待！
              </div>
              <div class="view">
                  查看已批阅试题&nbsp;&nbsp;&nbsp;&gt;&gt;&gt;
              </div>
          </div>
          <div class="bottom">
              <div class="time">
                {{ item.date }}
              </div>
              <div class="count">
                {{ item.amount.gradedNumber }}/{{ item.amount.total }}
              </div>
          </div>
        </div>
      </div>
    </div>

    <div class="page">
      <el-pagination prev-text="上一页" next-text="下一页" :page-size="20" :pager-count="11" layout="prev, pager, next"  :total="1000" />
    </div>
  </div>
</template>

<script setup>
<<<<<<< HEAD
import { Search } from '@element-plus/icons-vue';
import { useRoute,useRouter } from 'vue-router';

const router=useRouter()
const route=useRoute()

const toPaper=(id)=>{
  router.push('/paper/'+id);
}



=======
  import { Search } from '@element-plus/icons-vue';
  import { examPaperGetAllE } from '../../../../mock/teacher/marking.js';
  import axios from 'axios'
  const examPaperList=ref([])
  onMounted(async()=>{
    axios.get('/examPaper/getAllE').then(res => {
        console.log(res.data)
        examPaperList.value=res.data.data
        console.log(examPaperList.value)
    })
    .catch((err) => {
        console.log(err);
    });
  })
>>>>>>> 96bdc9d5774ca7bd41eb6d9ce4adcfb3e112edb0
</script>

<style lang="scss" scoped>
.bigBox{
    margin-top:20px;

    .conditionSearch{
        color:#3A63F3;
        display: flex;
    }

  .details {
    // background-color: pink;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(480px,750px));
    gap:20px;
   
    // justify-content: space-between; /* 将这里的 justify-content 修改为 flex-start */
}

.paper {
    background-color: #ebeffe;
    flex: 1;
    // min-width: 600px;
    // max-width: 770px;
    height: 220px;
    margin-bottom: 20px;
    border-radius: 20px;
    box-sizing: border-box;
    padding:20px;
    margin-right: 20px;
    

    transition: all .5s;

    &:hover{
      transform: translateY(-5px);
      box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    }

    

    .top{
        display: flex;
        justify-content: space-between;

        div{
            display: flex;
        }

        .title,.subject{
            font-weight: bold;
            color:#3A63F3;
            font-size:20px;
        }

        .subject{
            margin-left:40px;
        }

        .operation{
            font-weight: bold;
            margin-right: 20px;
            font-size: 18px;
        }
    }

    .content{
        .text{
            line-height: 80px;
        }

        .view{
            line-height: 50px;
            font-weight: bold;
        }
    }

    .bottom{
        display: flex;
        justify-content: space-between;
        margin-right: 30px;
        font-size: 18px;
        line-height: 30px;
        color:#9e8b8b;

        .time{
          font-size: 16px;
        }
    }

    
    }

  .page{
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>