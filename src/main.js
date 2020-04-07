import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { firestorePlugin } from 'vuefire'
import { BootstrapVue } from 'bootstrap-vue'

// Install BootstrapVue

Vue.config.productionTip = false
Vue.use(firestorePlugin)
Vue.use(BootstrapVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
