import { createRouter, createWebHistory } from 'vue-router'
import OnePageView from './views/OnePageView.vue'
import { projects } from './data/projects'
import { scrollToSection, scrollToSectionOnLoad } from './sections'

const routes = [
  { path: '/', name: 'home', component: OnePageView },
  {
    path: '/projects/:slug',
    name: 'project',
    component: () => import('./views/ProjectDetailView.vue'),
    beforeEnter: (to) =>
      projects.some((p) => p.slug === to.params.slug) || { path: '/', hash: '#projects' },
  },
  { path: '/about', redirect: { path: '/', hash: '#about' } },
  { path: '/projects', redirect: { path: '/', hash: '#projects' } },
  { path: '/contact', redirect: { path: '/', hash: '#contact' } },
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      const id = to.hash.slice(1)
      if (from.name === 'home') scrollToSection(id)
      else scrollToSectionOnLoad(id)
      return false
    }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const project = projects.find((p) => p.slug === to.params.slug)
  document.title = project
    ? `${project.question} — Ruqaiya Motagam`
    : 'Ruqaiya Motagam — Energy Economist'
})

export default router
