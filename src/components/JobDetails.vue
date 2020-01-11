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
        <v-divider></v-divider>
        <v-card>
            <v-list dense>
                <v-subheader>ASSIGNED</v-subheader>
                <v-list-item
                    v-for="(employee, index) in employeeList"
                    :key="index"
                >
                    <v-list-item-action>
                        <v-checkbox v-model="employee.isAssigned"></v-checkbox>
                    </v-list-item-action>

                    <v-list-item-content>
                        <v-list-item-title v-text="employee.name"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="assignEmployees()">Assign</v-btn>
            </v-card-actions>
        </v-card>

        <v-btn fab dark large fixed right bottom @click="addEmployee()">
            <v-icon dark>add</v-icon>
        </v-btn>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobId: null,
            jobDetails: {},
            employeeList: [],
            // jobEmployeeList: [],
            resourcePath: "/jobs"
        }
    },
    computed: {
        checkboxes() {
            let checkboxes = [];
            return checkboxes;
        },
    },
    methods: {
        getJobDetails() {
            this.$store.dispatch("accessResource", {
                    method: "GET",
                    route: this.resourcePath + "/" + this.$route.params.id,
                    callback: (result) => {
                        console.log("Result", result);
                        this.jobDetails = result;
                }
            });
        },
        // getJobEmployeeList() {
        //     this.$store.dispatch("accessResource", {
        //             method: "GET",
        //             route: this.resourcePath + "/" + this.$route.params.id + "/employees",
        //             callback: (result) => {
        //                 console.log("Result", result);
        //                 this.employeeList = result;
        //         }
        //     });
        // },
        getEmployeeList() {
            this.$store.dispatch("accessResource", {
                method: "GET",
                route: "/employees",
                callback: (result) => {
                    console.log("Employees", result);
                    let employees = result;
                    for (let i = 0; i < employees.length; i++) {
                        console.log("Employee: ", employees[i]);
                        console.log("Employee: ", employees[i]);
                        employees[i].isAssigned = employees[i].jobs.find(id => id == this.jobId);
                    }
                    this.employeeList = employees;
                }
            });
        },
        assignEmployees() {
            let ids = [];
            let areAssigned = [];
            for (let i = 0; i < this.employeeList.length; i++) {
                ids.push(this.employeeList[i]._id);
                areAssigned.push(this.employeeList[i].isAssigned);
            }
            this.$store.dispatch("accessResource", {
                method: "PUT",
                route: "/employees",
                data: {
                    ids: ids,
                    areAssigned: areAssigned,
                    jobId: this.jobId,
                },
                callback: (result) => {
                    console.log("Employees", result);
                    // let employees = result;
                    // for (let i = 0; i < employees.length; i++) {
                    //     console.log("Employee: ", employees[i]);
                    //     console.log("Employee: ", employees[i]);
                    //     let id = this.jobId;
                    //     employees[i].assigned = employees[i].jobs.find(id => id == this.jobId);
                    // }
                    // this.employeeList = employees;
                }
            });
        }
    },
    mounted() {
        console.log("Mounted the JobDetails Component");
        console.log("Route: ", this.$route);
        this.jobId = this.$route.params.id;
        this.getJobDetails();
        this.getEmployeeList();
    },
}
</script>

<style>

</style>