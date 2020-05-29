<template>
  <div class="contacts">
    <div class="contacts__addresses">
      <div class="title">Контакты</div>
      <div class="contacts__lists">
        <div class="contacts__item" :class="isActiveCity === city.id ? 'contacts__item--open' : ''" v-for="city in cities" :key="city.id">
          <button class="contacts__city" @click="showPlace(city.id, city.coords)">
            {{ city.title }}
            <svg>
              <use xlink:href="#arrow" />
            </svg>
          </button>
          <div class="contacts__description" v-html="city.more" v-if="isActiveCity === city.id"></div>
        </div>
      </div>
    </div>
    <div class="contacts__map">
      <yandex-map :settings="settings" :coords="center" :controls="controls" :zoom="zoom">
        <ymap-marker marker-id="cafe" :coords="center" :icon="markerIcon" />
      </yandex-map>
    </div>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from 'vue-yandex-maps'

export default {
  name: 'Contacts',
  components: {
    yandexMap,
    ymapMarker
  },
  data: () => {
    return {
      isActiveCity: 0,
      cities: [
        {
          id: 0,
          title: 'Москва',
          more: `
            <div class="contacts__text">Адрес: 123317, г. Москва, ул. Пресненская набережная, д.6, стр. 2, 25 этаж, Деловой комплекс «Империя» ММДЦ «Москва-Сити»</div>
            <div class="contacts__text">Телефон: +7 (495) 744-66-25 </div>
            <div class="contacts__text">E-mail: office@gorodcafe.ru</div>
          `,
          coords: [55.7485163, 37.53818035]
        },
        {
          id: 1,
          title: 'Ульяновск',
          more: `
            <div class="contacts__text">Адрес: 123317, г. Москва, ул. Пресненская набережная, д.6, стр. 2, 25 этаж, Деловой комплекс «Империя» ММДЦ «Москва-Сити»</div>
            <div class="contacts__text">Телефон: +7 (495) 744-66-25 </div>
            <div class="contacts__text">E-mail: office@gorodcafe.ru</div>
          `,
          coords: [54.3107593, 48.3642771]
        },
        {
          id: 2,
          title: 'Воронеж',
          more: `
            <div class="contacts__text">Адрес: 123317, г. Москва, ул. Пресненская набережная, д.6, стр. 2, 25 этаж, Деловой комплекс «Империя» ММДЦ «Москва-Сити»</div>
            <div class="contacts__text">Телефон: +7 (495) 744-66-25 </div>
            <div class="contacts__text">E-mail: office@gorodcafe.ru</div>
          `,
          coords: [51.6605982, 39.2005858]
        },
        {
          id: 3,
          title: 'Волгоград',
          more: `
            <div class="contacts__text">Адрес: 123317, г. Москва, ул. Пресненская набережная, д.6, стр. 2, 25 этаж, Деловой комплекс «Империя» ММДЦ «Москва-Сити»</div>
            <div class="contacts__text">Телефон: +7 (495) 744-66-25 </div>
            <div class="contacts__text">E-mail: office@gorodcafe.ru</div>
          `,
          coords: [48.7081906, 44.5153353]
        },
        {
          id: 4,
          title: 'Тула',
          more: `
            <div class="contacts__text">Адрес: 123317, г. Москва, ул. Пресненская набережная, д.6, стр. 2, 25 этаж, Деловой комплекс «Империя» ММДЦ «Москва-Сити»</div>
            <div class="contacts__text">Телефон: +7 (495) 744-66-25 </div>
            <div class="contacts__text">E-mail: office@gorodcafe.ru</div>
          `,
          coords: [54.1930321, 37.61754]
        },
        {
          id: 5,
          title: 'Калуга',
          more: `
            <div class="contacts__text">Адрес: 123317, г. Москва, ул. Пресненская набережная, д.6, стр. 2, 25 этаж, Деловой комплекс «Империя» ММДЦ «Москва-Сити»</div>
            <div class="contacts__text">Телефон: +7 (495) 744-66-25 </div>
            <div class="contacts__text">E-mail: office@gorodcafe.ru</div>
          `,
          coords: [54.5101087, 36.2598115]
        }
      ],
      settings: {
        apiKey: 'f593ca95-9027-4cb7-a9f1-2aafe941a7f7',
        lang: 'ru_RU',
        coordorder: 'latlong',
        version: '2.1'
      },
      center: [55.7485163, 37.53818035],
      controls: [],
      zoom: 15,
      markerIcon: {
        layout: 'default#image',
        imageHref: require('@/assets/images/logo_pin.png'),
        iconContentOffset: [0, -60],
        imageSize: [112, 120],
        imageOffset: [-56, -120]
      }
    }
  },
  methods: {
    showPlace (id, coords) {
      this.isActiveCity = id
      this.center = coords
      this.zoom = 15
    }
  }
}
</script>

<style lang="scss">
$contacts: contacts;

.#{$contacts} {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 454px;
  background: $color-white;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.58);

  @media (min-width: $device-xl) {
    grid-template-rows: auto 752px;
  }

  @media (min-width: $device-xl) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }

  &__addresses {
    display: grid;
    grid-template-columns: 100%;
    gap: 40px;

    padding: 60px 20px 40px;

    @media (min-width: $device-md) {
      gap: 50px;
      padding: 100px 50px;
    }

    @media (min-width: $device-xl) {
      gap: 30px;
      padding: 60px 50px 65px;
    }
  }

  &__lists {
    width: 100%;
    margin: 0 auto;

    @media (min-width: $device-xl) {
      max-width: 670px;
    }
  }

  &__item {
    padding: 8px 0;
    border-bottom: 1px solid #979797;

    &--open {
      svg {
        transform: rotate(90deg);
      }
    }
  }

  &__city {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-weight: bold;
    font-size: 20px;
    line-height: 52px;
    color: #020202;

    @media (min-width: $device-md) {
      font-size: 36px;
      line-height: 52px;
    }

    svg {
      width: 20px;
      height: 30px;
      transition: transform .2s ease;
    }
  }

  &__description {
    display: grid;
    grid-template-columns: 100%;
    gap: 20px;
    padding: 12px 0 36px;

    @media (min-width: $device-md) {
      padding: 23px 0 5px;
      gap: 16px;
    }
  }

  &__text {
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.235714px;
    color: #222222;

    @media (min-width: $device-md) {
      font-size: 24px;
      line-height: 36px;
    }
  }

  &__map {
    overflow: hidden;

    & > section {
      height: 100%;
    }
  }

  .title {
    width: 100%;
    margin: 0 auto;

    @media (min-width: $device-xl) {
      max-width: 670px;
    }
  }
}
</style>
