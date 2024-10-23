<script>
import axios from 'axios';

export default {
  name: 'mainTeach',
  data() {
    return {
      items: [] // Массив для хранения данных по науке и образованию
    };
  },
  mounted() {
    this.fetchScienceEducationData();
  },
  methods: {
    async fetchScienceEducationData() {
      try {
        const response = await axios.get('http://localhost:5000/data_news_science_education');
        this.items = response.data; // Присваиваем полученные данные в items
      } catch (error) {
        console.error('Ошибка при загрузке данных по науке и образованию:', error);
      }
    }
  }
};
</script>

<template>
  <div class="wrapper">
    <div class="horizontal-line"></div>
    <div class="red-rectangle"></div>
    <h3>НАУКА И ОБРАЗОВАНИЕ</h3>
    <div class="container">
      <div v-for="item in items" :key="item.id" class="item">
        <img class="item_1-img" :src="`../../assets/${item.url}`" :alt="item.title" />
        <h3 class="title">{{ item.title }}</h3>
        <p>{{ item.subtitle }}</p>
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
	width: 88px; /* ширина прямоугольника */
	height: 8px; /* высота прямоугольника */
	background-color: #aa0000; /* цвет фона прямоугольника */
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
</style>
