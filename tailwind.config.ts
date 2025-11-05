import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        powder: "#B9D3E6",
        charcoal: "#1C1C1C",
        warmwhite: "#F9F8F5",
        mist: "#E3E6E8",
        taupe: "#B8A895"
      },
      borderRadius: {
        '2xl': '1rem'
      }
    },
  },
  plugins: [],
}
export default config
