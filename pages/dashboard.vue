<template>
  <div class="mt-10">
    <h1 class="mt-3">This page should only be visible to logged in users.</h1>
  </div>
</template>

<script>
export default {
  name: 'DashboardVue',
  meta: { requiresAuth: true },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped></style>
