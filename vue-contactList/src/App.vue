<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div id="app">
    <Navbar/>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: Navbar
}
</script>

<style scoped>
</style>