<template>
  <div>
    <work-detail link="https://btnmaker.me/">
      <img slot="cover-image" src="/img/works/btnmaker.png" alt="みんなのボタンメーカー">
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
          <a href="https://creive.me/archives/15277/">
            最近話題になったイケてるWebサービス・アプリ9選（2018年9月編）
          </a>
        </p>
        <p>
          <a href="https://www.pc-weblog.com/btn-create/">
            「みんなのボタンメーカー」というツールで手軽にTwitterで呟けるようにハッシュタグを登録してみた
          </a>
        </p>
        <p>
          <a href="https://scrapbox.io/vtuber/%E3%81%BF%E3%82%93%E3%81%AA%E3%81%AE%E3%83%9C%E3%82%BF%E3%83%B3%E3%83%A1%E3%83%BC%E3%82%AB%E3%83%BC">
            みんなのボタンメーカー - バーチャルYouTuberに起きた出来事をまとめるWiki 
          </a>
        </p>
        <p>
          <a href="https://non-it-infomation.com/diary/show/28">
            最近話題のツイッターでつぶけるボタン - non's Labo
          </a>
        </p>
        <h2>関連スライド</h2>
        <p>
          <a href="https://non-it-infomation.com/diary/show/28">
            【個人開発】バズ狙いのツイッター系サービスを作って微妙に成功した話＠s-dev talks 〜サービス開発勉強会〜 #4
          </a>
        </p>
        <h2>使用技術</h2>
        <p>
          laravel, laravel-uuid, nuxt.js, vue.js, html5canvas, Google Fonts, bootstap, fontawesome, html, css, conoha VPS, deployer, heroku, AWS S3, GitHub等
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
