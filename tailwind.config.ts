import { Config } from 'tailwindcss';

import colors from 'tailwindcss/colors'; // Optional: import default colors to reuse them

const tailwindConfig = {
  content: ['./emails/**/*.{html,js,jsx,ts,tsx}'],
  // darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {
      // Add your custom v4 colors here
      colors: {
        primary:
          'oklch(0.558856926625759 0.11231773579982252 93.87967943941892)',
        'primary-foreground':
          'oklch(0.995 0.03369532073994675 93.87967943941892)',
        secondary: 'oklch(0.92 0.011231773579982252 93.87967943941892)',
        'secondary-foreground':
          'oklch(0.4999999999999999 0.0673906414798935 93.87967943941892)',
        muted: 'oklch(0.92 0.011231773579982252 93.87967943941892)',
        'muted-foreground':
          'oklch(0.49999999999999994 0.022463547159964504 93.87967943941892)',
        accent: 'oklch(0.92 0.011231773579982252 105.87967943941891)',
        'accent-foreground':
          'oklch(0.4999999999999999 0.0673906414798935 93.87967943941892)',
        destructive: 'oklch(63.7% 0.237 25.331)',
        'destructive-foreground':
          'oklch(0.02 0.0673906414798935 93.87967943941892)',
        border: 'oklch(0.9 0.008 93.87967943941892)',
        input: 'oklch(0.9 0.008 93.87967943941892)',
        footer: 'oklch(0.98 0.005 93.87967943941892)',
        'footer-foreground':
          'oklch(0.4999999999999999 0.0673906414798935 93.87967943941892)',
        code: 'oklch(0.98 0.005 93.87967943941892)',
        'code-foreground':
          'oklch(0.4999999999999999 0.0673906414798935 93.87967943941892)',
        'code-highlight': 'oklch(0.758856926625759 0.01 93.87967943941892)',
        'code-number':
          'oklch(0.658856926625759 0.022463547159964504 93.87967943941892)',
        'code-selection': 'oklch(0.96 0.01 93.87967943941892)',
        'code-border': 'oklch(0.9 0.008 93.87967943941892)',
        // You can also use nested objects for shades:
        'custom-blue': {
          100: '#e0f2fe',
          500: '#3b82f6',
          // ... other shades
        },

        // Reusing a default color with a custom name
        midnight: colors.red[900],
      },
      fontFamily: {
        email: ['Manrope Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;

export default tailwindConfig;
