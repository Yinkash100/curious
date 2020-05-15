<template>
  <div class="nav-buttons">
    <button
      class="btn btn-text nav-btn"
      v-for="link in links"
      :key="`${link.label}`"
      :to="link.url"
      @click="goto(link.url)"
    >
      {{ link.label }}
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      links: [
        {
          label: 'Ask',
          url: '/',
        },

        {
          label: 'Join Now',
          url: '/signup',
        },
        {
          label: 'Login',
          url: '/login',
        },
      ],
    }
  },
  methods: {
    goto(url) {
      this.$router.push(url)
    },
  },
}
</script>

<style scoped>
.nav-buttons {
  display: block;
  align-items: end;
  justify-content: space-between;
  width: 100%;

  @include respond(tab-land) {
    padding: 0;
  }
}

.nav-btn {
  float: right;
}
</style>
