<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <router-link to="/">
        <v-img alt="Vuetify Logo" class="shrink mr-2" contain src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" />
      </router-link>
      <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100" src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100" />
    </div>
    <v-spacer></v-spacer>
    <v-btn text >
      <span class="mr-2">LogOut</span>
      <v-icon>mdi-login-variant</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
  export default {
    //  methods: {
    //   async signOut() {
    //     firebase.auth().signOut()
    //     .then(a => {
    //       console.log(a)
    //       this.$router.replace({ name: 'Login' })
    //       })
    //     .catch(e => console.error(e))
    //   }
    // }
  }
</script>

<style lang="scss" scoped>

</style>