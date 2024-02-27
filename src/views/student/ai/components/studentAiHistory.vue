<template>
  <div class="bigBox">
    <div class="condition">
        <el-input style="max-width: 250px;height:40px;" :prefix-icon="Search" placeholder="按名称搜索"></el-input>
        <el-date-picker class="m-2" placeholder="生成时间" size="large" style="width: 240px;margin-left:30px;" ></el-date-picker>
    </div>
    <div class="details">
        <div class="paper" v-for="item in 5">
            <div class="top">
                <div class="title">
                    <div class="name">第一次总结模拟试题</div>
                </div>
                <div class="time">2024/2/18 12:00:00</div>
            </div>
            <div class="mid">
                Sass 是一款强化 CSS 的辅助工具，它在 CSS 语法的基础上增加了变量 (variables)、嵌套 (nested rules)、混合 (mixins)、导入 (inline imports) 等高级功能，这些拓展令 CSS 更加强大与优雅。使用 Sass 以及 Sass 的样式库（如 Compass）有助于更好地组织管理样式文件，以及更高效地开发项目。
            </div>
            <div class="bottom">
                <span>下载</span>
                <span>查看</span>
            </div>
        </div>
      </div>

      <div class="page">
        <el-pagination prev-text="上一页" next-text="下一页" :page-size="20" :pager-count="11" layout="prev, pager, next"  :total="1000" />
      </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.bigBox{
    margin-top:25px;
    margin-left:30px;

    .condition{
        display: flex;
    }

    .details {
      // background-color: pink;
      margin-top: 20px;
      display: grid;
      grid-template-columns: repeat(auto-fill,minmax(480px,750px));
      gap:20px
    }
  
  .paper {
      background-color: #ebeffe;
      flex: 1;
      // min-width: 600px;
      // max-width: 770px;
      height: 240px;
      margin-bottom: 20px;
      border-radius: 20px;
      box-sizing: border-box;
      padding:20px;
      margin-right: 20px;

      .top{
        line-height: 40px;
        display: flex;
        justify-content: space-between;

        .title{
            display: flex;

            .name {
                color:#3A63F3;
                font-weight: bold;
                font-size: 20px;
            }

            .subject{
                margin-left:30px;
                font-weight: bold;
            }
        }

        .time{
            color:#9c9a9f;
        }
      }

      .mid{
        margin-top:10px;
        height: 120px;
        overflow: hidden;
        // background: #3A63F3;
      }

      .bottom{
        display: flex;
        justify-content: right;
        color:#3A63F3;
        font-size: 18px;
        line-height: 40px;
        
        span{
            margin-left: 10px;
            margin-right: 10px;
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