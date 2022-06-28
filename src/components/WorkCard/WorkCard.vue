<script setup lang="ts">
import { ContentType } from '../../Type'
import './WorkCard.css'

const prop = withDefaults(defineProps<{ workCardInfo: ContentType }>(), {})
const link = () => {
	window.open(prop.workCardInfo.link, '_blank')
}
</script>
<template>
	<div class="workcard"
			@click="link">
		<div class="content">
			<div class="content_left">
				<img :src="workCardInfo.imgPath">
			</div>
			<div class="content_right">
				<div class="text">
					<div class="title">{{ workCardInfo.title }}</div>
					<div class="add">
						<div class="detail">
							{{ workCardInfo.detail }}
						</div>
						<div class="time">
							{{ workCardInfo.time }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>