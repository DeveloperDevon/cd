<template>
  <div v-if="result">
    <v-card>
      <v-img :src="result.image" height="220"></v-img>
      <v-card-title class="headline" v-text="result.label">
        <h4 >{{result.label}}</h4>
      </v-card-title>
      <v-card-subtitle dark class="py-0">
       <a color="secondary" :href="`${result.url}`">{{ result.source }}</a>
      </v-card-subtitle>
      <v-card-subtitle dark class="py-0">
       Ingredients:
      </v-card-subtitle>
      <v-card-text class="pl-0">
        <ul style="list-style: none; padding-left: 15px">
          <li v-for="(ingredient, i) in result.ingredientLines" :key="i">
          {{ingredient}}
          </li>
        </ul>
      </v-card-text>

    </v-card>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: mapGetters({result: 'searchResultDetails'})
  }
</script>

<style lang="scss" scoped>
  .v-application a {
    color: #ff5722;
    text-decoration: none;
  }
</style>