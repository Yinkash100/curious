<template>
  <div class="subject-category">
    <div v-for="(subject, key) in subjects" :key="key" class="each-subject">
      <img :src="`svgIcons/${subject.name}.svg`" class="subject-icon" />
      {{ subject.name }}
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
.subject-icon {
  width: 1rem;
  height: 1rem;
}

.each-subject {
  font-size: 2rem;
  line-height: 3rem;
  display: inline-block;
  padding: 1rem, 2rem;
}

.subject-category {
  display: block;
  height: 4rem;
}
</style>
