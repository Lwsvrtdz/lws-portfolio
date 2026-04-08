<script setup lang="ts">
type SkillCard = {
  title: string
  description?: string
  icon?: string
  size: 'feature' | 'badge' | 'wide'
  accent?: boolean
}

defineProps<{
  cards: SkillCard[]
}>()
</script>

<template>
  <section class="px-8 py-32 md:px-24">
    <h2 class="mb-16 text-center font-mono text-sm uppercase tracking-[0.3em] text-primary">
      SYSTEM_CAPABILITIES
    </h2>

    <div class="grid auto-rows-[120px] grid-cols-1 gap-4 md:grid-cols-4">
      <template v-for="card in cards" :key="card.title">
        <div
          v-if="card.size === 'feature'"
          class="flex flex-col justify-between rounded-xl border border-outline-variant/10 bg-surface-container-low p-8 md:col-span-2 md:row-span-2"
        >
          <span class="material-symbols-outlined text-4xl text-primary">{{ card.icon }}</span>
          <div>
            <h4 class="mb-2 font-headline text-2xl font-bold">{{ card.title }}</h4>
            <p class="text-sm text-on-surface-variant">{{ card.description }}</p>
          </div>
        </div>

        <div
          v-else-if="card.size === 'wide'"
          class="flex items-center gap-6 rounded-xl border border-outline-variant/10 bg-surface-container-low p-8 md:col-span-2"
        >
          <span class="material-symbols-outlined text-3xl text-primary">{{ card.icon }}</span>
          <p class="font-headline font-semibold text-on-surface">{{ card.title }}</p>
        </div>

        <div
          v-else
          class="flex items-center justify-center rounded-xl border p-6"
          :class="
            card.accent
              ? 'border-primary/20 bg-surface-container-high'
              : 'border-outline-variant/10 bg-surface-container-high'
          "
        >
          <span
            class="font-mono text-xl font-bold uppercase"
            :class="card.accent ? 'text-primary' : 'text-on-surface'"
          >
            {{ card.title }}
          </span>
        </div>
      </template>
    </div>
  </section>
</template>
