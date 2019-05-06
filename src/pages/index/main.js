import Vue from 'vue'
import index from './index.vue'
import router from './router'
import store from '../../store'
import { Button } from 'vant';
import 'vant/lib/index.css';
Vue.use(Button);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(index)
}).$mount('#index')