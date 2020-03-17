<template>
  <div>
    <!-- <v-input /> -->
    <v-simple-table fixed-header height="480">
      <thead>
        <tr class="table-header">
          <th class="text-left">Recipe</th>
          <th class="text-left">Time to Cook</th>
          <th class="text-center">Ingredients</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="recipe in recipes" :key="recipe.id" @click="viewDetails(recipe)">
          <td>{{ recipe.name }}</td>
          <td>{{ recipe.cookTime }}</td>
          <td class="text-center">{{ recipe.ingredients.length }}</td>
        </tr>
      </tbody>
    </v-simple-table>
    <AddRecipeButton />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AddRecipeButton from "./AddRecipeButton";

export default {
  name: "RecipeList",
  components: { AddRecipeButton },
  computed: mapGetters(["recipes"]),
  methods: {
    ...mapActions(["selectRecipe"]),
    viewDetails(recipe) {
      this.selectRecipe(recipe.id);
      this.$router.push({ name: "recipeDetails", params: { id: recipe.id } });
    }
  }
};
</script>

<style lang="scss" scoped>
.theme--dark.v-data-table {
  background-color: #121212;
}
th {
  background-color: #121212 !important;
}
</style>