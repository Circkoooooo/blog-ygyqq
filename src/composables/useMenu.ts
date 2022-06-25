import { onMounted, ref } from 'vue'
import { Router, useRouter, useRoute } from 'vue-router'
import { changeRouter } from '../router'
export type MenuConfigType = {
	name: string
	router: string
}

export default (menuConfig: MenuConfigType[]) => {
	let router: Router
	const selectIndex = ref(0)
	onMounted(() => {
		router = useRouter()
		// 匹配按钮
		const localtion = /http.+#\/([a-z]+|\d+)/g.exec(window.location.href)
		if (localtion !== null) {
			const index = menuConfig.findIndex(item => {
				return item.router === localtion[1]
			})
			router.push({
				path: index === -1 ? '/' : '/' + localtion[1],
			})
			selectIndex.value = index
		}
	})

	const changeSelect = (index: number) => {
		selectIndex.value = index
		changeRouter(menuConfig[selectIndex.value].name)
	}

	return {
		selectIndex,
		changeSelect,
	}
}
