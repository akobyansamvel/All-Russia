<script>
import axios from 'axios';

export default {
  name: 'mainCulture',
  data() {
    return {
      items: [] // Массив для хранения полученных данных
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://localhost:5000/data_culture_history');
        this.items = response.data; // Присваиваем данные в items
      } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
      }
    }
  }
};
</script>

<template>
  <div>
    <div class="wrapper">
      <div class="horizontal-line"></div>
      <div class="red-rectangle"></div>
      <h3>КУЛЬТУРА И ИСТОРИЯ</h3>
      <div class="container">
        <div v-for="item in items" :key="item.id" class="item">
          <img :src="`../../assets/${item.url}`" :alt="item.title" />
          <p>{{ item.title }}</p>
          <p>{{ item.subtitle }}</p>
          <p><strong>{{ item.tag }}</strong> - {{ item.updated }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.wrapper {
	margin-bottom: 90px;
}

.container {
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: 357px;
}

.horizontal-line {
	height: 1px;
	width: 1440px;
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
	font-size: 24px;
	font-weight: normal;
}
</style>
