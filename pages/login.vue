<template>
  <v-content class="mt-10">
    <v-card height="auto" class="login-card mx-auto">
      <v-form v-if="$v" @submit.prevent="loginUser">
        <v-card-title class="pb-0">
          <h2 class="display-1 mx-auto text-uppercase">Login</h2>
        </v-card-title>
        <div class="ma-3">
          <v-card-text>
            <v-text-field
              v-model="loginDetails.email"
              label="Email"
              prepend-icon="mdi-account-circle"
            />
            <template v-if="$v.loginDetails.email.$error">
              <p v-if="!$v.loginDetails.email.required" class="errorMessage">
                Email is required
              </p>
              <p v-if="!$v.loginDetails.email.email" class="errorMessage">
                Please Enter a valid email
              </p>
            </template>
            <v-text-field
              v-model="loginDetails.password"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              label="Password"
              prepend-icon="mdi-lock"
              @click:append="showPassword = !showPassword"
            />
          </v-card-text>
          <template v-if="$v.loginDetails.password.$error">
            <p v-if="!$v.loginDetails.password.required" class="errorMessage">
              Please enter a password
            </p>
          </template>
          <!--          <template v-if="">-->
          <!--            <p>Username or password is incorrect.</p>-->
          <!--          </template>-->
          <v-btn type="submit" color="success" class="ml-10 mt-0 mb-3"
            >Login</v-btn
          >
        </div>
        <v-divider />
        <p class="my-5 mx-auto u-center-text">
          Don't have an account?
          <nuxt-link to="/signup">join now</nuxt-link>
        </p>
      </v-form>
    </v-card>
  </v-content>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'Login',
  auth: false,

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
        this.$store
          .dispatch('users/loginUser', this.loginDetails)
          .then(() => {
            this.$router.push({ name: 'dashboard' })
          })
          .catch((err) => {
            this.error = err
            console.log('er', this.error)
          })
      }
    },
  },
}
</script>

<style scoped>
.login-card {
  max-width: 400px;
  min-width: 360px;
}
</style>
