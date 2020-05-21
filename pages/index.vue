<template>
  <div class="container">
    <!--    <Nav :parentDefinedStyle="dynamicStyle" />-->
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
        <BaseSearchBar :input-style="inputStyle" class="wall-search" />
      </div>
    </div>
    <div class="subject-categories">
      <SubjectCategory />
    </div>
    <div class="review">
      <div class="review__head">
        <h3 class="">
          Ruled by students, supported by parents, endorsed by teachers.
        </h3>
      </div>
      <div class="review__body u-margin-top-small">
        <div class="review__body-point">
          <h3>4.6</h3>
        </div>
        <div class="review__body-star">
          <font-awesome-icon icon="star" class="review__body-star-icon fa-2x" />
          <font-awesome-icon icon="star" class="review__body-star-icon fa-2x" />
          <font-awesome-icon icon="star" class="review__body-star-icon fa-2x" />
          <font-awesome-icon icon="star" class="review__body-star-icon fa-2x" />
          <font-awesome-icon
            icon="star-half"
            class="review__body-star-icon fa-2x"
          />
        </div>
        <div class="review__body-text">
          <p>review from Google Play</p>
        </div>
      </div>
      <div class="review__testimonial">
        <Testimonials />
      </div>
    </div>
    <section class="content">
      <div class="certified">
        <div class="certified-icon">
          <font-awesome-icon class="fa-3x" icon="certificate" />
        </div>
        <div class="certified-text">
          <p>Tap into the brainpower of thousands of experts worldwide</p>
        </div>
      </div>
      <div class="boast u-center-text">
        <div class="boast-head u-margin-bottom-minute">
          <h3>Ask questions</h3>
        </div>
        <div class="boast-body">
          <p>
            Whether you’re stuck on a history question or a blocked by a
            geometry puzzle, there’s no question too tricky for Brainly.
          </p>
        </div>
      </div>

      <div class="boast u-center-text">
        <div class="boast-head u-margin-bottom-minute">
          <h3>Go beyond</h3>
        </div>
        <div class="boast-body">
          <p>
            The Curious community is constantly buzzing with the excitement of
            endless collaboration, proving that learning is more fun — and more
            effective — when we put our heads together. Help the community by
            sharing what you know. Answering questions also helps you learn!
          </p>
        </div>
      </div>

      <div class="trial-ad u-center-text">
        <div class="trial-ad-head u-margin-bottom-minute">
          <h3>Boost learning and fast track your progress with Curious plus</h3>
        </div>
        <div class="trial-ad-body">
          <p>
            Access unlimited answers, faster
          </p>
        </div>
      </div>
    </section>
    <div class="trial-card">
      <FreeTrialCard />
    </div>
    <section class="foreFooter">
      <div class="foreFooter__group-text">
        <div class="foreFooter__head u-margin-bottom-minute">
          <h3>What do you need to know?</h3>
        </div>
        <div class="foreFooter__body">
          <div class="foreFooter__body-text u-margin-bottom-small">
            <p>
              Whether you are stucked with WAEC mathematics or you find your
              lecturers assignment too complex, there is nothing too big or too
              small from Curious
            </p>
          </div>
        </div>
      </div>
      <div class="foreFooter__group-btn">
        <div class="foreFooter__body-btn">
          <button class="btn btn--outlined btn--rounded">Ask question</button>
        </div>
      </div>
    </section>
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '../components/Navigation/Footer'
import FreeTrialCard from '../components/FreeTrialCard'
import SubjectCategory from '../components/SubjectCategory'
import Testimonials from '../components/Testimonials'

export default {
  auth: false,
  components: {
    Footer,
    FreeTrialCard,
    // Nav,
    SubjectCategory,
    Testimonials,
  },
  data() {
    return {
      inputStyle: 'indexPageStyle',
      dynamicStyle: '',
    }
  },
  watch: {
    dynamicStyle() {
      this.$store.dispatch('nav/addStyle', this.dynamicStyle)
      console.log('parentDefindStyle = ', this.dynamicStyle)
    },
  },
  created() {
    // this.$store.dispatch('nav/addStyle', this.dynamicStyle)
  },

  beforeMount() {
    this.$store.dispatch('nav/addStyle', 'indexPageStyle')
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    this.$store.dispatch('nav/addStyle', '')
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (window.scrollY < 70) {
        this.dynamicStyle = 'indexPageStyle'
      } else if (window.scrollY >= 70 && window.scrollY < 350) {
        this.dynamicStyle = 'indexPageStyleScrolled'
      } else {
        this.dynamicStyle = 'indexPageStyleScrolledToSearch'
      }
    },
  },
  head() {
    return {
      title: 'Homepage',
    }
  },
}
</script>

<style lang="scss" scoped>
.wall {
  padding: 8rem 0.75rem 5rem 1.5rem;
  background-color: $color-background-default;
  position: relative;

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
    @include respond(tab-land) {
      font-size: 2.5rem;
      line-height: 3rem;
    }
    @include respond(desktop) {
      font-size: 3rem;
      line-height: 4rem;
    }
  }

  &-search {
    width: 80%;
    @include respond(tab-land) {
    }

    &-text {
      font-size: 1.5rem;
    }
  }
}

.review {
  margin: 3rem auto 5rem;
  &__head {
    font-weight: bolder;
    text-align: center;
    font-size: 1.05rem;
    padding: 0 1rem;
  }
  &__body {
    text-align: center;
    &-point {
      font-weight: bolder;
      font-size: 1.1rem;
      padding-bottom: 1rem;
    }
    &-star {
      padding-bottom: 0.5rem;
      &-icon {
        color: #fbbe2e;
      }
    }
    &-text {
      font-weight: lighter;
    }
  }
}

.certified {
  text-align: center;
  margin: 3rem;
  &-icon {
    color: #60d399;
    margin: 1rem;
  }
  &-text {
    font-size: 1.25rem;
    font-weight: 600;
  }
}

.boast {
  margin: 3rem;
  &-head {
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
  }
  &-body {
    font-size: 1.05rem;
    word-spacing: 1px;
    line-height: 1.75rem;
  }
}

.trial-ad {
  margin: 1.5rem;
  &-head {
    text-transform: capitalize;
    font-family: 'Poppins', sans-serif;
    font-size: 1.1rem;
    line-height: 1.75rem;
  }
  &-body {
    font-size: 1.05rem;
    word-spacing: 1px;
    line-height: 1.75rem;
  }
}

.trial-card {
  margin: 3rem auto;
}

.foreFooter {
  width: 100%;
  padding: 2rem 2rem;
  background: $color-background-default;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  text-align: center;
  @include respond(tab-land) {
    display: flex;
    justify-content: space-between;
    text-align: left;
  }

  &__group {
    &-text {
      order: 1;
      width: 100%;
      @include respond(tab-land) {
        width: 70%;
      }
    }
    &-btn {
      order: 2;
    }
  }

  &__head {
    @include respond(tab-land) {
    }
    text-transform: uppercase;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
  }
  &__body {
    font-size: 1rem;
    line-height: 1.75rem;
    &-text {
    }
    &-btn {
      order: 2;
    }
  }
}

.footer {
}
</style>
