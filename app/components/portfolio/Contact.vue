<script setup lang="ts">
defineProps<{
  links: Array<{
    label: string
    value: string
    icon: string
    href?: string
  }>
}>()
</script>

<template>
  <section id="contact" class="bg-surface-container-lowest px-8 py-32 md:px-24">
    <div class="mx-auto grid max-w-6xl grid-cols-1 gap-20 lg:grid-cols-2">
      <div>
        <h2 class="mb-8 font-headline text-5xl font-bold">
          Let's build something <span class="text-primary">extraordinary</span>
        </h2>
        <p class="mb-12 text-lg text-on-surface-variant">
          Currently available for senior fullstack roles or high-impact consulting projects. Drop a message or find
          me on the grid.
        </p>

        <div class="space-y-6">
          <a
            v-for="link in links"
            :key="link.label"
            :href="link.href"
            :target="link.href?.startsWith('http') ? '_blank' : undefined"
            :rel="link.href?.startsWith('http') ? 'noreferrer' : undefined"
            class="group flex items-center gap-4"
          >
            <div
              class="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary"
            >
              <span class="material-symbols-outlined">{{ link.icon }}</span>
            </div>
            <div>
              <p class="font-mono text-xs uppercase text-outline-variant">{{ link.label }}</p>
              <p class="font-medium text-on-surface transition-colors group-hover:text-primary">{{ link.value }}</p>
            </div>
          </a>
        </div>
      </div>

      <div class="rounded-2xl border border-outline-variant/10 bg-surface-container-low p-8">
        <form class="space-y-6">
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label class="mb-2 block font-mono text-xs uppercase text-outline-variant">Identifier</label>
              <input
                type="text"
                placeholder="Your Name"
                class="w-full rounded-lg border-none bg-surface-container-lowest px-4 py-3 text-on-surface placeholder:text-outline-variant focus:ring-1 focus:ring-primary"
              >
            </div>
            <div>
              <label class="mb-2 block font-mono text-xs uppercase text-outline-variant">Callback_Path</label>
              <input
                type="email"
                placeholder="Email Address"
                class="w-full rounded-lg border-none bg-surface-container-lowest px-4 py-3 text-on-surface placeholder:text-outline-variant focus:ring-1 focus:ring-primary"
              >
            </div>
          </div>

          <div>
            <label class="mb-2 block font-mono text-xs uppercase text-outline-variant">Payload_Data</label>
            <textarea
              rows="4"
              placeholder="Your Message"
              class="w-full rounded-lg border-none bg-surface-container-lowest px-4 py-3 text-on-surface placeholder:text-outline-variant focus:ring-1 focus:ring-primary"
            />
          </div>

          <button
            type="button"
            class="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-4 font-bold text-on-primary transition-all hover:brightness-110"
          >
            TRANSMIT_MESSAGE
            <span class="material-symbols-outlined">send</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
