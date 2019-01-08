/* eslint-disable */

import firebase from "firebase";
import { members } from "@/assets/truck";

export default {
  namespaced: true,
  //
  // STATE
  //
  state: {
    loading: false,
    error: null,
    trucks: [],
    currentTruck: null
  },
  //
  // MUTATIONS
  //
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },

    authError(state, payload) {
      state.error = payload;
    },

    // FETCH DATA
    fetchDataRequest(state, payload) {
      state.loading = true;
      state.error = null;
    },

    fetchDataSuccess(state, payload) {
      console.log(payload);

      state.loading = false;
      state.error = null;
      state.trucks = payload;
    },

    setCurrentTruck(state, payload) {
      state.currentTruck = payload;
    },

    clearCurrentTruck(state, payload) {
      state.currentTruck = null;
    },

    updateTruckNotes(state, payload) {
      let t = state.trucks.map((item, index) => {
        if (item.c1[0].value === payload.id) {
          item.notes = [...payload.newNotes];
          state.trucks[index] = { ...item };
          state.currentTruck = state.trucks[index];
        }
      });
    }
  },
  //
  // ACTIONS
  //
  actions: {
    setCurrentTruck({ commit }, payload) {
      commit("setCurrentTruck", payload);
    },
    addTruckNote({ commit, state }, payload) {
      debugger
      let id = state.currentTruck.c1[0].value;
      let t = state.currentTruck;
      t.notes = t.notes || [];
      let newNotes = t.notes.concat(payload);
      commit("updateTruckNotes", { id, newNotes });
    },
    /**
     *
     * @param {*} param0
     * @param {*} payload
     */
    fetchData({ commit }, payload) {
      commit("setLoading", true);
      commit("authError", {
        error: null
      });

      // start the request...
      commit("fetchDataRequest", payload);

      // MAKE API CALL

      return new Promise(resolve => {
        let allTrucks = members;
        commit("fetchDataSuccess", allTrucks);
        resolve(true);
      });
    }
  },
  //
  // GETTERS
  //
  getters: {
    currentTruck: state => {
      return state.currentTruck;
    },
    allTrucks: state => {
      return state.trucks || [];
    },
    authError: state => {
      return state.error;
    }
  }
};
