<script setup lang="ts">
import './BlogDetail.css'
import '../../styles/markdownStyle.less'
import { useRoute } from 'vue-router'
import blog from '../../docs/blog.json'
import { defineAsyncComponent } from 'vue'
const route = useRoute()
const id = ~~route.params.id - 1
const detail = blog[id]
const MarkdownContent = defineAsyncComponent(() => import(`../../docs/mds/${detail.title}.md`))
</script>

<template>
	<div class="blog_detail">
		<MarkdownContent></MarkdownContent>
	</div>
</template>
