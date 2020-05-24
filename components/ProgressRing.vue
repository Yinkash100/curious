<template>
  <div class="cont">
    <div class="progress-circle">
      <svg
        :height="radius * 2"
        :width="radius * 2"
        class="progress-circle__ring"
      >
        <circle
          stroke="#53fdad"
          fill="transparent"
          :stroke-dasharray="circumference + ' ' + circumference"
          :style="{ strokeDashoffset }"
          :stroke-width="stroke"
          :r="normalizedRadius"
          :cx="radius"
          :cy="radius"
        />
      </svg>
      <font-awesome-icon
        icon="user-circle"
        class="fa-5x progress-circle__img"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    radius: Number,
    progress: Number,
    stroke: Number,
  },
  data() {
    const normalizedRadius = this.radius - this.stroke * 2
    const circumference = normalizedRadius * 2 * Math.PI
    return {
      normalizedRadius,
      circumference,
    }
  },
  computed: {
    strokeDashoffset() {
      console.log('circumference', this.circumference)
      console.log('progress', this.progress)
      return this.circumference - (this.progress / 100) * this.circumference
    },
  },
}
</script>
<style scoped lang="scss">
.cont {
  display: block;
  position: relative;
  width: 100px;
  height: 100px;
}
.progress-circle {
  width: 100%;
  position: relative;
  &__ring {
    display: block;

    transition: stroke-dashoffset 0.35s;
  }
  &__img {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $color-grey-dark;
  }
}
circle {
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}
</style>
