<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { profile } from '../data/profile'
import { sections, activeSection, scrollToSection } from '../sections'

const route = useRoute()
const open = ref(false)

function onClick(id) {
  open.value = false
  if (route.hash === `#${id}`) scrollToSection(id)
}
</script>

<template>
  <header class="sticky top-0 z-30 w-full bg-paper">
    <div class="mx-auto max-w-7xl px-6 pt-6 sm:px-10 lg:px-16">
      <nav
        class="relative flex items-center justify-between border-b border-rule pb-5"
        aria-label="Main navigation"
      >
        <RouterLink
          :to="{ path: '/', hash: '#home' }"
          class="label-caps font-medium hover:opacity-70"
          @click="onClick('home')"
        >
          {{ profile.name }}
        </RouterLink>

        <button class="label-caps md:hidden" :aria-expanded="open" @click="open = !open">
          Menu
        </button>

        <ul
          class="label-caps items-center gap-8 font-medium md:flex lg:gap-12"
          :class="open ? 'absolute inset-x-0 top-full z-20 flex flex-col gap-6 bg-paper px-6 py-6' : 'hidden'"
        >
          <li v-for="s in sections" :key="s.id">
            <RouterLink
              :to="{ path: '/', hash: `#${s.id}` }"
              class="pb-0.5 transition-colors"
              :class="activeSection === s.id
                ? 'border-b border-ink font-semibold text-ink'
                : 'text-muted hover:text-ink'"
              :aria-current="activeSection === s.id ? 'location' : undefined"
              @click="onClick(s.id)"
            >
              {{ s.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
