<template>
    <div>
        <v-card>
            <v-card-title>
                Punchin
            </v-card-title>
            <v-card-subtitle>
                Navigation
            </v-card-subtitle>
        </v-card>
        <v-list>
            <template v-for="item in navItems">
                <v-list-item
                    v-if="item.show"
                    :key="item.route"
                    :to="{path: item.route}"
                >
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
    </div>
</template>

<script>
export default {
    computed: {
        navItems() {
            return [
                    // All users
                    { title: "Log In", icon: "how_to_reg", route: "/login", show: !this.isLoggedIn},
                    { title: "Log Out", icon: "exit_to_app", route: "/logout", show: this.isLoggedIn},
                    { title: "Sign Up", icon: "assignment", route: "/signup", show: !this.isLoggedIn},
                    { title: "Jobs", icon: "work", route: "/jobs", show: this.isLoggedIn && this.isEmployed},

                    // Contractor specific
                    { title: "Employees", icon: "group", route: "/employees", show: this.isContractor},

                    // Employee specific
                    { title: "Connect to Employer", icon: "work", route: "/connectemployee", show: !this.isEmployed && this.isEmployee},
                ]
            },
        isLoggedIn() {
            return (this.$store.state.authToken);
        },
        isContractor() {
            return this.$store.state.role == "Contractor";
        },
        isEmployee() {
            return this.$store.state.role == "Employee";
        },
        isEmployed() {
            return this.$store.state.isEmployed;
        },
    },
}
</script>