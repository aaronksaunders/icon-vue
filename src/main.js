import Vue from "vue";
import Ionic from "@ionic/vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({

});

Vue.config.productionTip = false;

Vue.use(Ionic);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
