<template>
  <div class="experience">
    <div class="experience__content">
      <div class="experience__wrap">
        <div class="title">Наш опыт</div>
        <div class="swiper-container swiper-container-experience">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <div class="text">За 20 дней был реализован масштабный социальный проект по выполнению контактных обязательств, были запущены 93 пищеблока. 90 тыс питающихся ежедневно, реконструированы пищеблоки, обеденные залы, оборудованы буфеты в 10 школах. Развернуто оборудование и внедрена электронная система Мояшкола. </div>
            </div>
            <div class="swiper-slide">
              <div class="text">За 20 дней был реализован масштабный социальный проект по выполнению контактных обязательств, были запущены 93 пищеблока. 90 тыс питающихся ежедневно, реконструированы пищеблоки, обеденные залы, оборудованы буфеты в 10 школах. Развернуто оборудование и внедрена электронная система Мояшкола. </div>
            </div>
            <div class="swiper-slide">
              <div class="text">За 20 дней был реализован масштабный социальный проект по выполнению контактных обязательств, были запущены 93 пищеблока. 90 тыс питающихся ежедневно, реконструированы пищеблоки, обеденные залы, оборудованы буфеты в 10 школах. Развернуто оборудование и внедрена электронная система Мояшкола. </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-actions">
        <div class="swiper-pagination swiper-pagination-experience"></div>
        <div class="swiper-button-next swiper-button-next-experience"></div>
      </div>
    </div>
    <div class="experience__img">
      <div class="swiper-container swiper-container-img">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="~@/assets/images/img.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="~@/assets/images/img.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img src="~@/assets/images/img.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'

export default {
  name: 'Experience',
  mounted () {
    this.initSlider()
  },
  methods: {
    initSlider () {
      const images = new Swiper('.swiper-container-img', {
        loop: true,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        effect: 'fade'
      })

      return new Swiper('.swiper-container-experience', {
        loop: true,
        grabCursor: true,
        pagination: {
          el: '.swiper-pagination-experience',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next-experience'
        },
        thumbs: {
          swiper: images
        }
      })
    }
  }
}
</script>

<style lang="scss">
$experience: experience;

.#{$experience} {
  display: grid;
  grid-template-columns: 100%;
  grid-template-areas: "img" "content";
  grid-template-rows: 232px auto;
  background: $color-white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.58);

  @media (min-width: $device-md) {
    grid-template-rows: 560px auto;
  }

  @media (min-width: $device-xl) {
    grid-template-areas: "content img";
    grid-template-columns: 705px 1fr;
    grid-template-rows: auto;
  }

  &__content {
    position: relative;
    grid-area: content;
    padding: 16px 20px 95px;

    @media (min-width: $device-md) {
      padding-top: 60px;
      padding-bottom: 205px;
    }

    @media (min-width: $device-xl) {
      padding-bottom: 145px;
    }
  }

  &__wrap {
    width: 100%;
    margin: 0 auto;

    @media (min-width: $device-md) {
      width: 670px;
    }

    @media (min-width: $device-xl) {
      max-width: 609px;
    }
  }

  &__img {
    position: relative;
    grid-area: img;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .swiper-container-img {
      pointer-events: none;
    }
  }

  .swiper-pagination-bullet {
    width: 18px;
    height: 18px;
    margin: 0 3px;

    @media (min-width: $device-md) {
      width: 24px;
      height: 24px;
      margin: 0 4.5px;
    }
  }

  .swiper-button-next {
    width: 48px;
    height: 32px;
    background: url('~@/assets/images/arrow_right.png') no-repeat center / cover;
    margin-top: 0;
    margin-left: 15px;
  }

  .text {
    margin: 0;
  }
}
</style>
