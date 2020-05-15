<template>

  <div v-if="showAccountPage" class="account-dropdown">
    <v-divider />
    <v-btn color="white" text rounded @click="logout">Logout</v-btn>
  </div>
</div>

<script>
  export default {
    name: 'NavAccountDropDown.vue'
  }
</script>

<style scoped>

</style>
