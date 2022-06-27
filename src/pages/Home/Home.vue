<script setup lang="ts">
import './Home.mobile.css'
import './Home.css'
import Header from '../../components/Header/Header.vue'
import SlideMenu from '../../components/SlideMenu/SlideMenu.vue'
import useMenu, { MenuConfigType } from '../../composables/useMenu'



const slideList: MenuConfigType[] = [
	{
		name: '作品',
		router: 'work'
	},
	{
		name: '文章',
		router: 'article'
	},
	{
		name: '关于',
		router: 'about'
	}
]
const routerMenu = useMenu(slideList)
const changeSlideMenuIndex = (index: number) => {
	routerMenu.changeSelect(index)
}
</script>
<template>
	<Header>One/Circle</Header>
	<div class="main">
		<div class="left">
			<SlideMenu :slideConfig="slideList"
					:slideMenuIndex="routerMenu.selectIndex.value"
					@changeMenuIndex="changeSlideMenuIndex"></SlideMenu>
		</div>
		<div class="content">
			<Transition>
				<router-view></router-view>
			</Transition>
		</div>
	</div>
</template>