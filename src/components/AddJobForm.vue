<template>
    <v-container>
        <v-flex xs12 sm8 md8 lg6>
            <v-form ref="form">
                <v-text-field
                    v-model="jobName"
                    :rules="jobNameRules"
                    label="Job Name"
                    required />
                <v-text-field
                    v-model="address"
                    :rules="addressRules"
                    label="Address"
                    required />
                <v-btn
                    @click="addJob()"
                >
                    Add Job
                </v-btn>
            </v-form>
        </v-flex>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            jobName: "",
            address: "",
            jobNameRules: [],
            addressRules: [],
        }
    },
    methods: {
        addJob() {
            this.$store.dispatch("postResource",
            {
                route: "/jobs",
                data: {jobName: this.jobName, address: this.address}
            })
                .then(() => {
                    this.$refs.form.reset();
                });
        }
    }
}
</script>
<style>

</style>