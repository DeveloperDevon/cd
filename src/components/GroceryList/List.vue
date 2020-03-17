<template>
  <v-container class="grocery-list text-left">
    <v-row>
      <v-col>
        <v-row class="px-3">
          <!-- <router-link style="text-decoration: none" to="/groceries">
            <h3 class="pl-4 mb-3 text-white">Grocery List</h3>
          </router-link>
          <v-spacer></v-spacer>
          <h3 v-if="groceries" style="color: #FFFFFF" class="pr-4">
            {{groceries.filter(a => a.checked === true).length}}/{{groceries.length}}
          </h3> -->
        </v-row>
        <v-simple-table v-if="this.currentRoute === 'groceries'" fixed-header height="480">
          <thead>
            <tr class="table-header">
              <th class="text-left">Qty</th>
              <th class="text-left">Item</th>
              <th class="text-right"><ListMenu /></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="grocery in groceries" :key="grocery.id">
              <td>{{ grocery.qty }}</td>
              <td @click="toggleChecked(grocery)" v-bind:class="{ checked: grocery.checked }">{{ grocery.item_name }}</td>
              <td class="text-right">
                <EditGroceryButton style="display: inline; padding-right: 7px !important;" :grocery="grocery"/>
                <v-icon @click="removeGrocery(grocery.id)" dense color="red">mdi-delete</v-icon>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
    </v-row>
    <AddGroceryButton />
  </v-container>
</template>

<script>
import EditGroceryButton from './EditGroceryButton'
import AddGroceryButton from '@/components/GroceryList/AddGroceryButton'
import ListMenu from '@/components/GroceryList/ListMenu'

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'List',
  components: { EditGroceryButton, AddGroceryButton, ListMenu },
  data: () => ({
    currentRoute: ''
  }),
  created() {
    this.currentRoute = this.$router.currentRoute.name
  },
  computed: mapGetters(['groceries']),
  methods: {
    ...mapActions(['removeGrocery', 'toggleChecked']),
  }

}
</script>

<style>
  .theme--dark.v-data-table {
    background-color: #121212
  }
  th {
    background-color: #121212 !important;
  }
  .text-white {
    color: #FFFFFF;
  }
  .checked {
    color: #FF5722;
    text-decoration: line-through;
  }
</style>