<template>
  <div class="container">
    <div class="dashboard">
      <div class="sidebar-left">
        <div class="subject-nav__header">Subjects</div>
        <div
          v-for="(subject, index) in subjects"
          :key="index"
          class="subject-nav__subjects"
        >
          <div class="subject-nav__subjects-img">
            <img :src="`svgIcons/${subject}.svg`" class="subject-icon" />
          </div>
          <div class="subject-nav__subjects-text">
            {{ subject.toUpperCase() }}
          </div>
        </div>
      </div>
      <div class="main">
        <div class="dashboard-answer">
          <CuriousAnswerCard />
        </div>
        <div class="main-challenge">
          <Challenges :fetchNextChallengeOnly="true" />
        </div>
        <div class="filter">
          <div class="filter__text">Filter questions by</div>
          <div class="filter__btn">
            <BaseSelect
              :remote="true"
              :url="'/subjects'"
              :dataKey="`name`"
              class="filter__select"
              :defaultSelectedValue="`Subject`"
            />
            <BaseSelect
              :remote="true"
              :url="'/institutions'"
              :dataKey="`text`"
              class="filter__select"
              :defaultSelectedValue="'Institutions'"
            />
          </div>
        </div>
        <div v-for="question in questions" :key="question.id" class="questions">
          <QuestionSlip :question="question" />
        </div>
      </div>

      <div class="sidebar-right">
        <div class="sidebar-right__rank-card">
          <UserRankCard />
        </div>
        <div class="sidebar-right__trial-card">
          <FreeTrialCard />
        </div>
        <div class="sidebar-right__challenges">
          <h3 class="sidebar-right__challenges-head">Challenges to complete</h3>
          <Challenges />
        </div>
      </div>
    </div>
    <div class="footer-div"><Footer /></div>
  </div>
</template>

<script>
import Footer from '../components/Navigation/Footer'
import QuestionSlip from '../components/QuestionSlip'
import Challenges from '../components/Challenges'
import UserRankCard from '../components/UserRankCard'
import FreeTrialCard from '../components/FreeTrialCard'
import CuriousAnswerCard from '../components/CuriousAnswerCard'
export default {
  name: 'DashboardVue',
  // middleware: 'requiresAuth',
  components: {
    CuriousAnswerCard,
    FreeTrialCard,
    UserRankCard,
    Challenges,
    QuestionSlip,
    Footer,
  },
  data() {
    return {
      questions: '',
      subjects: '',
    }
  },
  created() {
    this.getQuestions()
    this.getSubjects()
  },
  methods: {
    getQuestions() {
      this.$axios
        .get('/questions')
        .then((res) => {
          this.questions = res.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getSubjects() {
      this.$axios
        .$get('/subjects')
        .then((res) => {
          this.subjects = res.map((respObject) => respObject.name)
          console.log('subjects', this.subjects)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 4rem;
  width: 100%;
}
.dashboard {
  padding-top: 1rem;
  @include respond(desktop) {
    display: inline-block;
    clear: both;
  }
  &-answer {
    display: block;
    width: 100%;
  }
}
.main {
  border: 1px solid $color-grey-dark;
  border-radius: 2rem;
  max-width: 800px;
  margin: auto;
  border-left: 1px solid $color-grey-dark;
  border-right: 1px solid $color-grey-dark;
  &-challenge {
    width: 100%;
    display: block;
    clear: both;
    margin: 1.5rem 0;
  }
  @include respond(desktop) {
    display: inline-block;
    clear: none;
    width: 57%;
    /*margin: 0 1rem 0 20%;*/
  }
}
.sidebar {
  display: none;
  &-left,
  &-right {
    display: none;
  }
  @include respond(desktop) {
    display: block;
    &-left {
      display: inline-block;
      clear: none;
      float: left;
      width: 20%;
    }
    &-right {
      display: inline-block;
      float: right;
      width: 22%;
      &__challenges {
        border: 1px solid $color-grey-dark;
        margin-top: 2rem;
        height: 30vh;
        overflow-y: scroll;
        &-head {
          margin-bottom: 1rem;
        }
      }
      &__rank-card {
        width: 100%;
      }
      &__trial-card {
        border-radius: 2rem;
      }
    }
  }
}
.filter {
  display: block;
  &__btn {
    display: block;
    padding: 1rem;
  }
  &__text {
    padding: 1rem;
    display: block;
    font-weight: 600;
  }
  &__select {
    width: 280px;
    @include respond(tab-port) {
      width: 210px;
      margin-right: 1rem;
      display: inline-block;
    }
  }
}
.questions {
  width: 100%;
  clear: both;
  background-color: rgba($color-background-default-green, 0.15);
}
.footer-div {
  display: block;
  clear: both;
  width: 100%;
}

.subject-nav {
  &__header {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: left;
    margin-bottom: 1px $color-grey-dark solid;
  }
  &__subjects {
    display: block;
    padding: 0.5rem 0.25rem 0.5rem 0;
    &-img {
      display: inline-block;
    }
    &-text {
      display: inline-block;
      font-size: 1rem;
      font-weight: 500;
    }
  }
}
.subject-icon {
  width: 1.5rem;
  height: 1.2rem;
  display: inline;
}
</style>
