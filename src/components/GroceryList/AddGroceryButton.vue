<template>
  <v-container>
    <v-dialog v-model="dialog" width="500">

      <template v-slot:activator="{ on }">
        <v-btn style="margin-left:47%" class="mb-9" fab outlined absolute bottom middle color="secondary" dark v-on="on">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>

      <template>
        <v-form @submit.prevent="addItem()">
          <v-card>
            <v-card-title class="headline lighten-2" primary-title>
              Add Item
            </v-card-title>
            <v-card-text>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="newItem" label="Item Name" required></v-text-field>
              </v-col>
            </v-row>
            </v-card-text>
            <v-row>
              <v-col></v-col>
              <v-col>
                <v-card-actions>
                  <v-btn raised x-large color="primary" type="submit">Add</v-btn>
                </v-card-actions>
              </v-col>
              <v-col></v-col>
            </v-row>
          </v-card>
        </v-form>
      </template>
      
    </v-dialog>
  </v-container>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'AddGroceryButton',
    computed: mapGetters(['groceries']),
    data() {
      return {
        dialog: false,
        newItem: '',
      }
    },
    methods: {
      ...mapActions(['fetchGroceries', 'addGrocery']),
      addItem() {
        const item = { checked: false, item_name: this.newItem}
        this.addGrocery(item).then(this.newIitem = '')
        this.dialog = false
      },
    },
    watch: { dialog(val) { if(!val) this.newItem = ''} }
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