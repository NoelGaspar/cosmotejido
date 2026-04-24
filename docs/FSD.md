# FSD.md - Especificación Funcional del Proyecto

## 1. Visión General

**Nombre del proyecto:** Cosmo tejido
**Empresa:** Aymara sawuri
**Tipo de aplicación:** Web estática (SPA con Vue Router)
**Propósito:** Visualizador de catálogo en PDF para lectura página a página
**Usuario objetivo:** Clientes que necesitan acceder a un catálogo digital

---

## 2. Stack Tecnológico

- **Framework:** Vue 3 (Composition API)
- **Build tool:** Vite
- **Enrutamiento:** Vue Router
- **Librería PDF:** pdfjs-dist v4.9.155
- **Estilos:** CSS vanilla (scoped en componentes)
- **i18n:** Sistema personalizado de traducciones ES/EN

---

## 3. Estructura de Navegación

### Página 1: Home (/)
- Título con el nombre del catálogo
- Descripción breve del proyecto
- Imagen representativa
- Botón "Ver Catálogo" / "View Catalog" → navegación a /viewer
- Header con nombre de empresa y toggle de idioma
- Footer con info de la empresa y redes sociales

### Página 2: Visor de PDF (/viewer)
- Visualizador de PDF página a página
- Controles de navegación (anterior/siguiente)
- Indicador de página actual
- Botón de descarga del PDF
- Header sencillo (mismo que home)
- Footer (mismo que home)

---

## 4. Componentes

| Componente | Descripción |
|------------|-------------|
| `AppHeader` | Header simple con logo/nombre y toggle de idioma |
| `AppFooter` | Footer con empresa y redes sociales |
| `HomeView` | Página principal con descripción y CTA |
| `ViewerView` | Visor de PDF con navegación y descarga |

---

## 5. Funcionalidades

### HomeView
- Mostrar imagen del catálogo
- Mostrar texto descriptivo (multidioma)
- Botón CTA que navega a /viewer

### ViewerView
- Cargar PDF desde archivo local (public/)
- Renderizar página actual en canvas
- Navegación: botón anterior, botón siguiente
- Mostrar número de página actual / total
- Botón para volver al inicio
- Botón de descarga del PDF

### Sistema i18n
- Toggle de idioma ES/EN en el header
- Traducciones para todos los textos de la interfaz

---

## 6. Archivos del Proyecto

```
src/
├── main.js              # Configuración de Vue y Router
├── App.vue              # Layout principal con Header/Footer
├── router/
│   └── index.js         # Definición de rutas
├── i18n/
│   └── store.js        # Sistema de traducciones
├── views/
│   ├── HomeView.vue     # Página principal
│   └── ViewerView.vue   # Visor de PDF
├── components/
│   ├── AppHeader.vue    # Header compartido con toggle
│   └── AppFooter.vue   # Footer compartido

public/
├── informe.pdf        # Archivo del catálogo (PDF real)
└── favicon.svg        # Icono de la app
```

---

## 7. Rutas

| Path | Componente | Descripción |
|------|------------|-------------|
| `/` | HomeView | Landing page |
| `/viewer` | ViewerView | Visor de PDF |

---

## 8. Consideraciones de Diseño

- **Header:** Minimalista, fijo en la parte superior, con toggle ES/EN
- **Footer:** Fijo en la parte inferior con enlaces a redes sociales
- **Responsive:** Adaptable a móviles y desktop
- **Colores:** Neutros/profesionales (#2c3e50, #3498db, #ecf0f1)

---

## 9. Pendientes (completados)

- [x] Archivo PDF del catálogo (informe.pdf en public/)
- [x] Textos para la página de inicio (definidos con traducciones)
- [x] Nombre de la empresa (Aymara sawuri)
- [x] Nombre del proyecto (Cosmo tejido)
- [x] Sistema de idioma ES/EN
- [x] Botón de descarga en el viewer

---

## 10. Traducciones

### Español (ES)
- Home: "Cosmo tejido", "Ver Catálogo"
- Viewer: "Volver al Inicio", "Anterior", "Siguiente", "Descargar"
- Footer: "Aymara sawuri", "Todos los derechos reservados"

### Inglés (EN)
- Home: "Cosmo weave", "View Catalog"
- Viewer: "Back to Home", "Previous", "Next", "Download"
- Footer: "Aymara sawuri", "All rights reserved"

---

*Documento generado a partir de idea.md y agents.md*
*Última actualización: Abril 2026*