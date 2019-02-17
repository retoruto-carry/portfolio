<template>
  <div>
    <navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>
<style>
.container {
  max-width: 960px;
}
</style>
