import allTrucks from "../../assets/truck";

export default {
  namespaced: true,
  state: {
    trucks: [],
    currentTruck : null,
    authError: null
  },
  actions: {
    fetchData({ commit }, payload) {
      commit("updateTrucks", allTrucks);
    },
    setCurrentTruck({ commit }, payload) {
      commit("setCurrentTruck", payload);
    }
  },
  mutations: {
    updateTrucks(state, payload) {
      state.trucks = payload;
    },
    setCurrentTruck(state, payload) {
      state.currentTruck = payload;
    }
  },
  getters: {
    authError: state => {
      return state.authError;
    },
    allTrucks: state => {
      return state.trucks;
    },
    currentTruck: state => {
        return state.currentTruck;
      }
  }
};
