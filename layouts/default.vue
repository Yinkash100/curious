<template>
  <div>
    <Nav />
    <nuxt />
    <NotificationContainer />
  </div>
</template>

<script>
import axios from 'axios'
import NotificationContainer from '../components/Notification/NotificationContainer'
import Nav from '../components/Navigation/Nav'

export default {
  components: {
    Nav,
    NotificationContainer,
  },
  data() {
    return {}
  },
  created() {
    const userString = this.$cookies.get('user')
    if (this.$cookies.get('user')) {
      this.$store.commit('users/SET_USER_DATA', userString)
    }
    axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === '401') {
          this.$store.dispatch('logout')
        }
        return Promise.reject(error)
      }
    )
  },
  head() {
    return {
      title: 'Curious + get smarter everyday',
    }
  },
}
</script>

<style lang="scss" scoped>
.errorMessage {
  color: red;
  font-size: 0.75rem;
}
</style>
