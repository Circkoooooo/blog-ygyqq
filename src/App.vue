<script setup lang="ts">
import useMenu from './composables/useMenu'
import { MenuConfigType } from './composables/useMenu'
import SubMenu from './components/Submenu/Submenu.vue'
import { useRouter } from 'vue-router'
const content =
	`这是一个日常博客，记录了我在前端开发中遇到的问题以及学习并收获到的内容。
 	我会把开发工具Vue3、typescirpt，构建工具Vite，版本管理git，代码架构monorepo等的内容以及我的前端开发作品记录在此。`


const menuConfig: MenuConfigType[] = [
	{
		name: 'Home',
		router: '',
	},
	{
		name: 'Work',
		router: 'work',
	},
	{
		name: 'Archive',
		router: 'Archive',
	},
]

const { selectIndex, changeSelect } = useMenu(menuConfig)


</script>
<template>
	<div class="background">
		<router-view></router-view>
		<div class="app_submenu">
			<SubMenu :menuItems="menuConfig"
					:selectIndex="selectIndex"
					:changeSelect="changeSelect"></SubMenu>
		</div>
	</div>
</template>