<template>
  <form class="form" @submit.prevent="search">
    <div class="append__btn">
      <input
        v-model="searchItem"
        :class="inputStyle"
        class="form__input append__input"
        placeholder="What is your question?"
      />
      <font-awesome-icon
        icon="search"
        class="append__btn-icon"
        :class="inputStyle + '-icon'"
        @click="search"
      />
    </div>
  </form>
</template>

<script>
export default {
  name: 'BaseSearchBar.vue',
  inheritAttrs: false,
  props: {
    inputStyle: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      searchItem: '',
    }
  },
  methods: {
    search() {
      console.log('He searched for ', this.searchItem)
    },
  },
  computed: {},
}
</script>

<style lang="scss" scoped>
.form__input {
  border-radius: 10rem;
  background: rgba($color-white, 0.8);
  position: relative;
  width: 100%;
}

.indexPageStyle {
  line-height: 1.5rem;
  padding: 0.5rem;
  height: 2rem;
  font-size: 1.2rem;

  @include respond(desktop) {
    line-height: 2rem;
    padding: 0.75rem;
    height: 2.5rem;
    font-size: 1.5rem;
  }

  &-icon {
    min-width: 1.5rem;
    min-height: 1.5rem;
    padding: 0.75rem 0.25rem;

    @include respond(desktop) {
      min-width: 6rem;
      min-height: 2.4rem;
      padding: 0.75rem 0;
    }
  }
}
</style>
