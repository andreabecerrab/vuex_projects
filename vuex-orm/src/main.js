import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store/store.js";

new Vue({
  vuetify,
  store: store,
  el: "#app",
  render: h => h(App)
});
