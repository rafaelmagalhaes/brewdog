<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-4 beer__Cards" v-for="(beer,index) in beers" :key="index">
          <div class="card mb-4 mt-3">
            <img class="card-img-top m-auto" :src="beer.image_url" :alt="beer.name">
            <div class="card-body">
              <h4 class="card-title">{{beer.name}}</h4>
              <p class="card-text">{{beer.tagline}}</p>
              <p class="card-text">{{beer.first_brewed}}</p>

              <p class="card-text">{{beer.abv}}</p>

              <a href="#" class="btn btn-primary">See Profile</a>
            </div>
          </div>
        </div>
      </div>

    </div>

  </section>
</template>

<script>
export default {
  props: {
    beers: {
      required: true,
      type: Array
    }
  }
}
</script>
<style lang="scss">
  .beer__Cards {
    height: 390px !important;
    margin-bottom: 2rem;

    & .card {
      height: 100%;
    }

    & .card-title {
      font-size: 19px;
    }

    & img {
      height: 160px;
      width: 60px;
    }
  }

</style>
