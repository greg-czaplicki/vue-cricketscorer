import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    isActive: {
      player1: true,
      player2: false
    }
  },
  getters: {
    returnActive (state) {
      return state.isActive
    }
  },
  mutations: {
    toggleActive (state) {
      state.isActive.player1 = !state.isActive.player1
      state.isActive.player2 = !state.isActive.player2
    }
  },
  actions: {
    toggleActive (context) {
      context.commit('toggleActive')
    }
  }
})
