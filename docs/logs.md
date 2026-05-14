# Logs de Cambios

Registro de modificaciones, mejoras y correcciones del proyecto.

---

## Mayo 2026

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