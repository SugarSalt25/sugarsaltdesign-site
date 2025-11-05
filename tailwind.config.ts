import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        cream:  "#FAF6F3",
        cocoa:  "#8B5B4A",
        coral:  "#E6A49E",
        mist:   "#E9E4DE",
        ink:    "#3C2F2B"
      },
      fontFamily: {
        serif: ["var(--font-serif)"],
        sans: ["var(--font-sans)"],
      },
      borderRadius: { '2xl': '1rem' }
    },
  },
  plugins: [],
}
export default config