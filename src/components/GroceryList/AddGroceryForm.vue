<template>
<div></div>
  <!-- <v-form @submit.prevent="addItem()">
    <v-card>
      <v-card-title class="headline lighten-2" primary-title>
        Add Item
      </v-card-title>
      <v-card-text>
      <v-row v-if="!newCategoryVisible">
        <v-col cols="12">
          <v-select 
          :items="categories" 
          item-text="name" 
          item-value="selectedCategory" 
          v-model="selectedCategory" 
          label="Category" 
          append-outer-icon="+"
          @click:append-outer="toggleAddCategoryVisible"></v-select>
        </v-col>
      </v-row>
      <v-row v-if="newCategoryVisible">
        <v-col cols="12">
          <v-text-field 
          v-model="newCategory" 
          label="Category" 
          append-outer-icon="x" 
          @click:append-outer="toggleAddCategoryVisible"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="9">
          <v-text-field v-model="newItem" label="Item Name" required></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field v-model="qty" type="number" label="Qty" append-outer-icon="+" @click:append-outer="increment"></v-text-field>
        </v-col>
      </v-row>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" type="submit">Add</v-btn>
      </v-card-actions>
    </v-card>
  </v-form> -->
</template>

<script>
  // import { mapGetters, mapActions } from 'vuex'

  // export default {
  //   name: 'AddGroceryForm',
  //   computed: mapGetters(['groceries']),
  //   created() {
  //     this.fetchGroceries
  //     this.categories = [...new Set(this.groceries.map(a => a.category))]
  //   },
  //   data() {
  //     return {
  //       categories: [],
  //       selectedCategory: 'food',
  //       newCategory: '',
  //       newCategoryVisible: false,
  //       newItem: '',
  //       qty: 1,
  //     }
  //   },
  //   methods: {
  //     ...mapActions(['fetchGroceries', 'addGrocery']),
  //     addItem() {
  //       const category = this.newCategoryVisible ? this.newCategory : this.selectedCategory
  //       const item = { category, checked: false, qty: this.qty, item_name: this.newItem}
  //       this.addGrocery(item)
  //     },
  //     toggleAddCategoryVisible() {
  //       this.newCategoryVisible = !this.newCategoryVisible
  //     },
  //     increment () {
  //       this.qty = parseInt(this.qty,10) + 1
  //     },
  //   },
  // }
</script>

<style lang="scss" scoped>

</style>