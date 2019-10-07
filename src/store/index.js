import Vue from 'vue'
import Vuex from 'vuex'
import http from '../config/axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beers: [],
    beer: {}
  },
  getters: {
    getBeers: state => state.beers
  },
  mutations: {
    setBeers (state, payload) {
      state.beers = payload
    }
  },
  actions: {
    getBeers ({ commit }) {
      http('beers').then(res => {
        commit('setBeers', res.data)
      }).catch(err => {
        console.log(err)
      })
    }
  }
})
