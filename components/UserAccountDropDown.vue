<template>
  <div class="container">
    <div class="inner">
      <div class="action">
        <div class="action-icon">
          <font-awesome-icon
            :icon="['fas', 'user-alt']"
            @click="showProfilePage"
          />
        </div>
        <div class="action-icon">
          <font-awesome-icon
            :icon="['fas', 'comment-alt']"
            @click="showProfilePage"
          />
        </div>
        <div class="action-icon">
          <font-awesome-icon :icon="['fas', 'bell']" @click="showProfilePage" />
        </div>
        <div class="action-icon">
          <font-awesome-icon
            :icon="['fas', 'user-friends']"
            @click="showProfilePage"
          />
        </div>
      </div>
      <div class="user-rank">
        <UserRankCard />
      </div>

      <div class="challenge-tab">
        <Challenges />
      </div>
      <div class="tab-links">
        <div class="tab-link">
          <nuxt-link to="/users/view" class="tab-link__group">
            <div class="tab-link__icon tab-link__icon-pretext">
              <font-awesome-icon icon="user-alt" />
            </div>
            <div class="tab-link__text">
              <p>View profile</p>
            </div>
            <div class="tab-link__icon tab-link__icon-posttext">
              <font-awesome-icon icon="chevron-right" />
            </div>
          </nuxt-link>
        </div>
        <div class="tab-link">
          <nuxt-link to="/users/view" class="tab-link__group">
            <div class="tab-link__icon tab-link__icon-pretext">
              <font-awesome-icon icon="edit" />
            </div>
            <div class="tab-link__text">
              <p>Edit profile</p>
            </div>
            <div class="tab-link__icon tab-link__icon-posttext">
              <font-awesome-icon icon="chevron-right" />
            </div>
          </nuxt-link>
        </div>
        <div class="tab-link">
          <nuxt-link to="/users/view" class="tab-link__group">
            <div class="tab-link__icon tab-link__icon-pretext">
              <font-awesome-icon icon="tools" />
            </div>
            <div class="tab-link__text">
              <p>Account settings</p>
            </div>
            <div class="tab-link__icon tab-link__icon-posttext">
              <font-awesome-icon icon="chevron-right" />
            </div>
          </nuxt-link>
        </div>
        <div class="tab-link" @click="logout()">
          <nuxt-link to="" class="tab-link__group">
            <div class="tab-link__icon tab-link__icon-pretext">
              <font-awesome-icon icon="sign-out-alt" style="color: red" />
            </div>
            <div class="tab-link__text">
              <p>Log out</p>
            </div>
            <div class="tab-link__icon tab-link__icon-posttext">
              <font-awesome-icon icon="chevron-right" />
            </div>
          </nuxt-link>
        </div>
      </div>
      <SubscriptionDetails />
    </div>
  </div>
</template>

<script>
import SubscriptionDetails from './SubscriptionDetails'
import Challenges from './Challenges'
import UserRankCard from './UserRankCard'
export default {
  name: 'UserAccountDropDown',
  components: { UserRankCard, Challenges, SubscriptionDetails },
  props: {},
  data() {
    return {}
  },
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

<style scoped lang="scss">
.container {
  position: absolute;
  top: 4rem;
  display: block;
  width: 100vw;
  max-height: calc(100vh - 4rem);
  max-height: -moz-calc(100vh - 4rem);
  left: calc(-50vw + 50%);
  background: $color-white;
  box-shadow: 0 0 1rem rgba($color-black, 0.1);
  border: 1px solid $color-grey-dark;
  overflow-y: scroll;
  @include respond(desktop) {
    display: none;
  }
}
.action {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 1rem 2rem;
  box-shadow: 0 0 0.75rem rgba($color-black, 0.1);
  &-icon {
    font-size: 1.1rem;
  }
}

.challenge-tab {
  height: 40vh;
  border-bottom: 1px solid $color-grey-dark;
  border-top: 1px solid $color-grey-dark;
  padding: 0.5rem 1rem;
  overflow-y: scroll;
  @include respond(tab-port) {
    padding: 1rem 2rem;
  }
}
.tab-links {
  background-color: $color-white;
  padding-top: 1.5rem;
}
.tab-link {
  display: flex;
  flex-wrap: nowrap;
  padding: 0.75rem;
  &__group {
    font-size: 1.1rem;
    display: flex;
    width: 100%;
  }
  &__icon {
    &-pretext {
      /*order: 1;*/
      margin-right: 1rem;
    }
    &-posttext {
      /*order: 3;*/
    }
  }

  &__text {
    /*order: 2;*/
    width: 90%;
    font-weight: 500;
  }
}
a {
  text-decoration: none;
}
.inner {
  position: relative;
}
</style>
