import * as VueRouter from 'vue-router'

import Work from '../pages/Work/Work.vue'
import TimeLine from '../pages/TimeLine/TimeLine.vue'
const routes = [
	{ path: '/', component: Work },
	{ path: '/work', redirect: '/' },
	{
		path: '/archive',
		component: TimeLine,
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
