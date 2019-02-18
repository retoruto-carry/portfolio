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
h1 {
  font-size: 1.5em;
}
h2 {
  font-size: 1.3em;
  padding-bottom: 0.3em;
  border-bottom: solid 1px #ddd;
}
</style>
