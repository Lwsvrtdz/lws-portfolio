import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
  ],
  theme: {
    extend: {
      colors: {
        background: '#12131d',
        surface: '#12131d',
        'surface-container-lowest': '#0c0d18',
        'surface-container-low': '#1a1b26',
        'surface-container': '#1e1f2a',
        'surface-container-high': '#282935',
        'surface-container-highest': '#333440',
        primary: '#90f7e6',
        'primary-container': '#73daca',
        'on-primary': '#003731',
        'on-primary-container': '#005f55',
        secondary: '#c6c5d4',
        tertiary: '#dfe3ff',
        'tertiary-container': '#bfc7ed',
        outline: '#879390',
        'outline-variant': '#3d4947',
        'on-surface': '#e2e1f1',
        'on-surface-variant': '#bdc9c6',
        'on-background': '#e2e1f1',
        error: '#ffb4ab',
      },
      fontFamily: {
        headline: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        nav: '0 20px 40px rgba(12, 13, 24, 0.4)',
      },
    },
  },
}
