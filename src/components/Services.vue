<template>
  <div class="services">
    <div class="services__description">
      <div class="services__wrap">
        <div class="services__title title title--center title--white">Оказываем услуги кейтеринга</div>
        <p class="services__text">Наша компания обладает всеми необходимыми компетенциями по четырем направлениям деятельности:</p>
        <ul class="services__list">
          <li>Питание в дошкольных учреждениях</li>
          <li>Школьное питание</li>
          <li>Лечебное питание</li>
          <li>Корпоративное питание</li>
        </ul>
        <p class="services__text">Жюри Всероссийского конкурса по организации питания в школах, в 2019 году признало наш Ульяновский опыт лучшим в стране.</p>
        <p class="services__text">Компания Город кафе является активным участником общественного процесса по улучшению и стандартизации социального питания в Российской Федерации.</p>
      </div>
    </div>
    <div class="services__item" :class="'services__item--' + service.className" v-for="service in services" :key="service.id">
      <img :src="service.img" :alt="service.title">
      <div class="services__title">{{ service.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services',
  data: () => {
    return {
      services: [
        {
          id: 0,
          title: 'Медицинские учреждения',
          img: require('@/assets/images/medicine.jpg'),
          className: 'medicine'
        },
        {
          id: 1,
          title: 'Образовательные учреждения',
          img: require('@/assets/images/school.png'),
          className: 'school'
        },
        {
          id: 2,
          title: 'Дошкольные учреждения',
          img: require('@/assets/images/kids.png'),
          className: 'kids'
        },
        {
          id: 3,
          title: 'Коммерческие организации',
          img: require('@/assets/images/commerce.png'),
          className: 'commerce'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
$services: services;

.#{$services} {
  display: grid;
  grid-template-rows: auto 334px 334px 334px 334px;
  grid-template-areas:
      "desc"
      "medic"
      "school"
      "kids"
      "commerce";

  @media (min-width: $device-md) {
    grid-template-rows: auto 400px 400px;
    grid-template-areas:
      "desc desc"
      "medic school"
      "kids commerce";
  }

  @media (min-width: $device-xl) {
    grid-template-rows: auto auto;
    grid-template-areas:
      "desc medic school"
      "desc kids commerce";
  }

  &__description {
    position: relative;
    z-index: 2;
    grid-area: desc;
    padding: 120px 25px 84px;
    background:
      url('~@/assets/images/background_top_left.png') left top no-repeat,
      url('~@/assets/images/background_back_right.png') right bottom no-repeat;
    background-size: auto;
    background-color: #000;
    color: $color-white;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: $color-orange;
      mix-blend-mode: screen;
    }

    @media (min-width: $device-md) {
      padding: 100px 15px 60px;
    }

    @media (min-width: $device-xl) {
      padding: 100px 15px 35px;
    }
  }

  &__wrap {
    position: relative;
    z-index: 2;
    margin: 0 auto;

    @media (min-width: $device-md) {
      max-width: 600px;
    }
  }

  &__title.title {
    margin-bottom: 32px;

    @media (min-width: $device-md) {
      margin-bottom: 60px;
    }

    @media (min-width: $device-xl) {
      margin-bottom: 44px;
    }
  }

  &__list {
    margin: 25px 0;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.0428571px;
    text-transform: uppercase;

    @media (min-width: $device-md) {
      margin: 52px 0 35px;
      font-size: 24px;
      line-height: 36px;
      letter-spacing: 0.0642857px;
    }

    li {
      position: relative;
      padding-left: 12px;
      margin-bottom: 16px;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        width: 4px;
        height: 4px;
        background-color: $color-white;
        transform: translateY(-50%) rotate(45deg);
      }
    }
  }

  &__text {
    margin-bottom: 25px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.0428571px;

    @media (min-width: $device-md) {
      margin-bottom: 35px;
      font-size: 24px;
      line-height: 36px;
      letter-spacing: 0.0642857px;
    }

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  &__item {
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 0 12px 24px;
    color: $color-white;

    @media (min-width: $device-md) {
      padding: 0 25px 24px;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &--medicine {
      grid-area: medic;
    }

    &--school {
      grid-area: school;
    }

    &--kids {
      grid-area: kids;
    }

    &--commerce {
      grid-area: commerce;
    }
  }

  &__title {
    z-index: 1;
    font-weight: bold;
    font-size: 20px;
    line-height: 36px;
    text-align: center;

    @media (min-width: $device-xl) {
      font-size: 32px;
      line-height: 48px;
    }
  }
}
</style>
