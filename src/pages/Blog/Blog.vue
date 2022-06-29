<script setup lang="ts">
import './Blog.css'
import BlogCard from '../../components/BlogCard/BlogCard.vue'
import blog from '../../../docs/blog.json'

const tags: { [key: string]: number } = {}
const initTags = () => {
	blog.forEach(item => {
		item.tag.forEach(tag => {
			if (tags[tag] === undefined) {
				tags[tag] = 1
			} else {
				tags[tag]++
			}
		})
	})
}
initTags()
const tagList = Object.entries(tags)
</script>

<template>
	<div class="blog content_container">
		<div class="blog_aside">
			<div class="blog_number">
				<div class="article_number">
					文章：<p class="number">{{ blog.length }}</p>
				</div>
				<div class="classic">
					<p class="classic_detail" v-for="(item, index) in tagList"
							:key="index">
						{{ item[0] }}:{{ item[1] }}
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