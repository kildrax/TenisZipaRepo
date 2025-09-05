import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import RankingGeneral from '@/views/RankingGeneral.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import CreateMatch from '@/views/CreateMatch.vue'

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
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registro',
      name: 'registro',
      component: Register
    },
    {
      path: '/crear-partido',
      name: 'crear-partido',
      component: CreateMatch
    },
  ],
})

export default router
