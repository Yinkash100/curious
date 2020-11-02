<template>
  <div>
    <div id="status"></div>

    <div class="signup-card">
      <!-- <div class="cont">
        <p class="signup-info--text">
          Want to see Verified Answers?<br />
          Get started with a free account!
        </p>
      </div> -->
      <div class="signup-main u-center-text">
        <div>
          <div class="signup-info card card--small">
            <!-- <div class="u-margin-bottom-small u-margin-top-small"></div> -->
            <form
              v-if="$v"
              class="form u-margin-bottom-small"
              @submit.prevent=""
            >
              <div class="cont">
                <h2>Create a free Curious account</h2>
                <!-- <p class="signup-info--text">
                  Want to see Verified Answers?<br />
                  Get started with a free account!
                </p> -->
              </div>
              <div>
                <div class="form__group">
                  <label for="email" class="form__label">Email</label>
                  <input
                    id="email"
                    v-model="userCredential.email"
                    type="email"
                    class="form__input"
                    placeholder="Email Address"
                    @blur="$v.userCredential.email.$touch()"
                  />
                  <template v-if="$v.userCredential.email.$error">
                    <p
                      v-if="!$v.userCredential.email.required"
                      class="errorMessage"
                    >
                      Email is required
                    </p>
                    <p
                      v-if="!$v.userCredential.email.email"
                      class="errorMessage"
                    >
                      Please Enter a valid email
                    </p>
                  </template>
                </div>
              </div>
              <div>
                <div class="form__group">
                  <label for="pass1" class="form__label">Password</label>
                  <input
                    id="pass1"
                    v-model="userCredential.password"
                    class="form__input"
                    type="password"
                    placeholder="Password"
                    @blur="$v.userCredential.password.$touch()"
                  />
                  <template v-if="$v.userCredential.password.$error">
                    <p
                      v-if="!$v.userCredential.password.required"
                      class="errorMessage"
                    >
                      Please enter a password
                    </p>
                    <p
                      v-if="!$v.userCredential.password.minLength"
                      class="errorMessage"
                    >
                      Password must be at least eight (8) characters
                    </p>
                  </template>
                </div>
              </div>

              <div>
                <div
                  v-if="!$v.userCredential.password.$invalid"
                  class="form__group"
                >
                  <label for="pass2" class="form__label">Retype password</label>
                  <input
                    id="pass2"
                    v-model="userCredential.retypePassword"
                    type="password"
                    placeholder="Retype password"
                    class="form__input"
                    @blur="$v.userCredential.retypePassword.$touch()"
                  />
                  <template v-if="$v.userCredential.retypePassword.$error">
                    <p
                      v-if="!$v.userCredential.password.sameAs"
                      class="errorMessage"
                    >
                      password must match
                    </p>
                  </template>
                </div>
              </div>
              <div
                v-if="!$v.userCredential.password.$invalid"
                class="form__group u-margin-top-small u-margin-bottom-small"
              >
                <div class="form__checkbox-group">
                  <input
                    id="terms"
                    v-model="userCredential.checkbox"
                    type="checkbox"
                    class="form__checkbox-input"
                    value="userCredential.checkbox.value"
                    @blur="$v.userCredential.checkbox.$touch()"
                  />
                  <label class="form__checkbox-label" for="terms">
                    <span class="form__checkbox-checkmark" />
                    By checking this box, you agree to our
                    <nuxt-link to="/termsAndConditions">
                      terms of service
                    </nuxt-link>
                  </label>
                </div>

                <template v-if="$v.userCredential.checkbox.$error">
                  <p
                    v-if="!$v.userCredential.checkbox.sameAs"
                    class="errorMessage"
                  >
                    Please Agree to our terms of service
                  </p>
                </template>
              </div>
              <div>
                <div class="action-button u-margin-top-small">
                  <div class="action-button-right">
                    <button
                      type="submit"
                      class="btn btn--primary"
                      @click="createUser"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
            <hr class="u-margin-top-small u-margin-bottom-medium" />
            <div class=""><p>or signup with</p></div>
            <div class="social">
              <div class="social-signup u-margin-bottom-small">
                <client-only>
                  <VFBLoginScope
                    app-id="245555593435656"
                    :use-alt-logo="true"
                    :login-options="FBLoginScope"
                    @sdk-init="handleSdkInit"
                    @click="signInWithFacebook"
                  >
                    <slot login="facebook" name="login">Facebook</slot>
                  </VFBLoginScope>
                </client-only>
              </div>
              <div class="social-signup">
                <div class="u-margin-bottom-small">
                  <div id="google-signin-button"></div>
                </div>
              </div>
            </div>

            <p class="u-margin-bottom-small">
              Already have an account?
              <nuxt-link to="/login">Log in here</nuxt-link>
            </p>
          </div>
        </div>
      </div>
      <!-- Start of signup info section -->
      <div class="additional-info u-margin-top-small">
        <Logo class="u-center-text" />
        <h2 class="text-uppercase">Join us and lets start sharing knowledge</h2>
        <p>
          By having a Curious account, you can join, vote, and comment on all
          your favorite Curious content.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators'
// import VFacebookLogin from 'vue-facebook-login-component'
import Logo from '@/components/Logos/Logo'

export default {
  name: 'Signup',
  components: {
    Logo,
    VFBLoginScope: () => {
      if (process.client) {
        return import('vue-facebook-login-component')
      }
    },
  },
  data() {
    return {
      userCredential: {
        email: '',
        password: '',
        retypePassword: '',
        checkbox: '',
      },
      showPassword: false,
      showPassword2: false,
      codeParameter: '',
      FBLoginScope: {
        scope: 'email',
      },
      FB: {},
      model: {},
      scope: {},
    }
  },
  mounted() {
    // eslint-disable-next-line no-undef
    gapi.signin2.render('google-signin-button', {
      onsuccess: this.onSignIn,
    })
  },
  methods: {
    onSignIn(googleUser) {
      const token = googleUser.getAuthResponse(true).access_token
      console.log('Token ==> ', token)
      this.$axios
        .$post('/api/user/authWithGoogle', { token })
        .then((res) => {
          this.$store.dispatch('users/loginUser', res).then(() => {
            this.$router.push('/dashboard')
          })
        })
        .catch((err) => {
          this.$store.dispatch('notification/add', {
            type: 'error',
            message: `Error signing in.\n ${err}`,
          })
        })
      // const profile = googleUser.getBasicProfile()

      // console.log('ID: ' + profile.getId()) // Do not send to your backend! Use an ID token instead.
      // console.log('Name: ' + profile.getName())
      // console.log('Image URL: ' + profile.getImageUrl())
      // console.log('Email: ' + profile.getEmail()) // This is null if the 'email' scope is not present.
    },

    handleSdkInit({ FB, scope }) {
      this.FB = FB
      this.scope = scope
      console.log('FACEBOOK SCOPE ==> ', scope)
    },
    signInWithFacebook() {
      this.FB.getLoginStatus()
      this.FB.login((response) => {
        const token = response.authResponse.accessToken
        console.log('About to sent token to api', token)
        this.$axios
          .$post('/api/user/authWithFacebook', {
            token: response.authResponse.accessToken,
            userID: response.authResponse.userID,
          })
          .then((res) => {
            this.$store.dispatch('users/loginUser', res).then(() => {
              this.$router.push('/dashboard')
            })
          })
          .catch((err) => {
            this.$store.dispatch('notification/add', {
              type: 'error',
              message: `Error signing in.\n ${err}`,
            })
          })
      })
    },
    createUser() {
      if (!this.$v.userCredential.$invalid) {
        delete this.userCredential.retypePassword
        this.$axios
          .$post('/api/user', this.userCredential)
          .then((res) => {
            this.$store.dispatch('users/loginUser', res).then(() => {
              this.$router.push('/dashboard')
            })
          })
          .catch((err) => {
            console.log('Error : ', err)
            this.$store.dispatch('notification/add', {
              type: 'error',
              message: `Error creating user.\n ${err}`,
            })
          })
      } else {
        this.$v.userCredential.$touch()
        this.$store.dispatch('notification/add', {
          type: 'error',
          message: 'please fill all fields correctly and try again',
        })
      }
    },
  },
  head() {
    return {
      title: 'Signup',
    }
  },
  validations: {
    userCredential: {
      email: { required, email },
      password: {
        required,
        minLength: minLength(8),
      },
      retypePassword: {
        required,
        sameAs: sameAs('password'),
      },
      checkbox: {
        sameAs: sameAs(() => true),
      },
    },
  },
}
</script>
<style scoped lang="scss">
.cont {
  display: block;
  position: relative;
}
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
.form {
  &__label {
    text-align: left;
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
}
.checkbox-input {
  display: none;
}
.action-button {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  // justify-items: flex-end;

  &-left {
    display: block;
  }

  &-right {
    display: block;
  }
}
.social {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  &-signup {
    width: 45%;
  }
}
</style>
