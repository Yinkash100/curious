<template>
  <div class="nav-main">
    <BaseSearchBar class="nav-main--search" />
    <div class="action">
      <div class="action-icon">
        <font-awesome-icon :icon="['fas', 'user-alt']" />
      </div>
      <div class="action-icon">
        <font-awesome-icon :icon="['fas', 'comment-alt']" />
      </div>
      <div class="action-icon">
        <font-awesome-icon :icon="['fas', 'bell']" />
      </div>
      <div class="action-icon">
        <font-awesome-icon :icon="['fas', 'user-friends']" />
      </div>
    </div>
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
  name: 'NavMain',
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
      console.log('called the toggle something something')
      this.showAccountPage = !this.showAccountPage
      console.log(this.showAccountPage)
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
    padding: 0.75rem 1rem;
  }

  &--icon {
    display: flex;
    align-items: center;
    float: right;
    margin: 0rem 0.5rem;
    color: rgba($color-white, 0.8);
    padding: 0.5rem;
  }
}
.account-dropdown {
  background: $color-white;
}
.user-circle {
  color: $color-grey-dark;
}
.action {
  display: none;
  @include respond(desktop) {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 1rem;
    &-icon {
      font-size: 1.2rem;
      /*display: flex;*/
      /*flex-wrap: nowrap;*/
      padding: 0 1rem;
    }
  }
}
</style>
