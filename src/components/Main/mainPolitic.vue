<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const arrPolitic = ref([
	{
		id: 1,
		title: 'Item 1',
		img: new URL('@/assets/12%20(1).png', import.meta.url).href,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
	},
	{
		id: 2,
		title: 'Item 2',
		img: new URL('@/assets/12%20(2).png', import.meta.url).href,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
	},
	{
		id: 3,
		title: 'Item 3',
		img: new URL('@/assets/12%20(3).png', import.meta.url).href,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
	},
	{
		id: 4,
		title: 'Item 4',
		img: new URL('@/assets/12%20(4).png', import.meta.url).href,
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
	}
])
</script>

<template>
	<div class="wrapper">
		<div class="horizontal-line"></div>
		<div class="red-rectangle"></div>
		<h3>ПОЛИТИКА</h3>

		<div class="container">
			<div v-for="item in arrPolitic" :key="item.id" class="item">
				<RouterLink to="/politic">
					<img :src="item.img" :alt="item.title" />
				</RouterLink>
				<p>{{ item.description }}</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.container {
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: 357px;
}

h3 {
	font-size: 24px;
	font-weight: normal;
	margin-top: 16px;
	margin-bottom: 24px;
}

.horizontal-line {
	height: 0.3px;
	opacity: 0.4;
	width: 100%;
	background-color: #000;
	margin: 0 auto;
}

.red-rectangle {
	width: 88px;
	height: 8px;
	background-color: #aa0000;
	margin-bottom: 10px;
}

.item > p {
	font-family: 'Roboto Condensed';
	font-size: 20px;
	font-weight: bold;
	margin-top: 16px;
}

@media screen and (width < 769px) {
	.container {
		display: flex;
		padding: 10px;
	}
	.item:not(:first-child) {
		display: none;
	}
}
</style>
