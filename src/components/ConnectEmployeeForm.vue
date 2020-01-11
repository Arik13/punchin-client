<template>
    <v-container>
        <v-flex xs12 sm8 md8 lg6>
            <v-form ref="form">
                <h3>Enter your employer code to connect</h3>
                <v-text-field
                    v-model="employeeCode"
                    :rules="employeeCodeRules"
                    label="Employer Code"
                    required />
                <v-btn
                    @click="connectToEmployer()"
                >
                    Connect
                </v-btn>
            </v-form>
        </v-flex>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            employeeCode: "",
            employeeCodeRules: [],
        }
    },
    methods: {
        connectToEmployer() {
            this.$store.dispatch("accessResource", {
                method: "PUT",
                route: "/employees/codes",
                data: {
                    employeeCode: this.employeeCode
                },
                callback: (result) => {
                    console.log("Result: ", result);
                }
            })
        }
    }
}
</script>

<style>

</style>