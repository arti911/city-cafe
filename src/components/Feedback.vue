<template>
  <section class="feedback">
    <div class="feedback__img"><img src="@/assets/images/cafe.jpg" alt=""></div>
    <div class="feedback__description">
      <div class="feedback__title title">Оставить отзыв</div>
      <div class="feedback__content">
        <p class="text">Приглашаем Вас принять участие в опросе по качеству наших услуг. </p>
        <p class="text">Мы стремимся, чтобы наши услуги максимально соответствовали Вашим ожиданиям, поэтому для нас очень важно Ваше мнение!</p>
        <p class="text">Заполнение анкеты займет у Вас не более 3 минут.</p>
      </div>
      <a href="#" class="button feedback__btn">Пройти опрос</a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Feedback'
}
</script>

<style lang="scss">
$feedback: feedback;

.#{$feedback} {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  padding: 80px 20px;

  @media (min-width: $device-md) {
    gap: 25px;
    padding: 100px 45px;
  }

  @media (min-width: $device-xl) {
    grid-template-columns: repeat(1, 40% 1fr);
    gap: 48px;
    padding: 100px 65px;
  }

  &__title.title {
    margin-bottom: 10px;

    @media (min-width: $device-xl) {
      margin-bottom: 48px;
    }
  }

  &__img {
    height: 243px;

    @media (min-width: $device-md) {
      height: 574px;
    }

    @media (min-width: $device-xl) {
      height: 600px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__description {
    @media (min-width: $device-xxl) {
      padding-right: 100px;
    }
  }

  &__content {
    display: grid;
    gap: 20px;
    margin-bottom: 40px;

    @media (min-width: $device-md) {
      gap: 30px;
      margin-bottom: 50px;
    }

    @media (min-width: $device-xl) {
      gap: 40px;
      margin-bottom: 60px;
    }

    .text {
      margin: 0;
    }
  }

  &__btn.button {
    display: inline-block;
    width: 100%;
    height: 70px;
    font-size: 16px;
    line-height: 70px;
    text-align: center;

    @media (min-width: $device-md) {
      width: auto;
      height: 96px;
      padding: 0 60px;
      font-size: 36px;
      line-height: 96px;
    }
  }
}
</style>
