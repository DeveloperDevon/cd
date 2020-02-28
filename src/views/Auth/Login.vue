<template>
  <div>
    <form @submit.prevent="pressed">
      Login
      <div class="login">
        <input type="email" v-model="email" placeholder="login">
      </div>
      <div>
        <input type="password" v-model="password" placeholder="password">
      </div>
      <button type="submit">Login</button>
    </form>
    <div class="error" v-if="error">{{error.message}}</div>
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: ''
      }
    },
    methods: {
      pressed() {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(a => console.log(a))
        .catch(e => console.error(e))
        this.$router.replace({name: 'Home'})
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>