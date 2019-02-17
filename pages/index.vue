<template>
  <div>
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
                          <img src="/img/works/tategakitter.png" alt="かぞえったー">
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
                      <footer class="card-footer">
                        <p class="card-footer-item">
                          <a>
                            くわしく見る
                          </a>
                        </p>
                        <p class="card-footer-item">
                          <a
                            href="https://tategakitter.netlify.com/"
                            target="_blacnk"
                          >
                            <font-awesome-icon :icon="['fas', 'external-link-alt']" />
                            &nbsp;
                            Webサイトへ
                          </a>
                        </p>
                      </footer>
                    </div>
                  </div>
                  <div class="column is-half">
                    <div class="card">
                      <div class="card-image">
                        <figure class="image">
                          <img src="/img/works/kazoetter.png" alt="かぞえったー">
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
                      <footer class="card-footer">
                        <p class="card-footer-item">
                          <a>
                            くわしく見る
                          </a>
                        </p>
                        <p class="card-footer-item">
                          <a
                            href="https://count.yaruzo.me/"
                            target="_blacnk"
                          >
                            <font-awesome-icon :icon="['fas', 'external-link-alt']" />
                            &nbsp;
                            Webサイトへ
                          </a>
                        </p>
                      </footer>
                    </div>
                  </div>
                  <div class="column is-half">
                    <div class="card">
                      <div class="card-image">
                        <figure class="image">
                          <img src="/img/works/rt_vs_fav_maker.png" alt="「#いいねvsRT」画像メーカー">
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
                      <footer class="card-footer">
                        <p class="card-footer-item">
                          <a>
                            くわしく見る
                          </a>
                        </p>
                        <p class="card-footer-item">
                          <a
                            href="https://retoruto-carry.github.io/RTvsFavMaker/"
                            target="_blacnk"
                          >
                            <font-awesome-icon :icon="['fas', 'external-link-alt']" />
                            &nbsp;
                            Webサイトへ
                          </a>
                        </p>
                      </footer>
                    </div>
                  </div>
                  <div class="column is-half">
                    <div class="card">
                      <div class="card-image">
                        <figure class="image">
                          <img src="/img/works/btnmaker.png" alt="みんなのボタンメーカー">
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
                      <footer class="card-footer">
                        <p class="card-footer-item">
                          <a>
                            くわしく見る
                          </a>
                        </p>
                        <p class="card-footer-item">
                          <a
                            href="https://btns.fun/"
                            target="_blacnk"
                          >
                            <font-awesome-icon :icon="['fas', 'external-link-alt']" />
                            &nbsp;
                            Webサイトへ
                          </a>
                        </p>
                      </footer>
                    </div>
                  </div>
                  <div class="column is-half">
                    <div class="card">
                      <div class="card-image">
                        <figure class="image">
                          <img src="/img/works/yaruzosengen.png" alt="やるぞ宣言">
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
                      <footer class="card-footer">
                        <p class="card-footer-item">
                          <a>
                            くわしく見る
                          </a>
                        </p>
                        <p class="card-footer-item">
                          <a
                            href="https://yaruzo.me/"
                            target="_blacnk"
                          >
                            <font-awesome-icon :icon="['fas', 'external-link-alt']" />
                            &nbsp;
                            Webサイトへ
                          </a>
                        </p>
                      </footer>
                    </div>
                  </div>
                  <div class="column is-half">
                    <div class="card">
                      <div class="card-image">
                        <figure class="image">
                          <img src="/img/works/tipmusic.png" alt="tipmusic">
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
                      <footer class="card-footer">
                        <p class="card-footer-item">
                          <a>
                            くわしく見る
                          </a>
                        </p>
                        <p class="card-footer-item">
                          <a
                            href="https://tipmusics.com/"
                            target="_blacnk"
                          >
                            <font-awesome-icon :icon="['fas', 'external-link-alt']" />
                            &nbsp;
                            Webサイトへ
                          </a>
                        </p>
                      </footer>
                    </div>
                  </div>
                  <div class="column is-half">
                    <div class="card">
                      <div class="card-image">
                        <figure class="image">
                          <img src="/img/works/monaalert.png" alt="モナアラート">
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
                      <footer class="card-footer">
                        <p class="card-footer-item">
                          <a>
                            くわしく見る
                          </a>
                        </p>
                        <p class="card-footer-item">
                          <a
                            href="https://tategakitter.netlify.com/"
                            target="_blacnk"
                          >
                            <font-awesome-icon :icon="['fas', 'external-link-alt']" />
                            &nbsp;
                            魚拓へ（動かない）
                          </a>
                        </p>
                      </footer>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab-item>
            <b-tab-item label="LT登壇">
              <div class="container">
                <div class="columns is-multiline">
                  <div class="column is-half">
                    <div class="card">
                      <div class="card-content">
                        <div class="content">
                          <h1>
                            <a href="https://docs.google.com/presentation/d/1soWD2eVIkx_pXQ-Is59r-nyhaFO48JNEqhvXHasuruo/edit#slide=id.p">
                              webサービスの作り方
                            </a>
                          </h1>
                          <p>
                            <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
                            &nbsp;
                            第17回 学生エンジニアLT大会	
                            <br>
                            <font-awesome-icon :icon="['fas', 'calendar-day']" />
                            &nbsp;
                            <time datetime="2018-11-17">2018/11/17</time>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column is-half">
                    <div class="card">
                      <script async class="speakerdeck-embed" data-id="a74126f6aa624255b96a4c968db5b99d" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js" />
                      <div class="card-content">
                        <div class="content">
                          <h1>バズ狙いのツイッター系サービスを作って微妙に成功した話</h1>
                          <p>
                            <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
                            &nbsp;
                            s-dev talks 〜サービス開発勉強会〜 #4 「ピボット」
                            <br>
                            <font-awesome-icon :icon="['fas', 'calendar-day']" />
                            &nbsp;
                            <time datetime="2018-10-17">2018/10/17</time>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column is-half">
                    <div class="card">
                      <script async class="speakerdeck-embed" data-id="e3e93cb6624c4f3cb3e740c648c15f71" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js" />
                      <div class="card-content">
                        <div class="content">
                          <h1>webサービスを3つ作った間に得たtips</h1>
                          <p>
                            <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
                            &nbsp;
                            [MSP x 学生LT] 第14回 学生エンジニアLT大会
                            <br>
                            <font-awesome-icon :icon="['fas', 'calendar-day']" />
                            &nbsp;
                            <time datetime="2018-08-11">2018/08/11</time>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column is-half">
                    <div class="card">
                      <script async class="speakerdeck-embed" data-id="e9ac383865c7473ebcbaa2ee3275e38b" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js" />
                      <div class="card-content">
                        <div class="content">
                          <h1>初めてWebサービスを作って得たTips</h1>
                          <p>
                            <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
                            &nbsp;
                            第11回 学生エンジニア限定LT大会
                            <br>
                            <font-awesome-icon :icon="['fas', 'calendar-day']" />
                            &nbsp;
                            <time datetime="2018-05-15">2018/05/05</time>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="column is-half">
                    <div class="card">
                      <div class="card-content">
                        <div class="content">
                          <h1>帰宅したら好きなアニメキャラに「おかえり」を言ってもらうシステムをラズパイで作った</h1>
                          <p>
                            <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
                            &nbsp;
                            学生エンジニア限定LT大会 in Hello World 2018
                            <br>
                            <font-awesome-icon :icon="['fas', 'calendar-day']" />
                            &nbsp;
                            <time datetime="2018-10-17">2018/04/15</time>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab-item>
            <b-tab-item label="音楽">
              <div class="container">
                <iframe
                  width="100%"
                  height="300"
                  scrolling="no"
                  frameborder="no"
                  allow="autoplay"
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/39626929&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                />
              </div>
            </b-tab-item>
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
                    laravel, nuxt.js, vue.js, jquery, bootstap4, bulma
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
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <h1>ツール</h1>
                  <h2>開発環境</h2>
                  <p>
                    mac book pro 2017, Ubuntu 18.04, git, GitHub, figma
                  </p>
                  <h2>エディタ</h2>
                  <p>
                    mac book pro 2017, Ubuntu 18.04, git, GitHub, figma
                  </p>
                  <h2>作曲ソフト</h2>
                  <p>
                    FL studio, Renoise
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
import ProfileHeader from '@/components/ProfileHeader'
export default {
  components: {
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
.speakerdeck-embed-wrapper {
  position: relative !important;
  width: 100% !important;
}
.speakerdeck-embed-wrapper:before {
  content: '' !important;
  display: block !important;
  padding-top: 56.25% !important; /* 高さと幅の比を16:9に固定。9/16*100=56.25 */
}
.speakerdeck-iframe {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  width: 100% !important;
  height: 100% !important;
}
</style>
