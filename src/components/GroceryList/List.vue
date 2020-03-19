<template>
  <v-container class="grocery-list text-left">
    <v-row class="mb-7">
      <v-col>
        <v-simple-table v-if="this.currentRoute === 'groceries'" fixed-header style="margin-bottom: 20px">
          <thead>
            <tr class="table-header">
              <th class="text-left">{{groceries.filter(a => a.checked === true).length}}/{{groceries.length}} Items</th>
              <th class="text-right"><ListMenu /></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="grocery in groceries.filter(a => a.checked === false)" :key="grocery.id">
              <td @click="toggleChecked(grocery)" style="width: 80%" v-bind:class="{ checked: grocery.checked }">{{ grocery.item_name }}</td>
              <td class="text-right" style="width: 20%">
                <EditGroceryButton style="display: inline; padding-right: 7px !important;" :grocery="grocery"/>
                <v-icon @click="removeGrocery(grocery.id)" dense color="red">mdi-delete</v-icon>
              </td>
            </tr>
            <tr v-for="grocery in groceries.filter(a => a.checked === true)" :key="grocery.id">
              <td @click="toggleChecked(grocery)" v-bind:class="{ checked: grocery.checked }">{{ grocery.item_name }}</td>
              <td class="text-right">
                <EditGroceryButton style="display: inline; padding-right: 7px !important;" :grocery="grocery"/>
                <v-icon @click="removeGrocery(grocery.id)" dense color="red">mdi-delete</v-icon>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
      <AddGroceryButton />
    </v-row>
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
    ...mapActions(['removeGrocery', 'toggleChecked', 'sortBy']),
    toggle(grocery) {
      this.toggleChecked(grocery).then(this.sortBy('timestamp'))
    }
  },
}
</script>

<style>
  .theme--dark.v-data-table {
    background-color: #121212
  }
  td {
    max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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