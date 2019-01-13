import Vue from "vue";
import Ionic from "@ionic/vue";

import VeeValidate from "vee-validate";

import App from "./App.vue";
import store from "./store";
import router from "./router";



Vue.config.productionTip = false;

Vue.use(Ionic);
Vue.use(VeeValidate);
// check if there is actually a user that has been
// saved by previous instance of Firebase...
store.dispatch("user/doAuthCheck").then(() => {
  new Vue({
    store,
    router,
    render: h => h(App)
  }).$mount("#app");
});
