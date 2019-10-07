import Vue from 'vue'
import Vuex from 'vuex'
import http from '../config/axios'
import moment from 'moment'

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
    },
    sortByDate (state) {
      let sorted = state.beers
        .sort((a, b) => {
          let dateA = a['first_brewed'].split('/')
          let dateB = b['first_brewed'].split('/')
          return dateA[1] - dateB[1]
        })
      state.beers = sorted
    },
    sortByABV (state) {
      return state.beers.sort((a, b) => {
        let current = a['abv']
        let next = b['abv']
        if (current < next) {
          return -1
        } else if (current > next) {
          return 1
        } else {
          return 0
        }
      })
    }
  },
  actions: {
    async getSingleBeer ({ commit }, payload) {
      await http(`beers/${payload.id}`).then(res => {
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
    },
    sortBeers ({ commit }, sort) {
      if (sort === 'date') {
        commit('sortByDate')
      }
      if (sort === 'abv') {
        commit('sortByABV')
      }
    }
  }
})
