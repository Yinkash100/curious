<template>
  <div class="form__group">
    <label v-if="label" class="form__label">{{ label }}</label>
    <div class="append__btn">
      <select v-model="innerValue" class="form__select append__input">
        <option
          v-for="option in options"
          :key="option"
          :value="option"
          :selected="option === value"
        >
          {{ option }}</option
        >
      </select>
      <font-awesome-icon icon="angle-down" class="append__btn-icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseSelect',
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      required: true,
    },
    options: {
      type: [Array, Object],
      required: true,
    },
    value: {
      type: [String, Number, Array],
      default: () => '',
    },
  },
  data() {
    return {
      innerValue: undefined,
    }
  },
  watch: {},
  methods: {
    updateValue(event) {
      this.$emit('clicked', event.target.value)
    },
  },
}
</script>

<style scoped lang="scss">
.form__select {
  border-radius: 10rem;
}
.form__label {
  margin-left: 0;
}
select {
  -moz-appearance: window;
  -webkit-appearance: none;
}
</style>
