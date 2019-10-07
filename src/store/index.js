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
    getBeers: state => state.beers,
    singleBeer: state => state.beer
  },
  mutations: {
    setBeers (state, payload) {
      state.beers = payload
    },
    setSingleBeer (state, payload) {
      state.beer = payload
    }
  },
  actions: {
    getSingleBeer ({ commit }, payload) {
      http(`beers/${payload.id}`).then(res => {
        commit('setSingleBeer', res.data)
      }).catch(res => {
        console.log(res.data)
      })
    },
    getBeers ({ commit }, payload) {
      let config = {
        params: {
          per_page: 24
        }
      }
      if (payload) {
        config.params.beer_name = payload.beer_name
      }
      http('beers', config).then(res => {
        commit('setBeers', res.data)
      }).catch(err => {
        console.log(err)
      })
    }
  }
})
