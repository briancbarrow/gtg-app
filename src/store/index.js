import Vue from 'vue'
import Vuex from 'vuex'
// import router from '../router/index'
// import firebase from "firebase";



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    token: ""
  },
  mutations: {
    UPDATE_TOKEN(state, payload) {
      this.state.token = payload;
    },
    UPDATE_USER(state, payload) {
      this.state.user = payload;
    }
  },
  actions: {
    signIn({ commit }, payload) {
      commit("UPDATE_TOKEN", payload.token);
      commit("UPDATE_USER", payload.user)
    },
    // signinAfterRedirect({ commit }) {
      
    // }
  },
  modules: {
  }
})
