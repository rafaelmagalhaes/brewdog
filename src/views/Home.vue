<template>
  <section>
    <beer-list :beers="beers"/>
  </section>
</template>

<script>
import beerList from '../components/beerList'
export default {
  name: 'home',
  mounted(){
  this.$store.dispatch('getBeers')
  },
  computed:{
    beers(){
      return this.$store.getters.getBeers
    }
  },
  components: {
    beerList
  }
}
</script>
