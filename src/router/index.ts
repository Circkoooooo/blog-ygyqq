import * as VueRouter from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Work from '../pages/Work/Work.vue'

const routes = [
	{ path: '/', component: Home },
	{ path: '/home', redirect: '/' },
	{
		path: '/work',
		component: Work,
	},
]

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes,
})

export const changeRouter = async (path: string) => {
	await router.push('/' + path)
}

// check validity of to route.
router.beforeEach((to, from) => {
	if (
		!routes.some(item => {
			return item.path === to.fullPath
		})
	) {
		return false
	}
})

export default router
