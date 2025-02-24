<template>
	<div class="main">
		<div class="banner">
			<h1 class="banner__heading">Приволжский федеральный округ</h1>
		</div>
		<div class="list">
			<div class="wrapper">
				<div class="list__top top">
					<span class="top__line-red line-red"></span>
					<p class="top__text text-heading">Центр Приволжья</p>
					<div class="top__card card">
						<img
							class="card__img"
							src="../../assets/nizhny_novgorod_flag.png"
							alt="Нижний Новгород"
						/>
						<div class="card__box">
							<p class="card__heading">Нижний Новгород</p>
							<p class="card__text text-population">Население: 1 250 000 чел.</p>
							<p class="card__text text-square">Площадь: 410 км²</p>
							<p class="card__text text-time">Часовой пояс: MSK (UTC+3)</p>
						</div>
					</div>
				</div>
				<div class="list__bottom bottom">
					<span class="bottom__line-red line-red"></span>
					<p class="bottom__text text-heading">Регионы Приволжского федерального округа</p>
					<div class="container__card">
						<div class="item item-1">
							<img
								class="card__img"
								src="../../assets/ulyanovsk_flag.png"
								alt="Ульяновская область"
							/>
							<div class="item__card">
								<p class="card__heading">Ульяновская область</p>
								<p class="card__text text-population">Население: 1 290 000 чел.</p>
								<p class="card__text text-square">Площадь: 37.4 тыс. км²</p>
								<p class="card__text text-time">Часовой пояс: MSK (UTC+3)</p>
							</div>
						</div>
						<div class="item item-2">
							<img class="card__img" src="../../assets/samara_flag.png" alt="Самарская область" />
							<div class="item__card">
								<p class="card__heading">Самарская область</p>
								<p class="card__text text-population">Население: 3 200 000 чел.</p>
								<p class="card__text text-square">Площадь: 53.5 тыс. км²</p>
								<p class="card__text text-time">Часовой пояс: MSK (UTC+3)</p>
							</div>
						</div>
						<div class="item item-3">
							<img class="card__img" src="../../assets/kazan_flag.png" alt="Татарстан" />
							<div class="item__card">
								<p class="card__heading">Татарстан</p>
								<p class="card__text text-population">Население: 3 850 000 чел.</p>
								<p class="card__text text-square">Площадь: 68.0 тыс. км²</p>
								<p class="card__text text-time">Часовой пояс: MSK (UTC+3)</p>
							</div>
						</div>
						<div class="item item-4">
							<img class="card__img" src="../../assets/penza_flag.png" alt="Пензенская область" />
							<div class="item__card">
								<p class="card__heading">Пензенская область</p>
								<p class="card__text text-population">Население: 1 360 000 чел.</p>
								<p class="card__text text-square">Площадь: 43.0 тыс. км²</p>
								<p class="card__text text-time">Часовой пояс: MSK (UTC+3)</p>
							</div>
						</div>
						<div class="item item-5">
							<img
								class="card__img"
								src="../../assets/volgograd_flag.png"
								alt="Волгоградская область"
							/>
							<div class="item__card">
								<p class="card__heading">Волгоградская область</p>
								<p class="card__text text-population">Население: 2 520 000 чел.</p>
								<p class="card__text text-square">Площадь: 112.9 тыс. км²</p>
								<p class="card__text text-time">Часовой пояс: MSK (UTC+3)</p>
							</div>
						</div>
						<div class="item item-6">
							<img
								class="card__img"
								src="../../assets/astrakhan_flag.png"
								alt="Астраханская область"
							/>
							<div class="item__card">
								<p class="card__heading">Астраханская область</p>
								<p class="card__text text-population">Население: 1 010 000 чел.</p>
								<p class="card__text text-square">Площадь: 42.0 тыс. км²</p>
								<p class="card__text text-time">Часовой пояс: MSK (UTC+3)</p>
							</div>
						</div>
						<div class="item item-7">
							<img
								class="card__img"
								src="../../assets/orenburg_flag.png"
								alt="Оренбургская область"
							/>
							<div class="item__card">
								<p class="card__heading">Оренбургская область</p>
								<p class="card__text text-population">Население: 2 160 000 чел.</p>
								<p class="card__text text-square">Площадь: 124.6 тыс. км²</p>
								<p class="card__text text-time">Часовой пояс: MSK (UTC+3)</p>
							</div>
						</div>
						<div class="item item-8">
							<img
								class="card__img"
								src="../../assets/mari_el_flag.png"
								alt="Республика Марий Эл"
							/>
							<div class="item__card">
								<p class="card__heading">Республика Марий Эл</p>
								<p class="card__text text-population">Население: 700 000 чел.</p>
								<p class="card__text text-square">Площадь: 23.0 тыс. км²</p>
								<p class="card__text text-time">Часовой пояс: MSK (UTC+3)</p>
							</div>
						</div>
						<div class="item item-9">
							<img
								class="card__img"
								src="../../assets/mordovia_flag.png"
								alt="Республика Мордовия"
							/>
							<div class="item__card">
								<p class="card__heading">Республика Мордовия</p>
								<p class="card__text text-population">Население: 805 000 чел.</p>
								<p class="card__text text-square">Площадь: 25.5 тыс. км²</p>
								<p class="card__text text-time">Часовой пояс: MSK (UTC+3)</p>
							</div>
						</div>
						<div class="item item-10">
							<img
								class="card__img"
								src="../../assets/udmurtia_flag.png"
								alt="Удмуртская Республика"
							/>
							<div class="item__card">
								<p class="card__heading">Удмуртская Республика</p>
								<p class="card__text text-population">Население: 1 520 000 чел.</p>
								<p class="card__text text-square">Площадь: 42.1 тыс. км²</p>
								<p class="card__text text-time">Часовой пояс: MSK (UTC+3)</p>
							</div>
						</div>
						<div class="item item-11">
							<img class="card__img" src="../../assets/kirov_flag.png" alt="Кировская область" />
							<div class="item__card">
								<p class="card__heading">Кировская область</p>
								<p class="card__text text-population">Население: 1 280 000 чел.</p>
								<p class="card__text text-square">Площадь: 120.8 тыс. км²</p>
								<p class="card__text text-time">Часовой пояс: MSK (UTC+3)</p>
							</div>
						</div>
						<div class="item item-12">
							<img
								class="card__img"
								src="../../assets/cheboksary_flag.png"
								alt="Чувашская Республика"
							/>
							<div class="item__card">
								<p class="card__heading">Чувашская Республика</p>
								<p class="card__text text-population">Население: 1 200 000 чел.</p>
								<p class="card__text text-square">Площадь: 18.3 тыс. км²</p>
								<p class="card__text text-time">Часовой пояс: MSK (UTC+3)</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'VolgaFederalDistrict'
}
</script>

<style scoped>
.container__card {
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-column-gap: 90px;
	grid-row-gap: 60px;
}
.item {
	display: flex;
	gap: 25px;
}

.main {
	flex-direction: column;
	margin: 0;
}

p {
	margin: 0;
}

.wrapper {
	max-width: 1440px;
	margin: 0 auto;
}

.banner {
	background-image: url('@/assets/shapka.png');
	background-repeat: no-repeat;
	background-size: 100% 100%;
	min-height: 340px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.banner__heading {
	font-size: 80px;
	font-weight: bold;
	color: #ffffff;
}

.list {
	margin-top: 10px;
}

.list__top {
	border-top: 1px solid #aaaaaa;
}

.line-red {
	display: block;
	height: 13px;
	width: 80px;
	background-color: #aa0000;
}

.list__bottom {
	border-top: 1px solid #aaaaaa;
	margin-top: 80px;
}

.card {
	display: flex;
	margin-top: 32px;
}

.card__box {
	display: flex;
	flex-direction: column;
	margin-left: 25px;
	justify-content: space-between;
}

.card__img {
	height: 231px;
	width: auto;
}

.card__heading {
	margin-bottom: 57px;
	font-size: 36px;
}

.card__text {
	line-height: 2;
	font-size: 20px;
	white-space: nowrap;
}

.bottom {
	margin-bottom: 80px;
}

@media screen and (width < 1400px) {
	.container__card {
		grid-template-columns: repeat(3, 1fr);
	}

	.top__card {
		justify-content: center;
	}

	.item {
		flex-direction: column;
	}

	.card__heading {
		margin-bottom: 0;
	}
}

@media screen and (width < 1200px) {
	.container__card {
		grid-template-columns: 1fr 1fr;
	}
}

@media screen and (width < 1000px) {
	.banner__heading {
		font-size: 45px;
	}
}

@media screen and (width < 769px) {
	.main {
		padding: 10px;
	}
	.container__card {
		grid-column-gap: 0;
		grid-row-gap: 30px;
		display: flex;
		flex-direction: column;
	}
	.card {
		flex-direction: column;
	}
	.card__img {
		width: 100%;
		height: 338px;
	}
}
</style>
