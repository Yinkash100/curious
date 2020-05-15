<template>
  <div class="notification-container">
    <NotificationBar
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NotificationBar from '@/components/Notification/NotificationBar'

export default {
  name: 'NotificationContainer',
  components: {
    NotificationBar,
  },
  computed: mapState('notification', ['notifications']),
}
</script>

<style scoped lang="scss">
.notification-container {
  position: fixed;
  bottom: 3rem;
  left: 45%;
  transform: translateX(-45%);
  text-align: left;
  background: transparent;
  color: #000;
  width: 90%;
  margin: auto;

  @include respond(tab-port) {
    max-width: 500px;
  }
}
</style>
