import Vue from 'vue'
import App from './App.vue'
import { MdField } from 'vue-material/dist/components';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(MdField);
Vue.use(VueMaterial);
Vue.use(BootstrapVue, IconsPlugin);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
