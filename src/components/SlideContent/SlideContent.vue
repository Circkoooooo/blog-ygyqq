<script setup lang="ts">
import './SlideContent.css'
import './SlideContent.mobile.css'
import type { ContentType } from '../../Type'
import { reactive } from 'vue'
const prop = withDefaults(defineProps<{ contentList: ContentType[] }>(), {})

const list = reactive(prop.contentList)
const changeCard = (index: number) => {
	if (index === 0) {
		if (prop.contentList[index].path !== undefined) {
			window.open(prop.contentList[index].path, 'blank')
		}
		return
	}
	const value = list.shift()
	if (value !== undefined) {
		list.push(value)
	}
}

</script>
<template>
	<div class="slide_content">
		<TransitionGroup name="list">
			<div class="
				slide_card"
					:class="{ check: key === 0 }"
					v-for="(item, key) in list"
					:key="item.title"
					@click="changeCard(key)">
				<img class="card_img"
						:src="item.imgPath">
				<div class="card_content">
					<p class="title">
						{{ item.title }}
					</p>
					<p class="time">
						{{ item.time }}
					</p>
				</div>
			</div>
		</TransitionGroup>
	</div>
</template>