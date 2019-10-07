<template>
  <div id="app">
    <navbar class=""/>
    <div class="container main-container">
      <router-view/>
    </div>
  </div>
</template>
<script>
import navbar from '@/components/navbar'

export default {
  components: {
    navbar
  }
}
</script>
<style lang="scss">
.main-container{
  margin-top: 5rem;
}
</style>
