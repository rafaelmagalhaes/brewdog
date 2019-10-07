<template>
  <header>
    <!-- Fixed navbar -->
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <router-link class="navbar-brand" to="/">Brewdog</router-link>
      <div class="ml-auto">
        <div class="row">
          <div class="col-10">
            <search class="" v-if="!singlePage"/>
          </div>
          <div class="col-2">
            <sort class="" v-if="!singlePage"/>
          </div>
          <div class="col-4" v-if="singlePage">
            <router-link class="navbar-brand " to="/"><i class="fas fa-arrow-left"></i>
            </router-link>
          </div>
        </div>

      </div>
    </nav>
  </header>
</template>

<script>
import search from '@/components/search'
import sort from '@/components/sort'

export default {
  components: {
    search,
    sort
  },
  data () {
    return {
      singlePage: this.$route.name === 'detail'
    }
  },
  watch: {
    '$route' () {
      this.singlePage = !this.singlePage
    }
  }
}
</script>
