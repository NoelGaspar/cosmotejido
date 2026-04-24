# AGENTS.md - Instrucciones para Agentes de Desarrollo

## Contexto del Proyecto

Este es un proyecto Vue 3 para visualizar un catálogo PDF de forma interactiva. El sitio web es una SPA estática con dos páginas:
- **Home (/)**: Landing page con descripción y CTA hacia el visor
- **Viewer (/viewer)**: Visor de PDF página a página con navegación

El proyecto es para la empresa **Aymara Sawuri** y el catálogo se llama **Cosmo Tejido**.

## Stack Tecnológico

- **Framework:** Vue 3 con Composition API
- **Build tool:** Vite
- **Enrutamiento:** Vue Router
- **PDF:** pdfjs-dist v4.9.155
- **Estilos:** CSS vanilla (scoped en componentes)
- **i18n:** Sistema de traducciones ES/EN personalizado

## Estructura del Proyecto

```
src/
├── main.js              # Entry point - crea la app Vue
├── App.vue              # Componente raíz con layout
├── router/
│   └── index.js         # Definición de rutas Vue Router
├── i18n/
│   ├── index.js         # Módulo de traducciones
│   └── store.js         # Estado reactivo del idioma
├── views/
│   ├── HomeView.vue     # Página principal (landing)
│   └── ViewerView.vue   # Visor de PDF
├── components/
│   ├── AppHeader.vue   # Header compartido
│   ├── AppFooter.vue   # Footer compartido
│   └── LocaleProvider.vue  # Provider de i18n
└── assets/
    └── hero.png        # Imagen del landing

public/
├── informe.pdf        # Archivo del catálogo PDF
├── favicon.svg       # Favicon de la app
└── icons.svg         # Iconos SVG
```

## Convenciones de Código

### Componentes Vue
- Usar **Composition API** con `<script setup>`
- Usar **scoped CSS** para estilos específicos del componente
- Nombres en PascalCase: `HomeView.vue`, `AppHeader.vue`
- Props con tipado usando `defineProps`
- Emits con `defineEmits`

### Estructura de componentes
```vue
<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  // props definition
})
</script>

<template>
  <!-- markup -->
</template>

<style scoped>
/* scoped styles */
</style>
```

### Convenciones de estilo
- Variables CSS custom para colores en `:root`
- Usar variables CSS en lugar de valores hardcodeados
- Clases descriptivas, usar BEM ligero para bloques complejos

### Convenciones de archivos
- **Importaciones:** Relative imports (`./components/`, `../views/`)
- **Rutas:** Vue Router con lazy loading para views

## Comandos del Proyecto

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo en localhost

# Producción
npm run build        # Compila para producción (genera dist/)
npm run preview      # Previsualiza build de producción
```

## Workflow de Desarrollo

1. **Leer FSD.md** antes de hacer cambios significativos
2. **Verificar cambios** en el navegador después de implementar
3. **Verificar lint/typecheck** después de cambios en código
4. **No modificar** archivos en public/ a menos que sea necesario

## Sistema de Traducciones

El proyecto usa un sistema simple de traducciones con:
- **Almacenamiento:** Estado reactivo en `src/i18n/store.js`
- **Contexto:** `LocaleProvider.vue` provee el locale actual
- **Archivos:** Traducciones definidas en `src/i18n/index.js`

### Traducciones disponibles
- `ES` - Español (default)
- `EN` - Inglés

### Uso en componentes
```vue
<script setup>
import { useLocale } from './i18n/store.js'
const { locale } = useLocale()
</script>
```

## Verificaciones Necesarias

Después de implementar cambios:

1. **Verificar que npm run dev funciona** sin errores
2. **Verificar que npm run build compila** correctamente
3. **Verificar navegación** entre rutas (Home → Viewer)
4. **Verificar toggle de idioma** cambia los textos correctamente
5. **Verificar que el PDF carga** y se renderiza página a página

## Notas Importantes

- El archivo PDF del catálogo está en `public/informe.pdf`
- El visor usa pdfjs-dist para renderizar páginas en canvas
- Los cambios en archivos Vue se hot-reloadan automáticamente
- Los cambios en CSS se hot-reloadan automáticamente
- Los cambios en archivos JS/JSON requieren reiniciar el dev server

## Repositorio

- **Git:** https://github.com/NoelGaspar/cosmotejido.git

---

*Última actualización: Abril 2026*