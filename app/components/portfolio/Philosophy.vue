<script setup lang="ts">
defineProps<{
  points: string[]
}>()
</script>

<template>
  <section class="relative bg-surface-container-lowest px-8 py-32 md:px-24">
    <div class="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
      <div class="order-2 md:order-1">
        <div class="grid grid-cols-2 gap-4">
          <div class="flex h-64 items-center justify-center rounded-xl border border-outline-variant/10 bg-surface-container-high">
            <span class="material-symbols-outlined text-6xl text-primary/40">developer_board</span>
          </div>
          <div class="mt-8 flex h-64 items-center justify-center rounded-xl border border-outline-variant/10 bg-surface-container">
            <span class="material-symbols-outlined text-6xl text-primary/40">rocket_launch</span>
          </div>
        </div>
      </div>

      <div class="order-1 md:order-2">
        <h2 class="mb-8 font-headline text-4xl font-bold text-on-surface">
          The Engineering <br>
          <span class="text-primary">Philosophy</span>
        </h2>
        <p class="mb-8 text-lg leading-relaxed text-on-surface-variant">
          Building MVPs &amp; Scaling Enterprise Apps the Right Way. I don't just write code; I architect systems
          that are built for longevity, performance, and developer ergonomics.
        </p>
        <ul class="space-y-4">
          <li v-for="point in points" :key="point" class="flex items-center gap-4 text-on-surface">
            <span class="material-symbols-outlined text-primary">check_circle</span>
            <span>{{ point }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
