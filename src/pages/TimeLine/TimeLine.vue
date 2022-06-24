<script setup lang="ts">
import './TimeLine.css'
import TimeLine from '../../components/TimeLine/TimeLine.vue'
import { TimeLineType } from '../../components/TimeLine/TimeLine.vue'
const config: TimeLineType = {
	timeLineList: [
		{
			timeValue: '2022-06-24',
			eventValueList: ['123']
		},
		{
			timeValue: '2022-06-25',
			eventValueList: ['12312312312312321312312213', '2312312312314']
		},
		{
			timeValue: '2022-06-26',
			eventValueList: ['123']
		},
		{
			timeValue: '2022-06-27',
			eventValueList: ['12312312312312321312312213', '2312312312314']
		}
	]
}
</script>
<template>
	<div class="background">
		<div class="main">
			<TimeLine :timeLineList="config.timeLineList"></TimeLine>
		</div>
	</div>
</template>