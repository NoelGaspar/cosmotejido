import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ViewerView from '../views/ViewerView.vue'

const router = createRouter({
  history: createWebHistory('#'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/viewer',
      name: 'viewer',
      component: ViewerView,
      props: { lang: 'es' }
    },
    {
      path: '/es/viewer',
      name: 'viewer-es',
      component: ViewerView,
      props: { lang: 'es' }
    },
    {
      path: '/en/viewer',
      name: 'viewer-en',
      component: ViewerView,
      props: { lang: 'en' }
    }
  ]
})

export default router