<template>
  <div class="container">
    <div class="wall">
      <div class="wall-items">
        <h1 class="wall-head u-margin-bottom-small">
          Go from questioning to understanding
        </h1>
        <p class="wall-text u-margin-bottom-small">
          Curious is the knowledge sharing community where over 10 million
          students and experts put their heads together to crack their toughest
          homework questions.
        </p>
        <BaseSearchBar :inputStyle="inputStyle" class="wall-search" />
      </div>
    </div>
    <div class="categories">
      <SubjectCategory />
    </div>
    <div>
      <p>Ruled by students, supported by parents, endorsed by teachers.</p>
    </div>
    <div>
      <div>
        <div>
          <h2>What do you need to know?</h2>
          <p>
            Whether you are stucked with WAEC mathematics or you find your
            lecturers assignment too complex, there is nothing too big or too
            small from Curious
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubjectCategory from '../components/SubjectCategory'

export default {
  auth: false,
  components: {
    SubjectCategory,
  },
  data() {
    return {
      inputStyle: 'indexPageStyle',
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/pages/index';
.wall {
  padding: 5rem 0.75rem 0 1.2rem;

  &-items {
    @include respond(tab-port) {
      width: 60%;
    }
    @include respond(tab-land) {
      width: 50%;
    }
  }
  &-head {
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    line-height: 2.5rem;
  }

  &-search {
    @include respond(tab-land) {
    }

    &-text {
      font-size: 1.5rem;
    }
  }
}
.categories {
  height: 20vh;
}
</style>
