<template>
  <v-form height="550px" @submit.prevent="createUser">
    <h1 class="pa- ma-5">Create a free Curious Account</h1>
    <v-row class="mx-5">
      <v-col col="12" md="11" class="pa-0 ma-0 mx-auto">
        <v-text-field
          v-model="userCredential.email"
          class="pa-0 ma-0"
          type="email"
          label="Email Address"
          required
          dense
          outlined
          @blur="$v.userCredential.email.$touch()"
          @click:append="editEmail = !editEmail"
        />
        <template v-if="$v.userCredential.email.$error">
          <p v-if="!$v.userCredential.email.required" class="errorMessage">
            Email is required
          </p>
          <p v-if="!$v.userCredential.email.email" class="errorMessage">
            Please Enter a valid email
          </p>
        </template>
      </v-col>
    </v-row>
    <v-row class="mx-5">
      <v-col cols="12" md="5" class="mx-5 pa-0">
        <v-text-field
          v-model="userCredential.firstName"
          type="text"
          label="First Name"
          outlined
          dense
          required
          @blur="$v.userCredential.firstName.$touch()"
        />
        <template v-if="$v.userCredential.firstName.$error">
          <p v-if="!$v.userCredential.firstName.required" class="errorMessage">
            First name is required
          </p>
        </template>
      </v-col>
      <v-col col="12" md="5" class="pa-0 mr-5">
        <v-text-field
          v-model="userCredential.lastName"
          type="text"
          label="Last Name"
          outlined
          dense
          required
          @blur="$v.userCredential.lastName.$touch()"
        />
        <template v-if="$v.userCredential.lastName.$error">
          <p v-if="!$v.userCredential.lastName.required" class="errorMessage">
            Last name is required
          </p>
        </template>
      </v-col>
    </v-row>

    <v-row class="mx-5">
      <v-col col="12" md="5" class="mx-5 pa-0">
        <v-text-field
          v-model="userCredential.password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          required
          outlined
          dense
          @blur="$v.userCredential.password.$touch()"
          @click:append="showPassword = !showPassword"
        />
        <template v-if="$v.userCredential.password.$error">
          <p v-if="!$v.userCredential.password.required" class="errorMessage">
            Please enter a password
          </p>
          <p v-if="!$v.userCredential.password.minLength" class="errorMessage">
            Password must be at least eight (8) characters
          </p>
        </template>
      </v-col>

      <v-col col="12" md="5" class="pa-0 mr-5">
        <v-text-field
          v-model="userCredential.retypePassword"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          label="Retype Password"
          required
          outlined
          dense
          @blur="$v.userCredential.retypePassword.$touch()"
          @click:append="showPassword = !showPassword"
        />
        <template v-if="$v.userCredential.retypePassword.$error">
          <p v-if="!$v.userCredential.password.sameAs" class="errorMessage">
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
export default {
  props: {
    email: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      userCredential: {
        id: uuidv4(),
        firstName: '',
        lastName: '',
        email: this.email,
        password: '',
        retypePassword: '',
      },
      showPassword: false,
    }
  },
  validations: {
    userCredential: {
      firstName: { required },
      lastName: { required },
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
        this.$store.dispatch('notification/add', {
          type: 'error',
          message: 'please fill all fields correctly and try again',
        })
      } else {
        delete this.userCredential.retypePassword
        // this.userCredential.password = curiousServices.hashPassword(this.userCredential)
        this.$store
          .dispatch('users/createUser', this.userCredential)
          .then(() => {
            this.$router.push('/dashboard')
          })
      }
    },
  },
}
</script>

<style></style>
