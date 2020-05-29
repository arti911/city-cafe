<template>
  <div class="advantages">
    <div class="advantages__title title">Почему клиенты выбирают нас</div>
    <div class="advantages__text">Многолетний опыт позволил нам разработать лучшие практики на основе корпоративных стандартов, внедрить систему управления процессами и ресурсами компании. Мы гарантируем снижение издержек, высокую производительность труда нашего персонала и прозрачность прогнозируемых расходов. Работая с нами, вы можете быть уверены в безупречном качестве услуги.</div>
    <div class="advantages__container">
      <div class="advantages__subtitle">
        ЦЕНТР ЗДОРОВОГО ПИТАНИЯ
      </div>
      <div class="advantages__logo">
        <div class="advantages__logo-img">
          <svg>
            <use xlink:href="#logo-menu" />
          </svg>
        </div>
        <div class="advantages__logo-text">Ключевые факторы преимущества</div>
      </div>
      <div class="advantages__services">
        <figure class="advantages__item" v-for="service in services" :key="service.id">
          <div class="advantages__img" :class="'advantages__img--' + service.icon">
            <svg>
              <use :xlink:href="'#' + service.icon" />
            </svg>
          </div>
          <figcaption>
            <div class="advantages__name">{{ service.title }}</div>
            <div class="advantages__desc">{{ service.desc }}</div>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Advantages',
  data: () => {
    return {
      services: [
        {
          id: 0,
          icon: 'ten-day',
          title: '10+10 рабочих дней',
          desc: 'на расчёт и запуск проекта любой сложности;'
        },
        {
          id: 1,
          icon: 'develop',
          title: 'Разрабатываем',
          desc: 'индивидуальное решение для каждого заказчика;'
        },
        {
          id: 2,
          icon: 'introduce',
          title: 'Внедряем',
          desc: 'процессную модель управления и электронную систему учета питающихся;'
        },
        {
          id: 3,
          icon: 'build',
          title: 'Выстраиваем',
          desc: 'долгосрочные и  надежные отношения;'
        },
        {
          id: 4,
          icon: 'done',
          title: 'Выполняем',
          desc: 'свои обязательства.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
$advantages: advantages;

.#{$advantages} {
  padding: 80px 25px;

  @media (min-width: $device-md) {
    padding: 100px 47px;
  }

  @media (min-width: $device-xl) {
    padding: 150px 15px;
  }

  &__title {
    text-align: center;
  }

  &__text {
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.157143px;
    color: #222222;

    @media (min-width: $device-md) {
      font-size: 20px;
      line-height: 32px;
      letter-spacing: 0.196429px;
    }

    @media (min-width: $device-xl) {
      max-width: 1470px;
      margin: 0 auto;
      font-size: 28px;
      line-height: 40px;
      letter-spacing: 0.275px;
    }
  }

  &__container {
    display: grid;
    grid-template-rows: auto 272px auto;
    gap: 40px;
    justify-items: center;
    align-items: center;
    padding-top: 40px;

    @media (min-width: $device-md) {
      grid-template-rows: auto 500px auto;
      gap: 60px;
      padding-top: 100px;
    }

    @media (min-width: $device-xxl) {
      grid-template-columns: 412px 1fr 1fr;
      grid-template-rows: auto;
      max-width: 1730px;
      width: 100%;
      margin: 0 auto;
      padding-top: 60px;
    }
  }

  &__subtitle {
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    color: $color-orange;

    @media (min-width: $device-md) {
      font-size: 40px;
      line-height: 52px;
    }

    @media (min-width: $device-xl) {
      font-size: 60px;
      line-height: 80px;
    }
  }

  &__logo {
    position: relative;
    display: grid;
    justify-items: center;
    align-content: flex-start;
    gap: 10px;
    width: 272px;
    height: 272px;
    padding-top: 30px;

    @media (min-width: $device-md) {
      height: 100%;
      padding-top: 80px;
    }

    @media (min-width: $device-xl) {
      padding-top: 0;
      padding-bottom: 30px;
      height: auto;
    }

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 272px;
      height: 272px;
      z-index: 1;
      background: #efefef;
      transform: translate(-50%, -50%) rotate(45deg) scale(0.71);

      @media (min-width: $device-md) {
        width: 354px;
        height: 354px;
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: calc(50% + 9px);
      width: 272px;
      height: 272px;
      border: 4px solid $color-orange;
      transform: translate(-50%, -50%) rotate(45deg) scale(0.71);

      @media (min-width: $device-md) {
        width: 354px;
        height: 354px;
        transform: translate(-50%, -50%) rotate(45deg);
      }

      @media (min-width: $device-xl) {
        left: calc(50% + 17px);
      }
    }

    @media (min-width: $device-md) {
      width: 100%;
      max-width: 509px;
    }

    & > div {
      position: relative;
      z-index: 1;
    }
}

  &__logo-img {
    width: 83px;
    height: 89px;

    svg {
      width: 100%;
      height: 100%;
    }

    @media (min-width: $device-md) {
      width: 135px;
      height: 144px;
    }
  }

  &__logo-text {
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    text-transform: uppercase;
    color: #000;

    @media (min-width: $device-md) {
      font-size: 36px;
      line-height: 52px;
    }
  }

  &__services {
    display: grid;
    gap: 40px;

    @media (min-width: $device-md) {
      gap: 60px;
    }
  }

  &__item {
    display: grid;
    align-items: center;
    justify-items: center;
    gap: 16px;
    text-align: center;

    @media (min-width: $device-md) {
      grid-template-columns: auto 1fr;
      justify-items: flex-start;
      gap: 33px;
      text-align: left;
    }

    @media (min-width: $device-xl) {
      gap: 40px;
    }

    @media (min-width: $device-xxl) {
      &:nth-child(1) {
        margin-left: -35%;
      }

      &:nth-child(2) {
        margin-left: -10%;
      }

      &:nth-child(4) {
        margin-left: -10%;
      }

      &:nth-child(5) {
        margin-left: -35%;
      }
    }
  }

  &__img {
    svg {
      width: 100%;
      height: 100%;
    }

    &--ten-day {
      width: 64px;
      height: 64px;
    }

    &--develop {
      width: 71px;
      height: 64px;
    }

    &--introduce {
      width: 76px;
      height: 64px;
    }

    &--build {
      width: 64px;
      height: 64px;
    }

    &--done {
      width: 56px;
      height: 64px;
    }
  }

  &__name {
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    color: #020202;

    @media (min-width: $device-md) {
      font-size: 36px;
      line-height: 52px;
    }
  }

  &__desc {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.157143px;
    color: #222222;

    @media (min-width: $device-md) {
      font-size: 20px;
      line-height: 32px;
    }
  }
}
</style>
