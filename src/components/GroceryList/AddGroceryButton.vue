<template>
  <v-container>
    <v-dialog v-model="dialog" width="500">

      <template v-slot:activator="{ on }">
        <v-btn class="mb-10" fab absolute bottom right color="primary" dark v-on="on">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>

      <AddGroceryForm v-on:addItem="addItem" />
      
    </v-dialog>
  </v-container>
</template>

<script>
  import AddGroceryForm from './AddGroceryForm'
  export default {
    name: 'AddGroceryButton',
    components: {
      AddGroceryForm
    },
    data() {
      return {
        dialog: false,
      }
    },
    methods: {
      addItem(e) {
        const { item, dialog} = e
        this.dialog = dialog
        this.$emit('addItem', item)
      }
    }
  }
</script>

<style>
  .item-input {
    flex: 1;
  }
</style>