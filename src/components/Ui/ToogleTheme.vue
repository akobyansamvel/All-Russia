<template>
	<div>
		<label>
			<input type="checkbox" :checked="theme === 'dark'" @change="toggleTheme" />
			Dark Mode
		</label>
	</div>
</template>

<script>
import { useThemeStore } from '@/stores/ThemeStore'

export default {
	name: 'ThemeToggle',
	setup() {
		const themeStore = useThemeStore()

		themeStore.setTheme(themeStore.theme)

		return {
			theme: themeStore.theme,
			toggleTheme: themeStore.toggleTheme
		}
	}
}
</script>
