<script setup lang="ts">
import './Blog.css'
import BlogCard from '../../components/BlogCard/BlogCard.vue'
import blog from '../../../docs/blog.json'
</script>

<template>
	<div class="blog content_container">
		<div class="blog_aside">
			<div class="blog_number">
				<div class="article_number">
					文章：<p class="number">{{ blog.length }}</p>
				</div>
				<div class="classic">
					<p>
						pnpm:1
					</p>
				</div>
			</div>
		</div>
		<div class="blog_center">
			<BlogCard v-for="(item, index) in blog"
					:key="index"
					:blogCardInfo="item"></BlogCard>
		</div>
		<div class="blog_right">

		</div>
	</div>
</template>