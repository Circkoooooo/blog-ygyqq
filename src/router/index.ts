import * as VueRouter from 'vue-router'

import Work from '../pages/Work/Work.vue'
import Blog from '../pages/Blog/Blog.vue'
import BlogDetail from '../pages/Blog/BlogDetail.vue'

const routes = [
	{ path: '/', component: Work },
	{ path: '/work', redirect: '/' },
	{ path: '/blog', component: Blog },
	{ name: 'detail', path: '/detail/:id', component: BlogDetail },
]

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(),
	routes,
})

export const changeRouter = async (
	path: string,
	params?: { [key: string]: string }
) => {
	if (params === undefined) {
		return await router.push('/' + path)
	} else {
		return await router.push({
			name: path,
			params: params,
		})
	}
}

// check validity of to route.
// router.beforeEach(to => {
// 	if (
// 		!routes.some(item => {
// 			return item.path === to.fullPath
// 		})
// 	) {
// 		return false
// 	}
// 	return true
// })

export default router
