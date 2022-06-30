<script setup lang="ts">
import './Home.css'
import Header from '../../components/Header/Header.vue'
import Main from '../../components/Main/Main.vue'
import Menu from '../../components/Menu/Menu.vue'
import { ref } from 'vue'

const headerHeight = 80
const menu = ref<HTMLElement>()
const toTopBar = ref({
	isShow: false
})
// 监听回到顶部
document.onscroll = () => {
	if (menu.value === undefined) {
		return
	}
	if (menu.value.offsetTop > headerHeight) {
		toTopBar.value.isShow = true
	} else {
		if (!toTopBar.value.isShow) return
		toTopBar.value.isShow = !toTopBar.value.isShow
	}
}
// 回到顶部
const toTop = () => {
	window.scrollTo(0, 0)
}
</script>
<template>
	<Header :height="headerHeight">one/circle</Header>
	<Main>
		<div class="article"
				ref="menu">
			<div class="prose">
				<Menu ref="menu"></Menu>
			</div>
		</div>
		<div class="container">
			<router-view></router-view>
		</div>
	</Main>
	<div class="to_top"
			@click="toTop"
			:class="{ show: toTopBar.isShow }">
		<p>回到<br>顶部</p>

	</div>
</template>