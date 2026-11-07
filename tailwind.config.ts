import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        enamel: 'var(--enamel)',
        'enamel-deep': 'var(--enamel-deep)',
        'on-enamel': 'var(--on-enamel)',
        'on-enamel-dim': 'var(--on-enamel-dim)',
        glass: 'var(--glass)',
        ink: 'var(--ink)',
        'ink-dim': 'var(--ink-dim)',
        display: 'var(--display)',
        led: 'var(--led)',
        signal: 'var(--signal)',
        paper: 'var(--paper)',
      },
      fontFamily: {
        led: ['var(--font-led)', 'monospace'],
        panel: ['var(--font-panel)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        receipt: ['var(--font-receipt)', 'monospace'],
      },
    },
  },
}
export default config
