<script setup lang="ts">
import './Work.css'
import WorkCard from '../../components/WorkCard/WorkCard.vue'
import { ContentType } from '../../Type'
import { computed } from 'vue'
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
},
{
	title: 'Mirai-circlebot',
	imgPath: 'img/circlebot.jpg',
	time: '2022-07-06',
	detail: '自动生成所有配置文件的基于mirai-ts的mirai机器人',
	link: 'https://github.com/Circkoooooo/Mirai-Generator'
}
]

const list = computed(() => {
	const newList: ContentType[] = []
	contentList.forEach(item => {
		newList.unshift(item)
	})
	return newList
})
</script>
<template>
	<div class="work content_container">
		<WorkCard v-for="(item, index) in list"
				:key="index"
				:workCardInfo="item"></WorkCard>
	</div>
</template>