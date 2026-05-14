# AGENTS.md

## Commands
```bash
npm install
npm run dev      # Dev server at localhost
npm run build   # Builds to dist/
npm run preview # Preview production build
```

## Project
- Vue 3 + Vite SPA
- PDF catalog by language:
  - ES: `/es/viewer` → `public/21x28-catalogo-randomesp.pdf`
  - EN: `/en/viewer` → `public/21x28-catalogo-randomeng.pdf`
- Custom i18n system (not vue-i18n)

## Key Files
- `src/router/index.js` - Routes (includes /es/viewer, /en/viewer)
- `src/views/ViewerView.vue` - PDF rendering with pdfjs-dist v4.9.155
- `src/components/AppHeader.vue` - Language toggle
- `docs/agents.md` - Detailed Spanish docs

## Deployment
- Push to `main` triggers GitHub Pages (builds dist/)
- Uses `npm ci` + `npm run build` in CI

## Notes
- Base path: `/cosmotejido/` (Vite config)
- No linting or type-checking
- No tests
- CSS is vanilla scoped