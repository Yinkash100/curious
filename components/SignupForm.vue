<template>
  <v-form v-if="$v" @submit.prevent="" transition="slide-x-transition">
    <h2 class="pt-10 ma-5">Create a free Curious Account</h2>
    <div v-if="formLevel === 1">
      <v-row>
        <v-col col="12" class="mx-8 pa-0">
          <v-text-field
            v-model="userCredential.username"
            type="text"
            label="username"
            outlined
            dense
            required
            @blur="$v.userCredential.username.$touch()"
          />
          <template v-if="$v.userCredential.username.$error">
            <p v-if="!$v.userCredential.username.required" class="errorMessage">
              Please chose a username
            </p>
          </template>
        </v-col>
      </v-row>
      <v-row>
        <v-col col="12" class="mx-8 pa-0">
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
            <p
              v-if="!$v.userCredential.password.minLength"
              class="errorMessage"
            >
              Password must be at least eight (8) characters
            </p>
          </template>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          v-if="!$v.userCredential.password.$invalid"
          col="12"
          class="mx-8 pa-0"
        >
          <v-text-field
            v-model="userCredential.retypePassword"
            :append-icon="showPassword2 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword2 ? 'text' : 'password'"
            label="Retype Password"
            transition="scale-transition"
            required
            outlined
            dense
            @blur="$v.userCredential.retypePassword.$touch()"
            @click:append="showPassword2 = !showPassword2"
          />
          <template v-if="$v.userCredential.retypePassword.$error">
            <p v-if="!$v.userCredential.password.sameAs" class="errorMessage">
              password must match
            </p>
          </template>
        </v-col>
      </v-row>
    </div>
    <div v-else>
      <v-expand-transition>
        <v-row>
          <v-col col="12" class="mx-8 pa-0">
            <p>Please Enter your full name</p>
            <v-text-field
              v-model="userCredential.fullName"
              type="text"
              label="Please enter your Full name"
              outlined
              dense
              required
              @blur="$v.userCredential.fullName.$touch()"
            />
            <template v-if="$v.userCredential.fullName.$error">
              <p
                v-if="!$v.userCredential.fullName.required"
                class="errorMessage"
              >
                Please enter your full name
              </p>
            </template>
          </v-col>
        </v-row>
      </v-expand-transition>
    </div>
    <v-row>
      <v-col class="mx-4 my-2">
        <v-btn color="primary" small bottom left fab @click="prevFormLevel">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn
          v-if="formLevel !== 2"
          class="float-right"
          color="primary"
          @click="nextFormLevel"
        >
          Next <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn
          v-else
          type="submit"
          class="accent float-right"
          rounded
          @click="createUser"
        >
          Submit
        </v-btn>
      </v-col>
    </v-row>
    <!--    <v-row class="mx-5">-->
    <!--      <v-col cols="12" md="11">-->
    <!--        <v-btn width="100%" type="submit" class="accent">-->
    <!--          Submit-->
    <!--        </v-btn>-->
    <!--      </v-col>-->
    <!--    </v-row>-->
  </v-form>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators'
export default {
  auth: false,
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
        fullName: '',
        username: '',
        email: this.email,
        password: '',
        retypePassword: '',
      },
      showPassword: false,
      showPassword2: false,
      formLevel: 1,
    }
  },
  validations: {
    userCredential: {
      fullName: { required },
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
    nextFormLevel() {
      if (
        !this.$v.userCredential.username.$invalid &&
        !this.$v.userCredential.password.$invalid &&
        !this.$v.userCredential.retypePassword.$invalid
      ) {
        if (this.formLevel <= 1) {
          this.formLevel += 1
        }
      } else {
        this.$v.userCredential.username.$touch()
        this.$v.userCredential.password.$touch()
        this.$v.userCredential.retypePassword.$touch()
        this.$store.dispatch('notification/add', {
          type: 'error',
          message: 'please fill all required fields',
        })
      }
    },
    prevFormLevel() {
      if (this.formLevel > 1) {
        this.formLevel -= 1
      } else {
        this.$emit('closeMainForm')
      }
    },
    createUser() {
      console.log('payload', this.userCredential)
      if (!this.$v.userCredential.fullName.$invalid) {
        delete this.userCredential.retypePassword

        // this.userCredential.password = curiousServices.hashPassword(this.userCredential)
        this.$store
          .dispatch('users/createUser', this.userCredential)
          .then(() => {
            setTimeout(() => {
              this.$router.push('/dashboard')
            }, 2000)
          })
      } else {
        this.$v.userCredential.fullName.$touch()
        this.$store.dispatch('notification/add', {
          type: 'error',
          message: 'please fill all fields correctly and try again',
        })
      }
    },
  },
}
</script>

<style></style>
