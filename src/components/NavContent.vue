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
            <v-list-item
                v-for="item in navItems"
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
        </v-list>
    </div>
</template>

<script>
export default {
    data () {
        return {
            navItems: [
                { title: 'Jobs', icon: 'work', route: "/jobs"},
                { title: 'Employees', icon: 'group', route: "/employees" },
                { title: 'Add Job', icon: 'work', route: "/addjob" },
                { title: 'Add Employee', icon: 'account_box', route: "/addEmployee" },
            ],
        }
    },
}
</script>

<style>

</style>
