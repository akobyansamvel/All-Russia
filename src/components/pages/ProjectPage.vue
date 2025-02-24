<script>

import NavigateBar from '@/components/layouts/NavigateBar.vue';
import axios from 'axios';


export default {
 name: 'ProjectPage',
 components: {
  NavigateBar
 },
 data() {
  return {
   projects: [], // Храним данные проектов из API
   loading: true,
   error: null,
   apiUrlProjects: 'https://allrussia.info/api/data_news_projects'
  }
 },
 async mounted() {
  await this.fetchProjects()
 },
 methods: {
  async fetchProjects() {
   try {
    const response = await axios.get(this.apiUrlProjects)
    this.projects = response.data // Предполагается, что это массив проектов
    this.loading = false
   } catch (e) {
    console.error('Error fetching projects:', e)
    this.error = 'Failed to load data'
    this.loading = false
   }
  }
 }
}
</script>

<template>
 <div class="container">
  <div class="justify">
   <div class="wrapper">
    <div class="list__top top"></div>
    <div class="red-rectangle"></div>
    <h2 class="wrapper__title">НАШИ ПРОЕКТЫ</h2>


    <!-- Сообщение о загрузке -->
    <div v-if="loading">Загрузка...</div>
    <!-- Сообщение об ошибке -->
    <div v-if="error">{{ error }}</div>

    <!-- Отображение проектов -->
    <div v-if="!loading && !error" class="wrapper__container">
     <div v-for="project in projects" :key="project.id" class="item">
      <img :src="project.url || '@/assets/placeholder.png'" alt="Project image" />
      <h3 class="item__title">{{ project.title }}</h3>
      <p class="item__subtitle" v-html="project.subtitle"></p>
      <p class="item__date">{{ project.updated }}</p>

     </div>
    </div>
   </div>
   <div class="navigate">
    <NavigateBar />
   </div>
  </div>
 </div>
</template>

<style scoped>
.container {
 max-width: 1440px;
 margin: 0 auto;
}
.justify {
 margin-top: 80px;
 display: flex;
 justify-content: space-between;
}

.red-rectangle {
 width: 88px; /* ширина прямоугольника */
 height: 8px; /* высота прямоугольника */
 background-color: #aa0000; /* цвет фона прямоугольника */
 margin-bottom: 10px;
}
.list__top {
 border-top: 1px solid #aaaaaa;
}
.top_1 {
 margin-bottom: 32px;
}
.wrapper__title {
 max-width: 1120px;
}

.wrapper__container {
 display: grid;
 grid-template-columns: repeat(3, 345px);
 grid-template-rows: 449px;
 grid-column-gap: 41px;
 margin-bottom: 32px;
 max-width: 1121px;
}

.item__title {
 font-size: 20px;
 margin: 8px 0 0 0;
}
.item__subtitle {
 margin: 8px 0 0 0;
 font-size: 16px;
}
@media screen and (width < 769px) {
 .container {
  padding: 10px;
 }
 .wrapper__container {
  display: flex;
  flex-direction: column;
 }
 .item__title {
  font-size: 17px;
 }
 .item__subtitle {
  font-size: 17px;
 }
 .navigate {
  display: none;
 }
}
</style>
