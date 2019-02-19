<template>
  <div>
    <div class="works-cover-wrpaper">
      <figure class="image">
        <slot name="cover-image" />
      </figure>
    </div>
    <div class="container">
      <p class="breadcrumb-work">
        れとるときゃりーの紹介 > Works
      </p>
      <slot name="body" />
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
.work-heading {
  font-size: 1.8em;
  margin-top: 0.2em;
  margin-bottom: 1.4em;
}
</style>
