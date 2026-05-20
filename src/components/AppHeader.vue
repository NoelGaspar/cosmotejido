<template>
  <header class="app-header">
    <div class="header-content">
      <div class="logo">
        <img src="/img/logo/aymar.png" alt="Logo" class="logo-icon" />
        <router-link to="/" class="logo-text">Cosmos tejido</router-link>
      </div>
      <button class="lang-toggle" @click="i18n.toggleLocale()">
        <img
          :src="i18n.locale === 'en' ? usFlag : clFlag"
          :alt="i18n.locale === 'en' ? 'US Flag' : 'Chile Flag'"
          class="flag-icon"
        />
        {{ i18n.locale.toUpperCase() }}
      </button>
    </div>
  </header>
</template>

<script setup>
import { i18n } from '../i18n/store'
import usFlag from '/img/united-states.png'
import clFlag from '/img/chile.png'
</script>

<style scoped>
.app-header {
  background-color: #f8f8f8;
  padding: 0.75rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #ecf0f1;
}

.logo-icon {
  width: 48px;
  height: auto;
  max-height: 48px;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: #6b6375;
  text-decoration: none;
  transition: color 0.3s ease;
  font-family: var(--font-heading);
}

.logo-text:hover {
  color: #bdc3c7;
}

.lang-toggle {
  padding: 0.5rem 1rem;
  background-color: #3d3a3d;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: var(--font-body);
}

.lang-toggle:hover {
  background-color: #2d2a2d;
}

.flag-icon {
  width: 20px;
  height: auto;
  border-radius: 2px;
  vertical-align: middle;
  margin-right: 4px;
}
</style>
