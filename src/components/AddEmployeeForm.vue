<template>
    <v-container>
        <v-flex xs12 sm8 md8 lg6>
            <v-form ref="form">
                <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Name"
                    required />
                <v-text-field
                    v-model="role"
                    :rules="roleRules"
                    label="Role"
                    required />
                <v-btn
                    @click="addEmployee()"
                >
                    Add Employee
                </v-btn>
            </v-form>
        </v-flex>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            name: "",
            role: "",
            nameRules: [],
            roleRules: [],
        }
    },
    methods: {
        addEmployee() {
            this.$store.dispatch("postResource",
            {
                route: "/employees",
                data: {name: this.name, role: this.role}
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