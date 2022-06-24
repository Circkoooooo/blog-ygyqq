<script setup lang="ts">
import './Home.css'
import SubMenu from '../../components/Submenu/Submenu.vue'
const content =
	`这是一个日常博客，记录了我在前端开发中遇到的问题以及学习并收获到的内容。
 	我会把开发工具Vue3、typescirpt，构建工具Vite，版本管理git，代码架构monorepo等的内容以及我的前端开发作品记录在此。`

const menu = ['Home', 'Work', 'Archive']
</script>
<template>
	<div class="home_background">
		<div class="home_overlay">
			<div class="home_maincontnet">
				<div class="title">One/Circle</div>
				<div class="content">
					{{ content }}
				</div>
			</div>
			<div class="home_submenu">
				<SubMenu :menuItems="menu"></SubMenu>
			</div>
		</div>
	</div>
</template>