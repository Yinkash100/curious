<template>
  <div class="navbar text-center ma-2">
    <v-snackbar
      :value="notification.id"
      class="text-center text white black--text"
      color="white"
    >
      <v-icon v-if="notification.type === 'error'" color="error"
        >mdi-close-circle-outline</v-icon
      >
      <v-icon
        v-if="notification.type === 'success'"
        color="success"
        @click="removeNotification"
        >mdi-check-circle-outline</v-icon
      >
      {{ notification.message }}
      <v-icon color="black" @click="removeNotification">mdi-close</v-icon>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'NotificationBar',
  props: {
    notification: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      timeout: null,
    }
  },
  mounted() {
    this.timeout = setTimeout(() => {
      this.$store.dispatch('notification/remove', this.notification)
    }, 5000)
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  },
  methods: {
    removeNotification() {
      this.$store.dispatch('notification/remove', this.notification)
    },
  },
}
</script>

<style scoped>
.navbar {
  background: transparent;
}
</style>
