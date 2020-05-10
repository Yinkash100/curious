<template>
  <v-app>
    <Nav />
    <nuxt />
    <NotificationContainer />
  </v-app>
</template>

<script>
import NotificationContainer from '../components/NotificationContainer'
import Nav from '../components/Nav'
export default {
  components: { Nav, NotificationContainer },
  data() {
    return {}
  },
  head() {
    return {
      title: 'Curious + get smarter everyday',
    }
  },
  validations: {},
}
</script>

<style lang="scss">
@import '../assets/variables';
@import '../assets/scss/main';

.errorMessage {
  color: red;
  font-size: 0.75rem;
}
</style>
