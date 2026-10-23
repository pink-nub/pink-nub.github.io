<script setup>
import { projects } from '../data/projects'
import ProjectCard from '../components/ProjectCard.vue'
</script>

<template>
  <div class="site-section">
    <h2 v-reveal class="section-title">Previous work</h2>

    <div class="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
      <ProjectCard v-for="(p, i) in projects" :key="p.slug" v-reveal="i * 120" :project="p" />
    </div>
  </div>
</template>
