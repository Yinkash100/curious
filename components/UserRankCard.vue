<template>
  <div class="user-rank">
    <div class="user-rank__progress">
      <ProgressRing :radius="50" :stroke="4" :progress="this.profile.points" />
    </div>
    <div class="user-rank__details">
      <div class="user-rank__details-name">
        <p>{{ profile.username }}</p>
      </div>
      <div class="user-rank__details-rank">
        <span class="user-rank__details-rank--small">Rank: </span
        ><span class="user-rank__details-rank--bold">{{ profile.rank }}</span>
      </div>
      <div class="user-rank__details-category">
        <span><font-awesome-icon icon="universal-access" /></span
        ><span>{{ profile.points }}/{{ profile.rankLimit }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressRing from './ProgressRing'
export default {
  name: 'UserRankCard.vue',
  components: {
    ProgressRing,
  },
  created() {
    // if (user) {
    //   console.log('the user is ', user)
    // }
  },
  data() {
    return {
      profile: {
        username: 'Yinka',
        rank: 'Beginner',
        points: 75,
        rankLimit: 100,
      },
    }
  },
}
</script>

<style scoped lang="scss">
.user-rank {
  margin: 1rem;
  display: flex;
  flex-wrap: nowrap;

  &__progress {
    display: block;
  }

  &__details {
    display: block;
    margin: 1rem 0;

    &-category {
      color: $color-green-progress;
    }
  }
}
</style>
