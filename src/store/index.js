import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import truck from './modules/truck'
import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({

});
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    truck
  },
})
