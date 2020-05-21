<template>
  <div class="form__group">
    <label v-if="label" class="form__label">{{ label }}</label>
    <div class="append__btn">
      <select
        v-model="selectedValue"
        class="form__select append__input"
        @input="$emit('input', $event.target.value)"
        @focus="fetchOptions"
      >
        <option
          v-for="option in options"
          :key="option"
          :value="option"
          :selected="selectedValue === option"
        >
          {{ option }}</option
        >
      </select>
      <font-awesome-icon icon="angle-down" class="append__btn-icon" />
      <!--      <select-->
      <!--        class="custom-combobox"-->
      <!--        v-model="currentOption"-->
      <!--        :class="customClass"-->
      <!--        @input="$emit('input', $event.target.value)"-->
      <!--        @change="onSelectedEvent(currentOption)"-->
      <!--      >-->
      <!--        <option-->
      <!--          value=""-->
      <!--          v-if="defaultLabelText != null && defaultLabelText.length > 0"-->
      <!--          :disabled="disableLabelText == 1"-->
      <!--          >{{ defaultLabelText }}</option-->
      <!--        >-->
      <!--        <option-->
      <!--          v-for="item in optionItems"-->
      <!--          :value="item.Id"-->
      <!--          :key="item.Id"-->
      <!--          :selected="defaultSelectedValue == item.Id"-->
      <!--          >{{ defaultSelectedValue }}{{ item.Text }}</option-->
      <!--        >-->
      <!--      </select>-->
    </div>
  </div>
</template>

<script>
import curiousServices from '../services/curiousServices'

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
      this.currentOption = newValue
    },
  },
  mounted() {
    this.selectedValue = this.defaultSelectedValue
  },
  methods: {
    fetchOptions() {
      if (this.fetchData && this.url) {
        // const callBackFunc = this.callBackFunc

        curiousServices.get(this.url).then((body) => {
          console.log('returned', body)
          if (body) {
            console.log('Whoa it returned a response')

            if (Array.isArray(body.data)) {
              this.options = body.data.map((a) => a.name)
              console.log('options', this.options)
              this.fetchData = false
            }
          }
        })
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
