<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue'
import EventCard from './EventCard.vue'
import './TimeLine.css'
export interface TimeLineType {
	timeLineList: {
		timeValue: string,
		eventValueList: string[]
	}[]
}
withDefaults(defineProps<TimeLineType>(), {})





</script>

<template>
	<div class="time_line">
		<div class="timeline_container">
			<div class="line_support" />
			<EventCard v-for="(timeLineValue, key) in timeLineList"
					:key="key"
					ref="container"
					:timeValue="timeLineValue.timeValue"
					:eventValueList="timeLineValue.eventValueList" />
		</div>
	</div>
</template>