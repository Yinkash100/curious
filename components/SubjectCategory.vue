<template>
  <div>
    <v-sheet color="secondary">
      <v-slide-group multiple show-arrows>
        <v-slide-item
          v-for="(subject, key) in subjects"
          :key="key"
          v-slot:default="{ active, toggle }"
        >
          <v-btn
            class="mx-2"
            :input-value="active"
            active-class="purple white--text"
            color="secondary"
            depressed
            rounded
            @click="toggle"
          >
            <v-icon>{{ subject.icon }}</v-icon>
            {{ ' ' + subject.name }}
          </v-btn>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
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
          icon: 'mdi-shield-star-outline',
          url: '',
        },
        {
          name: 'mathematics',
          icon: 'mdi-pi',
          url: '',
        },
        {
          name: 'chemistry',
          icon: 'mdi-flask',
          url: '',
        },
        {
          name: 'history',
          icon: 'mdi-book-open',
          url: '',
        },
        {
          name: 'english',
          icon: 'mdi-message-text',
          url: '',
        },
        {
          name: 'biology',
          icon: 'mdi-flask',
          url: '',
        },
        {
          name: 'physics',
          icon: 'mdi-transmission-tower',
          url: '',
        },
        {
          name: 'social_studies',
          icon: 'mdi-account-group',
          url: '',
        },
        {
          name: 'agriculture',
          icon: 'mdi-sprout-outline',
          url: '',
        },
        {
          name: 'arts',
          icon: 'mdi-brush',
          url: '',
        },
        {
          name: 'geography',
          icon: 'mdi-earth',
          url: '',
        },
        {
          name: 'business',
          icon: 'mdi-handshake',
          url: '',
        },
        {
          name: 'computers',
          icon: 'mdi-desktop-classic',
          url: '',
        },
        {
          name: 'french',
          icon: 'mdi-message-text',
          url: '',
        },
        {
          name: 'spanish',
          icon: 'mdi-message-text',
          url: '',
        },
        {
          name: 'medicine',
          icon: 'mdi-doctor',
          url: '',
        },
        {
          name: 'law',
          icon: 'mdi-scale-balance',
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

<style scoped></style>
