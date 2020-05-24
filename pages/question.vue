<template>
  <div class="container">
    <form class="form" @submit.prevent="submitQuestion">
      <h3 class="form__head">Ask a question about your assignment</h3>
      <div class="form__group">
        <label class="form__label"></label>
        <textarea
          v-model="question.text"
          placeholder="Write your question here (Keep it simple and clear to get the best answers"
          rows="6"
          class="form__textarea"
        ></textarea>
      </div>
      <div class="form__group">
        <BaseSelect
          v-model="question.subject"
          :label="'Subject'"
          :remote="true"
          :url="'/subjects'"
        />
      </div>
      <div>
        <button
          class="btn btn--primary btn--rounded question-btn"
          type="submit"
        >
          Ask your question
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'question',
  data() {
    return {
      question: {
        text: '',
        subject: '',
      },
    }
  },
  methods: {
    submitQuestion() {
      this.question = {}
      this.$axios.$post('/questions')
    },
  },
}
</script>

<style scoped lang="scss">
.container {
  padding: 6rem 0.75rem;
  @include respond(tab-port) {
    padding: 6rem 3rem;
  }
}
.form {
  margin: 0rem 1rem;

  &__head {
    font-size: 1.1rem;
  }
  &__textarea {
    font-size: 1rem;
    line-height: 1.5rem;
  }
}
.question-btn {
  text-transform: uppercase;
}
</style>
