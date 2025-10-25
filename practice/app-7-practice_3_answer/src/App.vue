<template>
  <div class="app-container">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>

<style>
body {
  background-color: #fff8f8;
  font-family: 'Comic Sans MS', cursive;
  margin: 0;
}
.app-container {
  text-align: center;
}
</style>
