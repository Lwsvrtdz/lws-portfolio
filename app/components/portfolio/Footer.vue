<script setup lang="ts">
defineProps<{
  links: Array<{ label: string; href: string }>
}>()
</script>

<template>
  <footer
    class="flex w-full flex-col items-center justify-between border-t border-primary/15 bg-surface-container-lowest px-8 py-4 md:flex-row md:px-12"
  >
    <div class="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
      SYS_UPTIME: 99.9% | LOC: 127.0.0.1 | CPU: IDLE
    </div>
    <div class="mt-4 flex gap-8 md:mt-0">
      <a
        v-for="link in links"
        :key="link.label"
        :href="link.href"
        class="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 transition-colors hover:text-primary"
      >
        {{ link.label }}
      </a>
    </div>
  </footer>
</template>
