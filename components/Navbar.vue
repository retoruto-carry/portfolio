<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <nuxt-link class="navbar-item" to="/">
          <img src="/img/retoruto_carry.png" width="30">
          &nbsp;
          れとるときゃりーの紹介ページ
        </nuxt-link>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <a class="button is-info">
              <font-awesome-icon :icon="['fab', 'twitter']" />
              &nbsp;
              Tweet
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style>
</style>
