<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__logo">
        <svg>
          <use xlink:href="#logo" />
        </svg>
      </div>
      <div class="header__burger" @click="toggleMenu" :class="showMenu ? 'header__burger--close' : '' ">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="header__buttons">
        <button @click="$emit('open-modal')">Связаться с нами</button>
        <button>События компании</button>
      </div>
      <div class="header__phones">
        <div class="header__phone">
          г. Ульяновск
          <a href="tel:88422335445">8 (8422) 33-54-45</a>
        </div>
        <div class="header__phone">
          г. Москва
          <a href="tel:">8 (495) 744-66-25</a>
        </div>
        <button class=" header__btn button">Оставить отзыв</button>
      </div>
    </div>
    <nav class="header__navigation" :class="showMenu ? 'header__navigation--mobile header__navigation--show' : ''">
      <div class="header__wrap" @click="toggleMenu"></div>
      <div class="header__menu">
        <div class="header__menu-item" v-for="(link, index) in links" :key="link.id" :class="link.title === '' ? 'header__menu-item--logo' : ''">
          <button v-if="!link.href" @click="scroll(index)">
            <span v-if="link.title !== ''">
              {{ link.title }}
            </span>
            <span v-else>
              <svg class="absolute">
                <use xlink:href="#logo-menu" />
              </svg>
              <svg class="hidden">
                <use xlink:href="#logo-menu" />
              </svg>
            </span>
          </button>
          <a :href="link.href" target="_blank" v-else>{{ link.title }}</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data: () => {
    return {
      showMenu: false,
      disabledScroll: false,
      links: [
        {
          id: 0,
          title: 'О компании'
        },
        {
          id: 1,
          title: 'Услуги'
        },
        {
          id: 2,
          title: 'Аутсорсинг'
        },
        {
          id: 3,
          title: 'Как мы работаем'
        },
        {
          id: 4,
          title: 'Контакты'
        },
        {
          id: 5,
          title: ''
        },
        {
          id: 6,
          title: 'Система качества',
          href: '#'
        },
        {
          id: 7,
          title: 'Система статистики',
          href: '#'
        },
        {
          id: 8,
          title: 'Проект «Моя школа»',
          href: '#'
        },
        {
          id: 9,
          title: 'Закупки',
          href: '#'
        }
      ]
    }
  },
  watch: {
    disabledScroll: function () {
      if (this.disabledScroll) {
        document.documentElement.style.overflow = 'hidden'
        return
      }

      document.documentElement.style.overflow = 'auto'
    }
  },
  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu
      this.disabledScroll = !this.disabledScroll
    },
    scroll (i) {
      document.getElementById(`${i}`).scrollIntoView({ block: 'start', behavior: 'smooth' })

      if (document.documentElement.clientWidth < 1280) {
        this.toggleMenu()
      }
    }
  }
}
</script>

<style lang="scss">
$header: header;

.#{header} {
  width: 100%;
  padding-top: 25px;
  background-color: $color-white;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.58);

  @media (min-width: $device-md) {
    padding-top: 40px;
  }

  @media (min-width: $device-xl) {
    padding-top: 20px;
    z-index: 9;
  }

  &__container {
    display: grid;
    grid-template-rows: repeat(3, auto);
    gap: 25px;
    grid-template-areas:
        "logo burger"
        "btn btn"
        "phone phone";
    padding-bottom: 25px;

    @media (min-width: $device-md) {
      grid-template-rows: repeat(2, auto);
      grid-template-areas:
        "logo btn burger"
        "phone phone phone";
      padding-bottom: 30px;
    }

    @media (min-width: $device-xl) {
      display: flex;
      align-items: center;
      padding-bottom: 20px;
      border-bottom: 2px solid $color-orange;
    }
  }

  &__logo {
    width: 135px;
    height: 32px;

    @media (min-width: $device-md) {
      width: 220px;
      height: 50px;
      grid-area: logo;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__burger {
    position: relative;
    display: grid;
    gap: 10px;
    justify-items: flex-end;
    grid-area: burger;
    z-index: 6;

    &::before,
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 25px;
      width: 4px;
      height: 100%;
      background: #3c3c3c;
      border-radius: 3px;
      opacity: 0;
      transition: opacity .2s ease;
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }

    span {
      height: 4px;
      background: #3c3c3c;
      border-radius: 3px;
      transition: opacity .2s ease;

      &:first-of-type {
        width: 60px;
      }

      &:nth-child(2) {
        width: 40px;
      }

      &:last-of-type {
        width: 28px;
      }
    }

    @media (min-width: $device-xl) {
      display: none;
    }

    &--close {
      &::before,
      &::after {
        opacity: 1;
      }

      span {
        opacity: 0;
      }
    }
  }

  &__buttons {
    display: grid;
    grid-template-columns: auto auto;
    gap: 20px;
    grid-area: btn;
    z-index: 1;

    @media (min-width: $device-xl) {
      padding: 0 70px;
      gap: 30px;
    }

    & > button {
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      color: $color-orange;
      text-decoration-line: underline;

      @media (min-width: $device-md) {
        font-size: 20px;
        line-height: 23px;
      }
    }
  }

  &__phones {
    display: grid;
    grid-template-areas:
      "phone btn"
      "phone2 btn";
    grid-area: phone;

    @media (min-width: $device-md) {
      grid-template-areas: "phone phone2 btn";
      align-items: center;
    }

    @media (min-width: $device-xl) {
      display: block;
      margin-right: 0;
      margin-left: auto;
      text-align: right;
    }
  }

  &__phone {
    font-size: 12px;
    line-height: 16px;

    @media (min-width: $device-md) {
      font-size: 16px;
      line-height: 28px;
    }

    @media (min-width: $device-xl) {
      font-size: 20px;
      line-height: 28px;
    }

    &:first-of-type {
      grid-area: phone;
    }

    &:last-of-type {
      grid-area: phone2;

      @media (min-width: $device-xl) {
        margin-bottom: 12px;
      }
    }

    & > a {
      font-weight: bold;
      color: $color-orange;
    }
  }

  &__btn {
    grid-area: btn;
  }

  &__navigation {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: -1;

    @media (min-width: $device-xl) {
      position: static;
      display: block;
      max-width: 1730px;
      width: 100%;
      height: auto;
      margin: 0 auto;
      padding: 16px 8px;
      z-index: 1;
    }

    &--mobile {
      z-index: 3;
    }

    &--show {
      .#{$header}__wrap {
        background: rgba(28, 28, 33, 0.9);
      }

      .#{$header}__menu {
        right: 0;
      }
    }
  }

  &__wrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: transparent;
    transition: background .4s ease;

    @media (min-width: $device-xl) {
      display: none;
    }
  }

  &__menu {
    position: absolute;
    top: 0;
    right: -100%;
    width: 447px;
    max-width: 100vw;
    height: 100%;
    padding: 38px 19px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: auto;
    background-color: $color-white;
    transition: right .4s ease;

    @media (min-width: $device-md) {
      padding: 38px;
    }

    @media (min-width: $device-xl) {
      position: static;
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      padding: 0;
      overflow: initial;
    }
  }

  &__menu-item {
    padding: 0 5px 25px;
    text-align: left;

    @media (min-width: $device-md) {
      white-space: nowrap;
    }

    @media (min-width: $device-xl) {
      padding: 0 5px;
    }

    & > * {
      font-weight: bold;
      font-size: 30px;
      line-height: 1;
      color: #464646;

      @media (min-width: $device-md) {
        font-size: 36px;
      }

      @media (min-width: $device-xl) {
        font-size: 16px;
        line-height: 20px;
      }
    }

    &:not(.#{$header}__menu-item--logo) {
      z-index: 2;
    }

    &--logo {
      position: relative;
      display: none;
      transform: translateY(-89px);

      @media (min-width: $device-xl) {
        display: initial;
      }

      &::after {
        content: '';
        width: calc(100% - 10px);
        height: 142px;
        transform: scale(1.8) translateY(-20px);
        position: absolute;
        top: 0;
        left: 0;
        border-radius: 50%;
        background-color: $color-white;
        z-index: -1;
      }

      svg {
        &.hidden {
          height: 0;
        }

        &.absolute {
          position: absolute;
          top: 0;
          left: 0;
      }

        width: 133px;
        height: 142px;
      }
    }
  }
}

</style>
