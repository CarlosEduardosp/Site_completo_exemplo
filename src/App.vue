<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
  <!--<header>
      <nav>
        <RouterLink to="/">Home</RouterLink>
      </nav>
    
  </header>-->
  <RouterLink to="/"></RouterLink>
  <RouterView />
  </div>
</template>

<style scoped>
@media (max-width: 720px) {
  .app{
    height: auto;
    background: linear-gradient(#0a428be8, #000000);
    background-position: center, center;
    background-size: cover;
    background-position-y: 0px;
    background-repeat: no-repeat;
  }
}
</style>