<script setup lang="ts">
import './SlideMenu.css'
import './SlideMenu.mobile.css'
import { MenuConfigType } from '../../composables/useMenu'
withDefaults(defineProps<{ slideConfig: MenuConfigType[], slideMenuIndex: number }>(), {})

defineEmits(['changeMenuIndex'])
</script>
<template>
	<div class="slide_menu">
		<div class="submenu_container">
			<div class="submenu"
					:class="{ check: index === slideMenuIndex }"
					@click="$emit('changeMenuIndex', index)"
					v-for="(item, index) in slideConfig"
					:key="index">{{ item.name }}</div>
		</div>
	</div>
</template>