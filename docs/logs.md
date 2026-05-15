# Logs de Cambios

Registro de modificaciones, mejoras y correcciones del proyecto.

### 15/05/2026 - Botones de navegación overlay en visor de PDF
**Tipo:** Mejora UX

**Cambio:**
- Se agregaron botones de navegación en los laterales del visor de PDF
- Botones con opacidad baja (0.4) que se iluminan al pasar el mouse
- Flechas ‹ › grandes para facilitar el click
- Se muestran solo cuando hay página anterior/siguiente disponible
- Funcionalidad existente (prevPage/nextPage) reutilizada

**Archivos modificados:**
- `src/views/ViewerView.vue`

### 15/05/2026 - Ajuste de padding en Home para móviles
**Tipo:** Bug fix

**Cambio:**
- El footer fijo (position: fixed) tapaba el botón "View Catalog" en pantallas pequeñas
- Se aumentó el padding-bottom en HomeView para mobile: `calc(80px + 4rem)`
- Asegura que el contenido no quede oculto detrás del footer

**Archivos modificados:**
- `src/views/HomeView.vue`

---

### 14/05/2026 - Sistema de fuentes personalizado
**Tipo:** Estilización

**Cambio:**
- Se agregaron fuentes personalizadas al proyecto:
  - **Centaur** para headings (h1-h6): `/fonts/CENTAUR.TTF`
  - **Texta** para textos body: `/fonts/TextaRegular.ttf`
- Todos los textos ahora están en uppercase
- Las fuentes se copiaron a `public/fonts/` para estar disponibles en producción

**Archivos modificados:**
- `src/App.vue` - CSS global con @font-face y variables CSS
- `src/views/HomeView.vue` - Aplicación de fuentes a title, subtitle, description, button
- `src/components/AppHeader.vue` - Aplicación de fuentes a logo y toggle
- `src/components/AppFooter.vue` - Aplicación de fuentes a textos
- `src/views/ViewerView.vue` - Aplicación de fuentes a controles

**Archivos agregados:**
- `public/fonts/CENTAUR.TTF`
- `public/fonts/TextaRegular.ttf`

### 14/05/2026 - Rutas separadas por idioma
**Tipo:** Refactorización

**Cambio:**
- Se crearon rutas separadas para cada idioma:
  - `/es/viewer` → carga `21x28-catalogo-randomesp.pdf`
  - `/en/viewer` → carga `21x28-catalogo-randomeng.pdf`
- El ViewerView ahora recibe `lang` como prop de la ruta
- El botón del Home navega a la ruta correcta según el idioma actual

**Archivos modificados:**
- `src/router/index.js`
- `src/views/ViewerView.vue`
- `src/views/HomeView.vue`
- `AGENTS.md`

### 14/05/2026 - Fix base path en URLs de PDF
**Tipo:** Bug fix

**Cambio:**
- El proyecto usa `base: '/cosmotejido/'` en Vite config
- Las URLs de los PDFs ahora incluyen el prefijo `/cosmotejido/`
- `/cosmotejido/21x28-catalogo-randomesp.pdf`
- `/cosmotejido/21x28-catalogo-randomeng.pdf`

**Archivos modificados:**
- `src/views/ViewerView.vue`

### 14/05/2026 - PDFs por idioma (inicial)
**Tipo:** Nueva funcionalidad

**Cambio:**
- El visor de PDF carga un archivo diferente según el idioma:
  - ES: `21x28-catalogo-randomesp.pdf`
  - EN: `21x28-catalogo-randomeng.pdf`

**Archivos modificados:**
- `src/views/ViewerView.vue`
- `docs/FSD.md`
- `docs/agents.md`

---

*Para agregar nuevos cambios, editar este archivo con el formato: fecha, tipo, descripción, archivos afectados.*