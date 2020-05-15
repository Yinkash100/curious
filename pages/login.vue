<template>
  <div class="container">
    <div class="login card card--small">
      <form v-if="$v" class="" @submit.prevent="loginUser">
        <div class="login-title u-center-text u-margin-bottom-small">
          <h2 class="">Login</h2>
        </div>
        <div>
          <div class="form__group">
            <label for="email" class="form__label">Email</label>
            <input
              id="email"
              v-model="loginDetails.email"
              type="text"
              class="form__input"
              placeholder="Email"
              @blur="$v.loginDetails.email.$touch()"
            />
            <template v-if="$v.loginDetails.email.$error" class="error">
              <p v-if="!$v.loginDetails.email.required" class="errorMessage">
                Email is required
              </p>
              <p v-if="!$v.loginDetails.email.email" class="errorMessage">
                Please Enter a valid email
              </p>
            </template>
          </div>
          <div class="form__group u-margin-bottom-medium">
            <label for="password" class="form__label">Password</label>
            <div class="append__btn">
              <input
                id="password"
                v-model="loginDetails.password"
                :type="showPassword ? 'text' : 'password'"
                class="form__input"
                placeholder="Password"
                value="&#xf06e;"
                @blur="$v.loginDetails.password.$touch()"
              />
              <font-awesome-icon
                v-if="showPassword"
                icon="eye"
                class="append__btn-icon"
                @click="toggleShowPassword"
              />
              <font-awesome-icon
                v-else
                icon="eye-slash"
                class="append__btn-icon"
                @click="toggleShowPassword"
              />
            </div>
            <template v-if="$v.loginDetails.password.$error" class="error">
              <p v-if="!$v.loginDetails.password.required" class="errorMessage">
                Please enter a password
              </p>
            </template>
          </div>
          <!--            <v-text-field-->
          <!--              :type="showPassword ? 'text' : 'password'"-->
          <!--              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"-->
          <!--              label="Password"-->
          <!--              prepend-icon="mdi-lock"-->
          <!--              @click:append="showPassword = !showPassword"-->
          <!--            />-->

          <!--          <template v-if="">-->
          <!--            <p>Username or password is incorrect.</p>-->
          <!--          </template>-->
          <div class="login-button u-margin-bottom-small">
            <button type="submit" class="btn btn--primary">
              Login
            </button>
          </div>
        </div>
        <hr />
        <p class="u-center-text">
          Don't have an account?
          <nuxt-link to="/signup">join now</nuxt-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  auth: false,
  name: 'Login',
  data() {
    return {
      showPassword: false,
      // error: this.$store.$state.,
      loginDetails: {
        email: '',
        password: '',
      },
    }
  },
  beforeCreate() {
    if (this.$cookies.get('user')) {
      this.$router.push({ name: 'dashboard' })
    }
  },
  validations: {
    loginDetails: {
      email: { required, email },
      password: { required },
    },
  },
  methods: {
    loginUser() {
      this.$v.$touch()
      if (this.$v.$anyError) {
        this.$store.dispatch('notification/add', {
          type: 'error',
          message: 'please fill all fields correctly and try again',
        })
      } else {
        // try {
        //   console.log('ya doing well')
        //   await this.$auth.loginWith('local', this.loginDetails).catch((e) => {
        //     console.log('failed logging in', e)
        //   })
        //   if (this.$auth.loggedIn) {
        //     this.$router.push({ name: 'dashboard' })
        //     console.log('login duccessfulick')
        //   }
        // } catch (err) {
        //   console.log('Incorrect username or password')
        //   console.log('Error', err)
        // }

        this.$store
          .dispatch('users/loginUser', this.loginDetails)
          .then(() => {
            console.log('cook', this.$cookies.get('user'))
            this.$router.push({ name: 'dashboard' })
          })
          .catch((err) => {
            this.error = err
          })
      }
    },
    toggleShowPassword() {
      this.showPassword = !this.showPassword
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  padding: 2rem 1rem;
}
.login {
  color: $color-black;
  margin: auto;

  &-title {
    text-transform: uppercase;
    color: $color-primary;
  }
}

.btn {
}

.login-button {
  margin-top: 2rem;
  text-align: right;
}
</style>
