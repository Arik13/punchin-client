<template>
    <v-container>
        <v-flex xs12 sm8 md8 lg6>
            <v-text-field
                label="Code"
                v-model="employeeCode"
                ref="copyableEmployeeCode"
            >
            </v-text-field>
            <v-btn
                depressed
                tile
                @click.prevent="copyCodeToClipboard()">
                Copy
            </v-btn>
            <v-btn
                depressed
                tile
                @click.prevent="generateCode()">
                Generate
            </v-btn>
            <br><br>
            <p>
                Note: Codes expire after 48 hours.
            </p>
            <p>
                Employees require a code to connect to your companies Punchin service. This helps keep your data private and secure.
            </p>
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
            employeeCode: null,
        }
    },
    methods: {
        generateCode() {
            this.$store.dispatch("accessResource", {
                method: "GET",
                route: "/employees/codes",
                callback: (result) => {
                    console.log("Result", result);
                    this.employeeCode = result;
                }
            });
        },
        copyCodeToClipboard () {
            let copyableEmployeeCode = this.$refs.copyableEmployeeCode.$el.querySelector('input');
            copyableEmployeeCode.select();
            document.execCommand("copy");
            copyableEmployeeCode.setAttribute('type', 'text');
            window.getSelection().removeAllRanges();
        }
    }
}
</script>
<style>

</style>