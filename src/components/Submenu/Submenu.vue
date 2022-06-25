<script setup lang="ts">
import { MenuConfigType } from '../../composables/useMenu'
import './Submenu.css'
interface PropType {
	menuItems: MenuConfigType[],
	changeSelect: (index: number) => void,
	selectIndex: number
}
withDefaults(defineProps<PropType>(), {})

</script>
<template>
	<div class="submenu">
		<div class="menu_item"
				:class="{ select: selectIndex === key }"
				@click="changeSelect(key)"
				v-for="(item, key) in menuItems"
				:key="key">{{ item.name }}</div>

	</div>
</template>