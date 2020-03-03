<template>
  <v-container class="grocery-list text-left">
    <v-row>
      <v-col>
        <v-row class="px-3">
          <router-link style="text-decoration: none" to="/groceries"><h3 class="pl-4">Grocery List</h3></router-link>
          <v-spacer></v-spacer>
          <h3 v-if="groceries" style="color: #1976d2" class="pr-4">{{groceries.filter(a => a.checked === true).length}}/{{groceries.length}}</h3>
        </v-row>
        <v-simple-table v-if="this.currentRoute === 'groceries'" fixed-header height="432">
          <thead>
            <tr>
              <th class="text-left">Qty</th>
              <th class="text-left">Item</th>
              <th class="text-right"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="grocery in groceries" :key="grocery.id">
              <td>{{ grocery.qty }}</td>
              <td @click="toggleChecked(grocery.id, grocery.checked)" v-bind:class="{ checked: grocery.checked }">{{ grocery.name }}</td>
              <td class="text-right">
                <v-row>
                  <v-col cols="3">
                    <EditGroceryButton :grocery="grocery"/>
                    <!-- <v-icon @click="editItem(grocery.id)" dense color="orange">mdi-pencil</v-icon> -->
                  </v-col>
                  <v-col cols="3">
                    <v-icon @click="deleteItem(grocery.id)" dense color="red">mdi-delete</v-icon>
                  </v-col>
                </v-row>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EditGroceryButton from './EditGroceryButton'

export default {
  name: 'List',
  props: ['groceries'],
  components: { EditGroceryButton },
  data: () => ({
    currentRoute: ''
  }),
  created() {
    this.currentRoute = this.$router.currentRoute.name
  },
  methods: {
    toggleChecked(id, checked) {
      this.$emit('toggleChecked', {id, checked})
    },
    editItem(id) {
      console.log('editItem', id)
    },
    deleteItem(id) {
      this.$emit('deleteItem', id)
    }
  }

}
</script>

<style scoped>
  .checked {
    text-decoration: line-through;
  }
</style>