import Vue from "vue";
import Router from "vue-router";
import store from "../store";
import Login from "views/login";
import Account from "views/account"
import Dashboard from "views/dashboard";
import PageNotFound from "views/error/PageNotFound";

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/login',
    name: "Login",
    component: Login
  },
  {
    path: '/account',
    name: "Account",
    component: Account
  },
  { path: "*", component: PageNotFound }
]
const router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = store.getters.isAuthenticated;
  if (authRequired && !loggedIn) {
    return next('/login');
  }
  next();
})

export default router