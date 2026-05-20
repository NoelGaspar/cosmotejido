import { reactive } from 'vue'

const translations = {
  es: {
    home: {
      title: 'Cosmos tejido',
      subtitle: 'Aymar Sawuri x Cris Miranda',
      description: 'Descubra una colección exclusiva donde tecnología, innovación y economía circular convergen en cada creación. Una propuesta que integra visión, maestría y trabajo colaborativo desde el altiplano chileno, dando vida a piezas únicas que dialogan entre la tradición ancestral y la contemporaneidad.',
      ctaButton: 'Ver Catálogo'
    },
    viewer: {
      backButton: '← Volver al Inicio',
      prevPage: '← Anterior',
      nextPage: 'Siguiente →',
      downloadButton: '⬇ Descargar',
      pageIndicator: 'Página',
      of: 'de'
    },
    footer: {
      companyName: 'Aymar Sawuri',
      copyright: '© 2026 Todos los derechos reservados'
    }
  },
  en: {
    home: {
      title: 'Cosmos tejido',
      subtitle: 'Aymar Sawuri x Cris Miranda',
      description: 'Discover an exclusive collection where technology, innovation, and circular economy converge in every creation. A proposal that integrates vision, mastery, and collaborative work from the Chilean altiplano, bringing to life unique pieces that engage in a dialogue between ancestral tradition and contemporaneity.',
      ctaButton: 'View Catalog'
    },
    viewer: {
      backButton: '← Back to Home',
      prevPage: '← Previous',
      nextPage: 'Next →',
      downloadButton: '⬇ Download',
      pageIndicator: 'Page',
      of: 'of'
    },
    footer: {
      companyName: 'Aymar Sawuri',
      copyright: '© 2026 All rights reserved'
    }
  }
}

export const i18n = reactive({
  locale: 'es',
  
  t(key) {
    const keys = key.split('.')
    let value = translations[this.locale]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  },
  
  toggleLocale() {
    this.locale = this.locale === 'es' ? 'en' : 'es'
  }
})
