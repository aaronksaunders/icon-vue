import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDs7PUvcA8tjZqYZyKNIzx2Z8okBYsBM_o",
  authDomain: "in3grow-app.firebaseapp.com",
  databaseURL: "https://in3grow-app.firebaseio.com",
  projectId: "in3grow-app",
  storageBucket: "in3grow-app.appspot.com",
  messagingSenderId: "212863563912"
});
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
  },
})
