<script setup lang="ts">
import './Tag.css'
withDefaults(defineProps<{ tagVal: string }>(), {})
</script>

<template>
	<div class="tag">
		{{ tagVal }}
	</div>
</template>