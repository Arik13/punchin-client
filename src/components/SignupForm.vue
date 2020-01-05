<template>
    <v-container>
        <v-flex xs12 sm8 md8 lg6>
            <v-form ref="form">
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    required />
                <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    label="Password"
                    :type="'password'"
                    required />
                <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Name"
                    required />
                <v-radio-group v-model="radioGroup">
                    <v-radio
                        v-for="(employee, index) in roles"
                        :key="index"
                        :label="employee"
                        :value="index"
                    ></v-radio>
                </v-radio-group>
                <v-btn
                    @click="signup()"
                >
                    Sign Up
                </v-btn>
            </v-form>
        </v-flex>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            email: "",
            password: "",
            name: "",
            roles: ["Employee", "Contractor"],
            radioGroup: 0
        }
    },
    methods: {
        signup() {
            this.$store.dispatch("postResource",
            {
                route: "/users",
                data:
                    {
                        email: this.email,
                        password: this.password,
                        name: this.name,
                        role: this.roles[this.radioGroup]
                    }
            })
                .then(() => {
                    //this.$refs.form.reset();
                });
        }
    }
}
</script>
<style>

</style>