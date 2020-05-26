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
    <UserAccountDropDown v-if="showAccountPage" @close="toggleAccountPage" />
  </div>
</template>

<script>
import UserAccountDropDown from '../UserAccountDropDown'
export default {
  name: 'NavMain.vue',
  components: {
    UserAccountDropDown,
  },
  data() {
    return {
      showAccountPage: false,
    }
  },
  methods: {
    toggleAccountPage() {
      this.showAccountPage = !this.showAccountPage
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
  box-sizing: border-box;
  -moz-box-sizing: border-box;
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
  color: $color-grey-dark;
}
</style>
