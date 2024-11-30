<script>
import axios from 'axios'

export default {
	name: 'MainPage',
	data() {
		return {
			mainArticle: {},
			similarArticles: [],
			economics: [],
			politics: []
		}
	},
	mounted() {
		this.fetchData()
	},
	methods: {
		async fetchData() {
			try {
				const mainResponse = await axios.get('https://allrussia.info/api/data_main_page')
				this.mainArticle = mainResponse.data.main_article[0]
				this.similarArticles = mainResponse.data.same_as_main.slice(0, 3)

				const economicsResponse = await axios.get('https://allrussia.info/api/data_news_economics')
				this.economics = economicsResponse.data

				const politicsResponse = await axios.get('https://allrussia.info/api/data_news_politics')
				this.politics = politicsResponse.data
			} catch (error) {
				console.error('Error fetching data:', error)
			}
		}
	}
}
</script>

<template>
	<div class="main-page">
		<!-- Главная статья -->
		<section class="main-page__section main-article">
			<div class="main-article__content">
				<h3 class="main-article__title">{{ mainArticle.title }}</h3>
				<p class="main-article__subtitle">{{ mainArticle.subtitle }}</p>
				<div class="divider divider--vertical"></div>
				<p class="main-article__text">Похожие новости:</p>
				<ul class="main-article__list">
					<li v-for="article in similarArticles" :key="article.id">
						{{ article.title }}
					</li>
				</ul>
			</div>
			<div class="main-article__image">
				<img src="../../assets/comunicacion%20politica%20(1)%201.png" alt="Main article" />
			</div>
		</section>

		<!-- Разделы новостей -->
		<section class="news-section">
			<!-- Экономика -->
			<div class="news-block">
				<h3 class="news-block__title">Экономика</h3>
				<div class="news-block__items">
					<div v-for="item in economics" :key="item.id" class="news-item">
						<img
							:src="`https://example.com${item.url}`"
							:alt="item.title"
							class="news-item__image"
						/>
						<p class="news-item__title">{{ item.title }}</p>
						<p class="news-item__subtitle">{{ item.subtitle }}</p>
					</div>
				</div>
			</div>

			<!-- Политика -->
			<div class="news-block">
				<h3 class="news-block__title">Политика</h3>
				<div class="news-block__items">
					<div v-for="item in politics" :key="item.id" class="news-item">
						<img :src="../../assets/${item.url}" :alt="item.title" class="news-item__image" />
						<p class="news-item__title">{{ item.title }}</p>
						<p class="news-item__subtitle">{{ item.subtitle }}</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<style lang="scss" scoped></style>
