<template>
  <v-form @submit.prevent="login()" v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="email" label="Email" :rules="emailRules" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field v-model="password" label="Password" :rules="passwordRules" required></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-btn type="submit">Login</v-btn>
        </v-col>
      </v-row>
      <div class="error" v-if="error">{{error.message}}</div>
    </v-container>
  </v-form>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: '',
        valid: false,
        passwordRules: [
        v => !!v || 'Name is required',
        ],
        emailRules: [
        v => !!v || 'E-mail is required',
        ],
      }
    },
    methods: {
      login() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(() => this.$router.replace({name: 'dashboard'}))
        .catch(e => this.error = e)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>