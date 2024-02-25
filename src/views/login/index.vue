<template>
  <div class="container" :class="{'sign-up-mode':signUpMode}">
    <div class="form-warp">
      <form class="sign-in-form wow fadeInRight">
        <h2 class="form-title">登录</h2>
        <el-form size="large" v-if="loginOptions" class="wow slideInUp">
            <el-form-item>
                <el-input style="width: 300px;height: 50px;" :prefix-icon="User" placeholder="请输入账号id"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input style="width: 300px;height: 50px;" type="password" :prefix-icon="Lock" placeholder="请输入密码"></el-input>
            </el-form-item>
            <div class="submit-btn">立即登录</div>
            <span @click="toEmailLogin" style="color:#6266f5;text-decoration: underline;">忘记密码？邮箱登录</span>
        </el-form>
        <el-form size="large" v-else class="wow fadeInUp">
            <el-form-item>
                <el-input style="width: 300px;height: 50px;" :prefix-icon="User" placeholder="请输入email"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input style="width: 300px;height: 50px;" type="password" :prefix-icon="Lock" placeholder="请输入新密码"></el-input>
            </el-form-item>
            <div class="submit-btn">邮箱登录</div>
            <span @click="toIdLogin" style="color:#6266f5;text-decoration: underline;">账号id登录</span>
        </el-form>
        
      </form>
      <form class="sign-up-form wow fadeInUp">
        <h2 class="form-title">注册</h2>
        <el-form size="large">
            <el-form-item>
                <el-input style="width: 300px;height: 50px;" :prefix-icon="User" placeholder="请输入邮箱"></el-input>
            </el-form-item>
            <el-form-item>
                <el-input style="width: 300px;height: 50px;" type="password" :prefix-icon="Lock" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item style="display: flex;height: 50px;">
                <el-input style="width: 170px;height: 50px;" placeholder="验证码"></el-input>
                <el-button type="primary" plain style="padding:12px 19px;height: 50px;margin-left:20px">获取验证码</el-button>
            </el-form-item>
            <div class="submit-btn">注册</div>
        </el-form>
      </form>
    </div>
    <div class="desc-warp">
      <div class="desc-warp-item sign-up-desc">
        <div class="content">
            <!-- <p>快来加入我们吧</p> -->
          <button class="button" @click="toRegister" id="sign-up-btn">注册</button>
        </div>
        <img src="../../assets/img/log.svg" alt="">
      </div>
      <div class="desc-warp-item sign-in-desc">
        <div class="content">
          <button class="button" @click="toLogin" id="sign-in-btn">登录</button>
        </div>
        <img src="../../assets/img/register.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import { Clock, Lock, Search, User } from '@element-plus/icons-vue';
import { ElMain } from 'element-plus';
import {onMounted, ref} from 'vue'
import WOW from 'wow.js'

// id 还是邮箱登录 true 是id,false 是邮箱
const loginOptions=ref(true)
const signUpMode=ref(false)

const toIdLogin=()=>{
    loginOptions.value=true
}

const toEmailLogin=()=>{
    loginOptions.value=false
}

const toRegister=()=>{
    signUpMode.value=true
}

const toLogin=()=>{
    signUpMode.value=false
}

onMounted(()=>{
  new WOW().init()
})

</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
//   color: #333;
}

.container {
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
}
.container::before {
  content: " ";
  position: absolute;
  width: 2000px;
  height: 2000px;
  border-radius: 50%;
  background-image: linear-gradient(-45deg, #3A63F3 0%, #ebeffe 100%);
  transition: 1.8s ease-in-out;
  z-index: 6;
  top: -10%;
  right: 48%;
  transform: translateY(-50%);
}
// .sign-up-mode{

// }

.container.sign-up-mode::before {
  transform: translate(100%, -50%);
}

.form-warp {
  width: 50%;
  position: absolute;
  z-index: 5;
  left: 75%;
  top: 50%;
  z-index: 5;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 1fr;
  transition: 1s 0.7s ease-in-out; 
}
.form-warp form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
//   background: #ebeffe;
  gap: 36px;
  /* 将两个 form 布局在 grid 同一位置 */
  grid-row: 1 / 2;
  grid-column: 1 / 2;
  transition: all 0.2s 0.7s;
  opacity: 1;
  z-index: 4;

}


.form-title {
  color: #3A63F3;
  font-size:30px;
//   line-height: 30px;
}
.form-warp .sign-up-form {
  opacity: 0;
  z-index: 3;
}
.container.sign-up-mode .form-warp {
  left: 25%;
}
.container.sign-up-mode .sign-in-form {
  opacity: 0;
  z-index: 3;
}
.container.sign-up-mode .sign-up-form {
  opacity: 1;
  z-index: 4;
}
input,
.submit-btn {
    width: 100%;
    padding:12px 30px;
    border-radius: 20px;
    background: #3A63F3;
}
input::placeholder {
  color: #cccc;
}
.submit-btn {
  background-color: #6266f5;
  color: #FFF;
  text-align: center;
  min-width: 150px;
  font-size: initial;
  font-weight: bold;
  letter-spacing: 1.5px;
  cursor: pointer;
}

.desc-warp {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
.desc-warp-item {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  text-align: center;
  padding: 3rem 17% 2rem 12%;
  z-index: 6;
}
/* 事件穿透 BEGIN */
.sign-in-desc {
  pointer-events: none;
}
.sign-up-mode .sign-in-desc {
  pointer-events: all;
}
.sign-up-mode .sign-up-desc {
  pointer-events: none;
}
/* 事件穿透 END */
.content {
  width: 100%;
  transition: transform 0.9s ease-in-out;
  transition-delay: .6s;
}
.sign-in-desc img,
.sign-in-desc .content {
  transform: translateX(800px);
}
.sign-up-mode .sign-in-desc img,
.sign-up-mode .sign-in-desc .content {
  transform: translateX(0);
}

.sign-up-mode .sign-up-desc img,
.sign-up-mode .sign-up-desc .content {
  transform: translateX(-800px);
}

.button {
  outline: none;
  padding: 6px 8px;
  min-width: 100px;
  text-align: center;
  border-radius: 30px;
  border: 2px solid #FFF;
  background: none;
  color: #FFF;
  cursor: pointer;
  transition: all .3s ease;
}
.button:active {
  background: rgba(255, 255, 255, .1);
}

img {
  width: 100%;
  display: block;
  transition: transform 0.9s ease-in-out;
  transition-delay: .5s;
}

/* 响应式 */
@media screen and (max-width: 870px) {
  .container::before {
    width: 1500px;
    height: 1500px;
    transform: translateX(-50%);
    left: 30%;
    bottom: 68%;
    right: initial;
    top: initial;
    transition: 2s ease-in-out;
  }
  .container.sign-up-mode::before {
    transform: translate(-50%, 100%);
    bottom: 32%;
    right: initial;
  }
  .form-warp {
    width: 100%;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -100%);
    transition: 1s 0.8s ease-in-out;
  }
  .container.sign-up-mode .form-warp {
    top: 25%;
    left: 50%;
    transform: translate(-50%, 0);
  }
  img {
    width: 200px;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.7s;
  }
  .desc-warp {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }
  .desc-warp-item {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2.5rem 8%;
    grid-column: 1 / 2;
  }
  .sign-in-desc {
    grid-row: 3 / 4;
  }

  .sign-in-desc img,
  .sign-in-desc .content {
    transform: translateY(800px);
  }

  .sign-up-mode .sign-in-desc img,
  .sign-up-mode .sign-in-desc .content {
    transform: translateY(0);
  }

  .sign-up-mode .sign-up-desc img,
  .sign-up-mode .sign-up-desc .content {
    transform: translateY(-800px);
  }
}

@media screen and (max-width: 570px) {
  .container::before {
    bottom: 72%;
    left: 50%;
  }
  img {
    display: none;
  }
}
</style>