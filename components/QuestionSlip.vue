<template>
  <div class="question">
    <div class="question__head">
      <div class="question__head-details">
        <div class="question__head-asker">
          <font-awesome-icon icon="user-circle" class="details-icon fa-3x" />
        </div>
        <div>
          <div v-if="question.first_question === true" class="details-flag">
            <p>First question</p>
          </div>
          <div class="question__head-category">
            <p>{{ question.subject_category }}. {{ question.time_asked }}</p>
          </div>
        </div>
      </div>
      <div class="question__head-points">
        <div class="question-point--icon">
          <svg
            width="17"
            height="24"
            viewBox="0 0 17 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.13379 23.4834C6.00098 23.4834 5.0293 23.3467 4.21875 23.0732C3.4082 22.8096 2.73438 22.3896 2.19727 21.8135C1.65039 21.2275 1.24023 20.4658 0.966797 19.5283C0.703125 18.5811 0.571289 17.4385 0.571289 16.1006C0.571289 14.5869 0.74707 13.0098 1.09863 11.3691C1.50879 9.46484 2.09473 7.76074 2.85645 6.25684C3.74512 4.50879 4.82422 3.14648 6.09375 2.16992C7.53906 1.05664 9.18945 0.5 11.0449 0.5C12.5391 0.5 13.7256 0.8125 14.6045 1.4375C15.5713 2.12109 16.0547 3.14648 16.0547 4.51367C16.0547 5.37305 15.8984 6.03223 15.5859 6.49121C15.2148 7.01855 14.668 7.28223 13.9453 7.28223C13.6426 7.28223 13.3447 7.22852 13.0518 7.12109C12.7686 7.01367 12.5 6.80859 12.2461 6.50586C12.4219 6.41797 12.5928 6.28125 12.7588 6.0957C12.9248 5.90039 13.0713 5.67578 13.1982 5.42188C13.4814 4.85547 13.623 4.29395 13.623 3.7373C13.623 3.2002 13.4863 2.77539 13.2129 2.46289C12.8906 2.0918 12.417 1.90625 11.792 1.90625C11.2549 1.90625 10.7227 2.10645 10.1953 2.50684C9.67773 2.89746 9.17969 3.4541 8.70117 4.17676C8.24219 4.87012 7.81738 5.68066 7.42676 6.6084C7.03613 7.53613 6.7041 8.52246 6.43066 9.56738C6.15723 10.6221 5.94238 11.6963 5.78613 12.79C5.62988 13.8838 5.55176 14.9287 5.55176 15.9248C5.55176 16.667 5.60547 17.3164 5.71289 17.873C5.83008 18.4297 6.01562 18.9033 6.26953 19.2939C6.82617 20.1631 7.78809 20.5977 9.15527 20.5977C10.3271 20.5977 11.416 20.3389 12.4219 19.8213C13.4277 19.2939 14.2871 18.5518 15 17.5947L15.6885 17.9023C15.3076 18.8594 14.7803 19.6992 14.1064 20.4219C13.4424 21.1348 12.6904 21.7256 11.8506 22.1943C11.0791 22.624 10.2832 22.9463 9.46289 23.1611C8.64258 23.376 7.86621 23.4834 7.13379 23.4834Z"
              fill="#293D6E"
            />
          </svg>
        </div>
        <div class="question-point--value">{{ question.question_points }}</div>
      </div>
    </div>
    <div class="question__body">
      <p>{{ trimQuestion(question.text) }}</p>
    </div>
    <div class="question__foot">
      <div class="question__watchers"></div>
      <div>
        <button class="btn btn--rounded btn--outlined">Answer</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionSlip',
  props: {
    question: {
      type: Object,
      required: true,
      default: () => '',
    },
  },
  data() {
    return {
      // question: ''
    }
  },
  created() {
    if (this.questions === '') {
      this.fetchQuestions()
    }
  },
  methods: {
    fetchQuestions() {
      console.log("I'm about to ask this questions")
    },
    trimQuestion(text) {
      if (text.length > 50) {
        return text.slice(0, 100) + ' ...'
      }
      return text
    },
  },
}
</script>

<style scoped lang="scss">
.question {
  padding: 1rem;
  margin: 1rem 0;
  background-color: white;
  &__head {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    &-details {
      display: flex;
      flex-wrap: nowrap;
    }
    &-asker {
      max-width: 2.5rem;
      min-width: 2.5rem;
      margin-right: 1rem;
    }

    &-points {
      display: flex;
      flex-wrap: nowrap;
      border-radius: 0.25rem;
      background-color: rgba($color-background-default-green, 1);
      height: 1.5rem;
    }
  }

  &__body {
    font-size: 1.2rem;
    line-height: 2rem;
  }

  &__foot {
    margin-top: 1rem;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
}
.details {
  &-flag {
    background-color: orange;
    color: $color-white;
    text-align: center;
    border-radius: 0.25rem;
    width: 80%;
  }
}
.question-point {
  &--icon {
  }
  &--value {
    padding-left: 1rem;
  }
}
.btn--outlined {
  border-color: $color-black;
  padding: 0.5rem 2rem;
}
</style>
