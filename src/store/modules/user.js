/* eslint-disable */
export default {
  namespaced: true,
  state: {
    isAuthenticated: false,
    loading: false,
    error: null
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },

    authError(state, payload) {
      state.error = payload;
    },

    signUserIn(state, payload) {
      console.log(payload);
    }
  },
  actions: {
    signUserIn({ commit }, payload) {
      commit("setLoading", true);
      commit("authError", {
        error: null
      });
      try {
        console.log("try");
        commit("signUserIn", payload);
      } catch (e) {
        console.log(e);
      }
    }
  },
  getters: {}
};
