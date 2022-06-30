import * as VueRouter from 'vue-router'

import Work from '../pages/Work/Work.vue'
import Blog from '../pages/Blog/Blog.vue'
import BlogDetail from '../pages/Blog/BlogDetail.vue'

const routes = [
	{ path: '/', component: Work },
	{ path: '/work', redirect: '/' },
	{ path: '/blog', component: Blog },
	{ name: 'detail', path: '/blog/detail/:id', component: BlogDetail },
]

const router = VueRouter.createRouter({
	history: VueRouter.createWebHistory(),
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

export default router
