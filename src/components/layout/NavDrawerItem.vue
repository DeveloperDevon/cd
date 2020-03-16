<template>
    <v-list-item link @click="routeTo(route)">
        <v-list-item-icon>
            <v-icon>{{icon}}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
            <v-list-item-title>{{title}}</v-list-item-title>
        </v-list-item-content>
    </v-list-item>
</template>

<script>
    export default {
        props: ['route', 'icon', 'title'],
        methods: {
        routeTo(route) {
        if (this.$router.currentRoute.name != route ) this.$router.push({ name: route })
        this.$store.commit('setDrawer', false)
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>