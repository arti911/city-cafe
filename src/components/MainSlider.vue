<template>
  <div class="main-slider">
    <div class="swiper-container swiper-container-main">
      <div class="swiper-wrapper">
        <div class="swiper-slide main-slider__slide" v-for="slide in slides" :key="slide.id">
          <img :src="slide.img" :alt="slide.id" v-parallax="0.1">
          <div class="main-slider__title" v-html="slide.text"></div>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-main"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'MainSlider',
  data: () => {
    return {
      slides: [
        {
          id: 0,
          img: require('@/assets/images/Slider_image_01.jpg'),
          text: 'Комплексное решение <br> по организации <span>социального</span> и <span>корпоративного</span> питания'
        },
        {
          id: 1,
          img: require('@/assets/images/Slider_image_01.jpg'),
          text: 'Комплексное решение <br> по организации <span>социального</span> и <span>корпоративного</span> питания'
        },
        {
          id: 2,
          img: require('@/assets/images/Slider_image_01.jpg'),
          text: 'Комплексное решение <br> по организации <span>социального</span> и <span>корпоративного</span> питания'
        }
      ],
      settingsSlider: {
        slidesPerView: 1,
        loop: true,
        speed: 700,
        grabCursor: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination-main',
          clickable: true
        }
      }
    }
  },
  mounted () {
    this.initSlider()
  },
  methods: {
    initSlider () {
      return new Swiper('.swiper-container-main', this.settingsSlider)
    },
    parallax () {
      console.log(1)
    }
  }
}
</script>

<style lang="scss">
.main-slider {
  height: 280px;

  @media (min-width: $device-md) {
    height: 458px;
  }

  @media (min-width: $device-xl) {
    height: 876px;
  }

  &__slide {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      position: absolute;
      top: -10%;
      left: 0;
      width: 100%;
      height: 130%;
      object-fit: cover;
      z-index: 0;
    }
  }

  &__title {
    max-width: 230px;
    z-index: 1;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #010101;

    @media (min-width: $device-md) {
      max-width: 570px;
      font-size: 40px;
      line-height: 52px;
    }

    @media (min-width: $device-xl) {
      max-width: 990px;
      padding-bottom: 88px;
      font-size: 72px;
      line-height: 82px;
    }

    span {
      color: $color-orange;
    }
  }

  .swiper-wrapper {
    transition-timing-function: ease;
  }

  .swiper-container-horizontal>.swiper-pagination-bullets {
    bottom: 58px;

    @media (min-width: $device-md) {
      bottom: 72px;
    }

    @media (min-width: $device-xl) {
      bottom: 152px;
    }
  }
}
</style>
