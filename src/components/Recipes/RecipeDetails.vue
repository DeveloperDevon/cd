<template>
    <div v-if="selectedRecipe">
        <h2 class="text-center mt-2">{{ selectedRecipe.name }}</h2>
        <h3 class="text-center">{{selectedRecipe.cookTime}}</h3>
            <ol class="ma-4">
                <li v-for="ingredient in selectedRecipe.ingredients" :key="ingredient.ingredient">
                {{ingredient.amount}} {{ ingredient.ingredient }}
                </li>
            </ol>
            <p class="ma-4">{{selectedRecipe.directions}}</p>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex' 
    export default {
        methods: mapActions(['selectRecipe']),
        computed: mapGetters(['selectedRecipe']),
        created() {
            this.ingredients = this.selectedRecipe.ingredients
        },
        mounted() {
            this.selectRecipe(this.$route.params.id)
            console.log(this.selectedRecipe)
        },
        data: () => ({
            ingredients: []
        })
    }
</script>

<style lang="scss" scoped>

</style>