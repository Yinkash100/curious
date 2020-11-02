<template>
  <div class="challenges">
    <div
      v-for="(challenge, index) in challenges"
      :key="index"
      class="challenge"
    >
      <div class="challenge__badge">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 60"
          :class="`challenge_-badge-svg badgeColor${challenge.id % 3}`"
        >
          <path
            :class="`badgeColor${challenge.id % 3}`"
            d="M.9 19.1L17.9.9C19.1-.3 21-.3 22.1.9l17 18.2c.6.6.9 1.3.9 2.1v17.5c0 .8-.3 1.6-.9 2.1L22.1 59c-1.2 1.2-3.1 1.2-4.2 0L.9 40.8c-.6-.5-.9-1.2-.9-2V21.2c0-.7.3-1.5.9-2.1zM20 45c8.3 0 15-6.7 15-15s-6.7-15-15-15S5 21.7 5 30s6.7 15 15 15z"
          ></path>
          <image
            x="10"
            y="15"
            width="70"
            height="70"
            :xlink:href="`svgIcons/${challenge.subject_category}.svg`"
            class="challenge__badge-icon"
          />
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
  props: {
    fetchNextChallengeOnly: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      challenges: '',
      challengeUrl: '',
    }
  },
  created() {
    if (this.challenges === '') {
      this.challengeUrl = this.fetchNextChallengeOnly
        ? '/challenges?id=1'
        : '/challenges'
      this.getChallenges(this.challengeUrl)
    }
  },
  methods: {
    getChallenges() {
      this.$axios
        .$get(this.challengeUrl)
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
  padding: 2rem 1rem;
  font-size: 0.8rem;
  overflow: hidden;
}
.challenge {
  display: flex;
  &__badge {
    position: relative;
    order: 1;
    width: 3rem;
    height: 4rem;
    margin-right: 1rem;
    color: $color-grey-dark;

    &-svg {
      display: block;
      position: relative;
    }
    &-icon {
      display: block;
      width: 50%;
      height: 50%;
    }
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
  margin-top: -1.5rem;
  padding: 1rem 2rem 1rem 0;
}
.badgeColor0 {
  fill: rgb(255, 199, 191);
}
.badgeColor1 {
  fill: rgb(189, 199, 251);
}
.badgeColor2 {
  fill: rgb(254, 221, 142);
}
</style>
