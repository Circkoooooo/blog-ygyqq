<script setup lang="ts">
import './Home.css'
import Header from '../../components/Header/Header.vue'
import Main from '../../components/Main/Main.vue'
import Menu from '../../components/Menu/Menu.vue'
import WorkCard from '../../components/WorkCard/WorkCard.vue'


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
			<div class="content_container">
				<WorkCard></WorkCard>
				<WorkCard></WorkCard>
				<WorkCard></WorkCard>
			</div>
		</div>
	</Main>
</template>