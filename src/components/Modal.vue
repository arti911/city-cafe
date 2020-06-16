<template>
  <div class="modal">
    <div class="modal__wrapper" @click="$emit('close-modal')"></div>
    <div class="modal__window">
      <div class="modal__wrap">
        <form class="modal__form">
          <input class="modal__input" type="text" placeholder="Как к вам обращаться" v-model="name">
          <input class="modal__input" type="tel" placeholder="Ваш номер телефона" v-model="phone">
          <input class="modal__input" type="email" placeholder="Ваш Email" v-model="email">
          <textarea class="modal__textarea" name="" id="" placeholder="Ваше сообщение" v-model="message"></textarea>
          <div class="button button--big modal__btn" :class="checked ? 'modal__btn--active' : ''">
            <label>
              <input type="checkbox" v-model="checked">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 511.999 511.999"><path path="" d="M506.231,75.508c-7.689-7.69-20.158-7.69-27.849,0l-319.21,319.211L33.617,269.163c-7.689-7.691-20.158-7.691-27.849,0 c-7.69,7.69-7.69,20.158,0,27.849l139.481,139.481c7.687,7.687,20.16,7.689,27.849,0l333.133-333.136 C513.921,95.666,513.921,83.198,506.231,75.508z"></path></svg>
              </span>
              руководителю компании
            </label>
          </div>
          <button class="button button--big" :disabled="!disabledBtn">Отправить</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  data: () => {
    return {
      name: '',
      phone: '',
      email: '',
      message: '',
      checked: false
    }
  },
  computed: {
    disabledBtn: function () {
      return (this.name !== '' && this.phone !== '' && this.email !== '' && this.message !== '')
    }
  }
}
</script>

<style lang="scss">
$modal: modal;

.#{$modal} {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 65px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  padding: 40px 17px;

  &__wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: rgba(28, 28, 33, 0.9);
  }

  &__window {
    max-height: 100%;
    z-index: 101;
    overflow: auto;
    padding: 40px 15px;
    background: $color-white;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.5);

    @media (min-width: $device-md) {
      padding-right: 0;
      padding-left: 0;
    }

    @media (min-width: $device-xl) {
      max-width: 992px;
      width: 100%;
    }
  }

  &__wrap {
    display: grid;
    grid-template-columns: 1fr;
    gap: 72px;

    @media (min-width: $device-md) {
      gap: 52px;
    }
  }

  &__container {
    display: grid;
    justify-items: center;
    gap: 20px;

    @media (min-width: $device-xl) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1470px;
      width: 100%;
      margin: 0 auto;
    }
  }

  &__btn.button {
    line-height: 1;

    @media (min-width: $device-md) {
      padding: 0 25px;
    }

    @media (min-width: $device-xl) {
      padding: 0 55px;
    }

    &:not(.#{$modal}__btn--active) {
      color: #7B7B7B;
      background: #D8D8D8;
    }

    label {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        width: 20px;
        height: 20px;
        margin-right: 15px;
        padding: 1px;
        border: 1px solid #7B7B7B;
        border-radius: 4px;
        transition: border-color .2s ease;

        svg {
          width: 100%;
          height: 100%;
          fill: $color-white;
          opacity: 0;
          transition: opacity .2s ease;
        }
      }

      input {
        &:checked + span {
          border-color: $color-white;

          svg {
            opacity: 1;
          }
        }
      }
    }
  }

  &__form {
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;

    @media (min-width: $device-md) {
      padding: 0 30px;
    }

    @media (min-width: $device-xl) {
      max-width: 830px;
      width: 100%;
      margin: 0 auto;
    }
  }

  &__input {
    width: 100%;
    padding: 10px 5px 11px;
    border-bottom: 1px solid #979797;
    text-align: center;

    &::-moz-placeholder {
      font-family: 'Roboto';
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #020202;
    }

    &::-webkit-input-placeholder {
      font-family: 'Roboto';
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #020202;
    }
  }

  &__textarea {
    height: 180px;
    padding: 12px 5px;
    border: 1px solid #979797;
    resize: none;

    &::-moz-placeholder {
      font-family: 'Roboto';
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #020202;
    }

    &::-webkit-input-placeholder {
      font-family: 'Roboto';
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #020202;
    }
  }

  .title {
    margin: 0;
  }
}
</style>
