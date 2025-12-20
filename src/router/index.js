import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '@/pages/AboutView.vue'
import HomeView from '@/pages/HomeView.vue'
import HealthcareView from '@/pages/HealthcareView.vue'

import NotFoundView from '@/pages/NotFoundView.vue'
import LoginView from '@/pages/LoginView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    components: {
      LeftSidebar: () => import('@/components/SidebarMenuComponent.vue'),
      TopNavbar: () => import('@/components/NavbarComponent.vue'),
      default: () => import('@/pages/HomeView.vue'),
    },
  },

  {
    path: '/about',
    name: 'about',
    components: {
      LeftSidebar: () => import('@/components/SidebarMenuComponent.vue'),
      TopNavbar: () => import('@/components/NavbarComponent.vue'),
      default: () => import('@/pages/AboutView.vue'),
    },
  },
   {
    path: '/detail',
    name: 'detail',
    components: {
      LeftSidebar: () => import('@/components/SidebarMenuComponent.vue'),
      TopNavbar: () => import('@/components/NavbarComponent.vue'),
      default: () => import('@/pages/DetailView.vue'),
    },
  },
  {
    path: '/healthcare',
    name: 'healthcare',
    components: {
      LeftSidebar: () => import('@/components/SidebarMenuComponent.vue'),
      TopNavbar: () => import('@/components/NavbarComponent.vue'),
      default: () => import('@/pages/HealthcareView.vue'),
    },
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  // 404 sahifa uchun fallback
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
