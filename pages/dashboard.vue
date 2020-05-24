<template>
  <div class="container">
    <div v-for="question in questions" :key="question.id" class="questions">
      <QuestionSlip :question="question" />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Navigation/Footer'
import QuestionSlip from '../components/QuestionSlip'
import requiresAuth from '../middleware/requiresAuth'
export default {
  name: 'DashboardVue',
  middleware: requiresAuth,
  components: { QuestionSlip, Footer },
  data() {
    return {
      questions: '',
    }
  },
  created() {
    this.getQuestions()
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
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding-top: 4rem;
}
.questions {
  background-color: rgba($color-background-default-green, 0.15);
}
</style>
