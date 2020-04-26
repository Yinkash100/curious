<template>
  <v-app>
    <Nav />
    <nuxt />
  </v-app>
</template>

<script>
import Nav from '../components/Nav'
export default {
  components: { Nav },
  head() {
    return {
      title: 'Curious + get smarter everyday'
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
@import '../assets/variables';
@import '../assets/scss/main';
</style>
