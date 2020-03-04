<template>
  <v-container>
      <List />
      <AddGroceryButton v-if="this.currentRoute === 'groceries'" />
  </v-container>
</template>

<script>
  import AddGroceryButton from '@/components/GroceryList/AddGroceryButton'
  import List from '@/components/GroceryList/List'
  import { mapGetters } from 'vuex'

  export default {
    name: 'Groceries',
    components: {
      AddGroceryButton, 
      List, 
    },
    data() {
      return {
        currentRoute: '',
      }
    },
    computed: mapGetters(['groceries']),
    created() {
      this.currentRoute = this.$router.currentRoute.name
    }
  }
  
</script>

<style scoped>

</style>