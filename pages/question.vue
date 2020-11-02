<template>
  <div class="container">
    <form class="form" @submit.prevent="submitQuestion">
      <h3 class="form__head">Ask a question about your assignment</h3>
      <div class="form__group">
        <label class="form__label"></label>
        <textarea
          v-model="question.text"
          placeholder="Write your question here (Keep it simple and clear to get the best answers"
          class="form__textarea"
        ></textarea>
      </div>
      <div>
        <BaseSelect
          v-model="question.subject"
          :label="'Subject'"
          :remote="true"
          :data-key="'text'"
          :url="'/subjects'"
          class="form__base-select select-subject"
        />
      </div>
      <div class="form__base-select select-point">
        <BaseSelect v-model="question.subject" :label="'Points'" :option="[]" />
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
  name: 'Question',
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
  padding: 6rem 0;
  width: 100%;
}
.form {
  margin: 2rem;
  box-sizing: content-box;
  -moz-box-sizing: content-box;

  &__head {
    font-size: 1.1rem;
  }
  &__textarea {
    width: 100%;
    max-width: 400px;
    height: 9rem;
    font-size: 1rem;
    line-height: 1.5rem;
    @include respond(tab-land) {
    }
  }
  &__base-select {
    width: 100%;
    max-width: 400px;
  }
}
.question-btn {
  margin: 2rem 0;
  text-transform: uppercase;
  background-color: $color-background-default-deep;
}
</style>
