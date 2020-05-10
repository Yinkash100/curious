<template>
  <v-content class="signup">
    <v-card class="signup-card mx-auto" raised>
      <v-row>
        <v-col :cols="6" class="signup-info">
          <div v-if="!showMainForm">
            <v-card class="mx-4 my-auto">
              <v-card-text>
                <div class="signup-info">
                  <p class="font-weight-black text-center">
                    Want to see Verified Answers?<br />
                    Get started with a free account!
                  </p>
                </div>
                <v-card-actions class="justify-center">
                  <v-btn :dark="true" width="80%" rounded color="#3B5998">
                    Register with facebook
                    <v-icon>mdi-facebook</v-icon>
                  </v-btn>
                </v-card-actions>
                <v-card-actions class="justify-center">
                  <v-btn :dark="true" width="80%" rounded color="#DB4437">
                    Register with Google
                    <v-icon>mdi-google-plus</v-icon>
                  </v-btn>
                </v-card-actions>
                <v-divider class="ma-2" />
                <v-card-actions
                  v-if="!emailRegistration"
                  class="justify-center"
                >
                  <v-btn
                    width="80%"
                    rounded
                    color="primary"
                    @click="showEmailField"
                  >
                    Register with Email
                  </v-btn>
                </v-card-actions>
                <v-expand-transition>
                  <v-card-text v-if="emailRegistration" class="justify-center">
                    <v-form @submit.prevent="openEmailRegistration">
                      <v-text-field
                        v-model="user.email"
                        label="Email Address"
                        class="ma-0 pa-0"
                        loader-height="1"
                        required
                        outlined
                        dense
                        @blur="$v.user.email.$touch()"
                      >
                        <v-icon primary>mdi-email</v-icon>
                      </v-text-field>
                      <template v-if="$v.user.email.$error">
                        <p v-if="!$v.user.email.required" class="errorMessage">
                          Email is required
                        </p>
                        <p v-if="!$v.user.email.email" class="errorMessage">
                          Please Enter a valid email
                        </p>
                      </template>
                      <v-checkbox
                        v-model="user.checkbox"
                        :value="user.checkbox.value"
                        label="By checking this box, you agree to our terms of
                            service"
                        @blur="$v.user.checkbox.$touch()"
                      ></v-checkbox>
                      <template v-if="$v.user.checkbox.$error">
                        <p v-if="!$v.user.checkbox.sameAs" class="errorMessage">
                          Please Agree to our
                          <nuxt-link to="/termsAndConditions">
                            terms of service
                          </nuxt-link>
                        </p>
                      </template>
                      <v-btn class="mr-4" type="submit" color="primary">
                        Next <v-icon>mdi-chevron-right</v-icon>
                      </v-btn>
                    </v-form>
                  </v-card-text>
                </v-expand-transition>
                <p>
                  Already have an account?
                  <nuxt-link to="/login">Log in here</nuxt-link>
                </p>
              </v-card-text>
            </v-card>
          </div>
          <div v-else>
            <v-card class="mx-4">
              <SignupForm :email="user.email" @closeMainForm="closeMainForm" />
            </v-card>
          </div>
        </v-col>
        <v-divider vertical />
        <v-col :cols="5" class="my-5 mx-4 d-none d-md-flex">
          <div>
            <Logo class="text-xs-center" />
            <h2 class="text-uppercase mb-2">
              Join us and lets start sharing knowledge
            </h2>
            <p>
              By having a Curious account, you can join, vote, and comment on
              all your favorite Curious content.
            </p>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </v-content>
</template>

<script>
import { required, email, sameAs } from 'vuelidate/lib/validators'
import Logo from '@/components/Logo'
import SignupForm from '@/components/SignupForm'

export default {
  name: 'Signup',
  auth: false,
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
  validations: {
    user: {
      checkbox: {
        sameAs: sameAs(() => true),
      },
      email: { required, email },
    },
  },
  created() {},
  methods: {
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

<style scoped>
.signup-card {
  max-width: 820px;
  margin: auto;
}

.signup-info {
  max-width: 410px;
  min-width: 360px;
  margin: auto;
}
</style>
