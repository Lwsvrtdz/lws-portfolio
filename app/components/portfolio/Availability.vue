<script setup lang="ts">
defineProps<{
  services: Array<{
    title: string
    description: string
    icon: string
  }>
}>()
</script>

<template>
  <section id="availability" class="relative bg-surface-container-lowest px-8 py-32 md:px-24">
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

    <div class="mx-auto max-w-6xl">
      <div class="mb-14 flex flex-col gap-8 rounded-[2rem] border border-outline-variant/20 bg-surface-container-low p-8 lg:flex-row lg:items-end lg:justify-between lg:p-12">
        <div class="max-w-3xl">
          <p class="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-primary">/proc/availability</p>
          <h2 class="mb-5 font-headline text-4xl font-bold leading-tight text-on-surface md:text-5xl">
            Open to consulting engagements
            <span class="text-primary">and full-time roles</span>
          </h2>
          <p class="text-lg leading-relaxed text-on-surface-variant">
            I partner with teams that need senior engineering support, whether that means focused consulting on a
            product problem or joining full-time to help lead delivery long term.
          </p>
        </div>

        <div class="flex flex-wrap gap-4">
          <a
            href="#contact"
            class="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 font-bold text-on-primary transition-transform hover:scale-105"
          >
            Start a Conversation
          </a>
          <a
            href="#experience"
            class="inline-flex items-center justify-center rounded-full border border-outline-variant/30 bg-surface-container px-8 py-4 font-semibold text-on-surface transition-colors hover:border-primary/50 hover:text-primary"
          >
            View Experience
          </a>
        </div>
      </div>

      <div class="mb-8 flex items-center gap-3 font-headline text-2xl font-semibold text-on-surface">
        <span class="material-symbols-outlined text-primary">ads_click</span>
        <p>Ways I can contribute right away</p>
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
        <article
          v-for="service in services"
          :key="service.title"
          class="rounded-2xl border border-outline-variant/15 bg-surface-container p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-surface-container-high"
        >
          <div class="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/12 text-primary">
            <span class="material-symbols-outlined">{{ service.icon }}</span>
          </div>
          <h3 class="mb-3 font-headline text-2xl font-bold text-on-surface">{{ service.title }}</h3>
          <p class="leading-relaxed text-on-surface-variant">
            {{ service.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
