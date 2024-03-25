import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        'screen-minus-px-4': 'calc(100vw - 32px)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
