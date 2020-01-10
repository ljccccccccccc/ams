import Vue from 'vue';
import App from './App.vue';
//element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//router
import VueRouter from 'vue-router';
import router from '@/router/index';

//vuex
import store from '@/store';

//axios
import axios from 'axios';
import VueAxios  from 'vue-axios';

Vue.use(VueAxios, axios);

Vue.use(VueRouter);

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
