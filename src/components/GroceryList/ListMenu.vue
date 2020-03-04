<template>
    <v-menu bottom left transition="slide-y-transition">
        <template v-slot:activator="{ on }">
            <v-btn icon v-on="on" >
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </template>

        <v-list v-for="item in menuItems" :key="item.title">
            <v-list-item @click="sortBy(item.sortBy)">{{item.title}}</v-list-item>
        </v-list>
        <v-list>
            <v-list-item @click="removeCheckedGroceries()" style="color: red">Remove Checked</v-list-item>
        </v-list>
    </v-menu>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        data: () => ({
        menuItems: [
            { title: 'Sort by added date', sortBy: 'timestamp', asc: true},
            { title: 'Sort by checked', sortBy: 'checked', asc: true},
            { title: 'Sort alphabetical', sortBy: 'item_name', asc: true},
        ],
        }),
        methods: {
            ...mapActions(['sortBy', 'removeCheckedGroceries'])
        }
    }
</script>

<style lang="scss" scoped>

</style>