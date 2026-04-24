<template>
  <div class="viewer-view">
    <div class="viewer-container">
      <div class="viewer-header">
        <router-link to="/" class="back-button">
          {{ i18n.t('viewer.backButton') }}
        </router-link>
        <div class="header-right">
          <span class="page-indicator">{{ i18n.t('viewer.pageIndicator') }} {{ currentPage }} {{ i18n.t('viewer.of') }} {{ totalPages }}</span>
          <a href="/informe.pdf" download="catalogo.pdf" class="download-button">
            {{ i18n.t('viewer.downloadButton') }}
          </a>
        </div>
      </div>
      <div class="canvas-container">
        <canvas ref="pdfCanvas"></canvas>
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
import { ref, onMounted } from 'vue'
import * as pdfjsLib from 'pdfjs-dist'
import { i18n } from '../i18n/store'

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`

const pdfCanvas = ref(null)
const currentPage = ref(1)
const totalPages = ref(0)
let pdfDoc = null

const loadPDF = async () => {
  try {
    const loadingTask = pdfjsLib.getDocument('/informe.pdf')
    pdfDoc = await loadingTask.promise
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
}

.download-button:hover {
  background-color: #219a52;
}

.page-indicator {
  font-size: 1rem;
  color: #555;
  font-weight: 500;
}

.canvas-container {
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
  .viewer-header {
    flex-direction: column;
    align-items: stretch;
  }

  .back-button {
    text-align: center;
  }
}
</style>