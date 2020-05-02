<template>
  <v-content>
    <v-card width="400" class="mx-auto">
      <v-form>
        <v-card-title class="pb-0">
          <h2 class="display-1 mx-auto text-uppercase">Login</h2>
        </v-card-title>
        <div class="ma-3 mb-5">
          <v-card-text>
            <v-text-field label="Username" prepend-icon="mdi-account-circle" />
            <v-text-field
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              label="Password"
              prepend-icon="mdi-lock"
              @click:append="showPassword = !showPassword"
            />
          </v-card-text>
        </div>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="accent">Register</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="success">Login</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-content>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      showPassword: false,
    }
  },
}
</script>

<style scoped></style>
