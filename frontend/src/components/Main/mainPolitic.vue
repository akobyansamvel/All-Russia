<script>
import axios from 'axios';

export default {
  name: 'mainPolitic',
  data() {
    return {
      items: [] // Массив для хранения данных по политике
    };
  },
  mounted() {
    this.fetchPoliticData();
  },
  methods: {
    async fetchPoliticData() {
      try {
        const response = await axios.get('http://localhost:5000/data_news_politics');
        this.items = response.data; // Присваиваем полученные данные в items
      } catch (error) {
        console.error('Ошибка при загрузке данных по политике:', error);
      }
    }
  }
};
</script>

<template>
  <div class="wrapper">
    <div class="horizontal-line"></div>
    <div class="red-rectangle"></div>
    <h3>ПОЛИТИКА</h3>

    <div class="container">
      <div v-for="item in items" :key="item.id" class="item">
        <img :src="`../../assets/${item.url}`" :alt="item.title" />
        <p>{{ item.subtitle }}</p>
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
</style>
