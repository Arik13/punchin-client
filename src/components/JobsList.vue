<template>
    <div>
        <v-list>
            <template v-if="jobList.length != 0">
                <v-list-item
                    v-for="(job, index) in jobList"
                    :key="index"
                    :to="{path: pathify(job._id)}"
                >
                    <v-list-item-content>
                        <v-list-item-title>{{ job.jobName }}</v-list-item-title>
                        <v-list-item-subtitle>{{ job.address }}</v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
            </template>
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
            jobList: [],
            resourcePath: "/jobs",
            formPath: "/addjob",
        }
    },
    mounted() {
        this.$store.dispatch("accessResource", {
            method: "GET",
            route: this.resourcePath,
            callback: (result) => {
                console.log("Result", result);
                this.jobList = result;
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