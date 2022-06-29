<script setup lang="ts">
import './BlogCard.css'
import { BlogCardType } from '../../Type'
import Tag from '../Tag/Tag.vue'
import { useRouter } from 'vue-router'

withDefaults(defineProps<{ blogCardInfo: BlogCardType }>(), {})
const router = useRouter()
const detail = (id: number) => {
	router.push({
		name: 'detail',
		params: {
			id: `${id + 1}`
		}
	})
}

</script>

<template>
	<div class="blogcard"
			@click="detail(blogCardInfo.id)">
		<div class="content">
			<div class="title">{{ blogCardInfo.title }}</div>
			<div class="detail">{{ blogCardInfo.detail }}</div>
		</div>
		<div class="add">
			<div class="tag_container">
				<Tag v-for="(item, index) in blogCardInfo.tag"
						:key="index"
						:tagVal="item"></Tag>
			</div>
			<div class="time">{{ blogCardInfo.time }}</div>
		</div>
	</div>
</template>