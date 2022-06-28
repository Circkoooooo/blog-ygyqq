import * as VueRouter from 'vue-router'

import Work from '../pages/Work/Work.vue'
import Blog from '../pages/Blog/Blog.vue'
const routes = [
	{ path: '/', component: Work },
	{ path: '/work', redirect: '/' },
	{ path: '/blog', component: Blog },
]

const router = VueRouter.createRouter({
	history: VueRouter.createWebHistory(),
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
