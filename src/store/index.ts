import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    records: []
  },
  mutations: {
    saveRecords (state, records: []) {
      state.records = records
    }
  }
})
