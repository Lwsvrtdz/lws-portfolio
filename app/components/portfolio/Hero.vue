<template>
  <section id="home" class="relative flex min-h-screen flex-col justify-center overflow-hidden px-8 py-20 md:px-24">
    <div class="absolute right-[-5rem] top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
    <div class="absolute bottom-1/4 left-[-5rem] h-80 w-80 rounded-full bg-tertiary-container/5 blur-[100px]" />

    <div class="relative z-10 max-w-5xl">
      <div class="mb-6 flex items-center gap-2 font-mono text-lg text-primary">
        <span class="opacity-50">louise@portfolio:~$</span>
        <span class="terminal-cursor">whoami</span>
      </div>

      <h1 class="mb-8 font-headline text-6xl font-bold leading-tight tracking-tighter text-on-surface md:text-8xl">
        Louise Ishmael <br>
        <span class="text-primary-container">Virtudazo</span>
      </h1>

      <p class="mb-12 max-w-2xl border-l-2 border-primary/30 pl-6 text-xl text-on-surface-variant md:text-2xl">
        Senior Fullstack Engineer | 6+ Years Exp | Laravel &amp; VueJS Specialist. <br>
        <span class="mt-2 block text-lg italic text-on-surface/60">
          Crafting precision-engineered digital architectures.
        </span>
      </p>

      <div class="flex flex-wrap gap-4">
        <a
          href="#projects"
          class="flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-bold text-on-primary transition-transform hover:scale-105"
        >
          View Repositories
          <span class="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
        <a
          href="#contact"
          class="rounded-lg border border-outline-variant/30 bg-surface-container-high px-8 py-4 font-semibold text-on-surface transition-all hover:border-primary/50 hover:bg-primary/10"
        >
          Initiate Connection
        </a>
      </div>
    </div>

    <div class="absolute bottom-24 right-24 hidden w-1/3 opacity-40 lg:block">
      <div class="rounded-xl border border-outline-variant/20 bg-surface-container-lowest p-6 shadow-2xl">
        <div class="mb-4 flex gap-1.5">
          <div class="h-3 w-3 rounded-full bg-error/50" />
          <div class="h-3 w-3 rounded-full bg-primary/50" />
          <div class="h-3 w-3 rounded-full bg-secondary/50" />
        </div>
        <pre class="font-mono text-sm text-on-surface-variant"><span class="text-primary">class</span> <span class="text-secondary">Architect</span> {
  <span class="text-primary">public</span> <span class="text-secondary">function</span> <span class="text-primary-container">build</span>($request) {
    <span class="text-outline">return</span> <span class="text-primary">App</span>::make(<span class="text-primary-container">MVP</span>::class)
      -&gt;scale()
      -&gt;secure()
      -&gt;deploy();
  }
}</pre>
      </div>
    </div>
  </section>
</template>
