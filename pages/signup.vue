<template>
  <div class="signup-card">
    <div class="signup-main u-center-text">
      <div v-if="!showMainForm">
        <div class="signup-info card card--small">
          <div class="u-margin-bottom-small u-margin-top-small">
            <p class="signup-info--text">
              Want to see Verified Answers?<br />
              Get started with a free account!
            </p>
          </div>
          <div class="u-margin-bottom-small">
            <button
              class="signup-info--btn btn facebook-signup"
              @click="audioNotification('error')"
            >
              Register with facebook
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </button>
          </div>
          <div class="u-margin-bottom-small">
            <button
              class="signup-info--btn btn google-signup"
              @click="audioNotification('error')"
            >
              Register with Google
              <font-awesome-icon :icon="['fab', 'google']" />
            </button>
          </div>
          <hr />
          <div
            v-if="!emailRegistration"
            class="u-margin-bottom-small u-margin-top-small"
          >
            <button class="signup-info--btn btn" @click="showEmailField">
              Register with Email
            </button>
          </div>
          <div>
            <div v-if="emailRegistration" class="justify-center">
              <form class="form" @submit.prevent="openEmailRegistration">
                <div class="form__group">
                  <label for="email" class="email-label form__label"
                    >Email</label
                  >
                  <input
                    id="email"
                    v-model="user.email"
                    type="email"
                    class="form__input email-input"
                    placeholder="Email Address"
                    @blur="$v.user.email.$touch()"
                  />
                  <template v-if="$v.user.email.$error">
                    <p v-if="!$v.user.email.required" class="errorMessage">
                      Email is required
                    </p>
                    <p v-if="!$v.user.email.email" class="errorMessage">
                      Please Enter a valid email
                    </p>
                  </template>
                </div>
                <div class="form__group u-margin-bottom-small">
                  <div class="form__checkbox-group">
                    <input
                      id="terms"
                      v-model="user.checkbox"
                      type="checkbox"
                      class="form__checkbox-input"
                      value="user.checkbox.value"
                      @blur="$v.user.checkbox.$touch()"
                    />
                    <label class="form__checkbox-label" for="terms">
                      <span class="form__checkbox-checkmark" />
                      By checking this box, you agree to our
                      <nuxt-link to="/termsAndConditions">
                        terms of service
                      </nuxt-link>
                    </label>
                  </div>
                  <template v-if="$v.user.checkbox.$error">
                    <p v-if="!$v.user.checkbox.sameAs" class="errorMessage">
                      Please Agree to our terms of service
                    </p>
                  </template>
                </div>
                <button class="btn btn--primary u-margin-bottom-small">
                  Next <font-awesome-icon icon="angle-right" />
                </button>
              </form>
            </div>
          </div>
          <p class="u-margin-bottom-medium">
            Already have an account?
            <nuxt-link to="/login">Log in here</nuxt-link>
          </p>
        </div>
      </div>
      <div v-else>
        <div class="card card--small">
          <SignupForm :email="user.email" @closeMainForm="closeMainForm" />
        </div>
      </div>
    </div>
    <div class="additional-info u-margin-top-small">
      <Logo class="u-center-text" />
      <h2 class="text-uppercase">
        Join us and lets start sharing knowledge
      </h2>
      <p>
        By having a Curious account, you can join, vote, and comment on all your
        favorite Curious content.
      </p>
    </div>
  </div>
</template>

<script>
import { required, email, sameAs } from 'vuelidate/lib/validators'
// import requiresNoAuth from '../middleware/requiresNoAuth'
import Logo from '@/components/Logos/Logo'
import SignupForm from '@/components/Forms/SignupForm'

export default {
  auth: false,
  // middleware: 'requiresNoAuth',
  name: 'Signup',
  components: {
    Logo,
    SignupForm,
  },
  data() {
    return {
      emailRegistration: false,
      showMainForm: false,
      user: {
        email: '',
        checkbox: '',
      },
    }
  },
  head() {
    return {
      title: 'Signup',
    }
  },
  validations: {
    user: {
      checkbox: {
        sameAs: sameAs(() => true),
      },
      email: { required, email },
    },
  },
  methods: {
    audioNotification(type) {
      this.$store.dispatch('notification/add', {
        type,
        message: 'This feature is yet to be implemented',
      })
    },
    showEmailField() {
      this.emailRegistration = true
    },
    closeMainForm() {
      this.showMainForm = false
    },
    openEmailRegistration() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.$store.dispatch(
          'notification/add',
          {
            type: 'error',
            message: 'please fill the required fields first',
          },
          { root: true }
        )
      } else {
        this.showMainForm = true
      }
    },
  },
}
</script>

<style scoped lang="scss">
.signup {
  &-card {
    max-width: 820px;
    margin: auto;
    padding: 3rem 0.5rem;

    @include respond(tab-land) {
      display: flex;
      padding: 4rem 1.5rem 1.5rem;
    }
  }

  &-main {
    padding: 3rem 0.25rem;
    @include respond(tab-port) {
      padding: 3rem 1rem;
    }
  }

  &-info {
    &--btn {
      color: $color-white;
      width: 80%;
      border-radius: 10rem;
      padding: 0.5rem;
    }
  }
}
.additional-info {
  display: none;

  @include respond(tab-land) {
    display: block;
    width: 40%;
    max-width: 300px;
    margin-left: 2rem;
    padding-left: 2rem;
    border-left: 1px solid $color-grey-dark;
  }
}
.signup-info--button {
}
.facebook-signup {
  background-color: #3b5998;
}

.google-signup {
  background-color: #db4437;
  margin-bottom: 1rem;
}

.email {
  &-signup {
    background: $color-primary;
  }
  &-input {
    width: 70%;
    margin: auto;
    border-radius: 0.5rem;
  }
  &-label {
    font-size: 0.8rem;
  }
}
.checkbox-input {
  display: none;
}
</style>
