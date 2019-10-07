<template>
  <section>
    <div class="row single__beer">
      <div class="col-3">
        <img :src="beer.image_url" class="img-fluid"/>
      </div>
      <div class="col">
        <h1>{{beer.name}}</h1>
        <p>{{beer.description}}</p>
        <p>Ingredients</p>

        <p>
          <b>Malts</b> <span v-for="(malt,index) in beer.ingredients.malt" :key="index"> {{malt.name}}, </span>
        </p>

        <p>
          <b>Hops</b> <span v-for="(hop,index) in beer.ingredients.hops" :key="index"> {{hop.name}}, </span>
        </p>

        <p>
          <b>Yeast</b> <span> {{beer.ingredients.yeast}} </span>
        </p>
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
<style scoped lang="scss">
  .single__beer {
    & img {
      object-fit: contain;
      height: 50%;
    }
  }
</style>
