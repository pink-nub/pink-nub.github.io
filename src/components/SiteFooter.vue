<script setup>
import { profile } from '../data/profile'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-16">
    <div class="flex flex-col items-center justify-between gap-4 py-14 text-xs tracking-wider text-muted sm:flex-row">
      <p>© {{ year }} {{ profile.name }}</p>
      <a :href="`mailto:${profile.contact.email}`" class="font-serif text-base italic text-ink/80 hover:text-ink">
        {{ profile.contact.email }}
      </a>
    </div>
  </footer>
</template>
