<template>
  <div class="regions">
    <div class="title">Регионы присутствия</div>
    <div class="regions__container">
      <div class="regions__info">
        <div class="regions__wrap">
          <div class="regions__list">
            <div class="regions__item" v-for="region in regions" :key="region.id">
              <div class="regions__title">{{ region.title }}</div>
              <div class="regions__separator"></div>
              <div class="regions__text" v-html="region.desc"></div>
            </div>
          </div>
          <div class="regions__contacts">
            <div class="regions__title">Центральный офис</div>
            <div class="regions__text">г. Москва, ул. Пресненская набережная, д.6, стр. 2, 25 этаж, Деловой комплекс "Империя" ММДЦ "Москва-Сити"</div>
          </div>
        </div>
      </div>
      <div class="regions__map">
        <img src="@/assets/images/map.png" alt="" class="regions__img">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegionsOfPresence',
  data: () => {
    return {
      regions: [
        {
          id: 0,
          title: 'Ульяновск',
          desc: '<span>С 2001 года</span> оказываем услугу <br><span>160 объектов</span> кейтеринга'
        },
        {
          id: 1,
          title: 'Тула',
          desc: '<span>С 2015 года</span> оказываем услугу <br><span>90 объектов</span> кейтеринга'
        },
        {
          id: 2,
          title: 'Волгоград',
          desc: '<span>С 2016 года</span> оказываем услугу <br><span>70 объектов</span> кейтеринга'
        },
        {
          id: 3,
          title: 'Калуга',
          desc: '<span>С 2017 года</span> оказываем услугу <br><span>80 объектов</span> кейтеринга'
        },
        {
          id: 4,
          title: 'Воронеж',
          desc: '<span>С 2018 года</span> оказываем услугу <br><span>70 объектов</span> кейтеринга'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
$regions: regions;

.#{$regions} {
  padding-top: 80px;
  padding-bottom: 80px;
  overflow: hidden;

  @media (min-width: $device-md) {
    padding-top: 100px;
    padding-bottom: 100px;
  }

  @media (min-width: $device-xl) {
    padding-top: 150px;
    padding-left: 65px;
    padding-bottom: 0;
  }

  &__info {
    grid-area: city;
    padding: 54px 18px 40px;
    background-color: $color-white;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.58);

    @media (min-width: $device-md) {
      padding: 48px 70px;
    }

    @media (min-width: $device-xl) {
      padding: 48px 100px;
    }
  }

  &__wrap {
    margin: 0 auto;

    @media (min-width: $device-md) {
      max-width: 626px;
      width: 100%;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: 100%;
    gap: 36px;
    margin-bottom: 22px;
  }

  &__container {
    display: grid;
    grid-template-areas:
      "map"
      "city";
    grid-template-rows: 500px auto;
    align-items: flex-start;
    padding-top: 30px;

    @media (min-width: $device-md) {
      grid-template-rows: 900px auto;
    }

    @media (min-width: $device-xl) {
      grid-template-areas: "city map";
      grid-template-rows: 1080px;
      gap: 50px;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (min-width: $device-md) {
      flex-direction: row;
      align-items: center;
    }

    .#{$regions}__title {
      flex-grow: 1;
      margin-bottom: 12px;
      text-align: end;

      @media (min-width: $device-md) {
        margin-bottom: 0;
      }
    }

    .#{$regions}__text span {
      color: $color-orange;
    }
  }

  &__separator {
    display: none;
    width: 1px;
    height: 64px;
    margin: 0 55px;
    background-color: #D8D8D8;
    border-radius: 1px;

    @media (min-width: $device-md) {
      display: block;
    }
  }

  &__contacts {
    padding-top: 20px;
    text-align: center;
    border-top: 1px solid #D8D8D8;
    border-radius: 1px;

    @media (min-width: $device-md) {
      padding-top: 32px;
    }

    .#{$regions}__title {
      margin-bottom: 12px;

      @media (min-width: $device-md) {
        margin-bottom: 16px;
      }
    }
  }

  &__title {
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    color: #020202;

    @media (min-width: $device-md) {
      font-size: 32px;
      line-height: 48px;
    }
  }

  &__text {
    color: #262626;
    font-size: 16px;
    line-height: 24px;

    @media (min-width: $device-md) {
      font-size: 20px;
      line-height: 32px;
    }
  }

  &__map {
    position: relative;
    height: 100%;
    grid-area: map;
    transform: translate(5%, -15%) scale(1.1);

    @media (min-width: $device-md) {
      transform: translateY(-65px) translateX(20%) scale(1.2);
    }

    @media (min-width: $device-xl) {
      transform: translateY(-130px);
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: right center;
  }

  .title {
    text-align: center;

    @media (min-width: $device-md) {
      padding: 0 43px;
      text-align: left;
    }

    @media (min-width: $device-xl) {
      padding: 0;
    }
  }
}
</style>
