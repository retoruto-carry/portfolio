<template>
  <div>
    <div class="header-bg" />
    <figure class="profile-icon image">
      <img class="is-rounded" src="/img/retoruto_carry.png">
    </figure>
    <div class="container has-text-centered">
      <h1 class="profile-name">
        れとるときゃりー
      </h1>
      <p class="profile-description">
        個人で色々とWEBサービスつくっている大学生です。<br>
        とりあえずwebサービスで行きていけるように頑張っています。
      </p>
      <div class="profile-links">
        <a
          class="profile-link"
          href="https://twitter.com/retoruto_carry"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
        <a
          class="profile-link"
          href="https://soundcloud.com/retoruto_carry"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'soundcloud']" />
        </a>
        <a
          class="profile-link"
          href="https://github.com/retoruto-carry"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a
          class="profile-link"
          href="https://www.amazon.co.jp/registry/wishlist/2MSHR2CU894JT/ref=cm_sw_r_cp_ep_ws_zM5qCbQ9YPH8B"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'amazon']" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.header-bg {
  min-height: 28vw;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(/img/header.jpeg);
}
.profile-icon {
  width: 180px;
  text-align: center;
  margin: -90px auto 10px;
  border-radius: 50%;
  border: solid 5px #fff;
}
@media screen and (max-width: 680px) {
  .header-bg {
    min-height: 35vw;
  }
  .profile-icon {
    width: 140px;
    margin: -70px auto 10px;
  }
}
@media screen and (max-width: 500px) {
  .header-bg {
    min-height: 40vw;
  }
  .profile-icon {
    width: 100px;
    margin: -50px auto 10px;
  }
}
.profile-name {
  font-size: 1.6em;
  font-weight: bold;
  margin: 15px;
}
.profile-description {
  margin: 15px;
}
.profile-links {
  margin: 25px;
}
.profile-link {
  font-size: 26px;
  margin: 4px;
  color: #c9cfd3;
}
</style>
