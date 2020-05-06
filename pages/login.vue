<template>
  <v-content class="mt-10">
    <v-card width="400" height="auto" class="mx-auto">
      <v-form @submit.prevent="loginUser">
        <v-card-title class="pb-0">
          <h2 class="display-1 mx-auto text-uppercase">Login</h2>
        </v-card-title>
        <div class="ma-3">
          <v-card-text>
            <v-text-field
              v-model="loginCredential.email"
              label="Email"
              prepend-icon="mdi-account-circle"
              @blur="$v.loginCredential.email.$touch()"
            />
            <template v-if="$v.loginCredential.email.$error">
              <p v-if="!$v.loginCredential.email.required" class="errorMessage">
                Email is required
              </p>
              <p v-if="!$v.loginCredential.email.email" class="errorMessage">
                Please Enter a valid email
              </p>
            </template>
            <v-text-field
              v-model="loginCredential.password"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              label="Password"
              prepend-icon="mdi-lock"
              @blur="$v.loginCredential.password.$touch()"
              @click:append="showPassword = !showPassword"
            />
          </v-card-text>
          <template v-if="$v.loginCredential.password.$error">
            <p
              v-if="!$v.loginCredential.password.required"
              class="errorMessage"
            >
              Please enter a password
            </p>
          </template>
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
  meta: { requiresAuth: false },
  data() {
    return {
      loginCredential: {
        email: '',
        password: '',
      },
      showPassword: false,
      error: '',
    }
  },
  validations: {
    loginCredential: {
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
          .dispatch('users/loginUser', this.loginCredential)
          .then(() => {
            this.$router.push({ name: 'dashboard' })
          })
          .catch((err) => {
            this.error = err
            console.log('error', this.error)
          })
      }
    },
  },
}
</script>

<style scoped></style>
