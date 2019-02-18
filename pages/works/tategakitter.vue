<template>
  <div>
    <div class="works-cover-wrpaper">
      <figure class="image">
        <img src="/img/works/btnmaker.png" alt="みんなのボタンメーカー">
      </figure>
    </div>
    <div class="container">
      <h1 class="work-heading">
        みんなのボタンメーカー
      </h1>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.works-cover-wrpaper {
  width: 100%;
  padding: 4.5em 2em;
  text-align: center;
  background: #edf2f7;
  background-color: #e5e5e5;
}
.works-cover-wrpaper .image {
  margin: 0 auto;
  /*max-width: calc(800px - 3em);*/
  max-width: 800px;
}
.works-cover-wrpaper .image img {
  border-radius: 9px;
}
@media screen and (max-width: 760px) {
  .works-cover-wrpaper {
    padding: 3em 2em;
  }
}
.work-heading {
  font-size: 1.6em;
  margin-top: 1.4em;
  margin-bottom: 1.4em;
}
</style>
