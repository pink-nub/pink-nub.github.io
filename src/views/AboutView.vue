<script setup>
import { profile } from '../data/profile'
</script>

<template>
  <div class="site-section">
    <h2 v-reveal class="section-title">About</h2>

    <div v-reveal="100" class="mt-8 max-w-2xl">
      <p class="text-[15px] leading-relaxed text-ink/85">{{ profile.bio }}</p>
      <ul class="mt-6 flex flex-wrap gap-2">
        <li v-for="s in profile.skills" :key="s" class="border border-rule px-3 py-1 text-xs text-muted">{{ s }}</li>
      </ul>
      <a v-if="profile.cvUrl" :href="profile.cvUrl" class="label-caps link-underline mt-8 inline-block" target="_blank" rel="noopener">
        Download CV
      </a>
    </div>

    <div class="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
      <section v-reveal>
        <h3 class="label-caps mb-6 text-muted">Experience</h3>
        <div class="space-y-6">
          <div v-for="e in profile.experience" :key="e.title">
            <h4 class="font-serif text-xl">{{ e.title }}</h4>
            <p class="mt-1 text-[14px] text-muted">{{ e.org }} · {{ e.period }}</p>
          </div>
        </div>
      </section>

      <section v-reveal="120">
        <h3 class="label-caps mb-6 text-muted">Education</h3>
        <div class="space-y-6">
          <div v-for="e in profile.education" :key="e.degree">
            <h4 class="font-serif text-xl">{{ e.degree }}</h4>
            <p class="mt-1 text-[14px] text-muted">{{ e.school }} · {{ e.year }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
