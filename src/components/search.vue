<template>
  <section>
    <div class="row" data-children-count="1">
      <div class="col-8">
        <input class="form-control" type="text" placeholder="Search by name" v-model="name"
               @keydown.enter="searchByName">
      </div>
      <div class="col-4">
        <button class="btn btn-outline-success " @click.prevent="searchByName">Search</button>
      </div>
    </div>
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
      if (this.name !== '') { // dont do a searh
        this.$store.dispatch('getBeers', { beer_name: this.name })
      }
    }
  }
}
</script>
