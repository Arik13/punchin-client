<template>
    <div>
        <v-card>
            <v-card-title>
                {{ jobDetails.jobName }}
            </v-card-title>
            <v-card-subtitle>
                {{ jobDetails.address }}
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
            jobDetails: {},
            resourcePath: "/jobs/"
        }
    },
    mounted() {
        console.log("Mounted the JobDetails Component");
        console.log("Route id: ", this.$route);
        const routeId = this.resourcePath + this.$route.params.id;
        console.log("Route Id", routeId);
        this.$store.dispatch("getResource", {route: routeId, callback: (result) => {
            console.log("Result", result);
            this.jobDetails = result;
        }});
    },
    methods: {
        pathify(id) {
            return this.resourcePath + id;
        }
    },
}
</script>

<style>

</style>