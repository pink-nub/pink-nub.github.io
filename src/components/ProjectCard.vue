<script setup>
defineProps({
  project: { type: Object, required: true },
})
</script>

<template>
  <article class="group flex flex-col">
    <RouterLink
      :to="{ name: 'project', params: { slug: project.slug } }"
      class="block transition-opacity hover:opacity-90"
      :aria-label="`Read about: ${project.title}`"
      tabindex="-1"
      aria-hidden="true"
    >
      <img
        :src="project.thumbnail"
        :alt="`Cover of the report: ${project.title}`"
        class="aspect-[3/2] w-full object-cover"
        loading="lazy"
      />
    </RouterLink>

    <p class="label-caps mt-5 text-muted">
      {{ project.kicker }}<template v-if="project.year"> · {{ project.year }}</template>
    </p>
    <h3 class="mt-2 font-serif text-2xl leading-tight font-normal">
      <RouterLink
        :to="{ name: 'project', params: { slug: project.slug } }"
        class="hover:text-muted"
      >
        {{ project.question }}
      </RouterLink>
    </h3>

    <RouterLink
      :to="{ name: 'project', params: { slug: project.slug } }"
      class="label-caps link-underline mt-3 self-start"
      tabindex="-1"
      aria-hidden="true"
    >
      Read more
    </RouterLink>
  </article>
</template>
