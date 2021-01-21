import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import loading from "views/lib/loading";
import 'css/main.css'

Vue.config.productionTip = false
Vue.component("loading", loading);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
