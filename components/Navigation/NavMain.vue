<template>
  <div class="nav-main">
    <BaseSearchBar class="nav-main--search" />
    <font-awesome-layers class="nav-main--icon fa-3x">
      <font-awesome-icon
        icon="user-circle"
        class="user-circle"
        @click="toggleAccountPage"
      />
    </font-awesome-layers>
  </div>
</template>

<script>
export default {
  name: 'NavMain.vue',
  data() {
    return {
      showAccountPage: false,
    }
  },
  methods: {
    toggleAccountPage() {
      this.showAccountPage = !this.showAccountPage
    },
    logout() {
      this.$store.dispatch('users/logout').then(() => {
        this.$router.push({ name: 'index' })
      })
    },
  },
}
</script>

<style scoped lang="scss">
.nav-main {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;

  &--search {
    display: flex;
    align-items: center;
    width: 100%;
  }

  &--icon {
    display: flex;
    align-items: center;
    float: right;
    margin: 0rem 0.5rem;
    color: rgba($color-white, 0.8);
    padding-left: 0.5rem;
  }
}
.account-dropdown {
  background: $color-white;
}
.user-circle {
  color: $color-primary;
}
</style>
