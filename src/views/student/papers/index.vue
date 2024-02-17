<template>
  <div class="backBox">
    <div class="top">
      试卷&nbsp;&nbsp;&nbsp;&gt;&gt;
        <router-link to="/student/papers/on">
          进行中
        </router-link>
        <router-link to="/student/papers/off">
          已结束
        </router-link>
        <router-link to="/student/papers/mistakes">
          错题本
        </router-link>
    </div>
    <div class="bottom">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>

.backBox{
  background-color: #fff;
  width: 100%;
  min-height: 760px;
  box-sizing: border-box;
  padding:30px;

  .top{
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