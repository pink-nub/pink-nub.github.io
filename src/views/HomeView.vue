<script setup>
import { profile } from '../data/profile'
</script>

<template>
  <div class="site-section">
    <div class="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
      <div v-reveal class="lg:col-span-5">
        <img
          :src="profile.portrait"
          :alt="profile.portraitAlt"
          class="aspect-[4/5] w-full object-cover object-top"
        />
      </div>
      <div v-reveal="120" class="flex flex-col justify-center lg:col-span-7">
        <h1 class="font-serif text-[11vw] leading-[0.95] font-light uppercase tracking-tight lg:text-[5.2vw] xl:text-[72px]">
          <span class="block">Ruqaiya</span>
          <span class="block">Motagam</span>
        </h1>
        <p class="mt-8 font-serif text-2xl">{{ profile.role }}</p>
        <p class="mt-2 max-w-md text-[15px] text-muted">{{ profile.tagline }}</p>
      </div>
    </div>
  </div>
</template>
