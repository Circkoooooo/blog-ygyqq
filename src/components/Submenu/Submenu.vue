<script setup lang="ts">
import { ref } from 'vue'
import './Submenu.css'
interface PropType {
	menuItems: string[]
}
withDefaults(defineProps<PropType>(), {})
const selectIndex = ref(0)

// 
const changeSelect = (key: number) => {
	selectIndex.value = key
}
</script>
<template>
	<div class="submenu">
		<div class="menu_item"
				:class="{ select: selectIndex === key }"
				@click="changeSelect(key)"
				v-for="(item, key) in menuItems"
				:key="key">{{ item }}</div>

	</div>
</template>