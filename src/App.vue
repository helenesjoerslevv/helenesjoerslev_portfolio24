<template>
  <header>
   
  </header>

  <div class="portfolio-container">
    <RouterView />
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style scoped>
header {
  line-height: 1.5;
}

nav {
  width: 100%;
  font-size: 15px;
  text-align: center;
  margin-top: 2rem;
  align-items: center;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}



@media (min-width: 1024px) {
}
</style>
