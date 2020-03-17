<template>
  <v-container>
    <v-dialog v-model="dialog" width="500" style="margin: 0px">
      <template v-slot:activator="{ on }">
        <v-btn class="mb-10" fab absolute bottom right color="secondary" dark v-on="on">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>

      <template>
        <v-form @submit.prevent="addItem()">
          <v-card>
            <v-card-title class="headline lighten-2" primary-title>
              Add Recipe
              <v-icon color="primary" style="margin-left: auto; font-size:30px" @click="searchRecipes">mdi-magnify</v-icon>
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-text-field outlined v-model="recipeName" label="Recipe Name" required></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field outlined v-model="cookTime" label="Cook Time" required></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-textarea outlined v-model="directions" label="Directions" required></v-textarea>
                </v-col>
              </v-row>
              <v-row v-for="(ingredient, index) in ingredients" :key="index">
                <v-col cols="3">
                  <v-text-field outlined v-model="ingredient.amount" label="Qty" required></v-text-field>
                </v-col>
                <v-col cols="9">
                  <v-text-field
                    outlined
                    v-model="ingredient.ingredient"
                    label="Ingredient"
                    required
                    append-outer-icon="mdi-plus-circle"
                    @click:append-outer="addIngredient"
                  ></v-text-field>
                </v-col>
                <!-- <v-col v-if="ingredients.length > 1" cols="9">
                <v-text-field 
                v-model="ingredient.ingredient" 
                label="Ingredient" 
                required 
                append-outer-icon="mdi-minus-circle"
                @click:append-outer="addIngredient"
                ></v-text-field>
                </v-col>-->
              </v-row>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" type="submit">Add</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </template>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AddRecipeButton",
  computed: mapGetters(["groceries"]),
  data() {
    return {
      dialog: false,
      recipeName: "",
      ingredients: [{ ingredient: "", amount: "" }],
      directions: "",
      cookTime: ""
    };
  },
  watch: {
    dialog(val) {
      if (!val) {
        setTimeout(() => {
          this.recipeName = "";
          this.ingredients = [{ ingredient: "", amount: "" }];
          this.directions = "";
          this.cookTime = "";
        }, 500);
      }
    }
  },
  methods: {
    ...mapActions(["addRecipe"]),
    addItem() {
      const newRecipe = {
        name: this.recipeName,
        ingredients: this.ingredients,
        directions: this.directions,
        cookTime: this.cookTime
      };
      this.addRecipe(newRecipe);
      this.dialog = false;
    },
    addIngredient() {
      this.ingredients.push({ ingredient: "", amount: "" });
    },
    searchRecipes() {
      this.$router.push({ name: 'searchRecipes'})
    }
  }
};
</script>

<style>
.item-input {
  flex: 1;
}
.container {
  padding: 0px !important;
}
.v-dialog {
  margin: 0px !important;
  max-height: 501px !important;
}
.col {
  margin: 0px !important;
  padding: 0px 5px;
}
.v-textarea textarea {
  max-height: 60px;
}
</style>