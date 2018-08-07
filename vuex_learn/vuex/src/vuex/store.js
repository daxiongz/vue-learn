import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 状态对象
const state = {
  count: 1
}

const mutations = {
  add (state, num) {
    state.count += num
  },
  reduce (state, num) {
    state.count -= num
  }
}

const getters = {
  count: function (state) {
    state.count += 20
    return state.count
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters
})
