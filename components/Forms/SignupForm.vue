<template>
  <div class="container u-align-left">
    <form v-if="$v" class="form u-margin-bottom-small" @submit.prevent="">
      <h2 class="form__head u-margin-bottom-small u-center-text">
        Create a free Curious Account
      </h2>

      <div>
        <div class="form__group">
          <label for="pass1" class="form__label">Password</label>
          <input
            id="pass1"
            v-model="userCredential.password"
            class="form__input"
            type="password"
            placeholder="Password"
            @blur="$v.userCredential.password.$touch()"
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
        </div>
      </div>

      <div>
        <div v-if="!$v.userCredential.password.$invalid" class="form__group">
          <label for="pass2" class="form__label">Retype password</label>
          <input
            id="pass2"
            v-model="userCredential.retypePassword"
            type="password"
            placeholder="Retype password"
            class="form__input"
            @blur="$v.userCredential.retypePassword.$touch()"
          />
          <template v-if="$v.userCredential.retypePassword.$error">
            <p v-if="!$v.userCredential.password.sameAs" class="errorMessage">
              password must match
            </p>
          </template>
        </div>
      </div>
      <div>
        <div class="animate-down">
          <div>
            <div col="12" class="u-margin-bottom-small">
              <label for="full-name" class="form__label"
                >Please Enter your full name</label
              >
              <input
                id="full-name"
                v-model="userCredential.fullName"
                type="text"
                placeholder="Please enter your Full name"
                class="form__input"
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
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="action-button u-margin-top-small">
          <div class="action-button-left">
            <button class="btn btn--icon" @click="prevFormLevel">
              <font-awesome-icon icon="angle-left" />
            </button>
          </div>
          <div class="action-button-right">
            <button
              v-if="formLevel !== 2"
              class="btn btn--primary"
              @click="nextFormLevel"
            >
              Next
              <font-awesome-icon icon="angle-right" />
            </button>
            <button
              v-else
              type="submit"
              class="btn btn--primary"
              @click="createUser"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
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
      if (!this.$v.userCredential.fullName.$invalid) {
        delete this.userCredential.retypePassword
        this.$axios
          .$post('/api/user', this.userCredential)
          .then((res) => {
            this.$store.dispatch('users/loginUser', res).then(() => {
              this.$router.push('/dashboard')
            })
          })
          .catch((err) => {
            this.$store.dispatch('notification/add', {
              type: 'error',
              message: `Error creating user.\n ${err}`,
            })
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

<style lang="scss" scoped>
.container {
  padding: 3rem 0;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
}

.action-button {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  justify-items: right;

  &-left {
    display: block;
  }

  &-right {
    display: block;
  }
}
.form__input {
  width: 100%;
}
</style>
