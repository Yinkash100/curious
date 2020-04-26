<template>
  <v-content>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title class="pb-0">
        <h1 class="display-1 mx-auto">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field label="Username" prepend-icon="mdi-account-circle" />
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
            label="Password"
            prepend-icon="mdi-lock"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="accent">Register</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="success">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-content>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      showPassword: false
    }
  }
}
</script>

<style scoped></style>
