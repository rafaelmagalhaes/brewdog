<template>
  <section>
    <div class="row">
      <div class="col-4" v-for="(beer,index) in beers" :key="index">
        <beer-list :beer="beer"/>
      </div>
    </div>
  </section>
</template>

<script>
import beerList from '../components/beerList'

export default {
  name: 'home',
  mounted () {
    this.$store.dispatch('getBeers')
  },

  computed: {
    beers () {
      return this.$store.getters.getBeers
    }
  },
  components: {
    beerList
  }
}
</script>
