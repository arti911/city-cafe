<template>
  <div class="documents">
    <div class="title title--center">Документы</div>
    <div class="documents__container">
      <div class="swiper-container swiper-container-documents">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img class="documents__img" src="~@/assets/images/licens_01@3x.png" alt="">
          </div>
          <div class="swiper-slide">
            <img class="documents__img" src="~@/assets/images/licens_02@3x.png" alt="">
          </div>
          <div class="swiper-slide">
            <img class="documents__img" src="~@/assets/images/licens_03@3x.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-button-prev swiper-button-prev-doc"></div>
    <div class="swiper-button-next swiper-button-next-doc"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'Documents',
  mounted () {
    this.initSlider()
  },
  methods: {
    initSlider () {
      return new Swiper('.swiper-container-documents', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 35,
        navigation: {
          nextEl: '.swiper-button-next-doc',
          prevEl: '.swiper-button-prev-doc'
        },
        breakpoints: {
          992: {
            slidesPerView: 2,
            spaceBetween: 35
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 35
          }
        }
      })
    }
  }
}
</script>

<style lang="scss">
$documents: documents;

.#{$documents} {
  position: relative;
  padding: 80px 45px;

  @media (min-width: $device-md) {
    padding: 100px 80px;
  }

  @media (min-width: $device-xl) {
    padding: 150px 250px;
  }

  &__container {
    width: 100%;
    height: 344px;
    margin: 0 auto;

    @media (min-width: $device-md) {
      height: 912px;
    }

    @media (min-width: $device-xl) {
      max-width: 1420px;
      height: auto;
    }
  }

  &__img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: absolute !important;
    width: 26px;
    height: 24px;
    background: url('~@/assets/images/arrow_right.png') no-repeat center / contain;

    @media (min-width: $device-xl) {
      width: 47px;
      height: 31px;
    }

    &::after {
      content: none;
    }
  }

  .swiper-button-prev {
    left: 10px;
    transform: rotate(180deg);

    @media (min-width: $device-md) {
      left: 20px;
    }

    @media (min-width: $device-xl) {
      left: 65px;
    }
  }

  .swiper-button-next {
    right: 10px;

    @media (min-width: $device-md) {
      right: 20px;
    }

    @media (min-width: $device-xl) {
      right: 65px;
    }
  }
}
</style>
