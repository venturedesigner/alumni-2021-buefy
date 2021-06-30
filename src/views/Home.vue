<template>
  <div class="home">
    <router-link class="invisible" to="/directory">Directory</router-link>
    <form class="box">
      <h1>
        Join Rebook!
      </h1>
      <p class="subtitle">Alumni directory of rebooters summer'21</p>

      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input v-model="name" class="input" type="text" placeholder="Bruce Wayne">
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input v-model="email" class="input" type="email" placeholder="e.g. alex@example.com">
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input v-model="password" class="input" type="password" placeholder="********">
        </div>
      </div>

      <div class="field">
        <label class="label">Username</label>
        <div class="control">
          <input v-model="username" class="input" type="text" placeholder="Batman">
        </div>
      </div>


      <button @click.prevent="signup" class="button is-primary">Sign up</button>
    </form>
  </div>
</template>

<script>
import UserService from '@/services/UserService'

export default {
  name: 'Home',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      username: ''
    }
  },
  components: {
  },
  methods: {
    async signup () {
      const response = await UserService.Signup(
        this.name,
        this.email,
        this.password,
        this.username
      )
      localStorage.token = response.data.token
      localStorage.username = response.data.username
      localStorage.email = response.data.email
      localStorage.name = response.data.name
      this.$router.push('/aboutme')
    }
  }
}
</script>

<style>
.home {
  background-image: url(https://res.cloudinary.com/dzneqacw6/image/upload/q_auto:best/v1625063720/images/rebook/rebook_bg.jpg);
  width: 100vw;
  height: 100vh;
  background-size: cover;
}
.box {
  width:400px;
  margin-left: 10%;
  margin-top: 2%;
}
h1 {
  font-size:29px !important;
  font-weight: 600 !important;
}
.subtitle {
  font-style: italic !important;
  font-size:12px !important;
}
button{
  margin-bottom:15px;
  margin-top:10px;
}
.invisible {
  color: rgba(255, 255, 255, 0);
}
</style>
