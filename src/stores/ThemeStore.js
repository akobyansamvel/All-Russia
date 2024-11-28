import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
	state: () => ({
		theme: localStorage.getItem('theme') || 'light'
	}),
	actions: {
		setTheme(newTheme) {
			this.theme = newTheme
			localStorage.setItem('theme', newTheme)
			document.documentElement.classList.remove('dark', 'light')
			document.documentElement.classList.add(newTheme)
		},
		toggleTheme() {
			const newTheme = this.theme === 'dark' ? 'light' : 'dark'
			this.setTheme(newTheme)
		}
	}
})
