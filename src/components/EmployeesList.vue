<template>
    <div>
        <v-list>
            <template v-if="employeeList.length != 0">
                <v-list-item
                    v-for="(employee, index) in employeeList"
                    :key="index"
                    :to="{path: pathify(employee._id)}"
                >
                    <v-list-item-content>
                        <v-list-item-title>{{ employee.name }}</v-list-item-title>
                        <v-list-item-subtitle>{{ employee.email }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </template>
            <v-list-item v-else>
                Add items using the plus button
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
            employeeList: [],
            resourcePath: "/employees",
            formPath: "/addemployee",
        }
    },
    mounted() {
        this.$store.dispatch("accessResource", {
            method: "GET",
            route: this.resourcePath,
            callback: (result) => {
                console.log("Result", result);
                this.employeeList = result;
            }
        });
    },
    watch: {
        jobList() {
            console.log("List Items: ", this.jobList);
        }
    },
    methods: {
        pathify(id) {
            return this.resourcePath + "/" + id;
        },
        routeToForm() {
            this.$router.push(this.formPath);
        }
    },
}
</script>