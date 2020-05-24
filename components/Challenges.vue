<template>
  <div class="challenges">
    <div
      v-for="(challenge, index) in challenges"
      :key="index"
      class="challenge"
    >
      <div class="challenge__badge">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 60">
          <path
            d="M.9 19.1L17.9.9C19.1-.3 21-.3 22.1.9l17 18.2c.6.6.9 1.3.9 2.1v17.5c0 .8-.3 1.6-.9 2.1L22.1 59c-1.2 1.2-3.1 1.2-4.2 0L.9 40.8c-.6-.5-.9-1.2-.9-2V21.2c0-.7.3-1.5.9-2.1zM20 45c8.3 0 15-6.7 15-15s-6.7-15-15-15S5 21.7 5 30s6.7 15 15 15z"
          ></path>
        </svg>
      </div>
      <div class="challenge__text">
        <div class="challenge__text-info u-margin-bottom-minute">
          {{ challenge.name }}
        </div>
        <div class="challenge__text-details">
          <div class="challenge-info challenge__text--answer-counter">
            <font-awesome-icon icon="book" class="challenge__details-icon" />
            {{ challenge.user_answer + '/' + challenge.total_required_answer }}
          </div>
          <div class="challenge-info challenge__text--time-countdown">
            <font-awesome-icon icon="clock" class="challenge__details-icon" />
            {{
              challenge.time_limit[0] + 'd : ' + challenge.time_limit[1] + 'h'
            }}
          </div>
          <div class="challenge-info challenge__text--details">
            <button class="btn btn-text" @click="startChallenge(challenge.id)">
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Challenges',
  data() {
    return {
      challenges: '',
    }
  },
  created() {
    if (this.challenges === '') {
      this.getChallenges()
    }
  },
  methods: {
    getChallenges() {
      console.log('about to get the challenges')
      this.$axios
        .$get('/challenges')
        .then((res) => {
          this.challenges = res
        })
        .catch((err) => {
          console.log(err)
        })
    },
    startChallenge(id) {
      console.log(
        'send to backend to whatchout for this challenge with accuracies time'
      )
    },
  },
}
</script>

<style scoped lang="scss">
.challenges {
  padding: 1rem 2rem;
  font-size: 0.8rem;
  /*min-height: 100%;*/
  overflow-y: scroll;
}
.challenge {
  display: flex;
  &__badge {
    order: 1;
    width: 3rem;
    height: 4rem;
    margin-right: 1rem;
    color: $color-grey-dark;
  }
  &__text {
    margin-bottom: 1rem;
    order: 2;
    &-info {
      padding-bottom: 0.5rem;
    }
    &-details {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
    }
  }
}
.challenge .challenge-info {
  display: inline-block;
}
.challenge__details-icon {
  color: $color-grey-dark;
}
.btn-text {
  padding: 0 2rem;
}
</style>
