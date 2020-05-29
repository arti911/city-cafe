<template>
  <div id="app">
    <Sprite />
    <Header @open-modal="openModal" />
    <main class="main">
      <MainSlider />
      <About id="0" />
      <TopFive />
      <Services id="1" />
      <RegionsOfPresence />
      <Outsourcing id="2" />
      <Advantages id="3" />
      <Experience />
      <Documents />
      <Contacts id="4" />
      <Contact @open-modal="openModal" />
      <Feedback />
    </main>
    <Footer />
    <Modal v-if="isModal" @close-modal="closeModal" />
  </div>
</template>

<script>
import Sprite from '@/components/Sprite'
import Header from '@/components/Header'
import MainSlider from '@/components/MainSlider'
import About from '@/components/About'
import TopFive from '@/components/TopFive'
import Services from '@/components/Services'
import RegionsOfPresence from '@/components/RegionsOfPresence'
import Outsourcing from '@/components/Outsourcing'
import Advantages from '@/components/Advantages'
import Experience from '@/components/Experience'
import Documents from '@/components/Documents'
import Contacts from '@/components/Contacts'
import Contact from '@/components/Contact'
import Feedback from '@/components/Feedback'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'

export default {
  name: 'App',
  components: {
    Sprite,
    Header,
    MainSlider,
    About,
    TopFive,
    Services,
    RegionsOfPresence,
    Outsourcing,
    Advantages,
    Experience,
    Documents,
    Contacts,
    Contact,
    Feedback,
    Footer,
    Modal
  },
  data: () => {
    return {
      isModalVisible: false,
      isModal: false
    }
  },
  watch: {
    isModalVisible: function () {
      if (this.isModalVisible) {
        document.documentElement.style.overflow = 'hidden'
        return
      }

      document.documentElement.style.overflow = 'auto'
    }
  },
  methods: {
    openModal () {
      this.isModal = true
      this.isModalVisible = true
    },
    closeModal () {
      this.isModal = false
      this.isModalVisible = false
    }
  }
}
</script>

<style lang="scss">
#app {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
}

.main {
  background: $color-white;
}
</style>
