import Swiper from 'swiper'

const initSliderExp = () => {
  const imagesExp = new Swiper('.swiper-container-img', {
    loop: true,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    effect: 'fade',
    preventInteractionOnTransition: true
  })

  const textExp = new Swiper('.swiper-container-experience', {
    loop: true,
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination-experience',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next-experience'
    },
  })

  textExp.controller.control = imagesExp;
}

export default initSliderExp;