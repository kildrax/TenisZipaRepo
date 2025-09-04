import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import RankingGeneral from '@/views/RankingGeneral.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/ranking-general',
      name: 'ranking-general',
      component: RankingGeneral
    }
  ],
})

export default router
