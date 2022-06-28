<script setup lang="ts">
import './SlideMenu.css'
import './SlideMenu.mobile.css'
import { MenuConfigType } from '../../composables/useMenu'
import { computed } from 'vue'

const props = withDefaults(defineProps<{ slideConfig: MenuConfigType[], slideMenuIndex: number }>(), {})
defineEmits(['changeMenuIndex'])


const translateSize = computed(() => {
	return props.slideMenuIndex * 60 * -1
})
</script>
<template>
	<div class="slide_menu">
		<div class="submenu_container"
				:style="{ transform: `translateY(${translateSize}px)` }">
			<div class="submenu"
					:class="{ check: index === slideMenuIndex }"
					@click="
				$emit('changeMenuIndex',
					index)"
					v-for="(item, index) in slideConfig"
					:key="index">{{ item.name }}</div>
		</div>
	</div>
</template>