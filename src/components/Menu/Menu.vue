<script setup lang="ts">
import { onMounted, ref } from 'vue'
import useMenu, { MenuConfigType } from '../../composables/useMenu'
import './Menu.css'

const linkList: MenuConfigType[] = [
	{ name: '作品', router: 'work' },
	{ name: '博客', router: 'blog' },
	{ name: '关于', router: 'about' }
]
const { changeSelect, selectIndex } = useMenu(linkList)

onMounted(() => {
	const init = () => {
		const current = window.location.hash.split('/')[1]
		if (current !== undefined) {
			linkList.forEach((item, index) => {
				if (current === item.router) {
					changeSelect(index)
				}
			})
		} else {
			changeSelect(0)
		}
	}
	init()
})


</script>
<template>
	<div class="menu">
		<div class="submenu"
				:style="{ '--trans-size': `${selectIndex * 100}%` }">
			<div class="link"
					v-for="(item, index) in linkList"
					:key="index"
					@click="changeSelect(index)">{{ item.name }}</div>
		</div>
	</div>

</template>