import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/basejs/elementui.js'
import '@/assets/css/iconfont.css'
import '@/assets/css/global.css'
import 'animate.css'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$axios = axios
axios.defaults.baseURL = 'https://autumnfish.cn'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

