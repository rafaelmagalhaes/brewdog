<template>
  <header>
    <!-- Fixed navbar -->
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <router-link class="navbar-brand" to="/">Brewdog</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
              aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <search class="ml-auto"/>
        <sort/>
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
    }
  }
</script>
