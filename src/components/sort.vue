<template>
  <section>
    <b-dropdown size="md" variant="outline-success" no-caret>
      <template v-slot:button-content>
        <i class="fas fa-filter"></i>
      </template>
      <b-dropdown-item @click="sort('date')">First brewed</b-dropdown-item>
      <b-dropdown-item @click="sort('abv')">ABV</b-dropdown-item>
    </b-dropdown>
  </section>
</template>
<script>
  import { BDropdown } from 'bootstrap-vue'

  export default {
    components: {
      BDropdown
    },
    methods: {
      sort (type) {
        this.$store.dispatch('sortBeers', type)
      }
    }
  }
</script>
