import { createApp } from 'vue'
import Home from './pages/Home/Home.vue'
import './styles/global.css'
import './styles/reset.css'
import 'highlight.js/styles/magula.css'

import router from './router'

const app = createApp(Home)

app.use(router)
app.mount('#app')
