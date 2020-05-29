<template>
  <section class="about">
    <div class="about__img"><img src="@/assets/images/about.jpg" alt=""></div>
    <div class="about__description">
      <div class="title">О компании</div>
      <p class="text">Компания «Город Кафе» работает на российском рынке организации питания с 2002 года.</p>
      <p class="text">Нас отличает безупречная репутация, высокие стандарты качества и безопасности.</p>
      <p class="text">Среди наших заказчиков  крупнейшие государственные, муниципальные учреждения и коммерческие  организации.</p>
      <p class="text">Мы всегда прислушиваемся к запросам наших клиентов и стараемся превосходить их ожидания.</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style lang="scss">
$about: about;

.#{$about} {
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  padding: 50px 20px 0;

  @media (min-width: $device-md) {
    gap: 20px;
    padding: 95px 45px 0;
  }

  @media (min-width: $device-xl) {
    grid-template-columns: repeat(1, 40% 1fr);
    gap: 48px;
    padding: 145px 65px 0;
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
}
</style>
