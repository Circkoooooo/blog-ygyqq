<script setup lang="ts">
import './BlogDetail.css'
import { useRoute } from 'vue-router'
import blog from '../../../public/docs/blog.json'
import { onMounted, ref } from 'vue'
import { marked } from 'marked'

const route = useRoute()
const id = ~~route.params.id - 1
const detail = blog[id]

let temp = ref<string>()
// 通过字符串的形式引入 ?raw
onMounted(async () => {
	const data = await import(`../../../public/docs/mds/${detail.title}.md?raw`)
	temp.value = marked(data.default)
	// 检查
	const pattern = /<.+>(.+)<\/h1>/g
	const res = pattern.exec(temp.value)
	if (res !== null && res[1] !== detail.title) {
		throw new Error(`The title should be '${detail.title}'`)
	}
})

</script>
<template>
	<div class="blog_detail">
		<div v-html="temp"></div>
	</div>
</template>