import Vue from "vue";
import Ionic from "@ionic/vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyD3dxdxD3Wux-XUj_aaFF5tmVeyQtnelM4",
  authDomain: "vue-app-7f475.firebaseapp.com",
  databaseURL: "https://vue-app-7f475.firebaseio.com",
  projectId: "vue-app-7f475",
  storageBucket: "vue-app-7f475.appspot.com",
  messagingSenderId: "326758384574"
});

Vue.config.productionTip = false;

Vue.use(Ionic);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
