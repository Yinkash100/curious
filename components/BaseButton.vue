<template>
  <button class="" :class="buttonClass" @click="$emit('click', $event)">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButtonVue',
  inheritAttrs: false,
  props: {
    class: {
      type: String,
      required: false,
    },
  },
}
</script>

<style scoped></style>
