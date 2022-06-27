<script setup lang="ts">
import { ContentType } from '../../Type'
import SlideContent from '../../components/SlideContent/SlideContent.vue'
import './Work.css'

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
	<div class="work_container">
		<SlideContent :contentList="contentList"></SlideContent>
	</div>
</template>