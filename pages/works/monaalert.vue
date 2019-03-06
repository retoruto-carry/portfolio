<template>
  <div>
    <work-detail link="https://web.archive.org/web/20180312084535/http://retoruto-carry.96.lt/">
      <img slot="cover-image" src="/img/works/monaalert.png" alt="モナアラート">
      <template slot="body">
        <h1 class="work-heading">
          モナアラート
        </h1>
        <h2>概要</h2>
        <p>
          一定時間ごとにモナコインの現在価格を声で教えてくれる<br>
          サービスは終了しました。リンクは、魚拓です。動作しません。外観のみ確認出来ます。
        </p>
        <h2>使用技術</h2>
        <p>bootsrap4, html, css, javascript, ZaifAPI</p>
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
