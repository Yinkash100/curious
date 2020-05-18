<template>
  <div class="container">
    <div class="errorPage">
      <h1 v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <p>You might want to go <nuxt-link to="/">back to homepage</nuxt-link></p>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 2.5rem;
  line-height: 3.5rem;
}
p {
  font-size: 1.2rem;
  line-height: 1.5;
}
.container {
  display: block;
  position: relative;
  margin-top: 10rem;
  width: 100%;
  text-align: center;
}
.errorPage {
  width: 100%;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
