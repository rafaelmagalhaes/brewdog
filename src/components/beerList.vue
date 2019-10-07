<template>
  <section>
    <div class="beer__Cards" @click="beerDetail(beer.id)">
      <div class="card mb-4 mt-3">
        <img class="card-img-top m-auto" :src="beer.image_url" :alt="beer.name">
        <hr>
        <div class="card-body">
          <h4 class="card-title">{{beer.name}}</h4>
          <p class="card-text">{{beer.tagline}}</p>
          <p class="card-text">First Brewed {{beer.first_brewed}}</p>
          <p class="card-text">ABV {{beer.abv}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    beer: {
      required: true,
      type: Object
    }
  },
  methods: {
    beerDetail (id) {
      alert(id)
    }
  }
}
</script>
<style lang="scss">
  .beer__Cards {

    &:hover {
      box-shadow: 0 0 5px 5px rgba(0,0,0,0.5);

    }
    transition: box-shadow 0.5s  ease;
    border-radius: 5px;
    box-shadow: 0 0 5px #ccc;
    height: 350px !important;
    margin-bottom: 2rem;
    cursor: pointer;

    & .card {
      height: 100%;
    }

    & .card-title {
      font-size: 19px;
    }

    & img {
      padding-top: 1rem;
      height: 120px;
      object-fit: contain;
    }
  }

</style>
