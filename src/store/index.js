import Vue from 'vue'
import Vuex from 'vuex'
// import router from '../router/index'
// import firebase from "firebase";



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    token: ""
  },
  mutations: {
    UPDATE_TOKEN(state, payload) {
      this.token = payload;
    },
    UPDATE_USER(state, payload) {
      this.user = payload;
    }
  },
  actions: {
    // signIn() {
      
    // },
    // signinAfterRedirect({ commit }) {
      
    // }
  },
  modules: {
  }
})
