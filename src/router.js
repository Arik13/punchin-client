import VueRouter from 'vue-router';
import Vue from 'vue';
import AddJobForm from "./components/AddJobForm";
import AddEmployeeForm from "./components/AddEmployeeForm";
import JobsList from "./components/JobsList";
import EmployeesList from "./components/EmployeesList";
import JobDetails from "./components/JobDetails";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";

Vue.use(VueRouter);

var routes = [
    {path: '/addjob', components: {default: AddJobForm}},
    {path: '/addemployee', components: {default: AddEmployeeForm}},
    {path: '/jobs', components: {default: JobsList}},
    {path: '/jobs/:id', components: {default: JobDetails}},
    {path: '/employees', components: {default: EmployeesList}},
    {path: '/employees/:id', components: {default: EmployeesList}},
    {path: '/signup', components: {default: SignupForm}},
    {path: '/login', components: {default: LoginForm}},
];

export default new VueRouter({
    routes,
});