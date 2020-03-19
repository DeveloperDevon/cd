<template class="dashboard">
  <div class="pl-4 mt-4">
    <v-row>
      <v-col cols="4">
        <router-link style="text-decoration: none" to="/groceries">
          <v-icon color="primary" style="font-size: 9rem">mdi-cart</v-icon>
        </router-link>
      </v-col>
      <v-col cols="8" class="pl-7 pt-5">
        <h4>Recently Added Groceries</h4>
        <ol style="padding-left: 0px" color="primary">
          <li v-for="grocery in groceries.slice(0, 4)" :key="grocery.id"> {{grocery.item_name}}</li>
        </ol>
      </v-col>
    </v-row>

    <v-row class=mt-7>
      <v-col cols="4">
        <router-link style="text-decoration: none" to="/calendar">
          <v-icon color="primary" style="font-size: 9rem">mdi-calendar-month</v-icon>
        </router-link>
      </v-col>
      <v-col cols="8" class="pl-7 pt-3">
        <h4>Upcoming Events</h4>
        <ul style="padding-left: 0px" color="primary">
          <li v-for="event in events.slice(0, 4)" :key="event.id">{{event.start.slice(5)}} - {{event.end.slice(5)}}: {{event.name}}</li>
        </ul>
      </v-col>
    </v-row>  

    <v-row>
      <v-col cols="4">
        <router-link style="text-decoration: none" to="/recipes/list">
          <v-icon color="primary" style="font-size: 9rem">mdi-pasta</v-icon>
        </router-link>
      </v-col>
      <v-col cols="8" class="pl-7 pt-5">
        <h4>Recently Added Recipes</h4>
        <ol style="padding-left: 0px" color="primary">
          <li v-for="recipe in recipes.slice(0, 4)" :key="recipe.id"> {{recipe.name}}</li>
        </ol>
      </v-col>
    </v-row> 
  </div>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters(['events', 'groceries', 'recipes'])
  },
}

</script>

<style scoped>
  li {
    list-style-type: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
</style>
