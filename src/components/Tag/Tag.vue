<script setup lang="ts">
import './Tag.css'
const prop = withDefaults(defineProps<{ tagVal: string }>(), {})
const color = ['#ffa502', '#20bf6b', '#1e90ff', '#6c5ce7', '#b1d5c8']
const getColor = () => {
	if (prop.tagVal.length <= 3) {
		return color[1]
	} else if (prop.tagVal.length <= 5) {
		return color[2]
	} else if (prop.tagVal.length <= 7) {
		return color[3]
	} else {
		return color[4]
	}
}
</script>

<template>
	<div class="tag"
			:style="{ backgroundColor: getColor() }">
		{{ tagVal }}
	</div>
</template>