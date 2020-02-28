<template>
  <v-container class="grocery-list text-left">
    <v-row>
      <v-col>
        <v-row>
          <router-link style="text-decoration: none" to="/groceries"><h3 class="pl-4">Grocery List</h3></router-link>
          <v-spacer></v-spacer>
          <h3 v-if="groceries" style="color: #1976d2" class="pr-4">{{groceries.filter(a => a.checked === true).length}}/{{groceries.length}}</h3>
        </v-row>
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-left">Qty</th>
              <th class="text-left">Item</th>
              <th class="text-right"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="grocery in groceries" :key="grocery.id">
              <td>1</td>
              <td @click="toggleChecked(grocery.id, grocery.checked)" v-bind:class="{ checked: grocery.checked }">{{ grocery.name }}</td>
              <td @click="deleteItem(grocery.id)" class="text-right">x</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'List',
  props: ['groceries'],
  methods: {
    toggleChecked(id, checked) {
      this.$emit('toggleChecked', {id, checked})
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