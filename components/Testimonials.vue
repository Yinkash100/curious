<template>
  <div class="container u-center-text">
    <div class="review__text">
      <div class="review__text-text">
        <p class="review__text-text-para">
          {{ reviews[currentReviewIndex].text }}
        </p>
      </div>
    </div>
    <div class="review__actions">
      <div class="review__button-next">
        <font-awesome-icon
          icon="chevron-circle-left"
          class="review__icon review__icon-prev fa-2x"
          @click="showPreviousReview"
        />
      </div>
      <div class="review__img">
        <div class="review__img-each">
          <img
            :src="`${reviews[nextReview(nextReview(currentReviewIndex))].img}`"
            class="review__img-image"
            @click="
              gotoReview(reviews[nextReview(nextReview(currentReviewIndex))].id)
            "
          />
          <img
            :src="`${reviews[nextReview(currentReviewIndex)].img}`"
            class="review__img-image"
            @click="gotoReview(reviews[nextReview(currentReviewIndex)].id)"
          />
          <img
            :src="`${reviews[currentReviewIndex].img}`"
            class="review__img-image activeReview"
          />
          <img
            :src="`${reviews[previousReview(currentReviewIndex)].img}`"
            class="review__img-image"
            @click="gotoReview(reviews[previousReview(currentReviewIndex)].id)"
          />
          <img
            :src="`${
              reviews[previousReview(previousReview(currentReviewIndex))].img
            }`"
            class="review__img-image"
            @click="
              gotoReview(reviews[previousTwoReview(currentReviewIndex)].id)
            "
          />
        </div>
      </div>
      <div class="review__button-prev">
        <font-awesome-icon
          icon="chevron-circle-right"
          class="review__icon review__icon-next fa-2x"
          @click="showNextReview"
        />
      </div>
    </div>
    <div class="review__name">
      <p>{{ reviews[currentReviewIndex].name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FakeReview',
  data() {
    return {
      currentReviewIndex: 4,
      reviews: [
        {
          id: 0,
          name: 'Idera',
          text:
            'This is not the height of it yet. Just wait and see. better things coming your way' +
            'You got a fast car\n' +
            'I got a plan to get us out of here\n',

          img: 'https://picsum.photos/id/43/200/300',
        },
        {
          id: 1,
          name: 'FUTA Eminem',
          text:
            'My name is Yinka it rhymes with Limca. Some call me Yinka same pronunciation with Binta.',
          img: 'https://picsum.photos/id/129/200/300',
        },
        {
          id: 2,
          name: 'Dolly G',
          text:
            'Taxi’s waiting down on the street so\n' +
            'Hurry up I have to go\n' +
            'Looking round you’d see all the people',
          img: 'https://picsum.photos/id/102/200',
        },
        {
          id: 3,
          name: 'Black Art 20',
          text:
            'You got a fast car\n' +
            'I want a ticket to anywhere\n' +
            'Maybe we make a deal\n' +
            'Maybe together we can get somewhere\n' +
            'Anyplace is better\n' +
            'Starting from zero got nothing to lose',
          img: 'https://picsum.photos/id/112/200',
        },
        {
          id: 4,
          name: 'Adele',
          text:
            'Hello, Its me,\n I was wondering what you will say of this app. \n sincere review will be appreciated \n' +
            'To go over everything\n' +
            "They say that time's supposed to heal ya\n" +
            "But I ain't done much healing",
          img: 'https://picsum.photos/id/127/200/300',
        },
        {
          id: 5,
          name: 'Nolly P',
          text:
            "I can't believe you are going through this app. \n Thank you, It means a lot to me",
          img: 'https://picsum.photos/id/13/200/300',
        },
        {
          id: 6,
          name: 'Yusuf Islam',
          text:
            'You can do whatever you want to do \n Anything you want? you can do\nYou can ride a tiger or walk the dog' +
            'Anything you wish can be true \n You can watch the world as it passes by\nYou can watch the world as it passes by' +
            'Or you can make it stop for you',
          img: 'https://picsum.photos/id/142/200/300',
        },
        {
          id: 7,
          name: 'King Kunta',
          text:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
          img: 'https://picsum.photos/id/191/200',
        },
      ],
    }
  },
  methods: {
    previousReview(current) {
      return current > 0 ? current - 1 : this.reviews.length - 1
    },
    nextReview(current) {
      return current < this.reviews.length - 1 ? current + 1 : 0
    },
    showNextReview() {
      if (this.currentReviewIndex < this.reviews.length - 1) {
        this.currentReviewIndex += 1
      } else {
        this.currentReviewIndex = 0
      }
    },
    showPreviousReview() {
      if (this.currentReviewIndex > 0) {
        this.currentReviewIndex -= 1
      } else {
        this.currentReviewIndex = this.reviews.length - 1
      }
    },
    gotoReview(id) {
      this.currentReviewIndex = id
    },
  },
}
</script>

<style scoped lang="scss">
.review {
  &__text {
    margin: 3rem 1rem 1.5rem;

    &-text {
      padding: 1.5rem 1.5rem 0;
      transform: translate3d(0, 0, 0);
      @include respond(tab-port) {
        padding: 3rem 3rem 0;
      }
      @include respond(tab-land) {
        width: 27rem;
        height: 13rem;
        padding: 1.5rem;
        margin: 1rem auto;
        border: 1rem solid $color-background-default;
        position: relative;
        &-para {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          padding: 1rem;
        }
      }
    }
  }
  &__icon {
    color: $color-grey-dark;
    padding: 0 1rem;
  }
  &__actions {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  &__img {
    display: flex;
    white-space: nowrap;
    text-overflow: clip;
    width: 70%;
    overflow: hidden;
    &-each {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      margin: 0 auto;
      text-align: center;
      animation: moveInLeft 3s ease-in-out;
    }
    &-image {
      width: 3rem;
      height: 3rem;
      border-radius: 10rem;
    }
  }

  &__name {
    padding: 1rem 0 2rem;
    font-size: 1.1rem;
    font-weight: bolder;
  }
}
.activeReview {
  width: 4rem;
  height: 4rem;
}
</style>
