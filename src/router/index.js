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
    path: '/about',
    name: 'About',
    meta: { requiresAuth: true },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
  const currentUser = store.user
  const requiresAuth = to.matched.some(rec => rec.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('login');
  else next();
})

export default router
