<script setup lang="ts">
interface PropType {
	timeValue: string,
	eventValueList: string[]
}
const prop = withDefaults(defineProps<PropType>(), {})

//validate the value in prop
const pattern = /^[0-9]{4}-[0-9]{2}-[0-9]{2}/g
const result = pattern.test(prop.timeValue)
if (!result) {
	throw new Error('do you require a string like \'yyyy-mm-dd\'')
}



</script>
<template>
	<div class="event_container">
		<div class="event_timecard">
			<div class="content">
				{{ timeValue }}
			</div>
		</div>
		<div class="event_infocard_container">
			<div class="event_infocard "
					v-for="(eventVal, index) in eventValueList"
					:key="index">
				{{ eventVal }}
			</div>
		</div>
	</div>
</template>