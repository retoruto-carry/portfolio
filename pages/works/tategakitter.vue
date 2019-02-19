<template>
  <div>
    <work-detail link="https://tategakitter.netlify.com/">
      <img slot="cover-image" src="/img/works/tategakitter.png" alt="縦書きったー">
      <template slot="body">
        <h1 class="work-heading">
          縦書きったー
        </h1>
        <h2>概要</h2>
        <p>縦書きツイートを簡単に作れるサービス</p>
        <h2>使用技術</h2>
        <p>nuxt.js, vue.js, PWA, eslint, underscore.js, vue-bootstap, fontawesome, html, css, netlify, GitHub</p>
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
