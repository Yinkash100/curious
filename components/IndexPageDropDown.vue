<template>
  <div class="container">
    <div class="drop">
      <div v-if="callingPath === 'index'" class="dropdown drop">
        <div class="dropdown__text">
          <div class="dropdown__text-group">
            <h3 class="dropdown__text-head">Let's start sharing knowledge</h3>
            <div class="dropdown__text-btn">
              <button
                class="btn btn--rounded btn--outlined"
                @click="goto('/login')"
              >
                Login
              </button>
            </div>
            <div class="dropdown__text-btn">
              <button
                class="btn btn--rounded btn--outlined dropdown__text-btn"
                @click="goto('/signup')"
              >
                Join Now
              </button>
            </div>
          </div>
          <div class="dropdown__text-group">
            <h3 class="dropdown__text-head">What do you need to know</h3>
            <div class="dropdown__text-btn">
              <button
                class="btn btn--primary btn--rounded btn-join dropdown__text-btn"
                @click="goto('/question')"
              >
                Ask Question
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-else class="droptab drop">
        <div
          v-if="callingPath === 'signup' || callingPath === 'question'"
          class="droptab-btn"
          @click="goto('/login')"
        >
          <button class="btn btn--outlined btn--rounded btn-join">
            Log In
          </button>
        </div>
        <div
          v-if="callingPath === 'login' || callingPath === 'question'"
          class="droptab-btn"
          @click="goto('/signup')"
        >
          <button class="btn btn--primary btn--rounded btn-join">
            Join Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPageDropDown',
  props: {
    showIndexPageDropDown: {
      type: Boolean,
    },
  },
  data() {
    return {
      callingPath: '',
    }
  },
  beforeMount() {
    this.callingPath = this.$nuxt.$route.name
  },
  methods: {
    closeDropDown() {
      const $this = this
      $this.$emit('closeDropDown')
    },
    goto(url) {
      this.closeDropDown()
      this.$router.push(url)
    },
  },
}
</script>

<style scoped lang="scss">
.drop {
  z-index: 999;
  display: block;
  position: absolute;
  width: 100vw;
  left: calc(-50vw + 50%);
  top: 2rem;
  background: $color-white;
  box-shadow: 0 0 1rem rgba($color-black, 0.1);
}
.dropdown {
  padding: 4rem 0 0.25rem;
  height: 85vh;
  top: 2rem;

  &-main {
    position: relative;
    padding-top: 8rem;
  }

  &__close {
    display: block;
    position: absolute;
    top: 3rem;
    right: 5rem;
  }

  &__text {
    margin: auto;
    text-align: center;
    line-height: 2rem;

    &-btn {
      margin: 0.75rem auto;
    }

    &-group {
      margin-bottom: 2rem;
    }
  }
}
.droptab {
  text-align: center;
  display: flex;
  flex-wrap: nowrap;
  padding: 1rem;
  &-btn {
    width: 47%;
    margin: auto;
  }
}
.btn {
  padding: 0.5rem 2rem;
  font-weight: 600;

  &-join {
    background: $color-black;
    border: none;
    color: $color-white;
  }

  @include respond(tab-land) {
    padding: 0.75rem 3rem;
  }
}
h3 {
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}
</style>
