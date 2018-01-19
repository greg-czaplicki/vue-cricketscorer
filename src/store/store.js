import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    isActive: {
      player1: true,
      player2: false
    },
    player1Scores: {
      twenty: 1,
      nineteen: 0,
      eighteen: 0,
      seventeen: 0,
      sixteen: 0,
      fifteen: 0,
      bullseye: 0
    },
    player2Scores: {
      twenty: 3,
      nineteen: 0,
      eighteen: 0,
      seventeen: 0,
      sixteen: 0,
      fifteen: 0,
      bullseye: 0
    }
  },
  getters: {
    returnActive (state) {
      return state.isActive
    },
    returnPlayer1Scores (state) {
      return state.player1Scores
    },
    returnPlayer2Scores (state) {
      return state.player2Scores
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
