<template>
	<div class="home">
		<main-section></main-section>
		<main-grid></main-grid>
		<mainEconomic />
		<main-politic></main-politic>
		<main-teach></main-teach>
		<main-culture />
		<main-theme />
	</div>
</template>

<script>
import mainCulture from '@/components/Main/mainCulture.vue'
import mainEconomic from '@/components/Main/mainEconomic.vue'
import mainGrid from '@/components/Main/mainGrid.vue'
import mainPolitic from '@/components/Main/mainPolitic.vue'
import MainSection from '@/components/Main/mainSection.vue'
import mainTeach from '@/components/Main/mainTeach.vue'
import mainTheme from '@/components/Main/mainTheme.vue'
export default {
	name: 'MainPage',
	components: {
		MainSection,
		mainGrid,
		mainEconomic,
		mainPolitic,
		mainTeach,
		mainCulture,
		mainTheme
	}
}
</script>

<style scoped></style>
