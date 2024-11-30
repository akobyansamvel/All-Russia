<script>
import axios from 'axios'

export default {
	name: 'mainPolitic',
	data() {
		return {
			newsItems: [],
			apiUrlNews: 'https://allrussia.info/api/data_news_politics' // URL API для новостей политики
		}
	},
	mounted() {
		this.fetchNewsItems()
	},
	methods: {
		async fetchNewsItems() {
			try {
				const response = await axios.get(this.apiUrlNews)
				this.newsItems = response.data // Предполагается, что API возвращает массив новостей
			} catch (e) {
				console.error('Error fetching news items:', e)
			}
		}
	}
}
</script>

<template>
	<div class="wrapper">
		<div class="horizontal-line"></div>
		<div class="red-rectangle"></div>
		<h3>ПОЛИТИКА</h3>

		<div class="container">
			<div v-for="item in newsItems" :key="item.id" class="item">
				<img :src="item.url" alt="News image" />
				<p>{{ item.title }}</p>
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
	width: 88px; /* ширина прямоугольника */
	height: 8px; /* высота прямоугольника */
	background-color: #aa0000; /* цвет фона прямоугольника */
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
	.item_1,
	.item_2,
	.item_3 {
		display: none;
	}
}
</style>
