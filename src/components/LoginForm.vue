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
                <v-btn
                    @click="login()"
                >
                    Login
                </v-btn>
            </v-form>
        </v-flex>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            email: "ariksven@gmail.com",
            password: "testing",
            emailRules: [],
            passwordRules: [],
        }
    },
    methods: {
        login() {
            this.$store.dispatch("login", {
                data: {
                        email: this.email,
                        password: this.password,
                    },
                reroute: () => {
                    console.log("rerouting");
                    this.$router.push("/");
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