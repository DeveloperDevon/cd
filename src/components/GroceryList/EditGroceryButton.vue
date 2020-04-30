<template>
  <v-container>
    <v-dialog v-model="dialog" width="500">

      <template v-slot:activator="{ on }">
          <v-icon dense color="primary" v-on="on">mdi-pencil</v-icon>
      </template>

      <template>
          <v-form @submit.prevent="updateItem()">
                <v-card>
                  <v-card-title class="headline lighten-2" primary-title>
                      Edit Item
                  </v-card-title>
                  <v-card-text>
                    <v-row>
                        <v-col cols="12">
                        <v-text-field v-model="newItem" label="Item Name" required></v-text-field>
                        </v-col>
                    </v-row>
                  </v-card-text>
                  <v-card-actions>
                      <v-row>
                        <v-col></v-col>
                        <v-col>
                          <v-card-actions>
                            <v-btn raised x-large color="primary" type="submit">Update</v-btn>
                          </v-card-actions>
                        </v-col>
                        <v-col></v-col>
                      </v-row>
                  </v-card-actions>
                </v-card>
            </v-form>
      </template>
      
    </v-dialog>
  </v-container>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'EditGroceryButton',
    props: ['grocery'],
    computed: mapGetters(['groceries']),
    data() {
      return {
        dialog: false,
        newItem: this.grocery.item_name,
      }
    },
    methods: {
      ...mapActions(['modifyGrocery']),
       updateItem() {
        const item = { id: this.grocery.id, checked: false, item_name: this.newItem}
        this.modifyGrocery(item)
        this.dialog = false
      },
    },
  }
</script>

<style>
  .item-input {
    flex: 1;
  }
</style>