<template>
  <div>
    <navbar />

    <profile-header />

    <section>
      <b-tabs position="is-centered" class="block">
        <b-tab-item
          label="About"
          icon="account"
        >
          <div class="container">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <p>
                    とある大学の情報系学科の3年生。
                  </p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <h1>趣味</h1>
                  <p>
                    webサービス開発, おうちハック, Twitter, パソコンで作曲, アニメ鑑賞, バレーボール
                  </p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <h1>好きなアニメ</h1>
                  <p>
                    うさぎドロップ, 冴えカノ, らき☆すた, 四畳半神話大系, SHIROBAKO, 少女終末旅行
                  </p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <h1>好きなキャラクター</h1>
                  <p>
                    澤村・スペンサー・英梨々, 一色いろは, 矢野エリカ, 柊かがみ, 鹿賀りん, 友利奈緒
                  </p>
                </div>
              </div>
            </div>
          </div>
        </b-tab-item>

        <b-tab-item
          label="Works"
          class="works"
          icon="library-books"
        >
          <b-tabs position="is-centered" class="block">
            <b-tab-item label="webサービス">
              <div class="container">
                <div class="columns is-multiline">
                  <div class="column is-half">
                    <div class="card">
                      <div class="card-image">
                        <figure class="image">
                          <img src="/img/work/tategakitter.png" alt="かぞえったー">
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="content">
                          <h1>縦書きったー</h1>
                          <p>
                            縦書きツイートを簡単に作れるサービス
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column is-half">
                    <div class="card">
                      <div class="card-image">
                        <figure class="image">
                          <img src="/img/work/kazoetter.png" alt="かぞえったー">
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="content">
                          <h1>かぞえったー</h1>
                          <p>
                            ツイッターにカウントを簡単にシェアできるサービス 
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column is-half">
                    <div class="card">
                      <div class="card-image">
                        <figure class="image">
                          <img src="/img/work/rt_vs_fav_maker.png" alt="「#いいねvsRT」画像メーカー">
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="content">
                          <h1>「#いいねvsRT」画像メーカー</h1>
                          <p>
                            簡単にいいねとRTでせんそうを生み出す画像を作れる
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column is-half">
                    <div class="card">
                      <div class="card-image">
                        <figure class="image">
                          <img src="/img/work/btnmaker.png" alt="みんなのボタンメーカー">
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="content">
                          <h1>みんなのボタンメーカー</h1>
                          <p>
                            ツイッターでつぶやけるボタンを簡単に作成できる
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column is-half">
                    <div class="card">
                      <div class="card-image">
                        <figure class="image">
                          <img src="/img/work/yaruzosengen.png" alt="やるぞ宣言">
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="content">
                          <h1>やるぞ宣言</h1>
                          <p>
                            ツイッターで、かんたんに「やるぞ」を宣言したり、進捗や完了も報告できる
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column is-half">
                    <div class="card">
                      <div class="card-image">
                        <figure class="image">
                          <img src="/img/work/tipmusic.png" alt="tipmusic">
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="content">
                          <h1>Tipmusic</h1>
                          <p>
                            仮想通貨で気軽に投げ銭が出来る音楽投稿サイト
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column is-half">
                    <div class="card">
                      <div class="card-image">
                        <figure class="image">
                          <img src="/img/work/monaalert.png" alt="モナアラート">
                        </figure>
                      </div>
                      <div class="card-content">
                        <div class="content">
                          <h1>モナアラート</h1>
                          <p>
                            一定時間ごとにモナコインの現在価格を声で教えてくれる（サービス終了） 
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab-item>
            <b-tab-item label="LT登壇">
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <script async class="speakerdeck-embed" data-id="a74126f6aa624255b96a4c968db5b99d" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js" />
                  </div>
                </div>
              </div>
            </b-tab-item>
            <b-tab-item label="音楽" />
          </b-tabs>
        </b-tab-item>

        <b-tab-item
          label="Skills"
          icon="toolbox"
        >
          <div class="container">
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <h1>プログラミング言語</h1>
                  <h2>まあまあ</h2>
                  <p>
                    php, C, html, English
                  </p>
                  <h2>なんとなく</h2>
                  <p>
                    Linux, Java, javascript, css
                  </p>
                  <h2>かじっただけ</h2>
                  <p>
                    python, node.js
                  </p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <h1>フレームワーク</h1>
                  <h2>なんとなく</h2>
                  <p>
                    laravel, vue.js, jquery, bootstap4, nuxt.js
                  </p>
                  <h2>かじっただけ</h2>
                  <p>
                    react native, expo, monaca
                  </p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <h1>インフラ</h1>
                  <p>
                    ConoHa VPS, Cent OS, heroku, netlify, AWS S3, cloudflare, firebase, Github pages, ラズパイ, arduino, esp8266
                  </p>
                </div>
              </div>
            </div>
          </div>
        </b-tab-item>
      </b-tabs>
    </section>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import ProfileHeader from '@/components/ProfileHeader'
export default {
  components: {
    Navbar,
    ProfileHeader
  }
}
</script>

<style>
.card {
  margin: 8px;
  border-radius: 5px;
}
.card-image img {
  border-radius: 5px 5px 0 0;
}
.content h1 {
  font-size: 1.5em;
}
.content h2 {
  font-size: 1.3em;
  padding-bottom: 0.3em;
  border-bottom: solid 1px #ddd;
}
.b-tabs .works .tab-content {
  padding: 20px 0 0;
}
</style>
