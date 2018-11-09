import Vue from 'vue'

import App from '@/App.vue'
import VueRouter from 'vue-router';
import routes from '@/routes/index.js';
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(iView);


const router = new VueRouter({
    mode: 'history',
    routes // (缩写) 相当于 routes: routes
})
new Vue({
  el: '#app',
    router:router,
  render: h => h(App)
})
