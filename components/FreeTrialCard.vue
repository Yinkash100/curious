<template>
  <div class="trial-card">
    <div class="trial-card__head">
      <div class="trial-card__head-logo">
        <Logo />
      </div>
      <div class="trial-card__head-text u-margin-bottom-minute">
        <h3>Get Curious plus</h3>
      </div>
    </div>
    <div class="trial-card__body">
      <div class="trial-card__body-text u-margin-bottom-small">
        <ul>
          <li>Unlimited access, including Expert-Verified Answers</li>
          <li>Faster answers to your questions</li>
          <li>No ad interruptions. Ever</li>
        </ul>
      </div>
      <div class="trial-card__body-action">
        <button id="trial-btn" class="btn btn--primary btn--rounded">
          Start your 7 day free trial
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logos/Logo'
export default {
  name: 'FreeTrialCardVue',
  components: {
    Logo,
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.trial-card {
  margin: 1rem;
  padding: 1rem 2rem;
  background: $color-background-default-green;
  min-width: 18rem;
  @include respond(tab-land) {
    padding: 1.5rem 3rem;
  }

  &__head {
    @include respond(tab-land) {
      display: flex;
      flex-wrap: wrap;
      max-width: 57rem;
      padding: 0;
      justify-content: space-between;
    }
    &-logo {
      width: 12rem;
      order: 2;
      padding-top: 1rem;
      @include respond(tab-land) {
        float: right;
      }
    }
    &-text {
      padding-top: 1rem;
      font-size: 1.1rem;
      width: 19rem;
      font-weight: bolder;
      text-transform: uppercase;
      order: 1;

      @include respond(tab-land) {
        min-width: 50%;
        font-size: 1.8rem;
        line-height: 2rem;
      }
    }
  }
  &__body {
    max-width: 24rem;
    padding: 0;
    @include respond(tab-land) {
    }

    &-text {
      margin: 1.5rem 1rem;
      line-height: 2rem;
      /*&-points {*/
      /*  font-size: 1rem;*/
      /*  */
      /*  padding-left: 1.25rem;*/
      /*}*/
    }
    &-action {
      margin-bottom: 4rem;
      @include respond(tab-land) {
        margin-bottom: 2rem;
      }
    }
  }
}
ul > li {
  list-style-type: disc;
}
#trial-btn {
  margin: 0;

  background: $color-black;
}
</style>
