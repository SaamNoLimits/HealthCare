/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'medical-primary': '#2563eb',
        'medical-secondary': '#06b6d4',
        'medical-accent': '#10b981',
        'medical-warning': '#f59e0b',
        'medical-error': '#ef4444',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
} 