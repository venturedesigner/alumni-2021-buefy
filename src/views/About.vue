<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{users[0].name}}
  </div>
</template>

<script>

import UserService from '@/services/UserService'

export default {
  name: 'About',
  data () {
    return {
      users: []
    }
  },
  components: {
  },
  async mounted () {
    UserService
      .getUsers()
      .then(users => {
        this.users = users
      })
      .catch((error) => console.log(error))
  }
}

</script>
