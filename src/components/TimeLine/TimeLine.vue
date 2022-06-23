<script setup lang="ts">
import EventCard from './EventCard.vue'
import './TimeLine.css'
interface PropType {
	cardValueList?: string[]
}
withDefaults(defineProps<PropType>(), {})
</script>

<template>
	<div class="outer_line">
		<div class="line_support" />
		<div class="time_event">
			<EventCard v-for="(cardValue, key) in cardValueList"
					:key="key"
					:value="cardValue" />
		</div>
	</div>
</template>