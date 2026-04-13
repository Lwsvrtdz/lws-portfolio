<script setup lang="ts">
defineProps<{
  project: {
    title: string
    description: string
    image: string
    alt: string
    tags: string[]
    href: string
  }
}>()
</script>

<template>
  <article
    class="group overflow-hidden rounded-xl border border-transparent bg-surface-container-low transition-all duration-500 hover:border-outline-variant/30 hover:bg-surface-container-high"
  >
    <div class="relative h-56 overflow-hidden">
      <div class="absolute inset-0 z-10 bg-gradient-to-t from-surface-container-low to-transparent" />
      <img
        :src="project.image"
        :alt="project.alt"
        class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      >
    </div>

    <div class="p-8">
      <div class="mb-4 flex gap-2">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="flex items-center gap-1.5 rounded-full bg-surface-container-highest px-3 py-1 font-mono text-[10px] uppercase text-primary"
        >
          <span class="h-1 w-1 rounded-full bg-primary" />
          {{ tag }}
        </span>
      </div>

      <h4 class="mb-3 font-headline text-2xl font-bold transition-colors group-hover:text-primary">
        {{ project.title }}
      </h4>
      <p class="mb-6 text-sm leading-relaxed text-on-surface-variant">
        {{ project.description }}
      </p>
      <a
        :href="project.href"
        target="_blank"
        rel="noreferrer"
        class="group/link inline-flex items-center gap-2 font-mono text-sm text-primary"
      >
        VIEW_PROJECT
        <span class="material-symbols-outlined transition-transform group-hover/link:translate-x-1">
          arrow_right_alt
        </span>
      </a>
    </div>
  </article>
</template>
