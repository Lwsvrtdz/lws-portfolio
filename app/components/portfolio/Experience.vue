<script setup lang="ts">
defineProps<{
  items: Array<{
    role: string
    company: string
    period: string
    description: string
    active?: boolean
  }>
}>()
</script>

<template>
  <section id="experience" class="bg-surface-container-low px-8 py-32 md:px-24">
    <div class="mx-auto max-w-4xl">
      <div class="mb-24 text-center">
        <h2 class="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-primary">/var/log/career</h2>
        <h3 class="font-headline text-5xl font-bold">Execution Timeline</h3>
      </div>

      <div class="space-y-12">
        <article
          v-for="item in items"
          :key="`${item.role}-${item.company}`"
          class="relative border-l-2 border-outline-variant/30 pl-8 md:pl-12"
          :class="{ 'pb-12': item !== items[items.length - 1] }"
        >
          <div
            class="absolute left-[-9px] top-0 h-4 w-4 rounded-full"
            :class="
              item.active
                ? 'bg-primary ring-4 ring-primary/20'
                : 'border-2 border-outline-variant/50 bg-surface-container-highest'
            "
          />
          <div class="mb-4 flex flex-col md:flex-row md:items-start md:justify-between">
            <div>
              <h4 class="text-2xl font-bold text-on-surface">{{ item.role }}</h4>
              <p class="font-mono text-sm text-primary">{{ item.company }}</p>
            </div>
            <span class="mt-2 font-mono text-sm text-on-surface-variant md:mt-0">{{ item.period }}</span>
          </div>
          <p class="leading-relaxed text-on-surface-variant">
            {{ item.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
