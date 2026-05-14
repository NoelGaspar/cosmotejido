<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { i18n } from './i18n/store'
</script>

<template>
  <div class="app-container">
    <AppHeader />
    <main class="main-content">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<style>
@font-face {
  font-family: 'Centaur';
  src: url('/fonts/CENTAUR.TTF') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Texta';
  src: url('/fonts/TextaRegular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

:root {
  --font-heading: 'Centaur', serif;
  --font-body: 'Texta', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  text-transform: uppercase;
}

body, p, span, li, button, a, input, textarea {
  font-family: var(--font-body);
  text-transform: uppercase;
}
</style>

<style scoped>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
}
</style>