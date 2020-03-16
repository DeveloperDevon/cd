<template>
  <v-app-bar app color="primary" dark>
        <NavDrawer />
        <v-img @click.stop="drawerVisible = !drawerVisible" alt="Vuetify Logo" class="shrink mr-2" contain src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png" transition="scale-transition" width="40" />
      <v-img alt="Vuetify Name" class="shrink mt-1 hidden-sm-and-down" contain min-width="100" src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png" width="100" />
    <v-spacer></v-spacer>
    <v-btn text v-if="!loggedIn">
      <Login />
    </v-btn>
    <v-btn style="padding-right: 0px !important;" text @click="signOut()" v-if="loggedIn">
      <v-icon>mdi-logout-variant</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
  import Login from '@/components/layout/Login'
  import NavDrawer from '@/components/layout/NavDrawer'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Header',
    components: {
      Login,
      NavDrawer
    },
    computed: {
      ...mapGetters(['loggedIn']),
      drawerVisible: {
        get() {return this.$store.getters.drawerVisible},
        set(v) {return this.$store.commit('setDrawer', v)}
      }
    },
     methods: {
       ...mapActions(['logout']),
       signOut() {
        this.logout().then(this.$router.replace({ name: 'unauthorized' }))
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>