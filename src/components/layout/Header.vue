<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <router-link to="/">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" />
      </router-link>
      <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100" src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100" />
    </div>
    <v-spacer></v-spacer>
    <v-btn text v-if="!isAuthenticated">
      <Login v-on:loggedIn="loggedIn" />
    </v-btn>
    <v-btn text @click="signOut" v-if="isAuthenticated">
      Logout <v-icon>mdi-logout-variant</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
  import Login from '@/components/layout/Login'
  import * as firebase from 'firebase'
  import 'firebase/auth'

  export default {
    name: 'Header',
    data: () => ({
      isAuthenticated: firebase.auth().currentUser
    }),
    components: {
      Login
    },
     methods: {
       loggedIn(e) {
         this.isAuthenticated = e
       },
      async signOut() {
        firebase.auth().signOut()
        .then(a => {
          this.isAuthenticated = !!a
          this.$router.replace({ name: 'unauthorized' })
          })
        .catch(e => console.error(e))
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>