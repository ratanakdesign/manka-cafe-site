import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink:          '#1C1512',
        coffee:       '#392209',
        'brown-deep': '#3D2314',
        brown:        '#6B4226',
        stone:        '#9E9388',
        cream:        '#FFF8F0',
        parchment:    '#F5EFE6',
        blush:        '#F5C6C6',
        matcha:       '#8DB580',
        gold:         '#E8C872',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        body:    ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      maxWidth: {
        prose: '62ch',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      transitionTimingFunction: {
        'out-expo':  'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
        'in-expo':   'cubic-bezier(0.7, 0, 0.84, 0)',
      },
    },
  },
  plugins: [],
}

export default config
