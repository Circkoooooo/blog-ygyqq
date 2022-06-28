<script setup lang="ts">
import './Home.css'
import Header from '../../components/Header/Header.vue'
import Main from '../../components/Main/Main.vue'
import Menu from '../../components/Menu/Menu.vue'
import WorkCard from '../../components/WorkCard/WorkCard.vue'
import { ContentType } from '../../Type'

const contentList: ContentType[] = [{
	title: 'MineSweeper',
	imgPath: 'img/minesweeper.png',
	time: '2022-05-18',
	detail: '一个线上的扫雷小游戏',
	link: 'https://github.com/Circkoooooo/vue3-MineSweeper'
},
{
	title: 'Vmind(monorepo)',
	imgPath: 'img/vmind.png',
	time: '2022-05-25',
	detail: '提供一个用于绘制节点直接的贝塞尔曲线的api',
	link: 'https://github.com/Circkoooooo/vmind'
},]

</script>
<template>
	<Header>one/circle</Header>
	<Main>
		<div class="article">
			<div class="prose">
				<Menu></Menu>
			</div>
		</div>
		<div class="container">
			<div class="content_container">
				<WorkCard v-for="(item, index) in contentList"
						:key="index"
						:workCardInfo="item"></WorkCard>

			</div>
		</div>
	</Main>
</template>