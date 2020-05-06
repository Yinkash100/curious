<template>
  <v-app-bar app color="accent" relative>
    <nuxt-link to="/"><Logo /></nuxt-link>
    <v-spacer />
    <div v-if="!loggedIn">
      <v-btn
        v-for="link in linksBeforeLogin"
        :key="`${link.label}-footer-link`"
        :to="link.url"
        color="white"
        text
        rounded
        >{{ link.label }}</v-btn
      >
    </div>
    <div>
      <v-btn
        v-for="link in linksAfterLogin"
        :key="`${link.label}-footer-link`"
        :to="link.url"
        color="white"
        text
        rounded
        >{{ link.label }}</v-btn
      >
      <v-btn v-if="loggedIn" color="white" text rounded @click="logout"
        >Logout</v-btn
      >
    </div>
  </v-app-bar>
</template>
<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'

export default {
  components: { Logo },
  data() {
    return {
      linksBeforeLogin: [
        {
          label: 'Login',
          url: '/login',
        },
        {
          label: 'Join',
          url: '/signup',
        },
      ],
      linksAfterLogin: [
        {
          label: 'Ask',
          url: '/',
        },
      ],
    }
  },
  computed: {
    ...mapGetters({ loggedIn: 'users/loggedIn' }),
  },
  // created() {
  //   console.log('loggedIn', loggedIn)
  // },
  methods: {
    logout() {
      this.$store.dispatch('users/logout').then(() => {
        this.$router.push({ name: 'index' })
      })
    },
  },
}
</script>

<style scoped></style>
