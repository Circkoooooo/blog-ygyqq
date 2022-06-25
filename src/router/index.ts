import * as VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import TimeLine from '../pages/TimeLine/TimeLine.vue'
const routes = [
	{ path: '/', component: Home },
	{ path: '/home', redirect: '/' },
	{ path: '/timeline', component: TimeLine },
]

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes,
})
export default router
