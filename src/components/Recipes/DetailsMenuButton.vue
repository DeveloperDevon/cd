<template>
    <v-menu bottom left transition="slide-y-transition">
        <template v-slot:activator="{ on }">
            <v-btn 
            class="mt-8"
            fab
            color="secondary"
            top
            right
            absolute 
            v-on="on">
                <v-icon>mdi-more</v-icon>
            </v-btn>
        </template>

        <v-list>
            <v-list-item 
            v-if="recipes.some(r => r.name == selectedRecipe.name)" 
            @click="saveIngredients(selectedRecipe.ingredients)">
                Add To Groceries
            </v-list-item>
            <v-list-item @click="deleteRecipe(selectedRecipe.id)">Delete Recipe</v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        computed: mapGetters(['selectedRecipe', 'recipes']),
        methods: {
          ...mapActions(["addIngredients", "removeRecipe"]),
          saveIngredients(ingredients) { this.addIngredients(ingredients).then(this.$router.push({ name: 'groceries' })) },
          deleteRecipe(id) { this.removeRecipe(id).then(this.$router.push({ name: 'recipesList' }))},
        }
    }
</script>

<style lang="scss" scoped>

</style>