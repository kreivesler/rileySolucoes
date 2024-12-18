import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ServicePage from '@/views/ServicePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/servicos',
      name: 'servicos',
      component: ServicePage
    },
    {
      path: '/sobre',
      name: 'sobre',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutPage.vue')
    },
    {
      path: '/politica/privacidade',
      name: 'politica/privacidade',
      component: ()=> import('../views/PoliticPage.vue')
    },
    {
      path: '/politica/servicos',
      name: 'politica/servicos',
      component: ()=> import('../views/PolicyServicePage.vue')
    }
  ]
})

export default router
