<template>
  <v-container>
    <v-dialog v-model="dialog" width="500">

      <template v-slot:activator="{ on }">
        <v-icon dense color="red" v-on="on">mdi-delete</v-icon>
      </template>

      <template>
        <v-card>
          <v-card-title class="headline lighten-2 text-center" primary-title>
              Delete {{ this.grocery.item_name }}?
          </v-card-title>
          <v-card-actions>
              <v-row>
                <v-col cols="12">
                  <v-card-actions style="text-align: center">
                    <v-row>
                      <v-col cols="6">
                        <v-btn raised x-large color="primary" @click="dialog = false">Cancel</v-btn>
                      </v-col>
                      <v-col cols="6">
                        <v-btn raised x-large color="secondary" @click="removeGrocery(grocery.id)">Delete</v-btn>
                      </v-col>
                    </v-row>
                  </v-card-actions>
                </v-col>
              </v-row>
          </v-card-actions>
        </v-card>
      </template>
      
    </v-dialog>
  </v-container>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'DeleteGroceryButton',
    props: ['grocery'],
    computed: mapGetters(['groceries']),
    data() {
      return {
        dialog: false,
        newItem: this.grocery.item_name,
      }
    },
    methods: {
      ...mapActions(['removeGrocery'])
    },
  }
</script>

<style>
  .item-input {
    flex: 1;
  }
</style>