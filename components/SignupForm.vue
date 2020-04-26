<template>
  <v-form @submit.prevent="createUser">
    <v-text-field
      v-model="user.firstName"
      @blur="$v.user.firstName.$touch()"
      type="text"
      label="First Name"
      required
    />
    <template v-if="$v.user.firstName.$error">
      <p v-if="!$v.user.firstName.required" class="errorMessage">
        First name is required
      </p>
    </template>

    <v-text-field
      v-model="user.lastName"
      @blur="$v.user.lastName.$touch()"
      type="text"
      label="Last Name"
      required
    />
    <template v-if="$v.user.lastName.$error">
      <p v-if="!$v.user.lastName.required" class="errorMessage">
        Last name is required
      </p>
    </template>

    <v-text-field
      v-model="user.username"
      @blur="$v.user.username.$touch()"
      type="text"
      label="Username"
      required
    />
    <template v-if="$v.user.username.$error">
      <p v-if="!$v.user.username.required" class="errorMessage">
        Username is required
      </p>
    </template>

    <v-text-field
      v-model="user.email"
      @blur="$v.user.email.$touch()"
      type="email"
      label="Email Address"
      required
      prepend-icon="mdi-at"
    />
    <template v-if="$v.user.email.$error">
      <p v-if="!$v.user.email.required" class="errorMessage">
        Email is required
      </p>
      <p v-if="!$v.user.email.email" class="errorMessage">
        Please Enter a valid email
      </p>
    </template>

    <v-text-field
      v-model="user.password"
      @blur="$v.user.password.$touch()"
      type="text"
      label="Password"
      required
    />
    <template v-if="$v.user.password.$error">
      <p v-if="!$v.user.password.required" class="errorMessage">
        Please enter a password
      </p>
    </template>

    <v-text-field
      v-model="user.retypePassword"
      @blur="$v.user.retypePassword.$touch()"
      type="text"
      label="Last Name"
      required
    />
    <template v-if="$v.user.retypePassword.$error">
      <p v-if="!$v.user.retypePassword.required" class="errorMessage">
        Please enter a password
      </p>
    </template>

    <v-text-field type="submit">
      Submit
    </v-text-field>
  </v-form>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  props: {
    email: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        username: '',
        email: this.email,
        password: '',
        retypePassword: ''
      }
    }
  },
  validations: {
    user: {
      firstName: { required },
      lastName: { required },
      username: { required },
      email: { required, email },
      password: { required },
      retypePassword: { required }
    }
  },
  methods: {
    createUser() {
      console.log('new user: ', this.user)
    }
  }
}
</script>

<style></style>
