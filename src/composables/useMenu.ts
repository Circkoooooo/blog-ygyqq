import { ref } from 'vue'
import { changeRouter } from '../router'
export type MenuConfigType = {
	name: string
	router: string
}

export default (menuConfig: MenuConfigType[]) => {
	const selectIndex = ref(0)
	const changeSelect = async (index: number) => {
		const result = await changeRouter(menuConfig[index].router)
		if (result === undefined) {
			selectIndex.value = index
		}
	}

	return {
		selectIndex,
		changeSelect,
	}
}
