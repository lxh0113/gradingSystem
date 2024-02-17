<template>
  <div class="top">
    <div class="left">
      <div class="myParents">
        <div class="avatars">
          <img src="../../../assets/avatar.jpeg" alt="">
          <img src="../../../assets/avatar.jpeg" alt="">
        </div>
        <div class="text">
          我的家长
        </div>
      </div>
    </div>
    <div class="right">
      <div class="userInfo">
          <div class="leftInfo">
            <div class="school">
              XX市第一中学
            </div>
            <div class="class">
              初一三班 XXX
            </div>
          </div>
          <div class="rightImage">

          </div>
      </div>
    </div>
  </div>
  <div class="bottom">
    <div class="title">
      <div class="left">
        试卷&nbsp;&nbsp;&nbsp;&gt;&gt;
        <router-link to="/student/home/on">
          进行中
        </router-link>
        <router-link to="/student/home/off">
          已结束
        </router-link>
      </div>
    </div>
    <div class="paper">
      <router-view>
      </router-view>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.top,.bottom{
  background-color: #fff;
  border-radius: 10px;
}

.top{
  width: 100%;
  height: 205px;
  display: flex;
  box-sizing: border-box;
  padding: 20px;

  .myParents{
    width: 300px;
    height: 100%;
    // background-color: pink;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-right: 1px solid #c4c4c4;

    .avatars{
      display: flex;
      justify-content: center;
      // position:relative;

      img{
        width:70px;
        height: 70px;
        border-radius: 50%;
      }

      img:nth-child(2){
        // position:absolute;
        transform: translateX(-15px);
      }

    }

    .text{
      margin-top:30px;
      font-weight: bold;
    }

  }

  .userInfo{
    flex:1;
    display: flex;
    text-align: center;
    height: 100%;
    
    .leftInfo{
      display: flex;
      margin-left: 80px;
      flex-direction: column;
      justify-content: space-around;

      .school{
        color:#3A63F3;
        // color:$primary-color;
        font-size: 19px;
        font-weight: bold;
      }

      .class{
        font-weight: bold;
      }
    }
  }
}

.bottom{
  margin-top:10px;
  min-height: 560px;
  box-sizing: border-box;
  padding:30px;

  .title{
    font-size:20px;
    font-weight: bold;
    border-bottom: 1px solid #c4c4c4;
    padding-bottom: 15px;

    a{
      color:#c4c4c4;
      text-decoration: none;
      margin-left: 30px;
      font-size:18px;
      font-weight: normal;
    }

    .router-link-active{
      text-decoration: underline;
      color:#3A63F3;
    }

    
  }

 
}
</style>