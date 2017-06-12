import axios from 'axios';

import Vue from 'vue'
import App from './App.vue'
import router from './router';
import store from './store';
import VueElectron from 'vue-electron';


Vue.config.productionTip = false;

if (!process.env.IS_WEB) Vue.use(VueElectron)

/* eslint-disable no-new */
new Vue({
  store,
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
