<template>
  <v-container>
      <List />
  </v-container>
</template>

<script>
  import List from '@/components/GroceryList/List'

  export default {
    name: 'Groceries',
    components: { List },
  }
  
</script>

<style scoped>
  * {
    background-color: #121212;
  }
</style>