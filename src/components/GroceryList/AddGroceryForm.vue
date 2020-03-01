<template>
  <v-form @submit.prevent="addItem()">
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
  </v-form>
</template>

<script>
  import { getCategoriesMixin } from '@/mixins/get-categories'
  import { watcherMixin } from '@/mixins/watcher'

  export default {
    name: 'AddGroceryForm',
    mixins: [ getCategoriesMixin, watcherMixin ],
    data() {
      return {
        selectedCategory: 'food',
        newCategory: '',
        newCategoryVisible: false,
        newItem: '',
        qty: 1,
      }
    },
    methods: {
      addItem() {
        const category = this.newCategoryVisible ? this.newCategory : this.selectedCategory
        const item = { category, checked: false, qty: this.qty, item_name: this.newItem}
        this.$emit('addItem', { item, dialog: false })
        this.newItem = ''
      },
      toggleAddCategoryVisible() {
        this.newCategoryVisible = !this.newCategoryVisible
        console.log(this.newCategory)
      },
      increment () {
        this.qty = parseInt(this.qty,10) + 1
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>