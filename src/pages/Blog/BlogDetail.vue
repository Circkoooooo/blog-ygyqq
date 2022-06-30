<script setup lang="ts">
import './BlogDetail.css'
import '../../styles/markdownStyle.less'
import { useRoute } from 'vue-router'
import blog from '../../docs/blog.json'
import { defineAsyncComponent, onMounted, ref } from 'vue'
import hljs from 'highlight.js'

const route = useRoute()
const id = ~~route.params.id - 1
const detail = blog[id]

const doc = ref(null)
const MarkdownContent = defineAsyncComponent(() => import(`../../docs/mds/${detail.title}.md`))

// 有没有人看到了这个能告诉我，怎么在异步组件加载之后，然后从树里面取标签
let doms: HTMLCollection
onMounted(() => {
	setTimeout(() => {
		doms = document.getElementsByTagName('code')
		// console.log(doms[1].innerHTML)
		hljs.highlightBlock(doms[1] as HTMLElement)
	}, 3000)
})



</script>

<template>
	<div class="blog_detail">
		<MarkdownContent ref="doc"></MarkdownContent>
	</div>
</template>
