<template>
  <div class="backBox">
    <div class="bigBox">
      <div class="nav">
        <div class="left">
            试卷&nbsp;&nbsp;&nbsp;&gt;&gt;
          <router-link to="/teacher/marking/all">
            全部
          </router-link>
          <router-link to="/teacher/marking/on">
            进行中
          </router-link>
          <router-link to="/teacher/marking/off">
            已结束
          </router-link>
      </div>
    </div>
    <div class="paper">
      <router-view>
      </router-view>
    </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>

.backBox{
  width: 100%;
  min-height: 760px;
  background-color: #fff;
  padding:30px;
  
}
.bigBox{
  // margin-top:10px;
  min-height: 400px;
  box-sizing: border-box;
  // padding:30px;
  // background-color: #fff;

  .nav{
    font-size:20px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    // line-height: 40px;
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

    .button{
      margin: 0px;
    }
    
  }

 
}
</style>