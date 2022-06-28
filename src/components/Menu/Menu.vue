<script setup lang="ts">
import './Menu.css'

type LinkType = {
	router: string
}
const linkList: LinkType[] = [
	{ router: '作品' },
	{ router: '博客' },
	{ router: '关于' }
]

</script>
<template>
	<div class="menu">
		<div class="submenu">
			<a class="link"
					v-for="(item, index) in linkList"
					:key="index">{{ item.router }}</a>
		</div>
	</div>
</template>