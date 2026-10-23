<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { sections, activeSection } from '../sections'
import HomeView from './HomeView.vue'
import AboutView from './AboutView.vue'
import ProjectsSectionView from './ProjectsSectionView.vue'
import ContactView from './ContactView.vue'

const components = {
  home: HomeView,
  about: AboutView,
  projects: ProjectsSectionView,
  contact: ContactView,
}

let observer
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) activeSection.value = entry.target.id
      }
    },
    { rootMargin: '-45% 0px -50% 0px' },
  )
  for (const s of sections) {
    const el = document.getElementById(s.id)
    if (el) observer.observe(el)
  }
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <section v-for="s in sections" :id="s.id" :key="s.id" class="scroll-mt-20">
    <component :is="components[s.id]" />
  </section>
</template>
