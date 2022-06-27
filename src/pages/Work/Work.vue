<script setup lang="ts">
import { ContentType } from '../../Type'
import SlideContent from '../../components/SlideContent/SlideContent.vue'
import './Work.css'

const contentList: ContentType[] = [{
	imgPath: 'img/minesweeper.png',
	title: 'minesweeper',
	detail: '已上线的扫雷小游戏',
	time: '2022-05-18',
	path: 'https://github.com/Circkoooooo/vue3-MineSweeper'
}, {
	imgPath: 'img/vmind.png',
	title: 'vmind(monorepo)',
	detail: '提供api实现计算dom位置并绘制连线',
	time: '2022-05-25',
	path: 'https://github.com/Circkoooooo/vmind'
}]
</script>
<template>
	<div class="work_container">
		<SlideContent :contentList="contentList"></SlideContent>
	</div>
</template>