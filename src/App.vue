<template>
  <div id="app">
    <!-- <NavBar/> -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
// import NavBar from '@/components/NavBar.vue'

export default {
  name: 'App',
  props: {
  },
  components: {
    // NavBar
  },
  methods: {
  }
}
</script>

<style lang="scss">
</style>
