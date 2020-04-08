import Vue from 'vue'
import VueRouter from 'vue-router'
// import firebase from 'firebase/app'
import store from "../store/index"
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form',
    name: 'Form',
    meta: { requiresAuth: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Form.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },

]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = store.state.user
  const requiresAuth = to.matched.some(rec => rec.meta.requiresAuth);
  console.log("USER", currentUser);
  console.log("user truthy", !currentUser)
  if (requiresAuth && !currentUser) next('login');
  // else if(!requiresAuth && currentUser) next('about');
  else next();
})

export default router
