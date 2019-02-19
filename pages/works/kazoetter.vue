<template>
  <div>
    <work-detail link="https://count.yaruzo.me/">
      <img slot="cover-image" src="/img/works/kazoetter.png" alt="縦書きったー">
      <template slot="body">
        <h1 class="work-heading">
          かぞえったー
        </h1>
        <h2>概要</h2>
        <p>
          ツイッターに、カウントをツイッターにシェアできるサービスです。
          「うでたて」「勉強」「プログラミング」「つらいときに押すカウンター」など、なんでも数えてツイッターにシェアできます。
        </p>
        <h2>詳しい記事</h2>
        <p>
          <a href="https://qiita.com/retoruto_carry/items/be8b23911b64ce2bfa4f">
            【個人開発】ツイッターにカウントをシェアできるwebサービスをリリースしたので振り返る
          </a>
        </p>
        <h2>使用技術</h2>
        <p>
          laravel, Laravel Socialite, Laravel Socialite, laravel-uuid, jQuery, Google Fonts, bootstap, fontawesome, html, css, conoha VPS, deployer, AWS S3, GitHub等
        </p>
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
