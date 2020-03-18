<template>
  <v-app style="height: 100%; overflow: hidden;">
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
  data: () => ({
    info: null
  }),

  components: {
    Header
  },
  created() {
    this.fetchGroceries()
    this.fetchEvents()
    this.fetchRecipes()
    if (auth.currentUser) {
      this.$store.commit('setAuthenticated', true)
      this.$store.commit('setUser', auth.currentUser.email)
    }
    // this.$axios.get("https://api.edamam.com/search?q=wonton&app_id=039fd303&app_key=ad7de515f1509c75adb5e808af2b8dc3&from=0&to=3&calories=591-722&health=alcohol-free")
    // .then(a => console.log(a))
  },
  methods: {
    ...mapActions(['fetchGroceries', 'fetchEvents', 'fetchRecipes'])
  }
};
</script>
