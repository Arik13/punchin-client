<template>
    <div>
        <v-list>
            <v-list-item
                v-for="(job, index) in jobs"
                :key="index"
                :to="{path: pathify(job._id)}"
            >
                <v-list-item-content>
                    <v-list-item-title>{{ job.jobName }}</v-list-item-title>
                    <v-list-item-subtitle>{{ job.address }}</v-list-item-subtitle>
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
            jobs: [],
            resourcePath: "/jobs/"
        }
    },
    mounted() {
        console.log("Mounted the JobsList component");
        this.$store.dispatch("getResource", {route: this.resourcePath, callback: (result) => {
            console.log("Result", result);
            this.jobs = result;
        }});
    },
    methods: {
        pathify(id) {
            return this.resourcePath + id;
        },
        routeToForm() {
            this.$router.push("/addjob");
        }
    },
}
</script>

<style>

</style>