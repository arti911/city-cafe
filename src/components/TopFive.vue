<template>
  <div class="top-five">
    <div class="top-five__title title">Компания входит в ТОП-5 крупнейших поставщиков услуг питания</div>
    <div class="top-five__wrap">
      <div class="top-five__item">
        <div class="top-five__number">18 лет</div>
        <div class="top-five__text">Безупречного опыта</div>
      </div>
      <div class="top-five__item">
        <div class="top-five__number">3 500</div>
        <div class="top-five__text">Сотрудников компании</div>
      </div>
      <div class="top-five__item">
        <div class="top-five__number">420</div>
        <div class="top-five__text">Объектов в управлении</div>
      </div>
      <div class="top-five__item">
        <div class="top-five__number">250 000</div>
        <div class="top-five__text">Ежедневно питаются</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopFive'
}
</script>

<style lang="scss">
$top: top-five;

.#{$top} {
  display: grid;
  gap: 40px;
  padding: 50px 18px 100px;

  @media (min-width: $device-md) {
    gap: 60px;
    padding: 104px 47px 100px;
  }

  @media (min-width: $device-xl) {
    padding-bottom: 318px;
    gap: 206px;
  }

  &__title.title {
    margin: 0 auto 0;
    text-align: center;

    @media (min-width: $device-md) {
      max-width: 600px;
    }

    @media (min-width: $device-xl) {
      max-width: 1140px;
    }
  }

  &__wrap {
    display: grid;
    gap: 40px;

    @media (min-width: $device-sm) and (max-width: $device-md) {
      justify-items: center;
    }

    @media (min-width: $device-md) {
      grid-template-columns: 1fr 1fr;
      gap: 60px;
    }

    @media (min-width: $device-xl) {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      max-width: 1685px;
      width: 100%;
      margin: 0 auto;
      gap: 0;
    }
  }

  &__item {
    position: relative;

    @media (min-width: $device-tablet) {
      display: grid;
      justify-content: center;
    }

    @media (min-width: $device-xl) {
      &::after {
        content: '';
        position: absolute;
        top: -165px;
        left: 50%;
        width: 100%;
        height: 150px;
        transform: translateX(-10%);
        background: url('~@/assets/images/dot_line_02-1.png') no-repeat center / contain;
      }

      &:nth-child(odd) {
        &::after {
          top: 113%;
          left: 80%;
          transform: translateX(-25%) rotate(180deg);
        }
      }

      &:first-of-type {
        justify-content: start;

        &::after {
          left: 50%;
        }
      }

      &:last-of-type {
        justify-content: end;

        &::after {
          content: none;
        }
      }
    }

    &:nth-child(even) {
      @media (min-width: $device-md) and (max-width: $device-tablet) {
        text-align: right;

        .#{$top}__text {
          margin-right: 0;
          margin-left: auto;
        }
      }
    }
  }

  &__number {
    font-weight: 900;
    font-size: 72px;
    line-height: 80px;
    color: $color-orange;
    white-space: nowrap;

    @media (min-width: $device-md) {
      font-size: 80px;
      line-height: 90px;
    }

    @media (min-width: $device-tablet) and (max-width: $device-xl) {
      text-align: center;
    }
  }

  &__text {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.196429px;
    color: #222222;

    @media (min-width: $device-md) {
      max-width: 245px;
      font-size: 28px;
      line-height: 40px;
      letter-spacing: 0.275px;
    }

    @media (min-width: $device-tablet) {
      text-align: center;
      margin: 0 auto;
    }

    @media (min-width: $device-xl) {
      text-align: left;
      margin: 0;
    }
  }
}
</style>
