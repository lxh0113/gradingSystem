<template>
  <div class="homeBackBox">
    <div class="homeTop wow slideInDown">
      <div class="homeLogo">
        <img src="@/assets/logo2.png" class="logoImg" alt="" />
      </div>
      <div class="homeProjectName">云阅</div>
      <div class="homeUserInfo">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            <el-badge :is-dot="isDot" class="HomeItem">
              <el-button class="share-button" :icon="Bell" type="primary" />
            </el-badge>
          </span>
          <template #dropdown>
            <el-dropdown-menu style="width: 320px">
              <el-dropdown-item
                v-for="(item, index) in newsList"
                :key="index"
                class="clearfix"
                @click="dealRelationship(index)"
              >
                <span>{{ item.from }}</span
                >请求与你绑定<span
                  >{{ item.type === "father" ? "父亲" : "母亲" }}关系</span
                >
                <el-badge v-if="item.state === 0" class="mark" value="1" />
              </el-dropdown-item>
            </el-dropdown-menu>
            <div style="height: 20px"></div>
            <div
              v-if="newsList.length === 0"
              style="
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <el-empty description="无数据" />
            </div>
          </template>
        </el-dropdown>

        <div class="homeAvatar">
          <el-button plain @click="outerVisible = true" class="avatarOpen">
            <img :src="userInfoForm?.avatar" alt="" />
          </el-button>
        </div>
      </div>
    </div>
    <div class="homeBottom">
      <div class="homeLeft wow slideInLeft">
        <el-menu
          router
          :default-active="getCurrentPath()"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          @open="handleOpen"
          @close="handleClose"
        >
          <div class="homeMenu" v-for="item in leftList" :key="item">
            <el-sub-menu
              :class="{ subActive: getCurrentPath() == item.to }"
              v-if="item.isHaveNext"
              :index="item.to"
            >
              <template #title>
                <span :class="item.icon"></span>
                &nbsp;&nbsp;&nbsp;
                <span v-if="!isCollapse">{{ item.text }}</span>
              </template>
              <el-menu-item
                v-for="(i, iIndex) in navList"
                class="hover"
                :class="{ active: i.id === currentId }"
                :index="item.to + '/' + i.id"
                :key="i.id"
                @click="classOneClick(i.id, iIndex)"
              >
                <span>{{ i.name }}</span>
              </el-menu-item>
            </el-sub-menu>

            <el-menu-item v-else :index="item.to">
              <span :class="item.icon"></span>
              &nbsp;&nbsp;&nbsp;
              <template #title>
                <span>{{ item.text }}</span>
              </template>
            </el-menu-item>
          </div>
        </el-menu>
      </div>
      <div class="homeRight wow slideInRight">
        <RouterView></RouterView>
      </div>
    </div>
  </div>

  <el-dialog
    draggable="true"
    v-model="outerVisible"
    title="个人信息设置"
    width="720"
  >
    <table class="table">
      <tbody>
        <tr class="tr">
          <td class="td">头像</td>
          <td class="td">
            <img
              class="homeUserInfoAvatar"
              :src="userInfoForm?.avatar"
              alt=""
            />
          </td>
          <td class="td fileTd">
            <el-upload
              style="display: flex; align-items: center; flex-wrap: wrap"
              ref="upload"
              class="upload-demo"
              action="#"
              :limit="1"
              :on-exceed="handleExceed"
              :auto-upload="false"
              :on-change="changeAvatarOperation"
            >
              <template #trigger>
                <el-button type="primary">选择</el-button>
              </template>
              <el-button
                style="margin-left: 20px"
                class="ml-3"
                type="success"
                @click="changeAvatar"
              >
                上传
              </el-button>
            </el-upload>
          </td>
        </tr>
        <tr class="tr">
          <td class="td">账号id</td>
          <td class="td">
            {{ userInfoForm.account }}
          </td>
          <td class="td">
            <!-- <el-button>
                            复制
                        </el-button> -->
          </td>
        </tr>
        <tr class="tr">
          <td class="td">名字</td>
          <td class="td">
            {{ userInfoForm.name }}
          </td>
          <td class="td">
            <el-button
              @click="
                () => {
                  innerVisible = true;
                  modifyUserInfoStatus = 1;
                }
              "
            >
              修改
            </el-button>
          </td>
        </tr>
        <tr class="tr">
          <td class="td">邮箱</td>
          <td class="td">
            {{ userInfoForm.email }}
          </td>
          <td class="td">
            <el-button
              @click="
                () => {
                  innerVisible = true;
                  modifyUserInfoStatus = 2;
                }
              "
              >{{ userInfoForm.email ? "修改" : "绑定" }}</el-button
            >
          </td>
        </tr>

        <tr class="tr" style="display: flex; justify-content: space-evenly">
          <td
            class="td"
            style="display: flex; align-items: center; justify-content: center"
          >
            <el-button type="primary">去登录</el-button>
          </td>
          <td
            class="td"
            style="display: flex; align-items: center; justify-content: center"
          >
            <el-button type="danger">退出登录</el-button>
          </td>
          <td></td>
          <td
            class="td"
            style="display: flex; align-items: center; justify-content: center"
          >
            <el-button type="success">注销账号</el-button>
          </td>
        </tr>
      </tbody>
    </table>
    <div style="height: 20px"></div>
    <el-dialog
      draggable="true"
      top="30vh"
      style="width: 400px"
      v-model="innerVisible"
      width="500"
      title="修改"
      append-to-body
    >
      <div v-if="modifyUserInfoStatus === 1">
        <el-form>
          <el-form-item>
            <el-input v-model="newName" size="large" placeholder="请输入新名字">
            </el-input>
          </el-form-item>
          <br />
          <div style="display: flex; justify-content: right">
            <el-button @click="innerVisible = false">取消</el-button>
            <el-button @click="changeName" type="primary">修改</el-button>
          </div>
        </el-form>
      </div>
      <div v-else>
        <el-form>
          <el-form-item>
            <el-input
              :model="newEmail.email"
              size="large"
              placeholder="请输入邮箱"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              :model="newEmail.code"
              style="width: 228px"
              size="large"
              placeholder="请输入验证码"
            >
            </el-input>
            <el-button type="primary" style="margin-left: 30px" size="large"
              >获取验证码</el-button
            >
          </el-form-item>
          <br />
          <div style="display: flex; justify-content: right">
            <el-button @click="innerVisible = false">取消</el-button>
            <el-button @click="innerVisible = false" type="primary"
              >修改</el-button
            >
          </div>
        </el-form>
      </div>
    </el-dialog>
  </el-dialog>

  <el-dialog v-model="relationshipVisible" title="绑定关系" width="500">
    <div class="bindBox">
      <div class="left">
        <img :src="currentParentInfo.avatar" alt="" />
      </div>
      <div class="right">
        <span>{{ currentParentInfo.name }}</span
        >请求与你绑定<span>{{
          currentMessage.type === "father" ? "父亲" : "母亲"
        }}</span
        >关系
      </div>
    </div>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="bindParents(3)">拒绝</el-button>
        <el-button type="primary" @click="bindParents(2)"> 同意 </el-button>
      </div>
    </template>
  </el-dialog>
</template>
  
<script setup>
import { onMounted, ref, h, shallowReactive, watch } from "vue";
import WOW from "wow.js";
import { Bell } from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { useUserStore } from "@/stores/userStore.js";
import { useClassStore } from "@/stores/classStore.js";
import { useNavStore } from "@/stores/navStore.js";
import {
  bindEmailAPI,
  changeAvatarAPI,
  changeNameAPI,
  getBindParentsInfoAPI,
  messageKnowAPI,
} from "@/apis/user";
import { uploadAvatarAPI } from "@/apis/upload";
import { genFileId } from "element-plus";
import { useRoute, useRouter } from "vue-router";
import { useWsStore } from "@/stores/wsStore";
import { getNewsAPI } from "@/apis/news.js";
import { bindParentsAPI } from "@/apis/user.js";
import { getNavList } from "@/utils/navList.js";

const relationshipVisible = ref(false);
const currentId = ref("");
const currentPath = ref("");
const navList = ref([]);
const wsStore = useWsStore();
const currentParentInfo = ref({});
const isDot = ref(false);

const route = useRoute();
const router = useRouter();
const navStore = useNavStore();
let upload = ref();
let file = null;
const currentMessage = ref({});

const outerVisible = ref(false);
const innerVisible = ref(false);
//这个是修改什么的状态变量 1代表修改名字，2代表修改邮箱
const modifyUserInfoStatus = ref(1);

const userStore = useUserStore();
const classStore = useClassStore();

const newsList = ref([]);

//学生左边导航选项

const leftList = ref([]);

const userInfoForm = ref(null);
const newName = ref("");
const newEmail = ref({
  email: "",
  code: "",
});

const handleExceed = (files) => {
  upload.value.clearFiles();
  const file = files[0];
  file.uid = genFileId();
  upload.value.handleStart(file);
};

const changeAvatarOperation = (uploadFiles) => {
  file = uploadFiles;
};

const changeName = async () => {
  const res = await changeNameAPI(newName.value);

  if (res.data.code == 200) {
    userStore.changeName(newName.value);
  } else {
    ElMessage.error("修改失败");
  }

  innerVisible.value = false;
};

const bindEmail = async () => {
  const res = await bindEmailAPI(newEmail.email, newEmail.value.code);

  if (res.data.code === 200) {
    userStore.changeEmail(newEmail.value.email);
  } else {
    ElMessage.error("修改失败");
  }
};

const changeAvatar = async () => {
  let data = new FormData();

  // 确保 upload.value 是一个文件对象，然后将其附加到 FormData 中
  data.append("avatar", file.raw);

  console.log(file);
  console.log(data);

  const res = await uploadAvatarAPI(userInfoForm.value.account, data);

  if (res.data.code === 200) {
    userStore.changeAvatar(res.data.data);
    ElMessage.success("上传成功");
  } else {
    ElMessage.error("上传失败");
  }
};

const collapseOperation = () => {
  const windowInfo = {
    width: window.innerWidth,
    hight: window.innerHeight,
  };
  // console.log(windowInfo);
  if (windowInfo.width <= 900) {
    isCollapse.value = true;
  } else isCollapse.value = false;
};

const debounce = (fn, delay) => {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      collapseOperation();
    }, delay);
  };
};
const cancelDebounce = debounce(collapseOperation, 500);
window.addEventListener("resize", cancelDebounce);

const isCollapse = ref(true);
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};

const initData = () => {
  userInfoForm.value = userStore.getUserInfo() || {
    account: "",
    email: "",
    avatar: "",
    name: "",
  };
};

const getCurrentPath = () => {
  let currentPath = route.path.split("/");

  for (let i = 0; i < leftList.value.length; i++) {
    let path = leftList.value[i].to.split("/");

    if (path[2] == currentPath[2]) {
      return leftList.value[i].to;
    }
  }
};

//教师端点击班级事件
const classOneClick = (id, index) => {
  //获取班级学生
  // alert(navList.value[index].account)
  if (userStore.getUserInfo().identity === "parents") {
    currentId.value = navList.value[index].account;
    router.push("/parents/papers/" + navList.value[index].account);
  } else if (userStore.getUserInfo().identity === "teacher") {
    currentId.value = id;
    router.push("/teacher/management/" + id);
  }
};

const getNews = async () => {
  const res = await getNewsAPI();

  if (res.data.code === 200) {
    newsList.value = res.data.data.filter((item) => {
      return item.to === userStore.getUserInfo().account;
    });

    console.log(newsList.value);

    isDot.value = false;
    for (let i = 0; i < newsList.value.length; i++) {
      if (newsList.value[i].state === 0) isDot.value = true;
    }
  }
};

const bindParents = async (state) => {
  const res = await bindParentsAPI(currentMessage.value.id, state);

  if (res.data.code === 200) {
    ElMessage.success("操作成功");

    router.push("/");

    isDot.value = false;
    for (let i = 0; i < newsList.value.length; i++) {
      if (newsList.value[i].state === 0) isDot.value = true;
    }
  } else ElMessage.error(res.data.message);

  relationshipVisible.value = false;
};

const dealRelationship = async (index) => {
  if (newsList.value[index].state === 2 || newsList.value[index].state === 3)
    return;

  currentMessage.value = newsList.value[index];

  //获取家长信息 和 标记改消息已读
  let res = await messageKnowAPI(newsList.value[index].id);

  if (res.data.code === 200) {
    newsList.value[index].state = 1;

    isDot.value = false;
    for (let i = 0; i < newsList.value.length; i++) {
      if (newsList.value[i].state === 0) isDot.value = true;
    }
  } else ElMessage.error(res.data.message);

  res = await getBindParentsInfoAPI(newsList.value[index].from);

  if (res.data.code === 200) {
    currentParentInfo.value = res.data.data;
  } else ElMessage.error(res.data.message);

  relationshipVisible.value = true;
};

watch(
  () => route.params,
  () => {
    if (userStore.getUserInfo().identity === "parents") {
      if (route.params.id === undefined) {
        currentId.value = -1;
      } else {
        currentId.value = route.params.id;
      }
    } else if (userStore.getUserInfo().identity === "teacher") {
      if (route.params.classId === undefined) {
        currentId.value = -1;
      } else {
        currentId.value = route.params.classId;
      }
    }
  }
);

watch(
  () => wsStore.message,
  () => {
    console.log(wsStore.message);

    newsList.value.push(wsStore.message);
  },
  {
    deep: true,
  }
);

onMounted(async () => {
  leftList.value = getNavList();

  new WOW().init();
  collapseOperation();

  initData();

  getCurrentPath();

  navList.value = await navStore.getNavList();

  wsStore.wsInit();

  getNews();
});
</script>
  
<style lang="scss">
//   @import url("@/styles/project/index.scss");

//   --el-menu-text-color:#3A63F3;

:root {
  --el-menu-item-height: 80px;
  --el-menu-base-level-padding: 40px;
  --el-text-color-primary: #8a8989;
}
.el-menu-item.is-active {
  background-color: #eceffe;
}
.el-menu {
  border-right: 0 !important;
}
.el-sub-menu {
  display: grid;
}
.el-menu--collapse .el-sub-menu__title span {
  display: block;
}
.el-menu--collapse .el-sub-menu__title .el-sub-menu__icon-arrow {
  display: none;
}

.hover:hover {
  color: #3a63f3;
}

.active {
  color: #3a63f3;
  font-weight: bold;
  font-size: 16px;
  //   background-color: #eceffe;
}
.subActive {
  color: #3a63f3 !important;
  // font-weight: bold;
  background-color: #eceffe;
}

.homeBackBox {
  @media screen and (min-width: 1440px) and (max-width: 1920px) {
  }
  @media screen and (min-width: 1024px) and (max-width: 1439px) {
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media screen and (min-width: 375px) and (max-width: 767px) {
  }
  width: 100%;
  height: 100%;
  background: #f5f7fa;
}
.homeTop {
  width: 100%;
  height: 80px;
  background: #fff;
  display: flex;
  text-align: center;
  line-height: 80px;
  @media screen and (min-width: 375px) and (max-width: 767px) {
    height: 80px;
    line-height: 80px;
    width: 100%;
    // 固定到顶部
    position: sticky;
    z-index: 1;
    top: 0;
  }

  .homeLogo {
    // flex:3;
    margin-left: 30px;
    width: 100px;
    min-width: 100px;
    height: 60px;
    margin-top: 10px;
    line-height: 80px;
    //background-image: url("../../../public/favicon.ico") no-repeat center;
    @media screen and (min-width: 375px) and (max-width: 767px) {
      display: none;
    }

    .logoImg {
      width: 60px;
      height: 60px;
    }
  }

  .homeProjectName {
    // flex:2;
    color: #3a63f3;
    // color:$primary-color;
    font-size: 26px;
    font-weight: bold;
    @media screen and (min-width: 375px) and (max-width: 767px) {
      margin-left: 10%;
    }
  }
  .el-dropdown-menu {
    padding: 8px 24px;
  }
  .homeUserInfo {
    flex: 17.5;
    display: flex;
    justify-content: right;
    @media screen and (min-width: 375px) and (max-width: 767px) {
      line-height: 60px;
      height: 60px;
      flex: 10;
    }
    .HomeItem {
      margin-top: 30px;
      line-height: 25px;
      margin-left: 40px;
      margin-right: 50px;
      @media screen and (min-width: 375px) and (max-width: 767px) {
        margin-top: 30px;
        margin-left: 20px;
        margin-right: 25px;
      }
    }

    .share-button {
      background-color: white;
      border: none;
      width: 20px;
      font-size: 20px;
      color: #8a8989;
      @media screen and (min-width: 375px) and (max-width: 767px) {
        font-size: 25px;
      }

      :hover {
        color: #9e9d9d;
      }
    }
    .homeAvatar {
      height: 100%;
      margin-right: 80px;
      .avatarOpen {
        height: 80px;
        padding: 0;
        border: none;
        img {
          width: 45px;
          height: 45px;
          border-radius: 50%;
          @media screen and (min-width: 375px) and (max-width: 767px) {
            margin: 0;
            width: 50px;
            height: 50px;
          }
        }
      }
    }
  }
}

.homeBottom {
  display: flex;
  // justify-content: stretch;
  width: 100%;
  height: 100%;
  // height: calc(100% - 80px);
  min-height: 900px;
  box-sizing: border-box;

  .homeLeft {
    background: #fff;
    //   width: 240px;
    transition: all 0.3s;
    //   font-weight: bold;
    font-size: 16px;

    // .menu{
    //     height: 80px;
    //     line-height: 80px;
    //     width: 240px;
    //     // text-align: center;
    // }
  }

  .homeRight {
    flex: 21;
    // background: #fff;
    margin: 10px 10px 10px 10px;
  }
}
//提示下拉框的样式
.el-popper {
  .el-dropdown-menu {
    padding: 10px 10px 0 10px;
    .el-dropdown-menu__item {
      padding: 10px 35px;
    }
  }
  .shareDropdown {
    line-height: 30px;
    margin-right: 15px;
    margin-bottom: 2px;
    display: flex;
    justify-content: flex-end;
    .shareDropdownSpan {
      cursor: pointer;
    }
  }
}

.table {
  border: 1px solid #eceffe;
  border-radius: 10px;
  border-collapse: collapse;
  box-sizing: border-box;
  width: 100%;
  // border-collapse: collapse;

  .tr:last-child {
    border: 0px;
  }

  .tr {
    display: flex;
    justify-content: space-between;
    height: 80px;
    line-height: 80px;
    border-bottom: 1px solid #eceffe;
    margin-left: 20px;
    margin-right: 20px;
    // border-collapse: collapse;
    // background-color: #3A63F3;
    .td {
      flex: 1;
    }
    .td:nth-child(1),
    .td:nth-child(2) {
      display: flex;
      justify-content: left;
    }
    .td:nth-child(3) {
      display: flex;
      justify-content: right;
      align-items: center;
      // background-color: palegoldenrod;
    }
    .homeUserInfoAvatar {
      width: 50px;
      height: 50px;
      margin-top: 15px;
      border-radius: 50%;
    }

    .fileTd {
      line-height: 10px;
      display: flex;
      align-items: center;
      justify-content: left;
    }
  }
}

.bindBox {
  display: flex;
  box-sizing: border-box;
  padding: 20px;

  .left {
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }

  .right {
    flex: 1;
    margin-left: 30px;
    // background: #3a63f3;

    display: flex;
    align-items: center;
    font-size: 18px;
  }
}
</style>