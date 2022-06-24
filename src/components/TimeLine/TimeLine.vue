<script setup lang="ts">
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
			<div class="time_event">
				<EventCard v-for="(timeLineValue, key) in timeLineList"
						:key="key"
						:timeValue="timeLineValue.timeValue"
						:eventValueList="timeLineValue.eventValueList" />
			</div>
		</div>
	</div>
</template>