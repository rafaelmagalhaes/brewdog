<template>
  <section>
    <Loader v-if="loading && !error" />
    <span v-if="error">{{error}}</span>
    <div class="row" v-if="!loading">
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4" v-for="(beer,index) in beers" :key="index">
        <beer-list :beer="beer"/>
      </div>
    </div>
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>

  </section>
</template>

<script>
import beerList from '@/components/beerList'
import Loader from '@/components/loading'
import InfiniteLoading from 'vue-infinite-loading'
export default {
  name: 'home',
  mounted () {
    this.$store.dispatch('getBeers')
  },
  data () {
    return {
      per_page: 24,
      limit: 80,
      page: 1
    }
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
  methods: {
    infiniteHandler ($state) {
      setTimeout(async () => {
        this.per_page += 24
        this.page += 1
        // check limit
        if (this.per_page >= this.limit) {
          this.per_page -= (this.per_page - this.limit)
        }
        await this.$store.dispatch('getBeers', { limit: this.per_page, page: this.page })
        $state.loaded()

        if (this.per_page === this.limit) {
          $state.complete()
        }
      }, 1000)
    }
  },
  components: {
    beerList,
    Loader,
    InfiniteLoading
  }
}
</script>
