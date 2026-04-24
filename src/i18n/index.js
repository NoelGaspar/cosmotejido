import { reactive } from 'vue'

const translations = {
  es: {
    appName: 'Aymara sawuri',
    home: {
      title: 'Cosmo tejido',
      subtitle: 'Aymara sawuri',
      description: 'Descubre nuestra exclusiva colección de tejidos artesanales. Cada pieza ha sido cuidadosamente elaborada para transformar tu hogar en un espacio único y acogedor. Desde tapices hasta detalles decorativos que reflejan la tradición artesanal de nuestros maestros tejedores.',
      ctaButton: 'Ver Catálogo'
    },
    viewer: {
      backButton: '← Volver al Inicio',
      prevPage: '← Anterior',
      nextPage: 'Siguiente →',
      downloadButton: '⬇ Descargar',
      pageIndicator: 'Página'
    },
    footer: {
      companyName: 'Aymara sawuri',
      copyright: '© 2025 Todos los derechos reservados'
    }
  },
  en: {
    appName: 'Aymara sawuri',
    home: {
      title: 'Cosmo weave',
      subtitle: 'Aymara sawuri',
      description: 'Discover our exclusive collection of artisanal textiles. Each piece has been carefully crafted to transform your home into a unique and cozy space. From tapestries to decorative details that reflect the artisanal tradition of our master weavers.',
      ctaButton: 'View Catalog'
    },
    viewer: {
      backButton: '← Back to Home',
      prevPage: '← Previous',
      nextPage: 'Next →',
      downloadButton: '⬇ Download',
      pageIndicator: 'Page'
    },
    footer: {
      companyName: 'Aymara sawuri',
      copyright: '© 2025 All rights reserved'
    }
  }
}

const state = reactive({
  locale: 'es'
})

export function useI18n() {
  const t = (key) => {
    const keys = key.split('.')
    let value = translations[state.locale]
    for (const k of keys) {
      value = value?.[k]
    }
    return value || key
  }

  const locale = state.locale

  const toggleLocale = () => {
    state.locale = state.locale === 'es' ? 'en' : 'es'
  }

  return { t, locale, toggleLocale }
}

export { translations }