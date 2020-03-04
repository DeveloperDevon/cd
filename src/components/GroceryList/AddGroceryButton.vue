<template>
  <v-container>
    <v-dialog v-model="dialog" width="500">

      <template v-slot:activator="{ on }">
        <v-btn class="mb-10" fab absolute bottom right color="primary" dark v-on="on">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>

      <AddGroceryForm />
      
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
        clearFields: false
      }
    },
  }
</script>

<style>
  .item-input {
    flex: 1;
  }
  .container {
    padding: 0px !important
  }
</style>