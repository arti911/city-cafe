<template>
  <footer class="footer">
    <div class="footer__item">
      <p>© 2020</p>
      <a href="/#" class="footer__link" target="_blank">Политика конфиденциальности</a>
    </div>
    <div class="footer__item">
      <a href="/#" class="footer__link" target="_blank">Реквизиты</a>
      <a href="/#" class="footer__link" target="_blank">Тендерная площадка</a>
      <a href="/#" class="footer__link" target="_blank">Моя школа</a>
    </div>
    <div class="footer__item">
      <span>г. Ульяновск - <a class="footer__link footer__link--bold" href="tel:88422335445">8 (8422) 33-54-45</a></span>
      <span>г. Москва - <a class="footer__link footer__link--bold" href="tel:84957446625">8 (495) 744-66-25</a></span>
      <span>E-mail: <a class="footer__link" href="mailto:office@gorodcafe.ru">office@gorodcafe.ru</a></span>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
$footer: footer;

.#{$footer} {
  display: grid;
  background-color: #373737;
  grid-template-columns: 1fr;
  grid-template-areas:
    "links"
    "contacts"
    "copyright";
  gap: 40px;
  padding: 40px 20px;
  color: $color-white;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.275px;

  @media (min-width: $device-md) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "links contacts"
      "copyright  copyright ";
    gap: 60px 0;
    padding: 60px 50px 100px;
    font-size: 20px;
    line-height: 32px;
  }

  @media (min-width: $device-xxl) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "copyright links contacts";
    gap: 12px;
    padding: 65px 65px 90px;
    font-size: 28px;
    line-height: 48px;
  }

  &__item {
    &:first-of-type {
        grid-area: copyright;
    }

    &:nth-child(2) {
      grid-area: links;
    }

    &:last-of-type {
      grid-area: contacts;
    }

    & > span {
      display: flex;
      align-items: center;

      a {
        padding-left: 6px;
      }
    }
  }

  &__link {
    display: block;
    color: #FF7B1B;

    &--bold {
      font-weight: bold;
    }
  }
}
</style>
