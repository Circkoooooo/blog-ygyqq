import { onMounted, ref } from 'vue'
import { Router, useRouter } from 'vue-router'
export type MenuConfigType = {
	name: string
	router: string
}

export default (menuConfig: MenuConfigType[]) => {
	let router: Router
	onMounted(() => {
		router = useRouter()
	})
	const selectIndex = ref(0)

	const changeSelect = (index: number) => {
		selectIndex.value = index
		router.push({
			path: '/' + menuConfig[selectIndex.value].name,
		})
	}

	return {
		selectIndex,
		changeSelect,
	}
}
