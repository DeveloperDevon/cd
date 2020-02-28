<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1>Dashboard</h1>
        <Groceries />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import Groceries from './Groceries'

export default {
  name: 'Dashboard',
  components: {
    Groceries
  }
}

</script>
