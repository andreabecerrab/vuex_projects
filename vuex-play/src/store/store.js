import Vue from "vue";
import Vuex from "vuex";

import admindashboard from "./modules/admindashboard";

Vue.use(Vuex);
const store = new Vuex.Store({
  //vars
  state: {},
  //get my states
  getters: {},
  //not async
  mutations: {},
  //for async call --> then do mutations
  actions: {},
  modules: {
    admindashboard
  }
});

export default store;
