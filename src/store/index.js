import { createStore } from 'vuex'

export default createStore({
  state: {
    barText : ''
  },
  mutations: {
    setBarText: (state, txt) => {
      state.barText = txt;
    }
  },
  actions: {
  },
  modules: {
  }
})
