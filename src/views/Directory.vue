<template>
  <div class="about">
    <NavBar/>
    <div class="container">
       <h1>Summer'21 Class</h1>
    </div>
    <div v-if="users" class="container is-justify-content-flex-start is-flex is-flex-direction-row is-flex-wrap-wrap">
        <Card
          v-for="(user, idx) in users" :key="idx"
          :user="user"
        />
    </div>
  </div>
</template>

<script>

import UserService from '@/services/UserService'
import NavBar from '@/components/NavBar.vue'
import Card from '@/components/Card.vue'

export default {
  name: 'Directory',
  data () {
    return {
      users: null
    }
  },
  components: {
    NavBar,
    Card
  },
  mounted () {
    UserService
      .getUsers()
      .then(users => {
        this.users = users
      })
      .catch((error) => console.log(error))
  }
}

</script>

<style scoped>
h1{
  font-size:56px;
  font-weight:600;
  text-align: center;
  margin-top: 35px;
  margin-bottom: 35px;
}
</style>
