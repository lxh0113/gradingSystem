<template>
    <div class="backBox">
      <div style="height: 30px;width: 10%;"></div>
      <div class="top">
        账号审核&nbsp;&nbsp;&nbsp;&gt;&gt;
          <router-link to="/admin/accountAudit/all">
            全部
          </router-link>
          <router-link to="/admin/accountAudit/underway">
            进行中
          </router-link>
          <router-link to="/admin/accountAudit/examine">
            已审核
          </router-link>
      </div>
      <div class="bottom">
        <router-view>
  
        </router-view>
      </div>
    </div>
  </template>
  
  <script>
  
  </script>
  
  <style lang="scss" scoped>
  .backBox{
    width:100%;
    min-height: 760px;
    background-color: #fff;
    box-sizing: border-box;
    // padding:30px;
  
  
    .top{
      margin-left:30px;
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