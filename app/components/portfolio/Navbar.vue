<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps<{
  links: Array<{ label: string; href: string }>
}>()

const activeHash = ref('#home')

let observer: IntersectionObserver | null = null

const updateFromLocation = () => {
  activeHash.value = window.location.hash || '#home'
}

onMounted(() => {
  updateFromLocation()
  window.addEventListener('hashchange', updateFromLocation)

  const sections = props.links
    .map((link) => document.querySelector<HTMLElement>(link.href))
    .filter((section): section is HTMLElement => section !== null)

  observer = new IntersectionObserver(
    (entries) => {
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

      if (visibleEntries.length === 0) {
        return
      }

      activeHash.value = `#${visibleEntries[0].target.id}`
    },
    {
      rootMargin: '-20% 0px -55% 0px',
      threshold: [0.2, 0.35, 0.5, 0.7],
    },
  )

  sections.forEach((section) => observer?.observe(section))
})

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', updateFromLocation)
  observer?.disconnect()
})
</script>

<template>
  <nav class="glass-panel fixed top-0 z-50 flex h-16 w-full items-center justify-between px-6 shadow-nav md:px-8">
    <div class="font-mono text-sm font-bold uppercase tracking-widest text-primary md:text-base">
      ROOT@PORTFOLIO:~
    </div>

    <div class="hidden items-center gap-8 md:flex">
      <a
        v-for="link in links"
        :key="link.href"
        :href="link.href"
        class="font-headline px-2 py-1 text-sm font-medium uppercase tracking-tight transition-all duration-300"
        :class="
          activeHash === link.href
            ? 'border-b-2 border-primary pb-1 font-bold text-primary'
            : 'text-slate-400 hover:bg-primary/10 hover:text-primary'
        "
      >
        {{ link.label }}
      </a>
    </div>

    <div class="flex items-center gap-4 text-primary">
      <span class="material-symbols-outlined cursor-pointer transition-transform hover:scale-110">terminal</span>
      <span class="material-symbols-outlined cursor-pointer transition-transform hover:scale-110">
        settings_ethernet
      </span>
    </div>
  </nav>
</template>
