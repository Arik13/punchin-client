import Vue from 'vue';
import Vuex from 'vuex';
import ax from 'axios';
let axios = ax.create({baseURL: "http://localhost:3000/api/"});

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isDrawerOpen: true,
        authToken: null,
        userId: null,
        role: null,
        isEmployed: null,
    },
    getters: {

    },
    mutations: {
        toggleDrawerOpen(state) {
            state.isDrawerOpen = !state.isDrawerOpen;
        }
    },
    actions: {
        accessResource({state}, payload) {
            console.log(payload.method, ": ", payload.route);
            console.log("Payload: ", payload);
            axios({
                method: payload.method,
                url: payload.route,
                data: payload.data,
                headers: {Authorization: "Bearer " + state.authToken}
            })
                .then(res => {
                    if (payload.callback) {
                        payload.callback(res.data);
                    }
                    console.log("Response: ", res);
                })
                .catch(err => {
                    console.log(err);
                });
        },
        login({dispatch, state}, payload) {
            payload.method = "PUT";
            payload.route = "/users";
            payload.callback = (data) => {
                console.log("Logged In, storing auth data");
                console.log(data);
                state.authToken = data.token;
                state.userId = data.userId;
                state.role = data.role;
                state.isEmployed = data.isEmployed;

                localStorage.setItem("authToken", data.token);
                localStorage.setItem("userId", data.userId);
                localStorage.setItem("role", data.role);
                localStorage.setItem("isEmployed", data.isEmployed);
                payload.reroute();
            }
            dispatch("accessResource", payload);
        },
        logout({state}, payload) {
            state.authToken = null;
            state.userId = null;
            state.role = null;
            state.isEmployed = null;
            localStorage.removeItem("authToken");
            localStorage.removeItem("userId");
            localStorage.removeItem("role");
            localStorage.removeItem("isEmployed");
            payload.reroute();
        },
        toggleDrawerOpen({commit}) {
            commit("toggleDrawerOpen");
        },
    }
});