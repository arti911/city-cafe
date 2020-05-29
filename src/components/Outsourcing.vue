<template>
  <div class="outsourcing">
    <div class="outsourcing__menu">
      <div class="outsourcing__wrap">
        <div class="title title--white">Полный аутсорсинг услуг</div>
      </div>
      <div class="outsourcing__list">
        <div class="outsourcing__list-item" v-for="item in menu" :key="item.id">
          <button class="outsourcing__btn" :class="isActive === item.id ? 'outsourcing__btn--active' : ''" @click="openService(item.id, $event)">
            <span>{{ item.title }}</span>
          </button>
          <div class="outsourcing__content-mobile" v-if="isActive === item.id">
            <div class="outsourcing__item" v-html="item.content">
              <div  ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="outsourcing__content">
      <div class="outsourcing__item" v-html="menu[isActive].content">
        <div  ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Outsourcing',
  data: () => {
    return {
      isActive: 0,
      menu: [
        {
          id: 0,
          title: 'Организация питания',
          content: `
            <div class="outsourcing__text"><strong>Удовлетворенность:</strong> удовлетворение потребности конечного потребителя в пищевых веществах и энергии в соответствии с возрастными физиологическими особенностями, рациональное распределение энергетической ценности по отдельным приемам пищи</div>
            <div class="outsourcing__text"><strong>Безопасность:</strong> безопасность кулинарной продукции, которая достигается посредством системы многоступенчатого контроля качества, реализуемой специалистами компании</div>
            <div class="outsourcing__text"><strong>Качество:</strong> адекватная технологическая обработка пищевых продуктов, обеспечивающая максимальную сохранность пищевой ценности, высокие вкусовые качества кулинарной продукции, ее диетическую направленность и соответствие принципам здорового питания;</div>
          `
        },
        {
          id: 1,
          title: 'Форматы услуг',
          content: `
            <div class="outsourcing__text"><strong>Удовлетворенность:</strong> удовлетворение потребности конечного потребителя в пищевых веществах и энергии в соответствии с возрастными физиологическими особенностями, рациональное распределение энергетической ценности по отдельным приемам пищи</div>
            <div class="outsourcing__text"><strong>Безопасность:</strong> безопасность кулинарной продукции, которая достигается посредством системы многоступенчатого контроля качества, реализуемой специалистами компании</div>
            <div class="outsourcing__text"><strong>Качество:</strong> адекватная технологическая обработка пищевых продуктов, обеспечивающая максимальную сохранность пищевой ценности, высокие вкусовые качества кулинарной продукции, ее диетическую направленность и соответствие принципам здорового питания;</div>
          `
        },
        {
          id: 2,
          title: 'Меню',
          content: `
            <div class="outsourcing__text"><strong>Удовлетворенность:</strong> удовлетворение потребности конечного потребителя в пищевых веществах и энергии в соответствии с возрастными физиологическими особенностями, рациональное распределение энергетической ценности по отдельным приемам пищи</div>
            <div class="outsourcing__text"><strong>Безопасность:</strong> безопасность кулинарной продукции, которая достигается посредством системы многоступенчатого контроля качества, реализуемой специалистами компании</div>
            <div class="outsourcing__text"><strong>Качество:</strong> адекватная технологическая обработка пищевых продуктов, обеспечивающая максимальную сохранность пищевой ценности, высокие вкусовые качества кулинарной продукции, ее диетическую направленность и соответствие принципам здорового питания;</div>
          `
        },
        {
          id: 3,
          title: 'Инвестиции',
          content: `
            <div class="outsourcing__text"><strong>Удовлетворенность:</strong> удовлетворение потребности конечного потребителя в пищевых веществах и энергии в соответствии с возрастными физиологическими особенностями, рациональное распределение энергетической ценности по отдельным приемам пищи</div>
            <div class="outsourcing__text"><strong>Безопасность:</strong> безопасность кулинарной продукции, которая достигается посредством системы многоступенчатого контроля качества, реализуемой специалистами компании</div>
            <div class="outsourcing__text"><strong>Качество:</strong> адекватная технологическая обработка пищевых продуктов, обеспечивающая максимальную сохранность пищевой ценности, высокие вкусовые качества кулинарной продукции, ее диетическую направленность и соответствие принципам здорового питания;</div>
          `
        },
        {
          id: 4,
          title: 'Инновации',
          content: `
            <div class="outsourcing__text"><strong>Удовлетворенность:</strong> удовлетворение потребности конечного потребителя в пищевых веществах и энергии в соответствии с возрастными физиологическими особенностями, рациональное распределение энергетической ценности по отдельным приемам пищи</div>
            <div class="outsourcing__text"><strong>Безопасность:</strong> безопасность кулинарной продукции, которая достигается посредством системы многоступенчатого контроля качества, реализуемой специалистами компании</div>
            <div class="outsourcing__text"><strong>Качество:</strong> адекватная технологическая обработка пищевых продуктов, обеспечивающая максимальную сохранность пищевой ценности, высокие вкусовые качества кулинарной продукции, ее диетическую направленность и соответствие принципам здорового питания;</div>
          `
        }
      ]
    }
  },
  watch: {

  },
  methods: {
    openService (id, e) {
      this.isActive = id
      const element = e.currentTarget

      setTimeout(() => {
        if (document.documentElement.clientWidth < 992) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 0)
    }
  }
}
</script>

<style lang="scss">
$outsourcing: outsourcing;

.#{$outsourcing} {
  display: grid;
  grid-template-areas: "menu";
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.58);

  @media (min-width: $device-xl) {
    grid-template-areas: "menu menu content";
  }

  &__menu {
    position: relative;
    display: grid;
    gap: 80px;
    align-content: flex-start;
    grid-area: menu;
    padding: 90px 20px 85px;
    background: url('~@/assets/images/background_top_left.png') left top no-repeat, url('~@/assets/images/background_back_right.png') right bottom no-repeat;
    background-color: #000;
    background-size: auto;
    color: #fff;

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
      padding: 60px 0 105px;
    }

    @media (min-width: $device-xl) {
      gap: 40px;
      padding: 60px 0 0;
    }
  }

  &__wrap {
    @media (min-width: $device-md) {
      padding: 0 47px;
    }

    @media (min-width: $device-xl) {
      max-width: 562px;
      width: 100%;
      margin: 0 auto;
      padding: 0 20px;
      box-sizing: content-box;
    }
  }

  &__content {
    display: none;
    justify-content: flex-end;
    padding: 140px 65px 135px;
    grid-area: content;
    background: #EFEFEF;

    @media (min-width: $device-xl) {
      display: flex;
    }
  }

  &__content-mobile {
    padding: 40px 0 20px;

    @media (min-width: $device-md) {
      padding: 60px 45px 50px;
    }

    @media (min-width: $device-xl) {
      display: none;
    }
  }

  &__item {
    display: grid;
    gap: 20px;

    @media (min-width: $device-md) {
      gap: 45px;
    }

    @media (min-width: $device-xl) {
      max-width: 960px;
      width: 100%;
      gap: 44px;
    }
  }

  &__text {
    font-size: 16px;
    line-height: 24px;
    color: $color-white;

    @media (min-width: $device-xl) {
      font-size: 28px;
      line-height: 40px;
      color: #222222;
    }
  }

  &__list {
    display: grid;
    justify-items: flex-start;
    gap: 20px;

    @media (min-width: $device-xl) {
      gap: 32px;
    }
  }

  &__list-item {
    width: 100%;
  }

  &__btn {
    position: relative;
    display: block;
    width: 100%;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    text-transform: uppercase;
    text-align: left;
    color: $color-white;

    @media (min-width: $device-md) {
      padding: 15px 45px;
      font-weight: bold;
      font-size: 24px;
      line-height: 36px;
    }

    @media (min-width: $device-xl) {
      padding: 0;
      font-size: 36px;
      line-height: 52px;
    }

    span {
      position: relative;
      display: block;
      width: 100%;
      z-index: 2;
      margin: 0 auto;

      @media (min-width: $device-xl) {
        max-width: 562px;
        padding: 0 20px;
        box-sizing: content-box;
      }
    }

    &::before {
      content: '';
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      z-index: 2;
      border: 20.6px solid transparent;
      border-top-color: transparent;
      border-right-color: transparent;
      border-bottom-color: transparent;

      @media (min-width: $device-xl) {
        top: 0;
        left: 100%;
        transform: translateX(0);
        border: 26.6px solid transparent;
      }
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      background: transparent;
    }

    &--active {
      padding: 20px 0 15px;
      text-align: center;

      @media (min-width: $device-md) {
        padding: 15px 45px;
        text-align: left;
      }

      @media (min-width: $device-xl) {
        padding: 0;
      }

      &::before {
        border-top-color: #C12102;

        @media (min-width: $device-xl) {
          border-left-color: #C12102;
          border-top-color: transparent;
        }
      }

      &::after {
        background: #C12102;;
      }
    }
  }

  .title {
    text-align: center;

    @media (min-width: $device-md) and (max-width: $device-xl) {
      max-width: 384px;
      width: 100%;
      text-align: left;
    }

    @media (min-width: $device-xl) {
      text-align: left;
    }
  }
}
</style>
