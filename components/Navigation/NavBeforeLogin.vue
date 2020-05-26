<template>
  <div class="nav-buttons">
    <div class="indexpage__dropdown">
      <IndexPageDropDown
        v-if="showIndexPageDropDown"
        @closeDropDown="closeDropDown"
      />
    </div>
    <div class="nav__scrolled">
      <div class="nav__scrolled-search" :class="`${parentDefinedStyle}`">
        <BaseSearchBar :inputStyle="'navSearchStyle'" />
      </div>
      <div
        class="nav__scrolled-btn nav-menu-icon"
        :class="`${parentDefinedStyle + 'Icon'}`"
        @click="toggleIndexPageDropDown"
      >
        <img
          v-if="!showIndexPageDropDown"
          :src="`menu.svg`"
          height="40"
          width="40"
          class=""
        />
        <img v-else :src="`cancel.svg`" height="20" width="20" />
      </div>
    </div>

    <div class="nav-text-buttons" :class="`${parentDefinedStyle + 'Button'}`">
      <div v-if="callingPath !== 'login'" class="nav-btn">
        <button class="btn btn-text" to="/login" @click="goto('/login')">
          Login
        </button>
      </div>
      <div v-if="callingPath !== 'signup'" class="nav-btn">
        <button class="btn btn-text" to="/signup" @click="goto('/signup')">
          Join Now
        </button>
      </div>
      <div class="nav-btn">
        <button
          class="btn btn--primary nav-btn--ask"
          @click="goto('/question')"
        >
          Ask Question
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import IndexPageDropDown from '../IndexPageDropDown'

export default {
  components: { IndexPageDropDown },
  data() {
    return {
      showIndexPageDropDown: false,
      callingPath: '',
    }
  },
  computed: {
    ...mapGetters({
      parentDefinedStyle: 'nav/parentDefinedStyle',
    }),
  },
  beforeMount() {
    this.callingPath = this.$nuxt.$router.name
  },
  beforeDestroy() {
    this.closeDropDown()
  },
  methods: {
    goto(url) {
      this.$router.push(url)
    },
    toggleIndexPageDropDown() {
      this.showIndexPageDropDown = !this.showIndexPageDropDown
    },
    closeDropDown() {
      this.showIndexPageDropDown = false
    },
  },
}
</script>

<style scoped lang="scss">
.nav-buttons {
  display: block;
  width: 100%;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  @include respond(tab-land) {
    padding: 0;
    font-size: 1.2rem;
  }
  @include respond(desktop) {
    display: flex;
    justify-content: space-between;
  }
}
.nav-text-buttons {
  display: none;
  float: right;
  @include respond(desktop) {
    display: flex;
  }
}
.nav-btn {
  display: inline-block;
  &--ask {
    display: none;
    color: $color-black;
    padding: 0.75rem 2rem;
    border-radius: 10rem;
    background: $color-white;
    @include respond(desktop) {
      display: inline-block;
      border: 1px solid $color-black;
    }
  }
}

.nav__scrolled {
  display: flex;
  float: right;
  overflow: hidden;
  @include respond(desktop) {
    width: 50%;
  }

  &-btn {
    display: flex;
    margin: 0 0.5rem;
    width: 2rem;
    @include respond(desktop) {
      display: none;
    }
  }

  &-search {
    display: none;
    @include respond(tab-port) {
    }
    @include respond(tab-land) {
    }
  }
}
.nav-menu-icon {
}
.nav-search {
  width: 70%;
}

.indexPageStyleButton {
  display: inline-block;
}
.indexPageStyleIcon {
  display: none;
}

.indexPageStyleScrolledIcon {
  display: inherit;
  @include respond(desktop) {
    display: none;
  }
}
.indexPageStyleScrolledButton {
  display: none;
  @include respond(desktop) {
    display: inline-block;
  }
}
.indexPageStyleScrolledToSearchIcon {
  display: block;
  @include respond(desktop) {
    display: none;
  }
}
.indexPageStyleScrolledToSearchButton {
  display: none;
  @include respond(desktop) {
    display: inline-block;
  }
}
.indexPageStyleScrolledToSearch {
  display: block;
}
.indexpage-dropdown {
  position: relative;
}
</style>
