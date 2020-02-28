<template>
  <v-container>
      <List :groceries="groceries" v-on:deleteItem="deleteItem" v-on:toggleChecked="toggleChecked" />
      <AddGroceryButton v-if="this.currentRoute === 'groceries'" v-on:addItem="addItem" />
  </v-container>
</template>

<script>
  import { db } from '@/db'
  import { transform } from '@/helpers'
  import AddGroceryButton from '@/components/GroceryList/AddGroceryButton'
  import List from '@/components/GroceryList/List'
  export default {
    name: 'Groceries',
    components: {
      AddGroceryButton, 
      List, 
    },
    data() {
      return {
        groceries: [],
        currentRoute: '',
        getGroceries: () => {
          db.collection('groceries').get().then((queryData) => queryData.docs.map((doc) => {
            this.groceries.push(this.transform(doc))
          }))
        }
      }
    },
    created() {
      this.currentRoute = this.$router.currentRoute.name
      console.log(this.currentRoute)
      this.getGroceries()
    },
    methods: {
      addItem(e) {
        const item = e
        db.collection('groceries').add(item).then(() => { this.watcher()})
      },
      toggleChecked(e) {
        const { id, checked } = e
        db.collection('groceries').doc(id).update({checked: !checked}).then(this.watcher())
      },
      deleteItem(id) {
        db.collection('groceries').doc(id).delete().then(this.watcher())
      },
      watcher() {
        db.collection('groceries').onSnapshot((querySnapshot) => {
          this.groceries = []
          querySnapshot.forEach((doc) => this.groceries.push(transform(doc)))
        })
      },
      transform: transform
    }
  }
  
</script>

<style scoped>

</style>