<template>
    <div>
        <v-list>
            <v-list-item
                v-for="(employee, index) in employees"
                :key="index"
                :to="{path: pathify(employee._id)}"
            >
                <v-list-item-content>
                    <v-list-item-title>{{ employee.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ employee.role }}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        <v-btn fab dark large fixed right bottom @click="routeToForm()">
            <v-icon dark>add</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
    data() {
        return {
            employees: [],
            resourcePath: "/employees/"
        }
    },
    mounted() {
        console.log("Mounted the EmployeesList component");
        this.$store.dispatch("getResource", {route: this.resourcePath, callback: (result) => {
            console.log("Result", result);
            this.employees = result;
        }});
    },
    methods: {
        pathify(id) {
            return this.resourcePath + id;
        },
        routeToForm() {
            this.$router.push("/addemployee");
        }
    },
}
</script>

<style>

</style>