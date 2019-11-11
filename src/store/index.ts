import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    records: []
  },
  mutations: {
    /**
     * Save `records` to the store.
     *
     * @param records - The list of items to be saved
     */
    saveRecords (state, records: []) {
      state.records = records
    }
  }
})
