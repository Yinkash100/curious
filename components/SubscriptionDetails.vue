<template>
  <div class="subscription">
    <div class="subscription__top">
      <p class="subscription__top-info">Your current plan:</p>
      <p class="current-plan">Curious {{ user.currentSubscriptionPlan }}</p>
    </div>
    <div class="subscription__bottom u-margin-bottom-small">
      <p class="u-margin-bottom-small">
        Do you want to access to over 100,000+ Verified Answers?
      </p>
      <button class="btn btn--rounded btn--primary u-center-text">
        Start 7 day trial
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubscriptionDetails',
  data() {
    return {
      user: {
        currentSubscriptionPlan: 'Basic',
      },
    }
  },
}
</script>

<style scoped lang="scss">
.subscription {
  padding: 2rem 1rem;
  border-radius: 0 0 1rem 1rem;
  color: $color-white;
  background-color: $color-background-default-deep;

  &__top {
    padding-bottom: 1rem;
    border-bottom: 1px solid $color-white;
    &-info {
      font-size: 0.8rem;
    }
  }
  &__bottom {
    padding-top: 1rem;
  }
}
.current-plan {
  font-size: 1.2rem;
  font-weight: 600;
}
.btn--primary {
  font-weight: 600;
  background-color: $color-black;
}
</style>
