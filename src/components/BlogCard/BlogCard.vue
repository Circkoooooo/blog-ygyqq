<script setup lang="ts">
import './BlogCard.css'
import { BlogCardType } from '../../Type'
import Tag from '../Tag/Tag.vue'
withDefaults(defineProps<{ blogCardInfo: BlogCardType }>(), {})
</script>

<template>
	<div class="blogcard">
		<div class="content">
			<div class="title">{{ blogCardInfo.title }}</div>
			<div class="detail">{{ blogCardInfo.detail }}</div>
		</div>
		<div class="add">
			<div class="tag">
				<Tag tagVal="pnpm"></Tag>
			</div>
			<div class="time">{{ blogCardInfo.time }}</div>
		</div>
	</div>
</template>