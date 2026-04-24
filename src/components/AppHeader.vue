<template>
  <header class="app-header">
    <div class="header-content">
      <div class="logo">
        <img src="/favicon.svg" alt="Logo" class="logo-icon" />
        <router-link to="/" class="logo-text">Cosmo tejido</router-link>
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
  background-color: #2c3e50;
  padding: 1rem 2rem;
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
  width: 32px;
  height: 32px;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.lang-toggle {
  padding: 0.5rem 1rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.lang-toggle:hover {
  background-color: #2980b9;
}

.flag-icon {
  width: 20px;
  height: 14px;
  border-radius: 2px;
  vertical-align: middle;
  margin-right: 4px;
}
</style>