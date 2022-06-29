<script setup lang="ts">
import './Blog.css'
import BlogCard from '../../components/BlogCard/BlogCard.vue'
import { BlogCardType } from '../../Type'
const blogCardList: BlogCardType[] = [
	{
		title: 'pnpm配置monorepo',
		detail: 'pnpm的配置',
		time: '2022-06-29',
		tag: ['vue', 'pnpm']
	}
]
</script>

<template>
	<div class="blog content_container">
		<div class="blog_center">
			<BlogCard v-for="(item, index) in blogCardList"
					:key="index"
					:blogCardInfo="item"></BlogCard>
		</div>
	</div>
</template>