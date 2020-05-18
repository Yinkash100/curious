<template>
  <div class="subject-slideshow">
    <div class="subject-slideshow-pack">
      <div v-for="(subject, key) in subjects" :key="key" class="each-subject">
        <img :src="`svgIcons/${subject.name}.svg`" class="each-subject-icon" />
        {{ subject.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubjectCategoryVue',
  data() {
    return {
      subjects: [
        {
          name: 'all',
          url: '',
        },
        {
          name: 'mathematics',
          url: '',
        },
        {
          name: 'chemistry',
          url: '',
        },
        {
          name: 'history',
          url: '',
        },
        {
          name: 'english',
          url: '',
        },
        {
          name: 'biology',
          url: '',
        },
        {
          name: 'physics',
          url: '',
        },
        {
          name: 'social_studies',
          url: '',
        },
        {
          name: 'agriculture',
          url: '',
        },
        {
          name: 'arts',
          url: '',
        },
        {
          name: 'geography',
          url: '',
        },
        {
          name: 'business',
          url: '',
        },
        {
          name: 'computers',
          url: '',
        },
        {
          name: 'french',
          url: '',
        },
        {
          name: 'spanish',
          url: '',
        },
        {
          name: 'medicine',
          url: '',
        },
        {
          name: 'law',
          url: '',
        },
        {
          name: 'engineering',
          icon: '',
          url: '',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.subject-slideshow {
  width: 100%;
  height: 4rem;
  padding: 0.5rem 0;
  display: block;
  overflow: hidden;
  background: $color-grey-dark;
}

.subject-slideshow-pack {
  max-width: 1000%;
  text-overflow: clip;
  white-space: nowrap;
  display: inline-block;
  animation: moveSlideshow 20s linear infinite;
}

.each-subject {
  display: inline-block;
  font-size: 1.5rem;
  line-height: 2rem;
  text-transform: capitalize;
  margin: 0 2rem;

  &-icon {
    width: 1.5rem;
    height: 2rem;
    display: inline;
    padding-top: 1rem;
  }
}
</style>
