<template>
  <div class="container" :class="parentDefinedStyle">
    <div class="nav">
      <nuxt-link to="/" class="nav-logo-small"><LogoSmall /></nuxt-link>
      <nuxt-link to="/" class="nav-logo"><Logo /></nuxt-link>
      <template v-if="loggedIn" class="nav-main-links">
        <NavMain />
      </template>
      <template v-else class="nav-be4-links">
        <NavBeforeLogin />
      </template>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Logo from '@/components/Logos/Logo'
import LogoSmall from '@/components/Logos/LogoSmall'
import NavBeforeLogin from '@/components/Navigation/NavBeforeLogin'
import NavMain from '@/components/Navigation/NavMain'

export default {
  components: { NavBeforeLogin, NavMain, LogoSmall, Logo },
  props: {
    // parentDefinedStyle: {
    //   type: String,
    //   required: false,
    // },
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      loggedIn: 'users/loggedIn',
      parentDefinedStyle: 'nav/parentDefinedStyle',
    }),
  },
  methods: {},
}
</script>

<style scoped lang="scss">
/*@import 'assets/variables';*/
.container {
  width: 100%;
  display: block;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  min-height: 4rem;
  background: $color-white;
  box-shadow: 0.5rem 0 0.5rem $color-grey-dark;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}
.nav {
  width: 100%;
  display: flex;
  height: 3rem;
  padding-top: 1rem;

  &-logo {
    display: none;
    @include respond(tab-port) {
      display: flex;
      align-items: center;
    }
  }

  &-main-links {
    display: flex;
    align-items: center;
  }

  &-be4-links {
    display: flex;
    height: 100%;
    padding: 1rem 0;
    align-content: center;
    justify-content: flex-end;
  }

  &-logo-small {
    display: flex;
    align-items: center;
    padding-left: 1rem;
    float: left;
    @include respond(tab-port) {
      display: none;
    }
  }
}

.indexPageStyleScrolled,
.indexPageStyleScrolledToSearch {
  background: $color-white;
}
.indexPageStyle {
  background: $color-background-default;
  box-shadow: none;
  border: none;
}

.nav-links-left {
}
</style>
