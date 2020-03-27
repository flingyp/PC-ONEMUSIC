import * as types from './mutation-type'

const mutations = {
  [types.SET_CURRENT_URL] (state, url) {
    state.currentUrl = url
  },
  [types.SET_MV_URL] (state, url) {
    state.mvUrl = url
  }
}

export default mutations
