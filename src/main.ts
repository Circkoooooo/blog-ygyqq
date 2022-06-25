import { createApp } from 'vue'
import App from './App.vue'
import './styles/font.css'
import './styles/global.css'

import router from './router'
createApp(App).use(router).mount('#app')
