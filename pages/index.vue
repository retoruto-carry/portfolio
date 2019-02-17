<template>
  <div>
    <navbar />
    <profile-header />
    <div class="tabs is-centered">
      <ul>
        <li class="is-active">
          <a>
            <font-awesome-icon :icon="['fa', 'user-alt']" />
            &nbsp;
            About
          </a>
        </li>
        <li>
          <a>
            <font-awesome-icon :icon="['fa', 'book']" />
            &nbsp;
            Work
          </a>
        </li>
        <li>
          <a>
            <font-awesome-icon :icon="['fa', 'tools']" />
            &nbsp;
            Skill
          </a>
        </li>
      </ul>
    </div>
    <div class="container">
      <div class="card">
        <div class="card-image">
          <figure class="image">
            <img src="/img/work/kazoetter.png" alt="かぞえったー">
          </figure>
        </div>
        <div class="card-content">
          <div class="content">
            ツイッターにカウントを簡単にシェアできるサービス 
          </div>
        </div>
      </div>
    </div>
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
</style>
