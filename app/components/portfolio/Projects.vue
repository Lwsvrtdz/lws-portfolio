<script setup lang="ts">
defineProps<{
  projects: Array<{
    title: string
    description: string
    image: string
    alt: string
    tags: string[]
  }>
}>()
</script>

<template>
  <section id="projects" class="px-8 py-32 md:px-24">
    <div class="mb-16 flex items-end justify-between">
      <div>
        <h2 class="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-primary">./repositories</h2>
        <h3 class="font-headline text-5xl font-bold">Featured Projects</h3>
      </div>
      <div class="hidden font-mono text-outline-variant md:block">Total_Builds: 142</div>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <PortfolioProjectCard
        v-for="project in projects"
        :key="project.title"
        :project="project"
      />
    </div>
  </section>
</template>
