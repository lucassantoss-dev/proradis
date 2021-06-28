import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router"
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all";



Vue.config.productionTip = false;

//axios.defaults.baseURL = 'http://localhost:8000/api';

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
