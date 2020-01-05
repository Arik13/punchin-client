<template>
    <v-app>
    <v-navigation-drawer
        v-model="drawer"
        temporary
        absolute
    >
        <nav-content />
    </v-navigation-drawer>
        <v-app-bar app>
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer" />
            <v-toolbar-title>Punch-in</v-toolbar-title>
        </v-app-bar>
        <v-content>
            <router-view />
        </v-content>
    </v-app>
</template>

<script>
import NavContent from "./components/NavContent";

export default {
    data() {
        return {
            drawer: null
        }
    },
    components: {
        "nav-content": NavContent
    },
};
</script>