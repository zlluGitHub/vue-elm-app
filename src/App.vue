<template>
  <div id="app">
    <Heade />
    <Main/>
    <Footer/>
  </div>
</template>
<script>
import Heade from './components/Heade.vue'
import Footer from './components/Footer.vue'
import Main from './components/Main.vue'
export default {
  name: 'app',
  components: {
    Heade,
    Main,
    Footer
  },
  mounted() {
    this.$store.dispatch('getGoods')
  }
}
</script>

<style lang="scss" scoped>


#app {
  width: 100%;
  color: #2c3e50;
}
</style>
