<script setup>
import { BASE_URL } from '@/Api'
import axios from 'axios'
import { onMounted, ref } from 'vue'

const mainArticle = ref([])
const sameAsArticle = ref([])

const fetchMainTeach = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/data_main_page`)
		mainArticle.value = response.data.main_article
		sameAsArticle.value = response.data.same_as_article
	} catch (error) {
		console.error('Ошибка при получении данных:', error)
	}
}

onMounted(fetchMainTeach)
</script>

<template>
	<div class="wrapper">
		<div class="horizontal-line"></div>
		<div class="red-rectangle"></div>
		<h3>НАУКА И ОБРАЗОВАНИЕ</h3>
		<div class="container">
			<div v-if="mainArticle.length" class="item item_1">
				<img class="item_1-img" :src="mainArticle[0]?.img" alt="" />
				<h3 class="title">{{ mainArticle[0]?.title }}</h3>
				<p>{{ mainArticle[0]?.description }}</p>
			</div>
			<div v-for="(item, index) in sameAsArticle" :key="index" :class="`item item_${index + 2}`">
				<img :src="item.img" alt="" />
				<p class="title">{{ item.title }}</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
.wrapper {
	margin-bottom: 60px;
}

.container {
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: repeat(2, 340px);
	grid-row-gap: 32px;
	grid-column-gap: 20px;
}

.item_1 {
	grid-column: 1/3;
	grid-row: 1/3;
}

.item_1-img {
	width: 100%;
}

.horizontal-line {
	height: 1px;
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

h3 {
	margin-top: 16px;
	margin-bottom: 32px;
	font-size: 24px;
	font-weight: normal;
}

.title {
	font-family: 'Roboto Condensed';
	font-size: 20px;
	font-weight: bold;
}

.title:first-child {
	margin-top: 16px;
	margin-bottom: 20px;
}

@media screen and (width < 769px) {
	.wrapper {
		padding: 10px;
		margin-bottom: 20px;
	}
	.container {
		display: flex;
	}
	.item_2,
	.item_3,
	.item_4,
	.item_5 {
		display: none;
	}
	.title {
		margin-bottom: 5px;
		font-size: 16px;
	}
	p {
		font-size: 16px;
	}
}
</style>
