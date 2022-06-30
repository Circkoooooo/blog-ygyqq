import { createApp } from 'vue'
import Home from './pages/Home/Home.vue'
import './styles/global.css'
import './styles/reset.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'

import router from './router'

const app = createApp(Home)

app.directive('highlight', function (el: Element) {
	const blocks = el.querySelectorAll('pre code')
	blocks.forEach((block: Element) => {
		hljs.highlightBlock(block as HTMLElement)
	})
})

app.use(router)
app.mount('#app')
