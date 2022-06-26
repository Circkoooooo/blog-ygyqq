<script setup lang="ts">
import './SlideContent.css'
import type { ContentType } from '../../Type'
withDefaults(defineProps<{ contentList: ContentType[] }>(), {})
</script>
<template>
	<div class="slide_content">
		<div class="slide_card"
				:class="{ check: key === 0 }"
				v-for="(item, key) in contentList"
				:key="key">
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
	</div>
</template>