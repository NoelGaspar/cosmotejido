# Cosmo tejido - Catalogo Web

Web App para visualización de catálogo en formato PDF.

## Información del Proyecto

- **Empresa:** Aymara sawuri
- **Nombre del proyecto:** Cosmo tejido
- **Tipo:** SPA con Vue 3 + Vite

## Funcionalidades

- Visualizador de PDF página a página
- Navegación (anterior/siguiente)
- Botón de descarga del PDF
- Toggle de idioma ES/EN
- Diseño responsive
- Header y Footer con información de la empresa

## Stack Tecnológico

- Vue 3 (Composition API)
- Vite
- Vue Router
- pdfjs-dist v4.9.155

## Estructura

```
src/
├── components/       # Componentes reutilizables
├── views/          # Vistas (Home, Viewer)
├── i18n/          # Sistema de traducciones
├── router/         # Configuración de rutas
└── assets/        # Recursos estáticos
```

## Desarrollo

```bash
npm install
npm run dev
```

## Producción

```bash
npm run build
```

## Notas

- El PDF del catálogo debe colocarse en `public/informe.pdf`
- El sistema de traducciones usa un store reactivo simple
- Para agregar más idiomas, editar `src/i18n/store.js`