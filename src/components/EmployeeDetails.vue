<template>
    <div>
        <v-card>
            <v-card-title>
                {{ employeeDetails.name }}
            </v-card-title>
            <v-card-subtitle>
                {{ employeeDetails.email }}
            </v-card-subtitle>
            <v-card-text>
                Some details about the job
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {
    data() {
        return {
            employeeDetails: {},
            employeeJobs: [],
            resourcePath: "/employees"
        }
    },
    mounted() {
        console.log("Mounted the EmployeeDetails Component");
        console.log("Route: ", this.$route);
        this.$store.dispatch("accessResource", {
                method: "GET",
                route: this.resourcePath + "/" + this.$route.params.id,
                callback: (result) => {
                    console.log("Result", result);
                    this.employeeDetails = result;
            }
        });
        // this.$store.dispatch("accessResource", {
        //         method: "GET",
        //         route: this.resourcePath + "/" + this.$route.params.id + "/jobs",
        //         callback: (result) => {
        //             console.log("Result", result);
        //             this.employeeList = result;
        //     }
        // });
    },
}
</script>

<style>

</style>