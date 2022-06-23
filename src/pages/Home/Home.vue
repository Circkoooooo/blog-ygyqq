<script setup lang="ts">
import './Home.css'
import TimeLine from '../../components/TimeLine/TimeLine.vue'

const cardList = ['2022-06-24', '2022-06-26']
</script>
<template>
	<div class="background">
		<div class="timeline">
			<TimeLine :cardValueList="cardList"></TimeLine>
		</div>
	</div>
</template>