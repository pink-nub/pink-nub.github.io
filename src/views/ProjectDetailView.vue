<script setup>
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects'
import { activeSection } from '../sections'

const route = useRoute()
const project = computed(() => projects.find((p) => p.slug === route.params.slug))

onMounted(() => {
  activeSection.value = 'projects'
})
</script>

<template>
  <article v-if="project" class="site-section">
    <RouterLink
      :to="{ path: '/', hash: '#projects' }"
      class="label-caps text-muted hover:text-ink"
    >
      ← Previous work
    </RouterLink>

    <header v-reveal class="mt-10 max-w-4xl">
      <p class="label-caps text-muted">
        {{ project.kicker }}<template v-if="project.year"> · {{ project.year }}</template>
      </p>
      <h1 class="mt-3 font-serif text-3xl leading-tight font-light sm:text-4xl lg:text-5xl">
        {{ project.question }}
      </h1>
      <p class="mt-4 font-serif text-lg italic text-muted">{{ project.title }}</p>
    </header>

    <img
      v-reveal="100"
      :src="project.thumbnail"
      :alt="`Cover of the report: ${project.title}`"
      class="mt-12 w-full"
    />

    <div v-reveal class="mt-12 max-w-2xl">
      <p class="text-[15px] leading-relaxed text-ink/85">{{ project.summary }}</p>
    </div>

    <dl v-reveal class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
      <div v-for="f in project.findings" :key="f.value">
        <dt class="font-serif text-3xl">{{ f.value }}</dt>
        <dd class="mt-2 text-xs leading-snug text-muted">{{ f.label }}</dd>
      </div>
    </dl>

    <div v-reveal class="mt-14">
      <h2 class="label-caps text-muted">Downloads</h2>
      <div class="label-caps mt-5 flex flex-wrap gap-x-8 gap-y-4">
        <a v-if="project.reportUrl" :href="project.reportUrl" download class="link-underline">
          Research report (PDF)
        </a>
        <a v-if="project.modelUrl" :href="project.modelUrl" download class="link-underline">
          Working model (Numbers)
        </a>
      </div>
      <p v-if="!project.reportUrl && !project.modelUrl" class="mt-5 text-[15px] text-muted">
        Files for this project are not published yet.
      </p>
    </div>
  </article>
</template>
