import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/views/home/index.vue";
import Login from "@/views/login/index.vue";
import Register from "@/views/register/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/login',
      name:'login',
      component: Login
    },
    {
      path:'/register',
      name:'register',
      component: Register
    }
  ]
})

export default router
