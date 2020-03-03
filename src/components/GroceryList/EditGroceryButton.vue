<template>
  <v-container>
    <v-dialog v-model="dialog" width="500">

      <template style="padding: 0px !important" v-slot:activator="{ on }">
          <v-icon dense color="orange" v-on="on">mdi-pencil</v-icon>
      </template>

      <template>
          <v-form @submit.prevent="updateItem()">
                <v-card>
                <v-card-title class="headline lighten-2" primary-title>
                    Edit Item
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
                    <v-btn color="primary" type="submit">Edit</v-btn>
                </v-card-actions>
                </v-card>
            </v-form>
      </template>
      
    </v-dialog>
  </v-container>
</template>

<script>
  import { getCategoriesMixin } from '@/mixins/get-categories'
  import { watcherMixin } from '@/mixins/watcher'
  import { db } from '@/db'

  export default {
    name: 'EditGroceryButton',
    mixins: [ getCategoriesMixin, watcherMixin ], //TODO: write func to get categories from groceries
    props: ['grocery'],
    data() {
      return {
        dialog: false,
        selectedCategory: this.grocery.category,
        newCategory: '',
        newCategoryVisible: false,
        newItem: this.grocery.name,
        qty: this.grocery.qty ? this.grocery.qty : 1,
      }
    },
    methods: {
       updateItem() {
        const category = this.newCategoryVisible ? this.newCategory : this.selectedCategory
        const item = { category, checked: this.grocery.checked, qty: this.qty, item_name: this.newItem}
        db.collection('groceries').doc(this.grocery.id).set(item).then(() => { this.watcher()})
        this.dialog = false
      },
      toggleAddCategoryVisible() {
        this.newCategoryVisible = !this.newCategoryVisible
        console.log(this.newCategory)
      },
      increment () {
        this.qty = parseInt(this.qty,10) + 1
      }
    }
  }
</script>

<style>
  .item-input {
    flex: 1;
  }
</style>