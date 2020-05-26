<template>
  <div class="container">
    <div class="login card card--small">
      <form v-if="$v" class="form" @submit.prevent="loginUser">
        <div class="login-title u-center-text">
          <h2 class="">Login</h2>
        </div>
        <div class="form__items">
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
          <div class="form__group u-margin-bottom-small">
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
          <div class="login-button">
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
// import requiresNoAuth from '../middleware/requiresNoAuth'

export default {
  auth: false,
  // middleware: 'requiresNoAuth',
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
  methods: {
    loginUser() {
      this.$v.$touch()
      if (this.$v.$anyError) {
        this.$store.dispatch('notification/add', {
          type: 'error',
          message: 'please fill all fields correctly and try again',
        })
      } else {
        this.$store
          .dispatch('users/loginUser', this.loginDetails)
          .then(() => {
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
  head() {
    return {
      title: 'Login',
    }
  },
  validations: {
    loginDetails: {
      email: { required, email },
      password: { required },
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 6rem 0 0.75rem 0;
  @include respond(tab-port) {
    padding: 6rem 0 3rem;
  }
}
.login {
  color: $color-black;
  margin: auto;

  &-title {
    text-transform: uppercase;
    color: $color-primary;
  }
}
.card--small {
  width: 17rem;
  margin: auto;
}
.btn {
}

.login-button {
  margin-top: 2rem;
  text-align: right;
}
.form {
  margin: auto;
  &__items {
    margin: 3rem auto;
  }
}
.form__label {
  font-size: 0.8rem;
}
</style>
