<script setup lang="ts">
import './Blog.css'
import BlogCard from '../../components/BlogCard/BlogCard.vue'
import blog from '../../docs/blog.json'
import { BlogCardType } from '../../Type'
import { computed } from 'vue'

const init = () => {
	const tags: { [key: string]: number } = {}
	// 给每一个blog赋值id值为在数组中的索引
	// 将数组内容逆转，最新的最上面显示
	const newBlog: BlogCardType[] = []
	blog.forEach(item => {
		item.tag.forEach(tag => {
			if (tags[tag] === undefined) {
				tags[tag] = 1
			} else {
				tags[tag]++
			}
		})
		newBlog.push(item as BlogCardType)
	})
	newBlog.forEach((item, index) => {
		item.id = index
	})

	// 将tag的key和value提取出来
	const tagList = Object.entries(tags)

	return {
		newBlog,
		tagList
	}
}

const { newBlog, tagList } = init()
const renderBlog = computed(() => {
	const list: BlogCardType[] = []
	newBlog.forEach(item => {
		list.unshift(item)
	})
	return list
})


</script>

<template>
	<div class="blog content_container">
		<div class="blog_aside">
			<div class="blog_number">
				<div class="article_number">
					文章：<p class="number">{{ blog.length }}</p>
				</div>
				<div class="classic">
					<p class="classic_detail"
							v-for="(item, index) in tagList"
							:key="index">
						{{ item[0] }}:{{ item[1] }}
					</p>
				</div>
			</div>
		</div>
		<div class="blog_center">
			<BlogCard v-for="item in renderBlog"
					:key="item.id"
					:blogCardInfo="item"></BlogCard>
		</div>
		<div class="blog_right">

		</div>
	</div>
</template>