import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    active: 0,
    listItem:null,
    listIndex:0
  },
})

export default store
