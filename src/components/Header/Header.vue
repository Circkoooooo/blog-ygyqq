<script setup lang="ts">
import './Header.css'
const props = defineProps({ height: Number })
</script>
<template>
	<div class="header"
			:style="{ height: height + 'px' }">
		<slot></slot>
	</div>
</template>