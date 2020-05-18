<template>
  <div class="notification notification-card">
    <div :value="notification.id" class="notification-bar">
      <p class="notification-text">
        {{ notification.message }}
        <font-awesome-icon
          :icon="['far', 'times-circle']"
          class="notification-icon"
          @click="removeNotification"
        />
      </p>
    </div>
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
    }, 50000)
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

<style scoped lang="scss">
.notification {
  display: block;
  margin: 0.25rem auto 0;
  width: 100%;
  background: #fff;

  &-bar {
    position: relative;
    @include respond(tab-port) {
    }
  }

  &-icon {
    font-size: 1rem;
    z-index: 1;
    display: block;
    position: absolute;
    margin-left: 1rem;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);

    color: red;
  }

  &-text {
    width: 90%;
  }
}

.notification-card {
  border-radius: 0.25rem;
  box-shadow: 0 0 1rem rgba($color-black, 0.1);
  margin-top: 0.5rem;
  padding: 0.5rem 0 0.5rem 1rem;
}
</style>
