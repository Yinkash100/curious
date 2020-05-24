<template>
  <form class="form" @submit.prevent="search">
    <div class="form__group">
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
    </div>
  </form>
</template>

<script>
export default {
  name: 'BaseSearchBar',
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
  display: block;
  border-radius: 10rem;
  width: 100%;
}
.form__label {
  margin-left: 0;
}
.indexPageStyle {
  line-height: 2rem;
  font-size: 1.5rem;
  padding: 0.5rem;
  width: 100%;

  @include respond(tab-land) {
    line-height: 2.5rem;
    padding: 1.5rem;
    font-size: 1.5rem;
  }

  &-icon {
    padding-top: 1rem;
    @include respond(tab-port) {
      padding-top: 1.5rem;
    }
    @include respond(tab-land) {
      width: 1.5rem;
      height: 1.5rem;
      padding-top: 1.5rem;
    }
    @include respond(tab-land) {
      width: 2rem;
      height: 2rem;
      padding-top: 1.5rem;
    }
  }
}
</style>
