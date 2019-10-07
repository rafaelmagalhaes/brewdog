<template>
  <section>
    <div class="row">
      <div class="col-3">
        <img :src="beer.image_url" class="img-fluid"/>
      </div>
      <div class="col">
        <h1>{{beer.name}}</h1>
        <p>{{beer.description}}</p>
        <p>Ingredients</p>
        <div v-for="(malt,index) in beer.ingredients.malt" :key="index">
          {{malt.name}} {{ malt.amount}}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      route: this.$route.params
    }
  },
  async mounted () {
    await this.$store.dispatch('getSingleBeer', { id: this.route.id })
  },
  computed: {
    beer () {
      return this.$store.getters.singleBeer
    }
  }
}
</script>
