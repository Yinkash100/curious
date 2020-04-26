<template>
  <v-app-bar app color="accent" relative bottom>
    <Logo />
    <v-spacer />
    <v-btn
      v-for="link in links"
      :key="`${link.label}-footer-link`"
      :to="link.url"
      color="white"
      text
      rounded
      >{{ link.label }}</v-btn
    >
  </v-app-bar>
</template>
<script>
import Logo from './Logo'
export default {
  components: { Logo },
  data() {
    return {
      links: [
        {
          label: 'Login',
          url: '/login'
        },
        {
          label: 'Join',
          url: '/signup'
        },
        {
          label: 'Ask',
          url: '/'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
