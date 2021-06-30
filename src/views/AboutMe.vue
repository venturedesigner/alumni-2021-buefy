<template>
  <div class="about">
    <router-link class="invisible" to="/directory">Directory</router-link>
    <form class="box">
      <h1>
        Welcome!
      </h1>
      <p class="subtitle">Just a few more questions. Please tell us about you. Don't forget to show us your fine figure. </p>

      <div class="field">
        <label class="label">Who are you</label>
        <div class="control">
          <input v-model="decription" class="input" type="text" placeholder="Lifetime learner">
        </div>
      </div>

      <div class="field">
        <label class="label">Your pic</label>
        <div class="control">
          <input v-model="profilepic" class="input" type="text" placeholder="url de tu imagen">
        </div>
      </div>

      <div class="field">
        <label class="label">Your favorite animal pic</label>
        <div class="control">
          <input v-model="profilebg" class="input" type="text" placeholder="url de tu imagen">
        </div>
      </div>

      <button @click.prevent="createMyProfile" class="button is-primary">Done</button>
    </form>
  </div>
</template>

<script>

import UserService from '@/services/UserService'

export default {
  name: 'AboutMe',
  data () {
    return {
      users: null,
      decription: '',
      profilepic: '',
      profilebg: ''
    }
  },
  components: {
  },
  mounted () {
    UserService
      .getUsers()
      .then(users => {
        this.users = users
      })
      .catch((error) => console.log(error))
  },
  methods: {
    async createMyProfile () {
      const response = await UserService.createMyProfile(
        this.decription,
        this.profilepic,
        this.profilebg
      )
      localStorage.decription = response.data.username
      localStorage.profilepic = response.data.email
      localStorage.profilebg = response.data.name
      this.$router.push('/directory')
    }
  }
}

</script>

<style scoped>
.about {
  background-image: url(https://res.cloudinary.com/dzneqacw6/image/upload/q_auto:best/v1625063720/images/rebook/rebook_bg.jpg);
  width: 100vw;
  height: 100vh;
  background-size: cover;
}
</style>
