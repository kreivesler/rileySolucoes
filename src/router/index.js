import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ServicePage from '@/views/ServicePage.vue'
import Sobre from '@/views/AboutPage.vue'
import Privacidade from '@/views/PoliticPage.vue'
import PolicyService  from '../views/PolicyServicePage.vue'
import Contato from '@/views/ContatoPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import { pagamentoStore, confirmaLogin, liberaCheckout } from '@/data/servicos'

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
      path: '/termo-uso',
      name: 'termo-de-uso',
      component: ()=> import('@/views/TermoUso.vue')
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
      component: ()=> import('@/views/CreateUser.vue'),
      beforeEnter: (to, from, next) => {
        if (pagamentoStore.pagamentoConcluido) {
          next(); // Libera acesso
        } else {
          next('/'); // Ou redireciona pra onde quiser
        }
      }
    },
    {
      path: '/painel',
      name: 'painel',
      component: () => import('@/views/DashboardPage.vue'),
      beforeEnter: (to, from, next) => {
        if (confirmaLogin.loginConfirmado) {
          next(); // Libera acesso
        } else {
          next('/login'); // Ou redireciona pra onde quiser
        }
      }
    },
    {
      path: '/learning',
      name: 'learn',
      component: ()=> import('@/views/MemberPage.vue'),
      beforeEnter: (to, from, next) => {
        if (confirmaLogin.loginConfirmado) {
          next(); // Libera acesso
        } else {
          next('/login'); // Ou redireciona pra onde quiser
        }
      }
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: ()=> import('@/views/CheckoutPage.vue'),
      beforeEnter: (to, from, next) => {
        if (liberaCheckout.checkoutLiberado) {
          next(); // Libera acesso
        } else {
          next('/'); // Ou redireciona pra onde quiser
        }
      }
    },
    {
      path: '/curso-de-informatica',
      name: 'curso-informatica',
      component: ()=> import('@/views/CursoInformatica.vue')
    },
    {
      path: '/curso-javascript',
      name: 'curso-javascript',
      component: ()=> import( '@/views/CursoJavascript.vue')
    }
  ]
})

export default router
