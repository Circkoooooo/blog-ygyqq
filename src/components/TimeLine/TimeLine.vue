<script setup lang="ts">
import './TimeLine.css'
import EventCard from './EventCard.vue'
import { Ref, ref } from 'vue'
export interface TimeLineType {
	timeLineList: {
		timeValue: string,
		eventValueList: string[]
	}[]
}
withDefaults(defineProps<TimeLineType>(), {})

// 
const events: Ref<HTMLElement | null> = ref(null)
let isWheel = false
// 
const wheel = (e: WheelEvent | TouchEvent) => {
	if (events.value === null || isWheel) return
	const tranX = events.value.style.transform
	const transXnum = /-?[0-9]+/g.exec(tranX)

	if (e.type === 'wheel') {
		e = e as WheelEvent
		if (transXnum === null) {
			events.value.style.transform = 'translateX(0px)'
		} else {
			if (e.deltaY > 0) {
				events.value.style.transform = `translateX(${parseFloat(transXnum[0]) + 126}px)`
			} else {
				events.value.style.transform = `translateX(${parseFloat(transXnum[0]) - 126}px)`
			}
			isWheel = true
			setTimeout(() => {
				isWheel = false
			}, 30)
		}
	}
	// touchmove
}


</script>

<template>
	<div class="time_line"
			@wheel="wheel"
			@touchmove="wheel">
		<div class="timeline_container">
			<div class="line_support" />
			<div class="timeevent_container"
					ref="events">
				<EventCard v-for="(timeLineValue, key) in timeLineList"
						:key="key"
						:timeValue="timeLineValue.timeValue"
						:eventValueList="timeLineValue.eventValueList" />
			</div>
		</div>
	</div>
</template>