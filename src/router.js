import VueRouter from 'vue-router';
import Vue from 'vue';
import store from "./store";
import AddJobForm from "./components/AddJobForm";
import AddEmployeeForm from "./components/AddEmployeeForm";
import JobsList from "./components/JobsList";
import EmployeesList from "./components/EmployeesList";
import JobDetails from "./components/JobDetails";
import EmployeeDetails from "./components/EmployeeDetails";
import SignupForm from "./components/SignupForm";
import LoginForm from "./components/LoginForm";
import Logout from "./components/Logout";
import ConnectEmployeeForm from "./components/ConnectEmployeeForm";

Vue.use(VueRouter);

function authUser(to, from, next) {
    if(!store.state.authToken) next("/login");
    else next();
}

var routes = [
    // Admin Routes
    {path: '/addjob', components: {default: AddJobForm}, beforeEnter: authUser},
    {path: '/addemployee', components: {default: AddEmployeeForm}, beforeEnter: authUser},
    {path: '/jobs', components: {default: JobsList}},
    {path: '/jobs/:id', components: {default: JobDetails}, beforeEnter: authUser},
    {path: '/employees', components: {default: EmployeesList}, beforeEnter: authUser},
    {path: '/employees/:id', components: {default: EmployeeDetails}, beforeEnter: authUser},

    // Employee Routes
    {path: '/connectemployee', components: {default: ConnectEmployeeForm}, beforeEnter: authUser},

    // Login Routes
    {path: '/signup', components: {default: SignupForm}},
    {path: '/login', components: {default: LoginForm}},
    {path: '/logout', components: {default: Logout}},

];

export default new VueRouter({
    routes,
});