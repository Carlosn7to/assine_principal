import { createRouter, createWebHashHistory } from 'vue-router'
import HomeMain from "@/views/main/HomeMain";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeMain
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
