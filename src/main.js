import Vue from 'vue'
import App from './App.vue'
import vZtree from 'v-ztree';
// import jQuery from 'jquery';

// Vue.use(jQuery);
Vue.use(vZtree);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
