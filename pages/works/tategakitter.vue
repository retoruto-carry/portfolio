<template>
  <div>
    <work-detail>
      <img slot="cover-image" src="/img/works/tategakitter.png" alt="縦書きったー">
      <template slot="body">
        <h1 class="work-heading">
          縦書きったー
        </h1>
        <h2>概要</h2>
      </template>
    </work-detail>
  </div>
</template>

<script>
import workDetail from '@/components/workDetail'
export default {
  components: {
    workDetail
  }
}
</script>

<style>
</style>
