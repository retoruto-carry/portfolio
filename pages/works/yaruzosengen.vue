<template>
  <div>
    <work-detail link="https://yaruzo.me/">
      <img slot="cover-image" src="/img/works/yaruzosengen.png" alt="縦書きったー">
      <template slot="body">
        <h1 class="work-heading">
          みんなのボタンメーカー
        </h1>
        <h2>概要</h2>
        <p>
          「ツイッターでつぶやけるボタン」を簡単に作成できるサービス
        </p>
        <h2>詳しい記事</h2>
        <p>
          <a href="https://qiita.com/retoruto_carry/items/be8b23911b64ce2bfa4f">
            「ツイッターでつぶやけるボタン」を簡単に作成できるサービスをリリースしました【個人開発】
          </a>
        </p>
        <h2>記事で紹介されました</h2>
        <p>
          <a href="https://atomo.blog/archives/788">
            作業したいけどTwitterから抜け出せない…そんな人にオススメのWebサービス「やるぞ宣言」 - えーろぐ
          </a>
        </p>
        <p>
          <a href="https://note.mu/szkhkzs_09/n/n2a236785de29">
            『やるぞ宣言』を使ってTwitterとnoteで進捗報告を＼やるぞ！／
          </a>
        </p>
        <h2>使用技術</h2>
        <p>
          laravel, vue.js, bootstap4, Intervention Image, fontawesome, html, css, conoha VPS, deployer, AWS S3, GitHub等
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
