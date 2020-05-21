<template>
  <div class="container">
    <div class="action">
      <div class="action-icon"></div>
    </div>
    <button class="btn btn-text" @click="logout">Logout</button>
    <font-awesome-icon :icon="['far', 'times-circle']" @click="closeDropDown" />
  </div>
</template>

<script>
export default {
  name: 'UserAccountDropDown',
  props: {},

  methods: {
    closeDropDown() {
      this.$emit(close)
    },
    logout() {
      this.$store.dispatch('users/logout').then(() => {
        this.$router.push({ name: 'index' })
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  top: 3rem;
  display: block;
  width: 70%;
  background: $color-white;
  box-shadow: 0 0 1rem rgba($color-black, 0.1);
  border: 1px solid $color-grey-dark;
}
</style>
