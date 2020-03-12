<template>
  <v-app style="height: 100vh; overflow: hidden;">
    <Header />
    
    <v-content>
      <router-view />
    </v-content>

  </v-app>
</template>

<script>
import Header from './components/layout/Header';
import { mapActions } from 'vuex'
import { auth } from '@/db'

export default {
  name: 'App',

  components: {
    Header
  },
  created() {
    this.fetchGroceries()
    this.fetchEvents()
    if (auth.currentUser) {
      this.$store.commit('setAuthenticated', true)
      this.$store.commit('setUser', auth.currentUser.email)
    }
    console.log(auth.currentUser)
  },
  data: () => ({
  }),
  methods: {
    ...mapActions(['fetchGroceries', 'fetchEvents'])
  }
};
</script>
