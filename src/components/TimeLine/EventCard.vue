<script setup lang="ts">
interface PropType {
	value: string
}
const prop = withDefaults(defineProps<PropType>(), {})

//validate the value in prop
const pattern = /^[0-9]{4}-[0-9]{2}-[0-9]{2}/g
const result = pattern.test(prop.value)
if (!result) {
	throw new Error('do you require a string like \'yyyy-mm-dd\'')
}

</script>
<template>
	<div class="event_card">
		{{ value }}
	</div>
</template>