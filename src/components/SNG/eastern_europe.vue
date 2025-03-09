<template>
  <div class="main">
    <div class="banner">
      <h1 class="banner__headding">Восточная Европа</h1>
    </div>
    <div class="list">
      <div class="wrapper">
        <div class="list__bottom bottom">
          <span class="bottom__line-red line-red"></span>
          <div class="container__card">
            <div class="item item_1">
              <img class="flag" src="@/assets/bulgaria_flag.png" alt="" />
              <div class="item__card">
                <p class="card__headding">Болгария</p>
                <p class="card__text text-population">Население: 7 000 000 чел.</p>
                <p class="card__text text-square">Площадь: 110,994 кв. км</p>
                <p class="card__text text-time">Часовой пояс: EET (UTC+2)</p>
                <p class="card__text text-language">Государственный язык: Болгарский</p>
              </div>
            </div>
            <div class="item item_2">
              <img class="flag" src="@/assets/hungary_flag.png" alt="" />
              <div class="item__card">
                <p class="card__headding">Венгрия</p>
                <p class="card__text text-population">Население: 9 600 000 чел.</p>
                <p class="card__text text-square">Площадь: 93,030 кв. км</p>
                <p class="card__text text-time">Часовой пояс: CET (UTC+1)</p>
                <p class="card__text text-language">Государственный язык: Венгерский</p>
              </div>
            </div>
            <div class="item item_3">
              <img class="flag" src="@/assets/poland_flag.png" alt="" />
              <div class="item__card">
                <p class="card__headding">Польша</p>
                <p class="card__text text-population">Население: 38 200 000 чел.</p>
                <p class="card__text text-square">Площадь: 312,696 кв. км</p>
                <p class="card__text text-time">Часовой пояс: CET (UTC+1)</p>
                <p class="card__text text-language">Государственный язык: Польский</p>
              </div>
            </div>
            <div class="item item_4">
              <img class="flag" src="@/assets/ukraine_flag.png" alt="" />
              <div class="item__card">
                <p class="card__headding">Украина</p>
                <p class="card__text text-population">Население: 41 100 000 чел.</p>
                <p class="card__text text-square">Площадь: 603,500 кв. км</p>
                <p class="card__text text-time">Часовой пояс: EET (UTC+2)</p>
                <p class="card__text text-language">Государственный язык: Украинский</p>
              </div>
            </div>
            <div class="item item_5">
              <img class="flag" src="@/assets/romania_flag.png" alt="" />
              <div class="item__card">
                <p class="card__headding">Румыния</p>
                <p class="card__text text-population">Население: 19 000 000 чел.</p>
                <p class="card__text text-square">Площадь: 238,397 кв. км</p>
                <p class="card__text text-time">Часовой пояс: EET (UTC+2)</p>
                <p class="card__text text-language">Государственный язык: Румынский</p>
              </div>
            </div>
            <div class="item item_6">
              <img class="flag" src="@/assets/moldova_flag.png" alt="" />
              <div class="item__card">
                <p class="card__headding">Молдова</p>
                <p class="card__text text-population">Население: 2 600 000 чел.</p>
                <p class="card__text text-square">Площадь: 33,851 кв. км</p>
                <p class="card__text text-time">Часовой пояс: EET (UTC+2)</p>
                <p class="card__text text-language">Государственный язык: Румынский</p>
              </div>
            </div>
            <div class="item item_7">
              <img class="flag" src="@/assets/czech_flag.png" alt="" />
              <div class="item__card">
                <p class="card__headding">Чехия</p>
                <p class="card__text text-population">Население: 10 700 000 чел.</p>
                <p class="card__text text-square">Площадь: 78,866 кв. км</p>
                <p class="card__text text-time">Часовой пояс: CET (UTC+1)</p>
                <p class="card__text text-language">Государственный язык: Чешский</p>
              </div>
            </div>
            <div class="item item_8">
              <img class="flag" src="@/assets/slovakia_flag.png" alt="" />
              <div class="item__card">
                <p class="card__headding">Словакия</p>
                <p class="card__text text-population">Население: 5 400 000 чел.</p>
                <p class="card__text text-square">Площадь: 49,035 кв. км</p>
                <p class="card__text text-time">Часовой пояс: CET (UTC+1)</p>
                <p class="card__text text-language">Государственный язык: Словацкий</p>
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
  name: 'EasternEurope'
}
</script>

<style scoped>
.container__card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(4, 225px);
  grid-column-gap: 90px;
  grid-row-gap: 60px;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

/* banner */
.banner {
  background-image: url('@/assets/shapka.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  min-height: 340px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner__headding {
  font-size: 80px;
  font-weight: bold;
  color: #ffffff;
}

/* list */
.list {
  margin-top: 10px;
}

.list__bottom {
  border-top: 1px solid #aaaaaa;
  margin-top: 80px;
}

.line-red {
  display: block;
  height: 13px;
  width: 80px;
  background-color: #aa0000;
}

.text-headdind {
  margin-bottom: 30px;
  margin-top: 24px;
  font-size: 24px;
  text-transform: uppercase;
}

/* card */
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

.card__headding {
  margin-bottom: 15px; /* Уменьшил отступ для выравнивания */
  font-size: 36px;
}

.card__text {
  line-height: 2;
  font-size: 20px;
}

.card__text.text-language {
  font-size: 18px;
}

.bottom {
  margin-bottom: 80px;
}

.flag {
  width: 320px; /* Увеличил ширину флагов до 200px */
  height: auto;
}

.item__card {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* media request */
@media screen and (width < 1400px) {
  .bottom__list-cards {
    justify-content: center;
  }

  .top__card {
    justify-content: center;
  }

  .banner__headding {
    font-size: 60px;
  }
}

@media screen and (width < 1000px) {
  .banner__headding {
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
  .item {
    flex-direction: column;
  }
  .card {
    flex-direction: column;
  }
  .card__headding {
    margin-bottom: 0;
  }
}
</style>
