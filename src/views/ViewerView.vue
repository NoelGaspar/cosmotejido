<template>
  <div class="viewer-view">
    <div class="viewer-container">
      <div class="viewer-header">
        <router-link to="/" class="back-button">
          {{ i18n.t('viewer.backButton') }}
        </router-link>
        <div class="header-right">
          <span class="page-indicator">{{ i18n.t('viewer.pageIndicator') }} {{ currentPage }} {{ i18n.t('viewer.of') }} {{ totalPages }}</span>
          <a :href="pdfUrl" download="catalogo.pdf" class="download-button">
            {{ i18n.t('viewer.downloadButton') }}
          </a>
        </div>
      </div>
      <div class="canvas-container" ref="canvasContainer">
        <canvas ref="pdfCanvas"></canvas>
        <button
          class="overlay-nav overlay-nav-prev"
          :class="{ visible: currentPage > 1 }"
          :disabled="currentPage <= 1"
          @click="prevPage"
          aria-label="Página anterior"
        >
          <span class="arrow">‹</span>
        </button>
        <button
          class="overlay-nav overlay-nav-next"
          :class="{ visible: currentPage < totalPages }"
          :disabled="currentPage >= totalPages"
          @click="nextPage"
          aria-label="Página siguiente"
        >
          <span class="arrow">›</span>
        </button>
      </div>
      <div class="viewer-controls">
        <button
          class="nav-button"
          :disabled="currentPage <= 1"
          @click="prevPage"
        >
          {{ i18n.t('viewer.prevPage') }}
        </button>
        <button
          class="nav-button"
          :disabled="currentPage >= totalPages"
          @click="nextPage"
        >
          {{ i18n.t('viewer.nextPage') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import * as pdfjsLib from 'pdfjs-dist'
import { i18n } from '../i18n/store'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
  lang: {
    type: String,
    default: 'es'
  }
})

const route = useRoute()
const router = useRouter()

const pdfUrl = computed(() => {
  return props.lang === 'en' 
    ? '/cosmotejido/21x28-catalogo-randomeng.pdf' 
    : '/cosmotejido/21x28-catalogo-randomesp.pdf'
})

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`

const pdfCanvas = ref(null)
const currentPage = ref(1)
const totalPages = ref(0)
let pdfDoc = null

const loadPDF = async () => {
  try {
    const loadingTask = pdfjsLib.getDocument(pdfUrl.value)
    const pdf = await loadingTask.promise
    pdfDoc = pdf
    totalPages.value = pdfDoc.numPages
    renderPage(currentPage.value)
  } catch (error) {
    console.error('Error al cargar el PDF:', error)
  }
}

const renderPage = async (pageNum) => {
  if (!pdfDoc) return

  const page = await pdfDoc.getPage(pageNum)
  const scale = 1.5
  const viewport = page.getViewport({ scale })

  const canvas = pdfCanvas.value
  const context = canvas.getContext('2d')

  canvas.height = viewport.height
  canvas.width = viewport.width

  const renderContext = {
    canvasContext: context,
    viewport: viewport
  }

  await page.render(renderContext).promise
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    renderPage(currentPage.value)
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    renderPage(currentPage.value)
  }
}

onMounted(() => {
  loadPDF()
})

watch(() => props.lang, () => {
  currentPage.value = 1
  loadPDF()
})

watch(() => i18n.locale, (newLang) => {
  const routeLang = newLang === 'en' ? 'en' : 'es'
  router.push(`/${routeLang}/viewer`)
})
</script>

<style scoped>
.viewer-view {
  min-height: calc(100vh - 160px);
  padding: 1rem;
  padding-top: calc(60px + 1rem);
  padding-bottom: calc(80px + 3rem);
  display: flex;
  justify-content: center;
}

.viewer-container {
  max-width: 900px;
  width: 100%;
}

.viewer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.back-button {
  padding: 0.5rem 1rem;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.3s ease;
  font-family: var(--font-body);
}

.back-button:hover {
  background-color: #2980b9;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.download-button {
  padding: 0.5rem 1rem;
  background-color: #27ae60;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.3s ease;
  font-family: var(--font-body);
}

.download-button:hover {
  background-color: #219a52;
}

.page-indicator {
  font-size: 1rem;
  color: #555;
  font-weight: 500;
  font-family: var(--font-body);
}

.canvas-container {
  position: relative;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  overflow-x: auto;
  min-height: 400px;
  align-items: center;
}

.canvas-container canvas {
  max-width: 100%;
  height: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.overlay-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 120px;
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease, background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.overlay-nav-prev {
  left: 0;
  border-radius: 0 8px 8px 0;
}

.overlay-nav-next {
  right: 0;
  border-radius: 8px 0 0 8px;
}

.overlay-nav .arrow {
  font-size: 3rem;
  color: white;
  font-weight: bold;
  line-height: 1;
}

.overlay-nav:hover:not(:disabled) {
  background-color: rgba(52, 152, 219, 0.8);
}

.overlay-nav.visible {
  opacity: 0.4;
}

.overlay-nav.visible:hover {
  opacity: 1;
}

.overlay-nav:disabled {
  cursor: not-allowed;
  opacity: 0 !important;
}

.viewer-controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
}

.nav-button {
  padding: 0.75rem 1.5rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  font-family: var(--font-body);
}

.nav-button:hover:not(:disabled) {
  background-color: #2980b9;
  transform: translateY(-2px);
}

.nav-button:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}

@media (max-width: 600px) {
  .viewer-view {
    padding-bottom: calc(100px + 4rem);
  }

  .viewer-header {
    flex-direction: column;
    align-items: stretch;
  }

  .back-button {
    text-align: center;
  }
}
</style>
