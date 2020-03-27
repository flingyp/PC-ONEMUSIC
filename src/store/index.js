import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutation'
import * as getters from './getters'
import * as actions from './action'
// import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

// const debug = process.env.NOD_ENV !== 'production'

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
  }
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
