<template>
  <div class="form__group">
    <label v-if="label" class="form__label">{{ label }}</label>
    <div class="append__btn">
      <select
        v-model="selectedValue"
        class="form__select append__input"
        @input="$emit('input', $event.target.value)"
        @focus="fetchOptions(dataKey)"
      >
        <option
          v-for="option in options"
          :key="option"
          :value="option"
          :selected="selectedValue === option"
        >
          {{ option }}
        </option>
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
      default: '',
    },
    options: {
      type: [Array, Object],
      default: () => {},
    },
    value: {
      type: [String, Number, Array],
      default: () => '',
    },
    url: {
      type: String,
      default: '',
    },
    remote: {
      type: Boolean,
      default: false,
    },
    dataKey: {
      type: String,
      default: '',
    },
    defaultSelectedValue: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      selectedValue: '',
      fetchData: this.remote,
    }
  },
  watch: {
    value(newValue) {
      this.selectedValue = newValue
    },
  },
  mounted() {
    this.selectedValue = this.defaultSelectedValue
  },
  methods: {
    async fetchOptions(dataKey) {
      if (this.fetchData && this.url) {
        this.options = ['loading...']
        try {
          const response = await this.$axios.$get(this.url)
          this.options = response.map((res) => res[dataKey])
          this.fetchData = false
          console.log('options', this.options)
        } catch (err) {
          console.log(err)
          this.fetchData = false
        }
      }
    },
  },
}
</script>

<style scoped lang="scss">
.form__select {
  display: block;
  border-radius: 10rem;
  width: 100%;
}
.form__label {
  margin-left: 0;
}
select {
  //window be4
  -moz-appearance: inherit;
  -webkit-appearance: none;
}
</style>
