import { createApp } from 'vue'
import Home from './pages/Home/Home.vue'
import './styles/global.css'

import router from './router'


createApp(Home).use(router).mount('#app')
