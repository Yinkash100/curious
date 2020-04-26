<template>
  <v-content class="signup">
    <v-row>
      <v-col :cols="8" :z-index="10" offset-md="2" top="10">
        <v-card class="signup-card mx-auto" raised>
          <v-row>
            <v-col v-if="!showMainForm" :cols="6">
              <v-card class="mx-4 my-auto" height="500px">
                <v-card-text>
                  <div class="signup-info">
                    <p>
                      Want to see Verified Answers?<br />
                      Get started with a free account!
                    </p>
                  </div>
                  <v-card-actions class="justify-center">
                    <v-btn
                      :dark="true"
                      class="ma-2 mx-auto"
                      width="80%"
                      rounded
                      color="#3B5998"
                    >
                      Register with facebook
                      <v-icon>mdi-facebook</v-icon>
                    </v-btn>
                  </v-card-actions>
                  <v-card-actions class="justify-center">
                    <v-btn
                      :dark="true"
                      class="ma-2 mx-auto"
                      width="80%"
                      rounded
                      color="#DB4437"
                    >
                      Register with Google
                      <v-icon>mdi-google-plus</v-icon>
                    </v-btn>
                  </v-card-actions>
                  <v-divider />
                  <v-card-actions
                    v-if="!emailRegistration"
                    class="justify-center"
                  >
                    <v-btn
                      @click="showEmailField"
                      class="ma-2 mx-auto"
                      width="80%"
                      rounded
                      color="primary"
                    >
                      Register with Email
                    </v-btn>
                  </v-card-actions>
                  <v-card-text v-if="emailRegistration" class="justify-center">
                    <v-form>
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
                      <v-checkbox
                        v-model="user.checkbox"
                        @blur="$v.user.checkbox.$touch()"
                        label="By checking this box, you agree to our terms of
                        service"
                        required
                      ></v-checkbox>
                      <template v-if="$v.user.checkbox.$error">
                        <p
                          v-if="!$v.user.checkbox.required"
                          class="errorMessage"
                        >
                          Please Agree to our
                          <nuxt-link to="/termsAndConditions">
                            terms of service
                          </nuxt-link>
                        </p>
                      </template>
                      <v-btn
                        @click="openEmailRegistration"
                        class="mr-4"
                        color="primary"
                      >
                        Next <v-icon>mdi-chevron-right</v-icon></v-btn
                      >
                    </v-form>
                  </v-card-text>
                  <p>
                    Already have an account?
                    <nuxt-link to="/login">Log in here</nuxt-link>
                  </p>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col v-else :cols="6">
              <SignupForm :email="user.email" />
            </v-col>
            <v-divider vertical />
            <v-col :cols="5" class="my-5 mx-4">
              <Logo class="text-xs-center" />
              <h2>
                Join us and lets start sharing knowledge
              </h2>
              <p>
                By having a Curious account, you can join, vote, and comment on
                all your favorite Curious content.
              </p>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-content>
</template>

<script>
import Logo from '@/components/Logo'
import SignupForm from '@/components/SignupForm'
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'Signup',
  components: {
    Logo,
    SignupForm
  },
  data() {
    return {
      emailRegistration: false,
      showMainForm: false,
      user: {
        email: '',
        checkbox: ''
      }
    }
  },
  validations: {
    user: {
      checkbox: { required },
      email: { required, email }
    }
  },
  methods: {
    showEmailField() {
      this.emailRegistration = true
    },
    openEmailRegistration() {
      this.$v.$touch()
      if (!this.$v$invalid) {
        this.showMainForm = true
      }
    }
  }
}
</script>

<style scoped>
.errorMessage {
  color: red;
}
/*.signup {*/
/*  position: relative;*/

/*  &-card {*/
/*    position: absolute;*/
/*    //z-index: -1;*/
/*    //bottom: initial;*/
/*    top: 50%;*/
/*    left: 50%;*/
/*    margin: auto;*/
/*    //transform: translate(-50%, -50%);*/
/*    text-align: center;*/
/*  }*/

/*  &-info {*/
/*    font-size: 0.5rem;*/
/*  }*/
/*}*/

/*.third-party-signup {*/
/*  color: white;*/
/*  margin: 2rem auto 1rem;*/
/*}*/
/*.curious-signup {*/
/*  margin: 2rem auto 1rem;*/
/*}*/
</style>
