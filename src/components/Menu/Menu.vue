<script setup lang="ts">
import useMenu, { MenuConfigType } from '../../composables/useMenu'
import './Menu.css'

const linkList: MenuConfigType[] = [
	{ name: '作品', router: 'work' },
	{ name: '博客', router: 'blog' },
	{ name: '关于', router: 'about' }
]

const { changeSelect } = useMenu(linkList)
</script>
<template>
	<div class="menu">
		<div class="submenu">
			<div class="link"
					v-for="(item, index) in linkList"
					:key="index"
					@click="changeSelect(index)">{{ item.name }}</div>
		</div>
	</div>
</template>