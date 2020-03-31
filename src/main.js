import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/basejs/elementui.js'
import '@/assets/css/iconfont.css'
import '@/assets/css/global.css'
import 'animate.css'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false

Vue.prototype.$axios = axios
axios.defaults.baseURL = 'https://autumnfish.cn'

Vue.use(VueLazyLoad, {
  loading: "https://s1.ax1x.com/2020/03/31/GMbWkR.gif"
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

