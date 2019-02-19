<template>
  <div>
    <div class="works-cover-wrpaper">
      <figure class="image">
        <slot name="cover-image" />
      </figure>
    </div>
    <div class="work-detail container">
      <p class="breadcrumb-work">
        れとるときゃりーの紹介 > Works
      </p>
      <slot name="body" />
    </div>
    <a
      class="button-vist-website"
      :href="link"
      target="_blank"
    >
      Webサイトへ
    </a>
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: ''
    }
  }
}
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
.breadcrumb-work {
  margin-top: 3em;
  margin-bottom: 0.2em;
  color: #777;
}
.work-detail {
  padding: 0 2em 4em;
}
.work-heading {
  font-size: 1.8em;
  margin-top: 0.2em;
  margin-bottom: 1.4em;
}
h2 {
  margin: 1.5em 0 1em;
}
p {
  margin: 0.75em 0;
}
.button-vist-website {
  position: fixed;
  bottom: 16px;
  right: 16px;
  width: auto;
  min-width: 140px;
  height: auto;
  padding: 15px;
  font-family: Roboto, sans-serif;
  font-size: 11px;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #fff;
  background-color: #111;
  border: none;
  border-radius: 45px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  text-align: center;
}
</style>
