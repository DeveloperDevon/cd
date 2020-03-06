<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-card
      height="400"
      class="overflow-hidden"
    >
      <v-navigation-drawer v-model="navDrawerState" color="primary" app style="z-index: 1;">
        <v-list dense nav class="py-0">
          <v-list-item two-line>
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/men/81.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Application</v-list-item-title>
              <v-list-item-subtitle>Subtext</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item link @click="routeTo('dashboard')">
            <v-list-item-icon>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
        <v-img @click="showNavDrawer()" alt="Vuetify Logo" class="shrink mr-2" contain src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" />
      <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100" src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100" />
    </div>
    <v-spacer></v-spacer>
    <v-btn text v-if="!isAuthenticated">
      <Login v-on:loggedIn="loggedIn" />
    </v-btn>
    <v-btn style="padding-right: 0px !important;" text @click="signOut" v-if="isAuthenticated">
      Logout <v-icon>mdi-logout-variant</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
  import Login from '@/components/layout/Login'
  import * as firebase from 'firebase'
  import 'firebase/auth'
  import store from '@/store'

  export default {
    name: 'Header',
    data: () => ({
      isAuthenticated: firebase.auth().currentUser,
      navDrawerState: false
    }),
    components: {
      Login,
    },
     methods: {
       routeTo(route) {
         if (this.$router.currentRoute.name != route ) this.$router.replace({ name: 'dashboard' })
         this.navDrawerState = false
       },
       showNavDrawer() {
         this.navDrawerState = true
       },
       loggedIn(e) {
         this.isAuthenticated = e
       },
      async signOut() {
        firebase.auth().signOut()
        .then(a => {
          this.isAuthenticated = !!a
          store.commit('auth/setUser', null)
          this.$router.replace({ name: 'unauthorized' })
          })
        .catch(e => console.error(e))
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>