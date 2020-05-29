<template>
  <div class="contact">
    <div class="contact__container">
      <div class="title">Связаться с нами</div>
      <button class="contact__btn" @click="$emit('open-modal')">Отправить обращение</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style lang="scss">
$contact: contact;

.#{$contact} {
  padding: 80px 20px 0;

  @media (min-width: $device-md) {
    padding: 100px 20px 0;
  }

  @media (min-width: $device-xl) {
    padding-left: 65px;
    padding-right: 65px;
  }

  &__container {
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    align-content: center;
    gap: 20px;
    height: 158px;
    background: $color-white;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);

    @media (min-width: $device-md) {
      gap: 40px;
      height: 224px;
    }

    @media (min-width: $device-xl) {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 150px;
    }
  }

  &__btn {
    position: relative;
    padding-right: 30px;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: $color-orange;

    @media (min-width: $device-md) {
      font-size: 24px;
      line-height: 32px;
    }

    @media (min-width: $device-xl) {
      padding-right: 50px;
      font-size: 40px;
      line-height: 72px;
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      width: 20px;
      height: 30px;
      background: url('~@/assets/images/arrow.svg') no-repeat right center / contain;
    }
  }

  .title {
    margin: 0;
  }
}
</style>
