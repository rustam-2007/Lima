import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/pages/AboutView.vue'
import HomeView from '@/pages/HomeView.vue'


import NotFoundView from '@/pages/NotFoundView.vue'
import LoginView from '@/pages/LoginView.vue'

const routes = [
    {
    path: '/home',
    name: 'home',
    component: HomeView
  },

  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
    {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  // 404 sahifa uchun fallback
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
