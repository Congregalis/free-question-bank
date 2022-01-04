import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import animated from 'animate.css'
import axios from 'axios';
import VueParticles from 'vue-particles'; 

Vue.config.productionTip = false
axios.defaults.baseURL='http://8.140.180.184:8081';
Vue.prototype.axios = axios
Vue.use(ElementUI)
Vue.use(animated)
Vue.use(VueParticles)

new Vue({
  render: h => h(App),
}).$mount('#app')
