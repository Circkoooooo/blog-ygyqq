<script setup lang="ts">
import './BlogDetail.css'
import { useRoute } from 'vue-router'
import blog from '../../docs/blog.json'
import { defineAsyncComponent, defineComponent, onMounted } from 'vue'


const route = useRoute()
const id = ~~route.params.id - 1
const detail = blog[id]

// let temp = ref<string>()
// 通过字符串的形式引入 ?raw
// onMounted(async () => {
const AsyncTest = defineAsyncComponent(() => import(`../../docs/mds/${detail.title}.md`))

// defineComponent({
// 	name: 'app',
// 	Test: defineAsyncComponent(() => import(`../../docs/mds/${detail.title}.md`))
// })
// })

</script>
<template>
	<div class="blog_detail">
		<AsyncTest></AsyncTest>
	</div>
</template>