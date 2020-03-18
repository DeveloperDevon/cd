<template>
  <div v-if="selectedRecipe">
    <v-img v-if="selectedRecipe.image" :src="selectedRecipe.image" height="220"></v-img>
    <h2 class="text-center mt-2">{{ selectedRecipe.name }}</h2>
    <h3 class="text-center">
      <a :href="`${selectedRecipe.sourceUrl}`">{{ selectedRecipe.source }}</a>
    </h3>
    <h3 class="text-center">
      {{selectedRecipe.cookTime}} minutes 
      <span v-if="selectedRecipe.yields"> | yields {{selectedRecipe.yields}}</span>
    </h3>
    <ol class="pl-0 ma-4" style="list-style: none;">
      <li
        v-for="(ingredient, index) in selectedRecipe.ingredients"
        :key="index"
      >{{ ingredient }}</li>
    </ol>
    <p class="ma-4">{{selectedRecipe.directions}}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: mapActions(["selectRecipe"]),
  computed: mapGetters(["selectedRecipe"]),
  created() {
    this.ingredients = this.selectedRecipe.ingredients;
  },
  mounted() {
    this.selectRecipe(this.$route.params.id);
    console.log(this.$route.params.id);
  },
  data: () => ({
    ingredients: []
  })
};
</script>

<style lang="scss" scoped>
  .v-application a {
    color: #ff5722;
    text-decoration: none;
  }
</style>