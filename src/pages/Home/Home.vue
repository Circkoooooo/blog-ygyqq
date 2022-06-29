<script setup lang="ts">
import './Home.css'
import Header from '../../components/Header/Header.vue'
import Main from '../../components/Main/Main.vue'
import Menu from '../../components/Menu/Menu.vue'

</script>
<template>
	<Header>one/circle</Header>
	<Main>
		<div class="article">
			<div class="prose">
				<Menu></Menu>
			</div>
		</div>
		<div class="container">
			<router-view></router-view>
		</div>
	</Main>
</template>