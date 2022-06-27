import * as VueRouter from 'vue-router'

import Work from '../pages/Work/Work.vue'
const routes = [
	{ path: '/', component: Work },
	{ path: '/work', redirect: '/' },
]

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes,
})

export const changeRouter = async (path: string) => {
	return await router.push('/' + path)
}

// check validity of to route.
router.beforeEach(to => {
	if (
		!routes.some(item => {
			return item.path === to.fullPath
		})
	) {
		return false
	}
	return true
})

export default router
