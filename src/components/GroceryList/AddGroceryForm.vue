<template>
  <v-form @submit.prevent="addItem()">
    <v-card>
      <v-card-title class="headline lighten-2" primary-title>
        Add Item
      </v-card-title>
      <v-card-text>
      <v-row>
        <v-col cols="12">
          <v-select :items="categories" item-text="name" item-value="selectedCategory" v-model="selectedCategory" label="Category"></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field v-model="newItem" label="Item Name" required></v-text-field>
        </v-col>
      </v-row>
      </v-card-text>
      <v-divider></v-divider>
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
        newItem: '',
      }
    },
    methods: {
      addItem() {
        const item = { category: this.selectedCategory, checked: false, item_name: this.newItem}
        this.$emit('addItem', { item, dialog: false })
        this.newItem = ''
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>