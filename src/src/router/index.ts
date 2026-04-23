import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/development',
      name: 'development',
      component: () => import('../views/DevelopmentView.vue'),
    },
    {
      path: '/development/sb',
      name: 'development-sb',
      component: () => import('../views/DevelopmentSbView.vue'),
    },
  ],
})

export default router
