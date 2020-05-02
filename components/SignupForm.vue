<template>
  <v-form height="550px" @submit.prevent="createUser">
    <h1 class="pa- ma-5">Create a free Curious Account</h1>
    <v-row class="mx-5">
      <v-col col="12" md="11" class="pa-0 ma-0 mx-auto">
        <v-text-field
          v-model="user.email"
          :append-icon="'mdi-pencil-outline'"
          :readonly="editEmail ? 'readonly' : false"
          class="pa-0 ma-0"
          type="email"
          label="Email Address"
          required
          dense
          outlined
          @blur="$v.user.email.$touch()"
          @click:append="editEmail = !editEmail"
        />
        <template v-if="$v.user.email.$error">
          <p v-if="!$v.user.email.required" class="errorMessage">
            Email is required
          </p>
          <p v-if="!$v.user.email.email" class="errorMessage">
            Please Enter a valid email
          </p>
        </template>
      </v-col>
    </v-row>
    <v-row class="mx-5">
      <v-col cols="12" md="5" class="mx-5 pa-0">
        <v-text-field
          v-model="user.firstName"
          type="text"
          label="First Name"
          outlined
          dense
          required
          @blur="$v.user.firstName.$touch()"
        />
        <template v-if="$v.user.firstName.$error">
          <p v-if="!$v.user.firstName.required" class="errorMessage">
            First name is required
          </p>
        </template>
      </v-col>
      <v-col col="12" md="5" class="pa-0 mr-5">
        <v-text-field
          v-model="user.lastName"
          type="text"
          label="Last Name"
          outlined
          dense
          required
          @blur="$v.user.lastName.$touch()"
        />
        <template v-if="$v.user.lastName.$error">
          <p v-if="!$v.user.lastName.required" class="errorMessage">
            Last name is required
          </p>
        </template>
      </v-col>
    </v-row>

    <v-row class="mx-5">
      <v-col col="12" md="5" class="mx-5 pa-0">
        <v-text-field
          v-model="user.password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          required
          outlined
          dense
          @blur="$v.user.password.$touch()"
          @click:append="showPassword = !showPassword"
        />
        <template v-if="$v.user.password.$error">
          <p v-if="!$v.user.password.required" class="errorMessage">
            Please enter a password
          </p>
        </template>
      </v-col>

      <v-col col="12" md="5" class="pa-0 mr-5">
        <v-text-field
          v-model="user.retypePassword"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          label="Retype Password"
          required
          outlined
          dense
          @blur="$v.user.retypePassword.$touch()"
          @click:append="showPassword = !showPassword"
        />
        <template v-if="$v.user.retypePassword.$error">
          <p v-if="!$v.user.retypePassword.required" class="errorMessage">
            Please enter a password
          </p>
          <p v-if="!$v.user.password.sameAs" class="errorMessage">
            password must match
          </p>
        </template>
      </v-col>
    </v-row>
    <v-row class="mx-5">
      <v-col cols="12" md="11">
        <v-btn width="100%" type="submit" class="accent">
          Submit
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators'
import curiousServices from '../services/curiousServices'

export default {
  props: {
    email: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      user: {
        id: uuidv4(),
        firstName: '',
        lastName: '',
        username: '',
        email: this.email,
        password: '',
        retypePassword: '',
      },
      showPassword: false,
      editEmail: false,
    }
  },
  validations: {
    user: {
      firstName: { required },
      lastName: { required },
      username: { required },
      email: { required, email },
      password: {
        required,
        minLength: minLength(8),
      },
      retypePassword: {
        required,
        sameAs: sameAs('password'),
      },
    },
  },
  methods: {
    createUser() {
      this.$v.$touch()
      if (this.$v.$anyError) {
        delete this.user.retypePassword
        this.user.password = curiousServices.hashPassword(this.user)
        this.user.this.$store
          .dispatch('users/createUser', this.user)
          .then(() => {
            this.$router.push('/')
          })
      } else {
        this.$store.notification.add({
          type: 'error',
          message: 'please fill all fields correctly and try again',
        })
      }
    },
  },
}
</script>

<style></style>
