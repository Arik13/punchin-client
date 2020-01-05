import Vue from 'vue';
import Vuex from 'vuex';
import ax from 'axios';
let axios = ax.create({baseURL: "http://localhost:3000/api/"});

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isDrawerOpen: true
    },
    getters: {
        getDummyJobs(state) {
            return state.dummyJobs;
        }
    },
    mutations: {
        toggleDrawerOpen(state) {
            state.isDrawerOpen = !state.isDrawerOpen;
        }
    },
    actions: {
        // eslint-disable-next-line
        getResource({state}, payload) {
            console.log("Getting Resource: ", payload.route);
            axios.get(payload.route).then(res => {
                payload.callback(res.data);
            });
        },
        // eslint-disable-next-line
        postResource({state}, payload) {
            return new Promise((resolve, reject) => {
                console.log(payload);
                axios.post(payload.route, payload.data).then(res => {
                    console.log(res);
                    resolve();
                }).catch(err => {
                    console.log(err);
                    reject();
                });
            })
        },
        // eslint-disable-next-line
        putResource({state}, payload) {
            return new Promise((resolve, reject) => {
                console.log(payload);
                axios.put(payload.route, payload.data).then(res => {
                    console.log(res);
                    resolve();
                }).catch(err => {
                    console.log(err);
                    reject();
                });
            })
        },
        toggleDrawerOpen({commit}) {
            commit("toggleDrawerOpen");
        }
    }
});