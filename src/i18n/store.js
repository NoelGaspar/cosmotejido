import { reactive } from 'vue'

const translations = {
  es: {
    home: {
      title: 'Cosmos tejido',
      subtitle: 'Aymar Sawuri x Cris Miranda',
      description: 'Descubre nuestra exclusiva colección, donde tecnología, innovación y economía circular se integran en cada creación. Una propuesta que fusiona visión, maestría y colaboración desde el altiplano chileno, dando vida a piezas que unen tradición y contemporaneidad.',
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
      description: 'Discover our exclusive collection of artisanal textiles. Each piece has been carefully crafted to transform your home into a unique and cozy space. From tapestries to decorative details that reflect the artisanal tradition of our master weavers.',
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
