import { createApp } from 'vue'
import App from './App.vue'
import './styles/global.css'

import './styles/keyframes.css'
import router from './router'
createApp(App).use(router).mount('#app')
