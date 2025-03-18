import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ServicePage from '@/views/ServicePage.vue'
import Sobre from '@/views/AboutPage.vue'
import Privacidade from '@/views/PoliticPage.vue'
import PolicyService  from '../views/PolicyServicePage.vue'
import Contato from '@/views/ContatoPage.vue'
import LoginPage from '@/views/LoginPage.vue'

const router = createRouter({
  history: createWebHistory('/'),
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
      component: Sobre
    },
    {
      path: '/privacidade',
      name: 'privacidade',
      component: Privacidade
    },
    {
      path: '/politica-servicos',
      name: 'politica-servicos',
      component: PolicyService
    },
    {
      path: '/contato',
      name: 'contato',
      component: Contato
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: '/signup',
      name: 'signup',
      component: ()=> import('@/views/CreateUser.vue')
    },
    {
      path: '/painel',
      name: 'painel',
      component: () => import('@/views/DashboardPage.vue')
    },
    {
      path: '/learning',
      name: 'learn',
      component: ()=> import('@/views/MemberPage.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: ()=> import('@/views/CheckoutPage.vue')
    },
    {
      path: '/curso-de-informatica',
      name: 'curso-informatica',
      component: ()=> import('@/views/CursoInformatica.vue')
    }
  ]
})

export default router
