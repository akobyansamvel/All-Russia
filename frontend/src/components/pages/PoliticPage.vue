<script>
import axios from 'axios';

export default {
  name: 'mainPolitic',
  data() {
    return {
      mainItem: null, 
      containerItems: [], 
      newsItems: []
    };
  },
  mounted() {
    this.fetchPoliticData();
  },
  methods: {
    async fetchPoliticData() {
      try {
        const response = await axios.get('http://localhost:5000/data_news_politics');
        const data = response.data;
        this.mainItem = data[0];
        this.containerItems = data.slice(1, 5);
        this.newsItems = data.slice(5);
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
    
    <!-- Главный блок -->
    <div class="wrapper_main" v-if="mainItem">
      <div class="item item_main_1">
        <img :src="`@/assets/${mainItem.image}`" alt="main image" />
      </div>
      <div class="item item_main_2">
        <h2 class="main_title">{{ mainItem.title }}</h2>
        <p class="main_subtitle">{{ mainItem.subtitle }}</p>
      </div>
    </div>

 
    <div class="container">
      <div v-for="(item, index) in containerItems" :key="index" class="item">
        <img :src="`@/assets/${item.image}`" alt="news image" />
        <h2 class="container_title">{{ item.title }}</h2>
        <p class="container_subtitle">{{ item.subtitle }}</p> 
      </div>
    </div>

    <div class="horizontal-line"></div>
    <div class="red-rectangle"></div>
    <h3>ПОЛИТИКА</h3>

  
    <div class="news_container">
      <div v-for="(item, index) in newsItems" :key="index" class="items">
        <img :src="`@/assets/${item.image}`" alt="news image" />
        <h2 class="container_title">{{ item.title }}</h2>
        <p class="container_subtitle">{{ item.subtitle }}</p> 
      </div>
    </div>
  </div>
</template>


<script>
export default {
	name: 'PoliticPage',
	components: {}
}
</script>

<style scoped>
.wrapper {
	margin-top: 80px;
	max-width: 1440px;
}

.container {
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(4, 345px);
	grid-template-rows: 340px;
	grid-column-gap: 20px;
}
.wrapper_main {
	display: flex;
	justify-content: space-between;
	margin-bottom: 24px;
}

.news_container {
	display: grid;
	grid-template-columns: 953px;
	grid-template-rows: repeat(7, 280px);
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
.main_title {
	font-family: 'Roboto Condensed';
	font-weight: bold;
	font-size: 40px;
	margin: 0 0 8px 0;
}
.main_subtitle {
	font-family: 'Roboto', sans-serif;
	font-size: 14px;
	margin-bottom: 40px;
}
.main_subtitle-1 {
	font-size: 18px;
	font-family: 'Roboto', sans-serif;
}
.item_main_1 {
	margin-right: 20px;
}
.container_title {
	font-family: 'Roboto Condensed';
	font-weight: bold;
	font-size: 20px;
	margin-top: 8px;
}
.container_subtitle {
	font-size: 14px;
}
</style>
