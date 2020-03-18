<template>
  <div>
    <v-form class="ma-2" @submit.prevent="searchRecipes(searchInput)">
      <v-text-field 
      outlined
      v-model="searchInput"
      append-outer-icon="mdi-arrow-right-bold"
      label="Recipe Search"
      @click:append-outer="searchRecipes(searchInput)"
      />
    </v-form>
    <v-row dense v-if="results" style="max-height: 470px; overflow: auto;">
        <v-col v-for="(res, i) in searchResults" :key="i" cols="12">
          <v-card dark @click="showDetails(res.recipe)">
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline" v-text="res.recipe.label"></v-card-title>
                <v-card-subtitle class="py-0">Ingredients: {{ res.recipe.ingredients.length }}</v-card-subtitle>
                <v-card-subtitle class="py-0">Calories: {{ Math.floor(res.recipe.calories) }}</v-card-subtitle>
              </div>
              <v-avatar class="ma-3" size="125" tile >
                <v-img :src="res.recipe.image"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    data: () => ({
      searchInput: '',
      results: []
    }),
    computed: mapGetters(['searchResults']),
    methods: {
      ...mapActions(['searchRecipes', 'selectSearchResult']),
      showDetails(result) {
        console.log(result)
        this.selectSearchResult(result)
        this.$router.push({ name: 'searchDetails' })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .v-application .headline {
    word-break: break-word !important;
  }

</style>

