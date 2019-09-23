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
      state.user = null;
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
      state.user = payload.user;
    },

    // USER LOGOUT
    userLogout(state, payload) {
      console.log(payload);
    },

    userLogoutRequest(state, payload) {
      state.isAuthenticated = true;
      state.loading = true;
      state.error = null;
    },

    userLogoutSuccess(state, payload) {
      console.log(payload);

      state.isAuthenticated = false;
      state.loading = false;
      state.error = null;
      state.user = null;
    },

    // USER CREATE ACCOUNT
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
    doAuthCheck({ commit }, payload) {
      return new Promise((resolve, reject) => {
        // Setup Firebase onAuthStateChanged handler
        // https://firebase.google.com/docs/reference/js/firebase.auth.Auth#onAuthStateChanged
        firebase.auth().onAuthStateChanged(user => {
          debugger;
          if (user) {
            const newUser = {
              id: user.uid,
              name: user.displayName,
              email: user.email,
              photoUrl: user.photoURL
            };
            commit("userLoginSuccess", {
              user: { ...newUser }
            });
            resolve(newUser);
          } else {
            commit("authError", null);
            commit("authChecked", {
              authChecked: true
            });
            resolve(null);
          }
        });
      }).catch(cc => {
        console.log(cc);
        commit("authError", cc);
      });
    },

    /**
     *
     * @param {*} param0
     * @param {*} payload
     */
    userLogout({ commit }, payload) {
      commit("setLoading", true);
      commit("authError", {
        error: null
      });

      // start the request...
      commit("userLogoutRequest", payload);

      // MAKE API CALL
      return firebase
        .auth()
        .signOut()
        .then(user => {
          // when successful...
          commit("userLogoutSuccess", payload);
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
          commit("userLoginSuccess", user);
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
    socialMediaLogin({ commit }, payload) {
      commit("setLoading", true);
      commit("authError", {
        error: null
      });

      // start the request...
      commit("userLoginRequest", payload);

      var provider = new firebase.auth.FacebookAuthProvider();
      provider.setCustomParameters({
        display: "popup"
      });

      return firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
          commit("userLoginSuccess", { ...user, accessToken: token });
          return true;
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
          console.log(error);
          commit("authError", { err: error });
          return false;
        });

      // MAKE API CALL
      return firebase
        .auth()
        .signInWithPopup()
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
          .createUserWithEmailAndPassword(payload.email, payload.password1)
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
      } catch (err) {
        console.log(err);
        commit("authError", { err });
        return false;
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
    },
    currentUser: state => {
      return state.user;
    }
  }
};
