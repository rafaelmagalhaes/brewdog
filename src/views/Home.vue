<template>
  <section>
    <Loader v-if="loading && !error" />
    <span v-if="error">{{error}}</span>
    <div class="row" v-if="!loading">
      <div class="col-4" v-for="(beer,index) in beers" :key="index">
        <beer-list :beer="beer"/>
      </div>
    </div>
  </section>
</template>

<script>
import beerList from '@/components/beerList'
import Loader from '@/components/loading'

export default {
  name: 'home',
  mounted () {
    this.$store.dispatch('getBeers')
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    error () {
      return this.$store.getters.error
    },
    beers () {
      return this.$store.getters.getBeers
    }
  },
  components: {
    beerList,
    Loader
  }
}
</script>
