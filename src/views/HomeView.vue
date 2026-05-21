<template>
  <div class="home-view">
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="title">{{ i18n.t('home.title') }}</h1>
        <h2 class="subtitle">{{ i18n.t('home.subtitle') }}</h2>
        <p class="description">
          {{ i18n.t('home.description') }}
        </p>
        <button @click="goToViewer" class="cta-button">
          {{ i18n.t('home.ctaButton') }}
        </button>
      </div>
      <div class="hero-image">

        <img src="@/assets/portada.png" @click="goToViewer" alt="Catálogo Cosmos tejido" class ="hero-image clickable-hero" />

      </div>
    </div>
  </div>
</template>

<script setup>
import { i18n } from '../i18n/store'
import { useRouter } from 'vue-router'

const router = useRouter()

const goToViewer = () => {
  const lang = i18n.locale === 'en' ? 'en' : 'es'
  router.push(`/${lang}/viewer`)
}
</script>

<style scoped>
.home-view {
  min-height: calc(100vh - 160px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  padding-top: calc(60px + 2rem);
  padding-bottom: calc(60px + 2rem);
}

.hero-section {
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.title {
  font-size: 3rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0;
  line-height: 1.2;
}

.subtitle {
  font-size: 1.5rem;
  font-weight: 400;
  color: #7f8c8d;
  margin: 0;
}

.description {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #555;
  margin: 0;
  font-family: var(--font-body);
}

.cta-button {
  display: inline-block;
  padding: 1rem 2.5rem;
  background-color: #3d3a3d;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 1.125rem;
  font-weight: 600;
  transition: background-color 0.3s ease, transform 0.3s ease;
  align-self: center;
  font-family: var(--font-body);
}

.cta-button:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

@media (max-width: 900px) {
  .home-view {
    padding-bottom: calc(100px + 4rem);
  }

  .hero-section {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-content {
    align-items: center;
  }

  .title {
    font-size: 2.25rem;
  }

  .cta-button {
    align-self: center;
  }

  .hero-image {
    order: -1;
  }

.clickable-hero {
  cursor: pointer;
  transition: transform 0.2s ease;
}

.clickable-hero:hover {
  transform: scale(1.02);
}

}
</style>
