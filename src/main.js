import Vue from 'vue'
import VueParallaxJs from 'vue-parallax-js'
import App from './App.vue'
import './main.scss'

Vue.use(VueParallaxJs)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
