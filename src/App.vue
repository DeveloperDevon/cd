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

export default {
  name: 'App',

  components: {
    Header
  },
  created() {
    this.fetchGroceries()
  },
  data: () => ({
  }),
  methods: {
    ...mapActions(['fetchGroceries'])
  }
};
</script>
