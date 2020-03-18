<template>
  <div v-if="result">
    <v-card>
      <v-btn
        class="mt-8"
        fab
        color="secondary"
        top
        right
        absolute
        @click="save(result)"
      >
        <v-icon>mdi-briefcase-download</v-icon>
      </v-btn>
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
  import { mapGetters, mapActions } from 'vuex'
  export default {
    computed: mapGetters({result: 'searchResultDetails'}),
    methods: {
      ...mapActions(['saveRecipe']),
      transformRecipe(recipe) {
        return {
          name: recipe.label,
          image: recipe.image,
          source: recipe.source,
          sourceUrl: recipe.url,
          yields: recipe.yield,
          ingredients: recipe.ingredientLines,
          calories: recipe.calories,
          cookTime: recipe.totalTime,
        }
      },
      save(recipe) {
        const transformed = this.transformRecipe(recipe)
        this.saveRecipe(transformed)
        this.$router.push({ name: 'recipesList'})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .v-application a {
    color: #ff5722;
    text-decoration: none;
  }
</style>