<script setup lang="ts">
import './Home.mobile.css'
import './Home.css'
import type { ContentType } from '../../Type'
import Header from '../../components/Header/Header.vue'
import SlideMenu from '../../components/SlideMenu/SlideMenu.vue'
import SlideContent from '../../components/SlideContent/SlideContent.vue'

const contentList: ContentType[] = [{
	imgPath: 'img/minesweeper.png',
	title: 'minesweeper',
	time: '2022-05-18'
}, {
	imgPath: 'img/minesweeper.png',
	title: '2',
	time: '2022-05-18'
}, {
	imgPath: 'img/minesweeper.png',
	title: '3',
	time: '2022-05-18'
}, {
	imgPath: 'img/minesweeper.png',
	title: '4',
	time: '2022-05-18'
}]

</script>
<template>
	<Header>Header</Header>
	<div class="main">
		<div class="left">
			<SlideMenu></SlideMenu>
		</div>
		<div class="content">
			<SlideContent :contentList="contentList"></SlideContent>
		</div>
	</div>
</template>