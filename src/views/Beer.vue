<template>
  <section>
    <div class="row single__beer" v-if="beer.name">
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3">
        <img  v-if="beer.image_url" :src="beer.image_url" class="img-fluid"/>
      </div>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-9 text-center">
        <h1 class="text-center">{{beer.name}}</h1>
        <hr>
        <p>{{beer.description}}</p>
        <p>Ingredients</p>

        <p v-if="beer.ingredients && beer.ingredients.malt.length">
          <b>Malts</b> <span v-for="(m,index) in beer.ingredients.malt" :key="index"> {{m.name}}, </span>
        </p>

        <p v-if="beer.ingredients && beer.ingredients.hops.length">
          <b>Hops</b> <span v-for="(hop,index) in beer.ingredients.hops" :key="index"> {{hop.name}}, </span>
        </p>

        <p v-if="beer.ingredients && beer.ingredients.yeast">
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
      height: 600px;
      width: 100%;
      @media screen and (max-width: 700px) {
        height: 350px;
      }
    }
  }
</style>
