import * as VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'

const routes = [
	{ path: '/', component: Home },
	{ path: '/home', redirect: '/' },
]

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes,
})

export default router
