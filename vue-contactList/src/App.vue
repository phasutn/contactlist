<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div id="app">
    <Navbar/>

    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
</script>

<style>
</style>