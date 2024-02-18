<template>
  <div class="backBox">
    <div class="top">
      <span>关系绑定</span>
    </div>
    <div class="details">
      <div class="paper" v-for="item in 2">
          <div class="left">
            <img src="../../../assets/avatar.jpeg">
          </div>
          <div class="right">
            <div class="id">
              id:xxxxxx
            </div>
            <div class="relationship">
              xxx 请求和你绑定家长关系
            </div>
            <div class="button">
              <button>同意</button>
              <button>拒绝</button>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>

.backBox{
  box-sizing: border-box;
  padding:30px;
  width: 100%;
  min-height: 760px;
  background-color: #fff;

  .top{
    border-bottom: 1px solid #c4c4c4;

    span{
      display: block;
      font-size: 20px;
      font-weight: bold;
      padding-bottom:20px;
    }
  }

  .details {
      // background-color: pink;
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
     
      // justify-content: space-between; /* 将这里的 justify-content 修改为 flex-start */
    }
  
  .paper {
      background-color: #ebeffe;
      flex: 1;
      display: flex;
      min-width: 600px;
      max-width: 700px;
      height: 200px;
      margin-bottom: 20px;
      border-radius: 20px;
      box-sizing: border-box;
      padding:20px;
      margin-right: 20px;


      .left{
        margin-left:20px;
        display: flex;
        justify-content: center;
        

        img{
          width:120px;
          height: 120px;
          border-radius: 50%;
        }
      }

      .right{
        flex:1;
        margin-left:40px;
        .id{
          color:#3a63f3;
          font-size: 20px;
          font-weight: bold;
          line-height: 60px;
        }

        .relationship{
          font-weight: bold;
          line-height: 60px;
        }

        .button{
          display: flex;
          justify-content: right;

          button{
            background-color: #fff;
            padding:10px 30px;
            margin-left:10px;
            margin-right:10px;
            border-radius: 20px;
            border:1px solid #3a63f3;
            font-weight: bold;
            font-size: 16px;
          }

          button:nth-child(1){
            color:#6cba2d;
          }

          button:nth-child(2){
            color:#f54747;
          }
        }
      }

    }
}

</style>