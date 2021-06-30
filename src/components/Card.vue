<template>
<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="user.profile.profilebg" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img :src="user.profile.profilepic" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{user.name}}</p>
        <p class="subtitle is-6">{{user.email}}</p>
      </div>
    </div>

    <div class="content">
      {{user.profile.description}}
      <br>
    </div>
    <div class="buttons">
        <b-button tag="router-link"
            to="/"
            type="is-link">
            Check me out
        </b-button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    user: {
      type: Object
    }
  }
}
</script>

<style>
.card {
  width: 300px;
  margin:35px;
}

</style>