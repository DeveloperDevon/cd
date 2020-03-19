<template>
     <v-card
      height="400"
      class="overflow-hidden"
    >
      <v-navigation-drawer v-model="drawerVisible" color="primary" app style="z-index: 1;">
        <v-list dense nav class="py-0">
          <v-list-item two-line>
            <v-list-item-avatar>
              <v-icon x-large>mdi-account-circle</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Application</v-list-item-title>
              <v-list-item-subtitle>Subtext</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <NavDrawerItem 
            v-for="item in navItems" 
            :key="item.icon" 
            :route="item.route"
            :icon="item.icon"
            :title="item.title"
          />

        </v-list>
      </v-navigation-drawer>
    </v-card>
</template>

<script>
    import NavDrawerItem from './NavDrawerItem'

    export default {
        components: { NavDrawerItem },
        computed: {
            drawerVisible: {
            get() {return this.$store.getters.drawerVisible},
            set(v) {return this.$store.commit('setDrawer', v)}
            }
        },
        data: () => ({
          navItems: [
            {route: 'dashboard', icon: 'mdi-view-dashboard', title: 'Dashboard'},
            {route: 'groceries', icon: 'mdi-cart', title: 'Groceries'},
            {route: 'calendar', icon: 'mdi-calendar', title: 'Calendar'},
            {route: 'recipesList', icon: 'mdi-pasta', title: 'Recipes'},
          ]
        }),
    }
</script>

<style lang="scss" scoped>

</style>