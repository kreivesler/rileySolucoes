import './assets/main.css'

import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'
const head = createHead()
const app = createApp(App)
app.use(head)
app.use(router)

app.mount('#app')
