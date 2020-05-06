<template>
  <div class="mt-10">
    <v-row class="wall">
      <v-col cols="12" md="6" class="ma-10">
        <h1 class="display-3 font-weight-black mt-10">
          Go from questioning to understanding
        </h1>
        <p class="title text-justify py-4">
          Curious is the knowledge sharing community where over 10 million
          students and experts put their heads together to crack their toughest
          homework questions.
        </p>
        <form>
          <v-text-field
            v-model="searchItem"
            :append-icon="'mdi-magnify'"
            placeholder="What is your question?"
            solo
            rounded
          />
        </form>
      </v-col>
    </v-row>
    <v-row class="categories">
      <v-col cols="12" md="12">
        <SubjectCategory />
      </v-col>
    </v-row>
    <v-row>
      <p>Ruled by students, supported by parents, endorsed by teachers.</p>
    </v-row>
    <v-row>
      <v-col>
        <div>
          <h2>What do you need to know?</h2>
          <p>
            Whether you are stucked with WAEC mathematics or you find your
            lecturers assignment too complex, there is nothing too big or too
            small from Curious
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SubjectCategory from '../components/SubjectCategory'
export default {
  meta: { requiresAuth: false },
  components: {
    SubjectCategory,
  },
  data() {
    return {
      searchItem: '',
    }
  },
}
</script>

<style lang="scss">
@import '../assets/variables';
.wall {
  height: 80vh;
  background-image: linear-gradient(
      to right bottom,
      rgba($color-primary-light, 0.3),
      rgba($color-primary, 0.6)
    ),
    url('/assets/images/writing-materials.jpg');
  background-size: cover;
  background-position: top;
  position: relative;
}
.categories {
  height: 20vh;
}
</style>
