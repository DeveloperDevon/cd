<template>
  <v-app-bar app color="primary" dark>
        <NavDrawer />
        <v-icon @click.stop="drawerVisible = !drawerVisible" x-large>mdi-dog </v-icon>
    <v-spacer></v-spacer>
    <v-btn text v-if="!loggedIn">
      <Login />
    </v-btn>
    <v-btn style="padding-right: 0px !important;" text @click="signOut()" v-if="loggedIn">
      <v-icon large>mdi-logout-variant</v-icon>
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