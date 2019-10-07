<template>
  <section>
   <pre>
     {{beer}}
   </pre>
  </section>
</template>

<script>
export default {
  data () {
    return {
      route: this.$route.params
    }
  },
  mounted () {
    this.$store.dispatch('getSingleBeer', { id: this.route.id })
  },
  computed: {
    beer () {
      return this.$store.getters.singleBeer
    }
  }
}
</script>
