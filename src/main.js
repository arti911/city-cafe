import Swiper from 'swiper'
import { yandexMap, ymapMarker } from 'vue-yandex-maps'
import VueParallaxJs from 'vue-parallax-js'
import 'normalize.css';
import initSliderExp from './components/Experience/index'

Vue.use(VueParallaxJs)
new Vue({
    el: "#app",
    data: {
        isModalVisible: false,
        isModal: false,
        isActive: 0,
        showMenu: false,
        disabledScroll: false,
        links: [
            {
                id: 0,
                title: 'О компании'
            },
            {
                id: 1,
                title: 'Услуги'
            },
            {
                id: 2,
                title: 'Аутсорсинг'
            },
            {
                id: 3,
                title: 'Как мы работаем'
            },
            {
                id: 4,
                title: 'Контакты'
            },
            {
                id: 5,
                title: ''
            },
            {
                id: 6,
                title: 'Система качества',
                href: '#'
            },
            {
                id: 7,
                title: 'Система статистики',
                href: '#'
            },
            {
                id: 8,
                title: 'Проект «Моя школа»',
                href: '#'
            },
            {
                id: 9,
                title: 'Закупки',
                href: '#'
            }
        ],
        slides: [
        {
            id: 0,
            img: require('./assets/images/Slider_image_01.jpg'),
            text: 'Комплексное решение <br> по организации <span>социального</span> и <span>корпоративного</span> питания'
        },
        {
            id: 1,
            img: require('./assets/images/Slider_image_01.jpg'),
            text: 'Комплексное решение <br> по организации <span>социального</span> и <span>корпоративного</span> питания'
        },
        {
            id: 2,
            img: require('./assets/images/Slider_image_01.jpg'),
            text: 'Комплексное решение <br> по организации <span>социального</span> и <span>корпоративного</span> питания'
        }
        ],
        settingsSlider: {
            speed: 400,
            grabCursor: true,
            loop: true,
            autoplay: {
              delay: 3000
            },
            pagination: {
              el: '.swiper-pagination-main',
              clickable: true
            }
          },
          services: [
            {
              id: 0,
              title: 'Медицинские учреждения',
              img: require('./assets/images/medicine.jpg'),
              className: 'medicine'
            },
            {
              id: 1,
              title: 'Образовательные учреждения',
              img: require('./assets/images/school.png'),
              className: 'school'
            },
            {
              id: 2,
              title: 'Дошкольные учреждения',
              img: require('./assets/images/kids.png'),
              className: 'kids'
            },
            {
              id: 3,
              title: 'Коммерческие организации',
              img: require('./assets/images/commerce.png'),
              className: 'commerce'
            }
          ],
          regions: [
            {
              id: 0,
              title: 'Ульяновск',
              desc: '<span>С 2001 года</span> оказываем услугу <br><span>160 объектов</span> кейтеринга'
            },
            {
              id: 1,
              title: 'Тула',
              desc: '<span>С 2015 года</span> оказываем услугу <br><span>90 объектов</span> кейтеринга'
            },
            {
              id: 2,
              title: 'Волгоград',
              desc: '<span>С 2016 года</span> оказываем услугу <br><span>70 объектов</span> кейтеринга'
            },
            {
              id: 3,
              title: 'Калуга',
              desc: '<span>С 2017 года</span> оказываем услугу <br><span>80 объектов</span> кейтеринга'
            },
            {
              id: 4,
              title: 'Воронеж',
              desc: '<span>С 2018 года</span> оказываем услугу <br><span>70 объектов</span> кейтеринга'
            }
          ],
          menu: [
            {
              id: 0,
              title: 'Организация питания',
              content: `
                <div class="outsourcing__text"><strong>Удовлетворенность:</strong> удовлетворение потребности конечного потребителя в пищевых веществах и энергии в соответствии с возрастными физиологическими особенностями, рациональное распределение энергетической ценности по отдельным приемам пищи</div>
                <div class="outsourcing__text"><strong>Безопасность:</strong> безопасность кулинарной продукции, которая достигается посредством системы многоступенчатого контроля качества, реализуемой специалистами компании</div>
                <div class="outsourcing__text"><strong>Качество:</strong> адекватная технологическая обработка пищевых продуктов, обеспечивающая максимальную сохранность пищевой ценности, высокие вкусовые качества кулинарной продукции, ее диетическую направленность и соответствие принципам здорового питания;</div>
              `
            },
            {
              id: 1,
              title: 'Форматы услуг',
              content: `
                <div class="outsourcing__text"><strong>Удовлетворенность:</strong> удовлетворение потребности конечного потребителя в пищевых веществах и энергии в соответствии с возрастными физиологическими особенностями, рациональное распределение энергетической ценности по отдельным приемам пищи</div>
                <div class="outsourcing__text"><strong>Безопасность:</strong> безопасность кулинарной продукции, которая достигается посредством системы многоступенчатого контроля качества, реализуемой специалистами компании</div>
                <div class="outsourcing__text"><strong>Качество:</strong> адекватная технологическая обработка пищевых продуктов, обеспечивающая максимальную сохранность пищевой ценности, высокие вкусовые качества кулинарной продукции, ее диетическую направленность и соответствие принципам здорового питания;</div>
              `
            },
            {
              id: 2,
              title: 'Меню',
              content: `
                <div class="outsourcing__text"><strong>Удовлетворенность:</strong> удовлетворение потребности конечного потребителя в пищевых веществах и энергии в соответствии с возрастными физиологическими особенностями, рациональное распределение энергетической ценности по отдельным приемам пищи</div>
                <div class="outsourcing__text"><strong>Безопасность:</strong> безопасность кулинарной продукции, которая достигается посредством системы многоступенчатого контроля качества, реализуемой специалистами компании</div>
                <div class="outsourcing__text"><strong>Качество:</strong> адекватная технологическая обработка пищевых продуктов, обеспечивающая максимальную сохранность пищевой ценности, высокие вкусовые качества кулинарной продукции, ее диетическую направленность и соответствие принципам здорового питания;</div>
              `
            },
            {
              id: 3,
              title: 'Инвестиции',
              content: `
                <div class="outsourcing__text"><strong>Удовлетворенность:</strong> удовлетворение потребности конечного потребителя в пищевых веществах и энергии в соответствии с возрастными физиологическими особенностями, рациональное распределение энергетической ценности по отдельным приемам пищи</div>
                <div class="outsourcing__text"><strong>Безопасность:</strong> безопасность кулинарной продукции, которая достигается посредством системы многоступенчатого контроля качества, реализуемой специалистами компании</div>
                <div class="outsourcing__text"><strong>Качество:</strong> адекватная технологическая обработка пищевых продуктов, обеспечивающая максимальную сохранность пищевой ценности, высокие вкусовые качества кулинарной продукции, ее диетическую направленность и соответствие принципам здорового питания;</div>
              `
            },
            {
              id: 4,
              title: 'Инновации',
              content: `
                <div class="outsourcing__text"><strong>Удовлетворенность:</strong> удовлетворение потребности конечного потребителя в пищевых веществах и энергии в соответствии с возрастными физиологическими особенностями, рациональное распределение энергетической ценности по отдельным приемам пищи</div>
                <div class="outsourcing__text"><strong>Безопасность:</strong> безопасность кулинарной продукции, которая достигается посредством системы многоступенчатого контроля качества, реализуемой специалистами компании</div>
                <div class="outsourcing__text"><strong>Качество:</strong> адекватная технологическая обработка пищевых продуктов, обеспечивающая максимальную сохранность пищевой ценности, высокие вкусовые качества кулинарной продукции, ее диетическую направленность и соответствие принципам здорового питания;</div>
              `
            }
          ],
          servs: [
            {
              id: 0,
              icon: 'ten-day',
              title: '10+10 рабочих дней',
              desc: 'на расчёт и запуск проекта любой сложности;'
            },
            {
              id: 1,
              icon: 'develop',
              title: 'Разрабатываем',
              desc: 'индивидуальное решение для каждого заказчика;'
            },
            {
              id: 2,
              icon: 'introduce',
              title: 'Внедряем',
              desc: 'процессную модель управления и электронную систему учета питающихся;'
            },
            {
              id: 3,
              icon: 'build',
              title: 'Выстраиваем',
              desc: 'долгосрочные и  надежные отношения;'
            },
            {
              id: 4,
              icon: 'done',
              title: 'Выполняем',
              desc: 'свои обязательства.'
            }
          ],
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
            imageHref: require('./assets/images/logo_pin.png'),
            iconContentOffset: [0, -60],
            imageSize: [112, 120],
            imageOffset: [-56, -120]
          },
          name: '',
          phone: '',
          email: '',
          message: '',
          checked: false
        },
        components: {
          yandexMap,
          ymapMarker,
        },
        watch: {
          disabledScroll: function () {
            if (this.disabledScroll) {
              document.documentElement.style.overflow = 'hidden'
              return
            }
      
            document.documentElement.style.overflow = 'auto'
          },
          isModalVisible: function () {
            if (this.isModalVisible) {
              document.documentElement.style.overflow = 'hidden'
              return
            }
      
            document.documentElement.style.overflow = 'auto'
          }
        },
        mounted () {
            this.initSlider()
            this.initSliderDoc()
            initSliderExp()
        },
        computed: {
          disabledBtn: function () {
            return (this.name !== '' && this.phone !== '' && this.email !== '' && this.message !== '')
          },
        },
        methods: {
          toggleMenu () {
            this.showMenu = !this.showMenu
            this.disabledScroll = !this.disabledScroll
          },
          scroll (i) {
            document.getElementById(`${i}`).scrollIntoView({ block: 'start', behavior: 'smooth' })
      
            if (document.documentElement.clientWidth < 1280) {
              this.toggleMenu()
            }
          },
          initSlider () {
            return new Swiper('.swiper-container-main', this.settingsSlider)
          },
          initSliderDoc () {
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
          },
          showPlace (id, coords) {
            this.isActiveCity = id
            this.center = coords
            this.zoom = 15
          },
          openModal () {
            this.isModal = true
            this.isModalVisible = true
          },
          closeModal () {
            this.isModal = false
            this.isModalVisible = false
          }
        }
})
