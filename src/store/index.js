import Vue from 'vue'
import Vuex from 'vuex'
import http from '../config/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    beers: [],
    beer: {},
    loading: false,
    error: false
  },
  getters: {
    getBeers: state => state.beers,
    singleBeer: state => state.beer,
    loading: state => state.loading,
    error: state => state.error

  },
  mutations: {
    setBeers (state, payload) {
      state.beers = payload
    },
    setSingleBeer (state, payload) {
      state.beer = payload[0]
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
      }).catch(err => {
        console.log(err)
      })
    },
    async getBeers ({ commit, getters }, payload) {
      let config = {
        params: {
          page: 1,
          per_page: 24
        }
      }
      if (payload && payload.beer_name) {
        config.params.beer_name = payload.beer_name
      }
      if (payload && payload.limit > 24) {
        config.params.per_page = payload.limit
      }
      if (payload && payload.page > 1) {
        config.params.page = payload.page
      }
      await http('beers', config).then(res => {
        if (payload && payload.limit > 24 && payload.page > 1) {
          let beers = getters.getBeers
          res.data.forEach(newRes => {
            beers.push(newRes)
          })
          commit('setBeers', beers)
        } else {
          commit('setBeers', res.data)
        }
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
