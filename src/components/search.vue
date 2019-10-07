<template>
  <section>
    <form class="form-inline mt-2 mt-md-0" data-children-count="1">
      <input class="form-control mr-sm-2" type="text" placeholder="Search by name" v-model="name"
             @keydown.enter="searchByName">
      <button class="btn btn-outline-success my-2 my-sm-0" @click="searchByName">Search</button>
    </form>
  </section>
</template>
<script>
export default {
  data () {
    return {
      name: ''
    }
  },
  methods: {
    searchByName () {
      this.$store.dispatch('getBeers', { beer_name: this.name })
    }
  }
}
</script>
