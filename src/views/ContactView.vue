<script setup>
import { profile } from '../data/profile'
const c = profile.contact
</script>

<template>
  <div class="site-section">
    <h2 v-reveal class="section-title">Get in touch</h2>

    <dl v-reveal="100" class="mt-8 space-y-7">
      <div>
        <dt class="label-caps text-muted">Email</dt>
        <dd class="mt-1">
          <a :href="`mailto:${c.email}`" class="font-serif text-xl hover:text-muted sm:text-2xl">{{ c.email }}</a>
        </dd>
      </div>
      <div v-if="c.phone">
        <dt class="label-caps text-muted">Mobile</dt>
        <dd class="mt-1">
          <a :href="c.phoneHref" class="font-serif text-xl hover:text-muted sm:text-2xl">{{ c.phone }}</a>
        </dd>
      </div>
      <div v-if="c.linkedin">
        <dt class="label-caps text-muted">LinkedIn</dt>
        <dd class="mt-1">
          <a :href="c.linkedin" class="font-serif text-xl hover:text-muted sm:text-2xl" target="_blank" rel="noopener">Profile</a>
        </dd>
      </div>
    </dl>
  </div>
</template>
