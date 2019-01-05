/* eslint-disable */

import firebase from "firebase";
export default {
  namespaced: true,
  //
  // STATE
  //
  state: {
    isAuthenticated: false,
    loading: false,
    error: null,
    user: null
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

    // USER LOGIN
    userLogin(state, payload) {
      console.log(payload);
    },

    userLoginRequest(state, payload) {
      state.isAuthenticated = false;
      state.loading = true;
      state.error = null;
    },

    userLoginSuccess(state, payload) {
      console.log(payload);

      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    },

    // USER LOGIN
    createAccount(state, payload) {
      console.log(payload);
    },

    createAccountRequest(state, payload) {
      state.isAuthenticated = false;
      state.loading = true;
      state.error = null;
    },

    createAccountSuccess(state, payload) {
      console.log(payload);

      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    }
  },
  //
  // ACTIONS
  //
  actions: {
    /**
     *
     * @param {*} param0
     * @param {*} payload
     */
    userLogin({ commit }, payload) {
      commit("setLoading", true);
      commit("authError", {
        error: null
      });

      // start the request...
      commit("userLoginRequest", payload);

      // MAKE API CALL
      return firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          // when successful...
          commit("userLoginSuccess", payload);
          return true;
        })
        .catch(err => {
          console.log(err);
          commit("authError", { err });
          return false;
        });
    },
    /**
     *
     * @param {*} param0
     * @param {*} payload
     */
    createAccount({ commit }, payload) {
      commit("setLoading", true);
      commit("authError", {
        error: null
      });
      try {
        console.log("try createAccount");
        // start the request...
        commit("createAccountRequest", payload);

        // MAKE API CALL
        return firebase
          .auth()
          .createUserWithEmailAndPassword(payload.email, payload.password)
          .then(user => {
            // when successful...
            commit("createAccountSuccess", payload);
            return true;
          })
          .catch(err => {
            console.log(err);
            commit("authError", { err });
            return false;
          });
      } catch (e) {
        console.log(e);
        commit("authError", { e });
      }
    }
  },
  //
  // GETTERS
  //
  getters: {
    loggedIn: state => {
      return state.user ? true : false;
    },
    authError: state => {
      return state.error;
    }
  }
};
